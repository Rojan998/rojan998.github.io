import { TechPill } from "@/components/TechPill";
import type { SkillCategory } from "@/data/types";

export function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-sm font-semibold text-text">{category.title}</h3>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <li key={skill}>
            <TechPill label={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}
