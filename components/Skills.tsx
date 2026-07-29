import { SectionHeading } from "@/components/SectionHeading";
import { SkillGroup } from "@/components/SkillGroup";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20">
      <SectionHeading index="04" title="Skills" id="skills-heading" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {skillCategories.map((category) => (
          <SkillGroup key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
