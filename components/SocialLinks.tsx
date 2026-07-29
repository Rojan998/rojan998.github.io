import { Mail } from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import type { SocialLink } from "@/data/types";

const icons = {
  github: GithubGlyph,
  linkedin: LinkedinGlyph,
  mail: Mail,
} as const;

const links: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.icon];
        const isExternal = link.icon !== "mail";

        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={
                isExternal ? `${link.label} (opens in a new tab)` : `Email ${profile.name}`
              }
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-muted transition-colors hover:text-accent"
            >
              <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
