import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 text-2xl font-bold text-text">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md border border-border-strong px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
