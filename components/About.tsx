import { SectionHeading } from "@/components/SectionHeading";
import { CurrentlyPanel } from "@/components/CurrentlyPanel";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20">
      <SectionHeading index="01" title="About" id="about-heading" />
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-5 lg:flex-[3]">
          {profile.aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="lg:flex-[2]">
          <CurrentlyPanel />
        </div>
      </div>
    </section>
  );
}
