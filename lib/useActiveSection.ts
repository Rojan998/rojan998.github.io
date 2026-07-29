"use client";

import { useEffect, useState } from "react";

const THRESHOLD_STEPS = Array.from({ length: 21 }, (_, i) => i / 20);

/**
 * Tracks which of the given section ids is currently most visible in the
 * viewport, so the navigation can highlight the active section as the user
 * scrolls. Falls back to the first id until the observer reports a match.
 *
 * IntersectionObserver callbacks only report elements whose intersection
 * ratio crossed a threshold since the last call — not the full current
 * state of every observed element. A naive implementation that reads only
 * the incoming `entries` array can end up "stuck" on a stale section
 * (e.g. tall sections whose ratio never touches 0 or 1 within a shrunk
 * root band), so intersection ratios are accumulated in a map across
 * calls and the most-visible section is recomputed from that full state.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId: string | null = null;
        let bestRatio = 0;
        for (const id of sectionIds) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId) {
          setActiveId(bestId);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: THRESHOLD_STEPS }
    );

    elements.forEach((el) => observer.observe(el));

    // Sections near the end of the page can be shorter than the visible
    // band above, so their ratio may never win out. Once the user has
    // scrolled to the bottom of the page, force-highlight the last section.
    function handleScroll() {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
