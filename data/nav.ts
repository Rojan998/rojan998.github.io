import type { NavItem } from "./types";

/**
 * Main navigation. The `id` values must match the `id` attribute on each
 * <section> in app/page.tsx so smooth-scroll anchors and the
 * IntersectionObserver-driven active state line up.
 */
export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
