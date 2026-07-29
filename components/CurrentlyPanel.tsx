import { MapPin, Radar, Compass } from "lucide-react";
import { profile } from "@/data/profile";

export function CurrentlyPanel() {
  const { currently } = profile;

  return (
    <div className="rounded-lg border border-border bg-surface p-7">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-dim">Currently</h3>
      <dl className="mt-5 flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <MapPin aria-hidden="true" size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <dt className="sr-only">Location</dt>
            <dd className="text-sm text-text-muted">{currently.location}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Radar aria-hidden="true" size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <dt className="sr-only">Current focus</dt>
            <dd className="text-sm text-text-muted">{currently.focus}</dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Compass aria-hidden="true" size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <dt className="sr-only">Interested in</dt>
            <dd className="text-sm text-text-muted">
              Interested in {currently.interests.join(", ")} opportunities
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
