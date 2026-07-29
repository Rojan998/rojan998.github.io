import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border pt-10 pb-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-text-muted">
          <p>Designed and built by {profile.name}.</p>
          <p className="mt-1 text-xs text-text-dim">
            © {year} {profile.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
        <SocialLinks className="-ml-2 sm:ml-0" />
      </div>
    </footer>
  );
}
