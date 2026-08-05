import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectDetails() {
  return (
    <section id="selected" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          eyebrow="Selected"
          title="精选说明"
          description="项目网格之外的补充说明，便于了解背景与技术选型。"
        />
      </Reveal>

      <ol className="editorial-list border-t border-[var(--line)]">
        {projects.slice(0, 3).map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
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
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      Demo
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
