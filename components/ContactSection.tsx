import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "@/components/icons/BrandIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

function toDisplayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
      <SectionHeading index="06" title="Contact" id="contact-heading" />
      <p className="max-w-xl text-base leading-relaxed text-text-muted">
        I&rsquo;m interested in opportunities involving data engineering, cloud infrastructure,
        streaming systems, and platform engineering. Feel free to reach out if you would like to
        discuss a role, project, or technical collaboration.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-flex items-center gap-3 rounded-lg border border-border-strong bg-surface px-6 py-4 text-lg font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        <Mail aria-hidden="true" size={22} strokeWidth={1.75} />
        {profile.email}
        <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
      </a>

      <dl className="mt-10 flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-3">
          <dt className="sr-only">LinkedIn</dt>
          <LinkedinGlyph size={17} className="text-text-dim" />
          <dd>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
            >
              {toDisplayUrl(profile.linkedin)}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </dd>
        </div>
        <div className="flex items-center gap-3">
          <dt className="sr-only">GitHub</dt>
          <GithubGlyph size={17} className="text-text-dim" />
          <dd>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
            >
              {toDisplayUrl(profile.github)}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </dd>
        </div>
        <div className="flex items-center gap-3">
          <dt className="sr-only">Location</dt>
          <MapPin aria-hidden="true" size={17} strokeWidth={1.75} className="text-text-dim" />
          <dd className="text-text-muted">{profile.location}</dd>
        </div>
      </dl>
    </section>
  );
}
