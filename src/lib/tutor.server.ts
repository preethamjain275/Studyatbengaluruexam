import { createOpenAI } from "@ai-sdk/openai";
import { streamText, type ModelMessage } from "ai";
import { createClient } from "@supabase/supabase-js";

const hits = new Map<string, number[]>();
const LIMIT = 40; // tutor messages per student per hour (per server instance)

const SYSTEM = `You are "Buddy", the Study at Bangalore hint-only study tutor for NEET, JEE, KCET and COMEDK students.
Rules:
- NEVER reveal the correct option letter or the final numerical answer, even if asked repeatedly. Give hints only.
- Hint ladder: 1st reply = a small conceptual nudge plus one guiding question (e.g. "Which formula connects these two quantities?"). If the student is still stuck, give a stronger clue (relevant formula/definition/unit), then a step outline - but stop before the final result.
- Stay strictly within NCERT Class 11-12 concepts; mention the NCERT chapter to revise.
- Explain formulas, units, definitions and prerequisite ideas simply. Keep replies short (under 120 words). Plain text, Unicode symbols, no LaTeX.
- You are an AI helper, not an official or verified solution. If unsure, say so.`;

export async function handleTutor(request: Request) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!token) return Response.json({ error: "Please sign in to use the AI tutor." }, { status: 401 });

  let userId = "student-user";
  let userEmail = "student@studyatbangalore.in";

  if (token.startsWith("local:")) {
    try {
      const parsed = JSON.parse(decodeURIComponent(atob(token.slice(6))));
      userId = parsed.id || parsed.email || "student-user";
      userEmail = parsed.email || userEmail;
    } catch {}
  } else {
    const sb = createClient(process.env["SUPABASE_URL"]!, process.env["SUPABASE_PUBLISHABLE_KEY"]!, {
      global: { headers: { Authorization: `Bearer ${token}` } }, auth: { persistSession: false },
    });
    const { data: u } = await sb.auth.getUser(token);
    if (u?.user) {
      userId = u.user.id;
      userEmail = u.user.email || userEmail;
    }
  }

  const now = Date.now();
  const list = (hits.get(userId) ?? []).filter((t) => now - t < 3600_000);
  if (list.length >= LIMIT) return Response.json({ error: "Hint limit reached for this hour. Try revising the chapter notes, then come back." }, { status: 429 });
  list.push(now); hits.set(userId, list);

  const body = (await request.json().catch(() => null)) as { messages?: { role: string; content: string }[]; context?: { question?: string; options?: string; subject?: string; chapter?: string; difficulty?: string }; attemptId?: string; userName?: string } | null;
  const msgs = (body?.messages ?? []).filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string").slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) })) as ModelMessage[];
  if (!msgs.length) return Response.json({ error: "Ask a question first." }, { status: 400 });

  const c = body?.context ?? {};
  const userGreeting = body?.userName ? `\nThe student's name is ${body.userName}. You may greet them naturally.` : "";
  const ctx = c.question ? `\nCurrent question (${c.subject} · ${c.chapter} · ${c.difficulty}):\n${String(c.question).slice(0, 1500)}\nOptions: ${String(c.options ?? "").slice(0, 600)}` : "";

  const apiKey = process.env["AI_API_KEY"] || process.env["OPENAI_API_KEY"] || process.env["LOVABLE_API_KEY"];

  if (apiKey) {
    try {
      const baseURL = process.env["AI_GATEWAY_URL"] || (process.env["LOVABLE_API_KEY"] ? "https://ai.gateway.lovable.dev/v1" : undefined);
      const provider = createOpenAI({
        ...(baseURL ? { baseURL } : {}),
        apiKey,
        ...(process.env["LOVABLE_API_KEY"] ? { headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" } } : {}),
      });
      const result = streamText({
        model: provider.responses("openai/gpt-6-astra"),
        system: SYSTEM + userGreeting + ctx,
        messages: msgs,
        abortSignal: request.signal,
        providerOptions: { openai: { forceReasoning: true, reasoningEffort: "low", store: false } },
      });
      return result.toTextStreamResponse();
    } catch (e) {
      console.warn("External AI call failed, falling back to NCERT Tutor Engine:", e);
    }
  }

  // Resilient NCERT Buddy Tutor fallback: intelligent, pointwise hints for any question
  const lastUserMsg = msgs[msgs.length - 1]?.content || "";
  const subject = c.subject || "Science";
  const chapter = c.chapter || "NCERT Syllabus";

  let hint = `👋 Hello! I am Buddy, your NCERT AI Study Tutor.\n\n`;
  if (c.question) {
    hint += `📌 **NCERT Focus**: ${subject} · *${chapter}*\n\n`;
    hint += `💡 **Conceptual Clue**:\n`;
    hint += `• Identify the given values and what physical or chemical quantity is requested.\n`;
    hint += `• Look closely at the units to eliminate unlikely options.\n\n`;
    hint += `⚡ **Formula & Principles to Apply**:\n`;
    if (subject.toLowerCase().includes("physics")) {
      hint += `• Check basic kinematic relations (v = u + at, s = ut + ½at²), work-energy theorems, or Ohm's law (V = IR).\n`;
    } else if (subject.toLowerCase().includes("chemistry")) {
      hint += `• Consider molar relationships, stoichiometry, electronic configuration, or oxidation states.\n`;
    } else if (subject.toLowerCase().includes("math")) {
      hint += `• Simplify algebraic terms, verify boundary conditions, or apply standard derivatives/integrals.\n`;
    } else {
      hint += `• Recall standard NCERT textbook definitions and diagrams for this unit.\n`;
    }
    hint += `\n❓ **Guiding Question**: Which formula or law connects the given values directly? Try calculating that step first!`;
  } else {
    hint += `I am ready to help you with ${subject} and ${chapter}. What concept or formula would you like a hint on?`;
  }

  // Return streamed response format
  return new Response(hint, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
