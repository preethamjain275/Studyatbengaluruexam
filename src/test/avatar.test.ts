import { describe, expect, it } from "vitest";
import {
  getInitials,
  validateAvatarFile,
  MAX_AVATAR_SIZE_BYTES,
  ALLOWED_AVATAR_TYPES,
} from "@/lib/avatar";

describe("Avatar getInitials utility", () => {
  it("extracts initials from multi-word names", () => {
    expect(getInitials("Rahul Sharma")).toBe("RS");
    expect(getInitials("Adarsh Kumar Gowda")).toBe("AK");
    expect(getInitials("Dr. Priya Rao")).toBe("DP");
  });

  it("extracts first two letters from single-word names", () => {
    expect(getInitials("Rahul")).toBe("RA");
    expect(getInitials("Ananya")).toBe("AN");
    expect(getInitials("S")).toBe("S");
  });

  it("extracts initials from email when display name is absent", () => {
    expect(getInitials("", "rahul@example.com")).toBe("RA");
    expect(getInitials(null, "priya.sharma@domain.in")).toBe("PR");
    expect(getInitials(undefined, "k@test.com")).toBe("K");
  });

  it("falls back to 'ST' (Student) when neither name nor email is provided", () => {
    expect(getInitials(null, null)).toBe("ST");
    expect(getInitials("", "")).toBe("ST");
    expect(getInitials("   ", "   ")).toBe("ST");
  });
});

describe("Avatar file validation", () => {
  it("accepts valid JPEG, PNG, and WebP images within 5 MB", () => {
    const validPng = new File(["dummy content"], "avatar.png", { type: "image/png" });
    const validJpg = new File(["dummy content"], "photo.jpg", { type: "image/jpeg" });
    const validWebp = new File(["dummy content"], "picture.webp", { type: "image/webp" });

    expect(validateAvatarFile(validPng).valid).toBe(true);
    expect(validateAvatarFile(validJpg).valid).toBe(true);
    expect(validateAvatarFile(validWebp).valid).toBe(true);
  });

  it("rejects unsupported MIME types like GIF, SVG, and PDF", () => {
    const gifFile = new File(["dummy"], "anim.gif", { type: "image/gif" });
    const svgFile = new File(["<svg></svg>"], "icon.svg", { type: "image/svg+xml" });
    const pdfFile = new File(["%PDF"], "doc.pdf", { type: "application/pdf" });

    const gifResult = validateAvatarFile(gifFile);
    expect(gifResult.valid).toBe(false);
    expect(gifResult.error).toContain("Unsupported file format");

    const svgResult = validateAvatarFile(svgFile);
    expect(svgResult.valid).toBe(false);

    const pdfResult = validateAvatarFile(pdfFile);
    expect(pdfResult.valid).toBe(false);
  });

  it("rejects files that exceed the 5 MB threshold", () => {
    // 6 MB buffer
    const largeBlob = new Blob([new Uint8Array(6 * 1024 * 1024)]);
    const oversizedFile = new File([largeBlob], "huge.png", { type: "image/png" });

    const result = validateAvatarFile(oversizedFile);
    expect(result.valid).toBe(false);
    expect(result.error).toContain("exceeds the maximum limit of 5 MB");
  });

  it("exports valid constraints", () => {
    expect(MAX_AVATAR_SIZE_BYTES).toBe(5 * 1024 * 1024);
    expect(ALLOWED_AVATAR_TYPES).toEqual(["image/jpeg", "image/png", "image/webp"]);
  });
});
