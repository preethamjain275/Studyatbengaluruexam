import { GoogleGenAI } from "@google/genai";

/**
 * Server-only Google Gemini Service
 * Provides centralized authentication, text generation, streaming,
 * and structured JSON generation with resilient model failover.
 */

const DEFAULT_MODEL = "gemini-2.5-flash-lite";
const FALLBACK_MODELS = ["gemini-flash-lite-latest", "gemini-2.5-flash"];

/**
 * Retrieves the Gemini API key from server environment variables.
 * Never exposes or logs the key.
 */
export function getGeminiApiKey(): string | null {
  const key =
    process.env["GEMINI_API_KEY"] ||
    process.env["GOOGLE_API_KEY"] ||
    process.env["GOOGLE_GENAI_API_KEY"];
  return key && key.trim() ? key.trim() : null;
}

/**
 * Returns the configured default model.
 */
export function getGeminiModel(): string {
  return process.env["GEMINI_MODEL"] || DEFAULT_MODEL;
}

let _aiClient: GoogleGenAI | null = null;
let _cachedKey: string | null = null;

/**
 * Instantiates or reuses the GoogleGenAI client singleton securely.
 */
export function getGeminiClient(): GoogleGenAI {
  const key = getGeminiApiKey();
  if (!key) {
    throw new Error(
      "Gemini AI is not configured on the server. Please set GEMINI_API_KEY in your environment."
    );
  }

  if (!_aiClient || _cachedKey !== key) {
    _aiClient = new GoogleGenAI({ apiKey: key });
    _cachedKey = key;
  }
  return _aiClient;
}

/**
 * Masks internal errors to prevent leaking API keys or credentials.
 */
export function sanitizeGeminiError(err: unknown): Error {
  if (err instanceof Error) {
    const raw = err.message || "";
    // Redact anything that looks like an API key
    const sanitized = raw.replace(/[A-Za-z0-9_-]{35,}/g, "[REDACTED_API_KEY]");
    if (sanitized.includes("429") || sanitized.includes("RESOURCE_EXHAUSTED")) {
      return new Error("Gemini AI rate limit reached. Please wait a moment and try again.");
    }
    if (sanitized.includes("503") || sanitized.includes("UNAVAILABLE")) {
      return new Error("Gemini AI is experiencing high temporary demand. Please try again in a moment.");
    }
    if (sanitized.includes("401") || sanitized.includes("UNAUTHENTICATED")) {
      return new Error("Gemini API authentication failed. Please verify server GEMINI_API_KEY.");
    }
    return new Error(sanitized);
  }
  return new Error("An unexpected error occurred while communicating with Gemini AI.");
}

export interface GenerateTextOptions {
  prompt: string;
  systemInstruction?: string;
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
  timeoutMs?: number;
}

/**
 * Generates text from Gemini with automatic fallback on temporary unavailability.
 */
export async function generateGeminiText(options: GenerateTextOptions): Promise<string> {
  const ai = getGeminiClient();
  const primaryModel = options.model || getGeminiModel();
  const modelsToTry = [primaryModel, ...FALLBACK_MODELS.filter((m) => m !== primaryModel)];

  let lastError: unknown = null;

  for (const model of modelsToTry) {
    try {
      const config: Record<string, unknown> = {};
      if (options.systemInstruction) {
        config["systemInstruction"] = options.systemInstruction;
      }
      if (typeof options.temperature === "number") {
        config["temperature"] = options.temperature;
      }
      if (typeof options.maxOutputTokens === "number") {
        config["maxOutputTokens"] = options.maxOutputTokens;
      }

      const responsePromise = ai.models.generateContent({
        model,
        contents: options.prompt,
        config: Object.keys(config).length > 0 ? (config as any) : undefined,
      });

      let response;
      if (options.timeoutMs && options.timeoutMs > 0) {
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Gemini generation timed out")), options.timeoutMs)
        );
        response = await Promise.race([responsePromise, timeoutPromise]);
      } else {
        response = await responsePromise;
      }

      const text = response.text || "";
      if (text.trim()) {
        return text.trim();
      }
    } catch (err: any) {
      lastError = err;
      const msg = err?.message || "";
      // If it's a 503 or 404, continue to next model candidate
      if (msg.includes("503") || msg.includes("UNAVAILABLE") || msg.includes("404")) {
        continue;
      }
      throw sanitizeGeminiError(err);
    }
  }

  throw sanitizeGeminiError(lastError);
}

