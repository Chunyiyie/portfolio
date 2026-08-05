import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Education // Timeline"
          title="教育经历"
          description="学习路径与关键成果，持续打磨技术基础与产品思维。"
          accent="yellow"
        />
      </Reveal>

      <ol className="mondrian-frame overflow-hidden">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.06}>
            <li className="timeline-row">
              <div className="border-b-[5px] border-[var(--ink)] bg-[var(--mondrian-yellow)] px-5 py-6 md:border-r-[5px] md:border-b-0">
                <p className="font-mono-tech text-xs tracking-[0.14em] text-[var(--ink)] uppercase">
                  {item.period}
                </p>
              </div>
              <div className="bg-[var(--bg-elevated)] px-5 py-6 sm:px-7">
                <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
                  {item.school}
                </h3>
                <p className="mt-1 text-[var(--ink-soft)]">{item.degree}</p>
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
