import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20">
      <SectionHeading index="03" title="Featured Projects" id="projects-heading" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
