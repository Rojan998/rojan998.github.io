import { FileText, Download } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Compact résumé card used in the sidebar: view in a new tab, download
 * directly, and a small "last updated" freshness label.
 */
export function ResumeButton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <a
          href={profile.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          <FileText aria-hidden="true" size={16} strokeWidth={1.75} />
          View Résumé
        </a>
        <a
          href={profile.resumePath}
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
        >
          <Download aria-hidden="true" size={16} strokeWidth={1.75} />
          Download
        </a>
      </div>
      <p className="text-xs text-text-dim">Last updated: {profile.resumeLastUpdated}</p>
    </div>
  );
}
