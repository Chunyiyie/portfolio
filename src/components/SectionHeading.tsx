type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: "red" | "blue" | "yellow" | "ink";
};

const accentMap = {
  red: "var(--mondrian-red)",
  blue: "var(--mondrian-blue)",
  yellow: "var(--mondrian-yellow)",
  ink: "var(--ink)",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "red",
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="inline-block h-4 w-10"
          style={{ background: accentMap[accent] }}
          aria-hidden
        />
        <p className="font-mono-tech text-[11px] tracking-[0.22em] text-[var(--muted)] uppercase">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
