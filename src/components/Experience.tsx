import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Experience // Worklog"
          title="工作经历"
          description="在真实业务中推进产品迭代，关注可维护性与上线质量。"
          accent="red"
        />
      </Reveal>

      <ol className="mondrian-frame overflow-hidden">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={index * 0.06}>
            <li className="timeline-row">
              <div
                className={`border-b-[5px] border-[var(--ink)] px-5 py-6 md:border-r-[5px] md:border-b-0 ${
                  index % 2 === 0
                    ? "bg-[var(--mondrian-red)] text-white"
                    : "bg-[var(--mondrian-blue)] text-white"
                }`}
              >
                <p className="font-mono-tech text-xs tracking-[0.14em] uppercase">
                  {item.period}
                </p>
              </div>
              <div className="bg-[var(--bg-elevated)] px-5 py-6 sm:px-7">
                <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                  {item.role}
                </h3>
                <p className="mt-1 text-[var(--ink-soft)]">{item.company}</p>
                <ul className="mt-4 space-y-2 text-[var(--muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
                      <span className="mr-2 inline-block h-2 w-2 bg-[var(--ink)] align-middle" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
