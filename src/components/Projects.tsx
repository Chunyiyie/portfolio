import Image from "next/image";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="作品集"
          description="精选项目展示：从问题到方案，再到可访问的成果。"
        />
      </Reveal>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="grid items-start gap-8 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
                <Image
                  src={project.image}
                  alt={`${project.title} 预览`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-display text-3xl text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-[var(--ink-soft)]">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
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
