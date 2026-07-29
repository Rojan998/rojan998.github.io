import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TechPill } from "@/components/TechPill";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-20">
      <SectionHeading index="05" title="Education" id="education-heading" />

      <div className="rounded-lg border border-border bg-surface p-7">
        <div className="flex items-start gap-4">
          <GraduationCap
            aria-hidden="true"
            size={22}
            strokeWidth={1.75}
            className="mt-1 shrink-0 text-accent"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-text-dim">
              {education.graduation}
            </p>
            <h4 className="mt-1.5 text-base font-semibold text-text">{education.degree}</h4>
            <p className="text-sm text-text-muted">{education.institution}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-text-muted">{education.description}</p>

        {education.coursework.length > 0 ? (
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-dim">
              Relevant Coursework
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Relevant coursework">
              {education.coursework.map((course) => (
                <li key={course}>
                  <TechPill label={course} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {certifications.length > 0 ? (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-dim">
            Certifications
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
              >
                <Award aria-hidden="true" size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-text">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {cert.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      cert.name
                    )}
                  </p>
                  <p className="text-xs text-text-dim">
                    {cert.issuer} · {cert.dateEarned}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
