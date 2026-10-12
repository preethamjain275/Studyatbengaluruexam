import { useEffect, useRef, useState } from "react";
import { Camera, Loader2, Trash2, User } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials, validateAvatarFile, uploadAvatar } from "@/lib/avatar";

interface AvatarUploadProps {
  userId: string;
  avatarUrl?: string | null;
  displayName?: string | null;
  email?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  showRemoveButton?: boolean;
  onAvatarChange: (newUrl: string) => Promise<void> | void;
  onAvatarRemove: () => Promise<void> | void;
  className?: string;
}

const SIZE_CLASSES = {
  sm: "h-10 w-10 text-xs",
  md: "h-14 w-14 text-sm",
  lg: "h-20 w-20 text-lg",
  xl: "h-24 w-24 text-2xl",
};

export function AvatarUpload({
  userId,
  avatarUrl,
  displayName,
  email,
  size = "xl",
  showRemoveButton = true,
  onAvatarChange,
  onAvatarRemove,
  className = "",
}: AvatarUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [removing, setRemoving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentPreviewRef = useRef<string | null>(null);

  // Revoke object URL on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (currentPreviewRef.current?.startsWith("blob:")) {
        URL.revokeObjectURL(currentPreviewRef.current);
      }
    };
  }, []);

  const initials = getInitials(displayName, email);
  const activeImage = previewUrl || avatarUrl;

  async function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type & 5MB size limit
    const validation = validateAvatarFile(file);
    if (!validation.valid) {
      toast.error(validation.error);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Generate local preview
    if (currentPreviewRef.current?.startsWith("blob:")) {
      URL.revokeObjectURL(currentPreviewRef.current);
    }
    const tempUrl = URL.createObjectURL(file);
    currentPreviewRef.current = tempUrl;
    setPreviewUrl(tempUrl);

    setUploading(true);
    try {
      const uploadedUrl = await uploadAvatar(file, userId);
      await onAvatarChange(uploadedUrl);
      toast.success("Profile photo updated successfully!");
    } catch (err) {
      console.error("Avatar upload failed:", err);
      // Restore previous confirmed image
      setPreviewUrl(null);
      if (currentPreviewRef.current?.startsWith("blob:")) {
        URL.revokeObjectURL(currentPreviewRef.current);
        currentPreviewRef.current = null;
      }
      toast.error((err as Error).message || "Failed to upload photo. Please try again.");
    } finally {
      setUploading(false);
      // Reset input so same file can be selected again if desired
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function handleRemove() {
    if (!activeImage) return;

    setRemoving(true);
    try {
      await onAvatarRemove();
      setPreviewUrl(null);
      if (currentPreviewRef.current?.startsWith("blob:")) {
        URL.revokeObjectURL(currentPreviewRef.current);
        currentPreviewRef.current = null;
      }
      toast.success("Profile photo removed.");
    } catch (err) {
      console.error("Failed to remove avatar:", err);
      toast.error("Could not remove photo. Please try again.");
    } finally {
      setRemoving(false);
    }
  }

  return (
    <div className={`flex flex-col items-center sm:items-start gap-2 ${className}`}>
      <div className="relative group inline-block">
        <Avatar className={`${SIZE_CLASSES[size]} ring-2 ring-border shadow-md overflow-hidden bg-muted`}>
          {activeImage ? (
            <AvatarImage
              src={activeImage}
              alt={displayName || "Profile photo"}
              className="h-full w-full object-cover"
            />
          ) : null}
          <AvatarFallback className="bg-primary/10 text-primary font-bold flex items-center justify-center">
            {initials ? initials : <User className="h-1/2 w-1/2 text-muted-foreground" />}
          </AvatarFallback>
        </Avatar>

        {/* Upload spinner overlay */}
        {uploading && (
          <div className="absolute inset-0 rounded-full bg-background/70 backdrop-blur-xs flex items-center justify-center z-10">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}

        {/* Camera edit overlay badge */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading || removing}
          title="Change profile photo"
          aria-label="Change profile photo"
          className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-accent hover:text-primary transition-colors cursor-pointer disabled:opacity-50"
        >
          <Camera className="h-3.5 w-3.5" />
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileSelect}
          className="hidden"
          aria-hidden="true"
        />
      </div>

      {/* Remove photo link */}
      {showRemoveButton && activeImage && (
        <button
          type="button"
          onClick={handleRemove}
          disabled={uploading || removing}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-destructive hover:underline cursor-pointer transition-opacity disabled:opacity-50 pt-0.5"
        >
          {removing ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <Trash2 className="h-3 w-3" />
          )}
          Remove photo
        </button>
      )}
    </div>
  );
}
