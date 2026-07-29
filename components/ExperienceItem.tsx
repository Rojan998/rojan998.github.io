import { TechPill } from "@/components/TechPill";
import type { ExperienceEntry } from "@/data/types";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="group relative pl-8">
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
      />
      <span
        aria-hidden="true"
        className="absolute left-[4.5px] top-4 bottom-[-3.5rem] w-px bg-border group-last:hidden"
      />

      <p className="font-mono text-xs uppercase tracking-wider text-text-dim">{entry.dateRange}</p>
      <h3 className="mt-2 text-base font-semibold text-text">{entry.title}</h3>
      <p className="text-sm text-text-muted">{entry.organization}</p>

      <p className="mt-4 text-sm leading-relaxed text-text-muted">{entry.summary}</p>

      <ul className="mt-4 flex flex-col gap-2.5">
        {entry.achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
            {achievement}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used at ${entry.organization}`}>
        {entry.technologies.map((tech) => (
          <li key={tech}>
            <TechPill label={tech} />
          </li>
        ))}
      </ul>
    </li>
  );
}