export interface StreamContentOptions {
  contents: string | { role: string; parts: { text: string }[] }[];
  systemInstruction?: string;
  model?: string;
  temperature?: number;
  abortSignal?: AbortSignal;
}

/**
 * Streams content chunks from Gemini via an async iterable.
 */
export async function* streamGeminiContent(
  options: StreamContentOptions
): AsyncGenerator<string, void, unknown> {
  const ai = getGeminiClient();
  const primaryModel = options.model || getGeminiModel();
  const modelsToTry = [primaryModel, ...FALLBACK_MODELS.filter((m) => m !== primaryModel)];

  let streamResult = null;
  let lastError: unknown = null;

  for (const model of modelsToTry) {
    try {
      const config: Record<string, unknown> = {};
      if (options.systemInstruction) {
        config["systemInstruction"] = options.systemInstruction;
      }
      if (typeof options.temperature === "number") {
        config["temperature"] = options.temperature;
      }

      streamResult = await ai.models.generateContentStream({
        model,
        contents: options.contents as any,
        config: Object.keys(config).length > 0 ? (config as any) : undefined,
      });
      break;
    } catch (err: any) {
      lastError = err;
      const msg = err?.message || "";
      if (msg.includes("503") || msg.includes("UNAVAILABLE") || msg.includes("404")) {
        continue;
      }
      throw sanitizeGeminiError(err);
    }
  }

  if (!streamResult) {
    throw sanitizeGeminiError(lastError);
  }

  for await (const chunk of streamResult) {
    if (options.abortSignal?.aborted) {
      break;
    }
    const text = chunk.text;
    if (text) {
      yield text;
    }
  }
}

export interface StructuredGenerationOptions<T> {
  prompt: string;
  systemInstruction?: string;
  schemaDescription?: string;
  validator?: (data: unknown) => { success: true; data: T } | { success: false; error: string };
  model?: string;
  timeoutMs?: number;
}

/**
 * Generates and validates structured JSON output from Gemini.
 */
export async function generateGeminiStructured<T>(
  options: StructuredGenerationOptions<T>
): Promise<T> {
  const ai = getGeminiClient();
  const primaryModel = options.model || getGeminiModel();
  const modelsToTry = [primaryModel, ...FALLBACK_MODELS.filter((m) => m !== primaryModel)];

  let lastError: unknown = null;

  for (const model of modelsToTry) {
    try {
      const sys = `${options.systemInstruction || "You are an educational AI assistant."}\nReturn valid JSON only. Do not wrap in markdown or backticks unless required.`;

      const response = await ai.models.generateContent({
        model,
        contents: options.prompt,
        config: {
          systemInstruction: sys,
          responseMimeType: "application/json",
        },
      });

      let rawText = (response.text || "").trim();
      // Strip markdown code fences if model enclosed JSON in ```json ... ```
      if (rawText.startsWith("```")) {
        rawText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();
      }

      let parsed: unknown;
      try {
        parsed = JSON.parse(rawText);
      } catch {
        // Try regex extract for arrays or objects
        const match = rawText.match(/(\[[\s\S]*\]|\{[\s\S]*\})/);
        if (match) {
          parsed = JSON.parse(match[0]);
        } else {
          throw new Error("Gemini returned invalid JSON structure.");
        }
      }

      if (options.validator) {
        const valResult = options.validator(parsed);
        if (!valResult.success) {
          throw new Error(`Invalid structured output: ${valResult.error}`);
        }
        return valResult.data;
      }

      return parsed as T;
    } catch (err: any) {
      lastError = err;
      const msg = err?.message || "";
      if (msg.includes("503") || msg.includes("UNAVAILABLE") || msg.includes("404")) {
        continue;
      }
      throw sanitizeGeminiError(err);
    }
  }

  throw sanitizeGeminiError(lastError);
}
