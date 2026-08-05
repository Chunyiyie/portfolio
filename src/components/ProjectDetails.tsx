import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectDetails() {
  return (
    <section id="selected" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          title="Selected"
          description="围绕 UX 研究、AI 实践、空间设计与学术研究的代表性经历补充。"
        />
      </Reveal>

      <ol className="editorial-list border-t border-[var(--line)]">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={Math.min(index * 0.04, 0.2)}>
            <li className="grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-12">
              <p className="text-sm text-[var(--muted)]">{project.place}</p>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <p className="mt-4 text-sm text-[var(--ink-soft)]">
                  {project.tags.join("  ·  ")}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
