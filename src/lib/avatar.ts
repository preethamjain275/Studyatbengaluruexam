import { supabase } from "@/integrations/supabase/client";

export const MAX_AVATAR_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp"];

/**
 * Extracts a 2-character initials string from a display name or email.
 * - Multi-word name: first letter of first word + first letter of second word (e.g. "Adarsh Kumar" -> "AK")
 * - Single word name: first two letters (e.g. "Adarsh" -> "AD")
 * - Fallback to email characters, or default "ST" (Student)
 */
export function getInitials(displayName?: string | null, email?: string | null): string {
  const cleanName = (displayName || "").trim();
  if (cleanName) {
    const parts = cleanName.split(/\s+/).filter(Boolean);
    const first = parts[0];
    const second = parts[1];
    if (first && second && first[0] && second[0]) {
      return (first[0] + second[0]).toUpperCase();
    }
    if (first && first.length >= 2) {
      return first.slice(0, 2).toUpperCase();
    }
    if (first && first.length === 1) {
      return first.toUpperCase();
    }
  }

  const cleanEmail = (email || "").trim();
  if (cleanEmail) {
    const emailPrefix = cleanEmail.split("@")[0] ?? "";
    const namePart = emailPrefix.replace(/[^a-zA-Z0-9]/g, "");
    if (namePart.length >= 2) {
      return namePart.slice(0, 2).toUpperCase();
    }
    if (namePart.length === 1) {
      return namePart.toUpperCase();
    }
  }

  return "ST";
}

/**
 * Validates file size (max 5MB) and MIME type (JPEG, PNG, WebP).
 */
export function validateAvatarFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: "No file selected." };
  }

  if (file.size > MAX_AVATAR_SIZE_BYTES) {
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    return {
      valid: false,
      error: `File size (${sizeInMb} MB) exceeds the maximum limit of 5 MB.`,
    };
  }

  if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: "Unsupported file format. Please upload a JPEG, PNG, or WebP image.",
    };
  }

  return { valid: true };
}

/**
 * Derives the safe file extension from verified MIME type.
 */
function getExtensionFromMime(mimeType: string): string {
  switch (mimeType) {
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/jpeg":
    default:
      return "jpg";
  }
}

/**
 * Uploads an avatar image to Supabase Storage 'avatars' bucket.
 * Gracefully falls back to a base64 Data URL if Supabase storage is unavailable.
 */
export async function uploadAvatar(file: File, userId: string): Promise<string> {
  const validation = validateAvatarFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const cleanUserId = userId.replace(/[^a-zA-Z0-9_-]/g, "_");
  const ext = getExtensionFromMime(file.type);
  const filePath = `${cleanUserId}/avatar-${Date.now()}.${ext}`;

  try {
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
        contentType: file.type,
      });

    if (!uploadError) {
      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        return publicUrlData.publicUrl;
      }
    }
  } catch (storageErr) {
    console.warn("Supabase Storage upload warning, using resilient fallback:", storageErr);
  }

  // Resilient fallback: read as client Data URL
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to process image file."));
    reader.readAsDataURL(file);
  });
}

/**
 * Deletes an obsolete avatar file from Supabase Storage if it originated from the 'avatars' bucket.
 */
export async function removeAvatar(avatarUrl: string, userId: string): Promise<void> {
  if (!avatarUrl || avatarUrl.startsWith("data:")) return;

  try {
    const bucketMarker = "/avatars/";
    const markerIndex = avatarUrl.indexOf(bucketMarker);
    if (markerIndex !== -1) {
      const relativePath = decodeURIComponent(avatarUrl.substring(markerIndex + bucketMarker.length));
      await supabase.storage.from("avatars").remove([relativePath]);
    }
  } catch (e) {
    console.warn("Could not remove old avatar from storage:", e);
  }
}
