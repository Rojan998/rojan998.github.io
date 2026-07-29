import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceItem } from "@/components/ExperienceItem";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20">
      <SectionHeading index="02" title="Experience" id="experience-heading" />
      <ol className="flex flex-col gap-14">
        {experience.map((entry) => (
          <ExperienceItem key={entry.id} entry={entry} />
        ))}
      </ol>
    </section>
  );
}
