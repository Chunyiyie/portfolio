import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="教育背景"
          description="从展示设计到设计学研究，持续积累研究与实践能力。"
        />
      </Reveal>

      <ol className="editorial-list border-t border-[var(--line)]">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.05}>
            <li className="grid gap-3 py-8 md:grid-cols-[180px_1fr] md:gap-12">
              <p className="text-sm text-[var(--muted)]">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-[var(--ink)]">
                  {item.school}
                </h3>
                <p className="mt-1 text-[var(--ink-soft)]">{item.degree}</p>
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
