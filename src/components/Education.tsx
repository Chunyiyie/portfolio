import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title="教育经历"
          description="学习路径与关键成果，持续打磨技术基础与产品思维。"
        />
      </Reveal>

      <ol className="space-y-0 border-t border-[var(--line)]">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.06}>
            <li className="grid gap-4 border-b border-[var(--line)] py-8 md:grid-cols-[200px_1fr] md:gap-10">
              <p className="text-sm text-[var(--muted)]">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl text-[var(--ink)]">
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
