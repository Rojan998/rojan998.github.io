export function SectionHeading({
  index,
  title,
  id,
}: {
  index: string;
  title: string;
  id: string;
}) {
  return (
    <div className="sticky top-14 z-10 -mx-1 mb-8 flex items-center gap-4 bg-bg/90 px-1 py-5 backdrop-blur lg:top-0">
      <h2
        id={id}
        className="flex items-baseline gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-text"
      >
        <span className="font-mono text-xs text-accent" aria-hidden="true">
          {index}
        </span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}
