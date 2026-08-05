import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
