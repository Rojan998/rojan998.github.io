import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <div className="reveal flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {profile.name}
        </h1>
        <p className="text-lg font-medium text-accent">{profile.title}</p>
        <p className="text-sm text-text-muted">{profile.specialization}</p>
      </div>

      <p className="max-w-sm text-base leading-relaxed text-text-muted">
        {profile.headline}
      </p>
      <p className="max-w-sm text-sm leading-relaxed text-text-dim">
        {profile.supportingLine}
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          View My Work
          <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
        </a>
        <a
          href={profile.resumePath}
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border-strong px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
        >
          Download Resume
          <Download aria-hidden="true" size={16} strokeWidth={2} />
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-11 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors hover:text-text"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
