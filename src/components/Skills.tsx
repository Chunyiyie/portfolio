import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="技能"
          description="围绕前端交付链路组织能力，兼顾工程效率与体验质量。"
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <div>
              <h3 className="mb-4 font-display text-xl text-[var(--ink)]">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-[var(--accent)]/35 pb-1 text-[var(--ink-soft)]"
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
