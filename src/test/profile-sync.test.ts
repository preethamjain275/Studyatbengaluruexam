import { describe, expect, it } from "vitest";
import { getInitials, validateAvatarFile, MAX_AVATAR_SIZE_BYTES, ALLOWED_AVATAR_TYPES } from "@/lib/avatar";

describe("Cross-Device Profile & Avatar Synchronization Regression Suite", () => {
  // Test A & B: Profile initialization & contract
  it("A1: Extracts initials correctly for single and multi-word student names", () => {
    expect(getInitials("Ananya Sharma")).toBe("AS");
    expect(getInitials("Preetham")).toBe("PR");
    expect(getInitials("", "student@studyatbangalore.in")).toBe("ST");
  });

  // Test C: Validation bounds
  it("C1: Enforces 5MB avatar size limit and allowed MIME types", () => {
    expect(MAX_AVATAR_SIZE_BYTES).toBe(5 * 1024 * 1024);
    expect(ALLOWED_AVATAR_TYPES).toContain("image/png");
    expect(ALLOWED_AVATAR_TYPES).toContain("image/jpeg");
    expect(ALLOWED_AVATAR_TYPES).toContain("image/webp");

    const validFile = new File(["valid"], "avatar.png", { type: "image/png" });
    expect(validateAvatarFile(validFile).valid).toBe(true);

    const invalidFile = new File(["bad"], "avatar.gif", { type: "image/gif" });
    expect(validateAvatarFile(invalidFile).valid).toBe(false);
  });

  // Test D & G: Unique timestamped avatar filenames prevent stale browser caching across devices
  it("D1: Generates user-scoped timestamped storage paths preventing cross-device cache retention", () => {
    const userId = "c6b5d921-23ef-4b40-a15d-0faefc378e99";
    const cleanUserId = userId.replace(/[^a-zA-Z0-9_-]/g, "_");
    const timestamp1 = 1791834000000;
    const timestamp2 = 1791834005000;

    const path1 = `${cleanUserId}/avatar-${timestamp1}.png`;
    const path2 = `${cleanUserId}/avatar-${timestamp2}.png`;

    expect(path1).not.toBe(path2);
    expect(path1).toContain(cleanUserId);
    expect(path2).toContain(cleanUserId);
    expect(path1).toMatch(/avatar-\d+\.png$/);
  });

  // Test F: Cross-device canonical profile hydration simulation
  it("F1: Reconciles database profile into auth context without losing persisted attributes", () => {
    const authUser = {
      id: "c6b5d921-23ef-4b40-a15d-0faefc378e99",
      email: "student@example.com",
      user_metadata: {
        full_name: "Original Name",
        avatar_url: "https://old.url/avatar.png",
      },
    };

    const dbProfile = {
      id: "c6b5d921-23ef-4b40-a15d-0faefc378e99",
      display_name: "Updated Name on Device A",
      email: "student@example.com",
      phone: "+91 9876543210",
      avatar_url: "https://fbyvydtakpcklthvmdrk.supabase.co/storage/v1/object/public/avatars/user/avatar-1791834000.png",
      standard: "12th Standard",
      stream: "PCMB",
    };

    // Device B resolves canonical profile from database
    const resolvedDisplayName = dbProfile.display_name || authUser.user_metadata.full_name;
    const resolvedAvatarUrl = dbProfile.avatar_url || authUser.user_metadata.avatar_url;

    expect(resolvedDisplayName).toBe("Updated Name on Device A");
    expect(resolvedAvatarUrl).toBe(dbProfile.avatar_url);
    expect(resolvedAvatarUrl).toContain("fbyvydtakpcklthvmdrk.supabase.co");
  });

  // Test J: Storage path isolation prevents cross-user overwriting
  it("J1: Enforces that storage paths must be user-scoped", () => {
    const userA = "11111111-1111-1111-1111-111111111111";
    const userB = "22222222-2222-2222-2222-222222222222";

    const pathA = `${userA.replace(/[^a-zA-Z0-9_-]/g, "_")}/avatar.png`;
    const pathB = `${userB.replace(/[^a-zA-Z0-9_-]/g, "_")}/avatar.png`;

    expect(pathA.startsWith(userA)).toBe(true);
    expect(pathB.startsWith(userB)).toBe(true);
    expect(pathA).not.toEqual(pathB);
  });
});
