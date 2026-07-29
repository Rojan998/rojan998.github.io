import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubGlyph } from "@/components/icons/BrandIcons";
import { TechPill } from "@/components/TechPill";
import type { Project } from "@/data/types";

export function ProjectCard({ project }: { project: Project }) {
  const { links } = project;

  return (
    <article className="flex flex-col gap-5 rounded-lg border border-border bg-surface p-7 transition-colors hover:border-border-strong">
      {project.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border border-border">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        {links.caseStudy ? (
          <h3 className="text-lg font-semibold text-text">
            <a
              href={links.caseStudy}
              className="transition-colors hover:text-accent focus-visible:text-accent"
            >
              {project.name}
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                strokeWidth={2}
                className="ml-1 inline-block -translate-y-0.5"
              />
            </a>
          </h3>
        ) : (
          <h3 className="text-lg font-semibold text-text">{project.name}</h3>
        )}
        <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>
      </div>

      <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.name}`}>
        {project.technologies.map((tech) => (
          <li key={tech}>
            <TechPill label={tech} />
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
        {links.caseStudy ? (
          <a
            href={links.caseStudy}
            className="inline-flex min-h-11 items-center gap-1.5 text-text-muted transition-colors hover:text-accent"
          >
            Read case study
            <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2} />
          </a>
        ) : null}
        {links.github ? (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 text-text-muted transition-colors hover:text-accent"
          >
            <GithubGlyph size={16} />
            Source
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
        {links.demo ? (
          <a
            href={links.demo}
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
    </article>
  );
}
