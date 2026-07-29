import { profile } from "@/data/profile";

export function AvailabilityBadge() {
  if (!profile.availability.isAvailable) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-muted">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {profile.availability.label}
    </div>
  );
}
