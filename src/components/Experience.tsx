import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="工作经历"
          description="在真实业务中推进产品迭代，关注可维护性与上线质量。"
        />
      </Reveal>

      <ol className="editorial-list border-t border-[var(--line)]">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
            <li className="grid gap-3 py-8 md:grid-cols-[180px_1fr] md:gap-12">
              <p className="text-sm text-[var(--muted)]">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-[var(--ink)]">
                  {item.role}
                </h3>
                <p className="mt-1 text-[var(--ink-soft)]">{item.company}</p>
                <ul className="mt-4 space-y-2 text-[var(--muted)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="leading-relaxed">
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
