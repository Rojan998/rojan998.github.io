"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// Matches the dark default the inline boot script (app/layout.tsx) starts
// from before it reads localStorage/system preference and rewrites the DOM.
function getServerSnapshot(): Theme {
  return "dark";
}

function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  window.localStorage.setItem("theme", next);
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-surface text-text-muted shadow-lg transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" size={20} strokeWidth={1.75} />
      ) : (
        <Sun aria-hidden="true" size={20} strokeWidth={1.75} />
      )}
    </button>
  );
}
