import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-4 border-t-[5px] border-[var(--ink)]">
      <div className="grid grid-cols-[1fr_48px_80px_1fr] gap-[5px] bg-[var(--ink)]">
        <div className="bg-[var(--bg)] px-5 py-8 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono-tech text-xs tracking-[0.12em] text-[var(--muted)] uppercase">
              © {new Date().getFullYear()} {profile.name}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono-tech text-xs tracking-[0.12em] text-[var(--ink)] uppercase transition-colors hover:text-[var(--mondrian-blue)]"
            >
              {profile.email}
            </a>
          </div>
        </div>
        <div className="bg-[var(--mondrian-yellow)]" aria-hidden />
        <div className="bg-[var(--mondrian-red)]" aria-hidden />
        <div className="bg-[var(--mondrian-blue)]" aria-hidden />
      </div>
    </footer>
  );
}
