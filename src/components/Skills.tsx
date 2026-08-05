import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills // Modules"
          title="技能"
          description="能力按模块切分，像蒙德里安色块一样边界清晰、可组合。"
          accent="blue"
        />
      </Reveal>

      <div className="skill-mondrian mondrian-frame">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05} className="contents">
            <div className="skill-tile">
              <div className="skill-swatch" aria-hidden />
              <h3 className="font-display mb-4 text-xl font-semibold text-[var(--ink)]">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono-tech border border-[var(--ink)] bg-[var(--bg)] px-2 py-1 text-[11px] tracking-[0.06em] text-[var(--ink-soft)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
