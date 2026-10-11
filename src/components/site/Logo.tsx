import logoAsset from "@/assets/study-at-bengaluru-logo.asset.json";

export function Logo() {
  return (
    <img
      src={logoAsset.url || "/logo.png"}
      alt="Study at Bengaluru"
      className="h-11 w-auto shrink-0 object-contain"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = "/logo.png";
      }}
    />
  );
}
