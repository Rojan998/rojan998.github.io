import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { ResumeButton } from "@/components/ResumeButton";
import { SocialLinks } from "@/components/SocialLinks";
import { About } from "@/components/About";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col lg:flex-row lg:gap-10 lg:px-8 xl:px-16">
      <Header
        heroSlot={<Hero />}
        availabilitySlot={<AvailabilityBadge />}
        resumeSlot={<ResumeButton />}
        socialSlot={<SocialLinks />}
      />

      <main id="main-content" className="min-w-0 flex-1 px-5 py-14 sm:px-8 sm:py-20 lg:px-0 lg:py-24">
        <div className="flex flex-col gap-24 sm:gap-28 lg:gap-32">
          <About />
          <ExperienceTimeline />
          <Projects />
          <Skills />
          <Education />
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
