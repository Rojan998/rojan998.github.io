import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubGlyph } from "@/components/icons/BrandIcons";
import { CaseStudySection } from "@/components/CaseStudySection";
import { TechPill } from "@/components/TechPill";
import { SocialLinks } from "@/components/SocialLinks";
import { getProjectBySlug, projects } from "@/data/projects";
import { profile } from "@/data/profile";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.name} — Case Study`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical: `${profile.siteUrl.replace(/\/$/, "")}/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const cs = project.caseStudy;

  return (
    <div className="mx-auto flex max-w-3xl flex-col px-5 py-14 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
      <div className="flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" size={16} strokeWidth={2} />
          Back to portfolio
        </Link>
        <SocialLinks />
      </div>

      <header className="mt-12 flex flex-col gap-5 border-b border-border pb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Case Study</p>
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{project.name}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-text-muted">{project.description}</p>

        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-text-muted transition-colors hover:text-accent"
            >
              <GithubGlyph size={16} />
              Source
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 text-text-muted transition-colors hover:text-accent"
            >
              <ExternalLink aria-hidden="true" size={16} strokeWidth={1.75} />
              Live demo
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </header>

      <div className="mt-12 flex flex-col gap-16">
        <CaseStudySection title="Overview">
          <p>{cs.overview}</p>
        </CaseStudySection>

        <CaseStudySection title="Problem">
          <p>{cs.problem}</p>
        </CaseStudySection>

        <CaseStudySection title="Constraints">
          <ul className="flex flex-col gap-2">
            {cs.constraints.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="My Responsibilities">
          <ul className="flex flex-col gap-2">
            {cs.responsibilities.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <p>{cs.architecture}</p>
          {cs.architectureDiagram ? (
            <div className="mt-2 overflow-hidden rounded-lg border border-border bg-surface">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={cs.architectureDiagram.src}
                  alt={cs.architectureDiagram.alt}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          ) : (
            <div
              className="rounded-lg border border-dashed border-border bg-surface p-6 text-center text-xs text-text-dim"
              aria-hidden="true"
            >
              Architecture diagram not yet added.
            </div>
          )}
        </CaseStudySection>

        <CaseStudySection title="Technical Approach">
          <ul className="flex flex-col gap-2">
            {cs.technicalApproach.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Key Decisions">
          <ul className="flex flex-col gap-4">
            {cs.keyDecisions.map((item, i) => (
              <li key={i} className="rounded-lg border border-border bg-surface p-4">
                <p className="font-medium text-text">{item.decision}</p>
                <p className="mt-1 text-text-muted">{item.rationale}</p>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Challenges">
          <ul className="flex flex-col gap-4">
            {cs.challenges.map((item, i) => (
              <li key={i} className="rounded-lg border border-border bg-surface p-4">
                <p className="font-medium text-text">{item.challenge}</p>
                <p className="mt-1 text-text-muted">{item.response}</p>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Solution">
          <p>{cs.solution}</p>
        </CaseStudySection>

        <CaseStudySection title="Testing">
          <ul className="flex flex-col gap-2">
            {cs.testing.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Observability">
          <ul className="flex flex-col gap-2">
            {cs.observability.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Security Considerations">
          <ul className="flex flex-col gap-2">
            {cs.security.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Results">
          {cs.results.length > 0 ? (
            <>
              {cs.results.some((r) => r.illustrative) ? (
                <p className="text-xs italic text-text-dim">
                  Figures marked illustrative are placeholders pending verified measurements.
                </p>
              ) : null}
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cs.results.map((result, i) => (
                  <div key={i} className="rounded-lg border border-border bg-surface p-4">
                    <dt className="text-xs uppercase tracking-wider text-text-dim">
                      {result.label}
                      {result.illustrative ? " (illustrative)" : ""}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-text">{result.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : (
            <p className="text-text-dim">
              Verified results have not been published for this project yet.
            </p>
          )}
        </CaseStudySection>

        <CaseStudySection title="Lessons Learned">
          <ul className="flex flex-col gap-2">
            {cs.lessonsLearned.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Future Improvements">
          <ul className="flex flex-col gap-2">
            {cs.futureImprovements.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-dim" />
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Technologies">
          <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.name}`}>
            {project.technologies.map((tech) => (
              <li key={tech}>
                <TechPill label={tech} />
              </li>
            ))}
          </ul>
        </CaseStudySection>
      </div>

      <div className="mt-20 border-t border-border pt-10">
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" size={16} strokeWidth={2} />
          Back to portfolio
        </Link>
      </div>
    </div>
  );
}
