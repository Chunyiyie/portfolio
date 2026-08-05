import Image from "next/image";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Projects // Builds"
          title="作品集"
          description="精选项目展示：从问题到方案，再到可访问的成果。"
          accent="ink"
        />
      </Reveal>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="project-frame">
              <div className="project-media">
                <Image
                  src={project.image}
                  alt={`${project.title} 预览`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>

              <div className="flex flex-col justify-between bg-[var(--bg-elevated)] p-6 sm:p-8">
                <div>
                  <p className="font-mono-tech mb-3 text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase">
                    Case_0{index + 1}
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono-tech border border-[var(--ink)] px-2 py-1 text-[11px] tracking-[0.06em]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      在线演示
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      代码仓库
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
