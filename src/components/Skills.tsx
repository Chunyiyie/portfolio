import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          title="Skills"
          description="覆盖用户研究、设计工具、空间三维以及 AI 辅助实践。"
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
