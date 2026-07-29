import { navItems } from "@/data/nav";

/**
 * Presentational nav list shared by the desktop sidebar and the mobile
 * drawer. The active section id is computed once by the client-side
 * `useActiveSection` hook in Header and passed down here.
 */
export function ActiveSectionNavigation({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-col gap-1.5">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-md py-3 text-sm font-medium transition-colors"
            >
              <span
                aria-hidden="true"
                className={`h-px transition-all ${
                  isActive
                    ? "w-8 bg-accent"
                    : "w-4 bg-text-dim group-hover:w-8 group-hover:bg-text-muted"
                }`}
              />
              <span className={isActive ? "text-text" : "text-text-muted group-hover:text-text"}>
                {item.label}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
