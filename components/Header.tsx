"use client";

import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/lib/useActiveSection";
import { ActiveSectionNavigation } from "@/components/ActiveSectionNavigation";

const sectionIds = navItems.map((item) => item.id);

export function Header({
  heroSlot,
  availabilitySlot,
  resumeSlot,
  socialSlot,
}: {
  heroSlot: ReactNode;
  availabilitySlot: ReactNode;
  resumeSlot: ReactNode;
  socialSlot: ReactNode;
}) {
  const activeId = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-bg/95 px-5 py-3 backdrop-blur lg:hidden">
        <a href="#" aria-label={`${profile.name}, back to top`} className="text-sm font-semibold tracking-tight text-text">
          {profile.name}
        </a>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text"
        >
          {mobileOpen ? (
            <X aria-hidden="true" size={22} strokeWidth={1.75} />
          ) : (
            <Menu aria-hidden="true" size={22} strokeWidth={1.75} />
          )}
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-nav-panel" className="border-b border-border bg-bg px-5 py-5 lg:hidden">
          <nav aria-label="Mobile">
            <ActiveSectionNavigation activeId={activeId} onNavigate={() => setMobileOpen(false)} />
          </nav>
          <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
            {socialSlot}
          </div>
        </div>
      )}

      <header className="px-5 py-12 sm:px-8 sm:py-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[400px] lg:shrink-0 lg:flex-col lg:justify-between lg:px-0 lg:py-20 lg:pl-6">
        <div className="flex flex-col gap-8">
          {heroSlot}
          {availabilitySlot}
          <nav aria-label="Primary" className="hidden lg:block">
            <ActiveSectionNavigation activeId={activeId} />
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-6 lg:mt-0">
          {resumeSlot}
          {socialSlot}
        </div>
      </header>
    </>
  );
}
