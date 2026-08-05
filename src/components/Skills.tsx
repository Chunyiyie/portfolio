import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="技能"
          description="围绕前端交付链路组织能力，兼顾工程效率与体验质量。"
        />
      </Reveal>

      <div className="grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <div>
              <h3 className="mb-4 text-lg font-medium text-[var(--ink)]">
                {group.category}
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {group.items.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
