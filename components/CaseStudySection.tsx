import type { ReactNode } from "react";

export function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`cs-${title.toLowerCase().replace(/\s+/g, "-")}`} className="scroll-mt-20">
      <h2
        id={`cs-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-lg font-semibold text-text"
      >
        {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-text-muted">
        {children}
      </div>
    </section>
  );
}
