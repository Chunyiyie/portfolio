import { certificates } from "@/data/certificates";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Certificates() {
  return (
    <section id="certificates" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          eyebrow="Certificates"
          title="证书"
          description="可在线核验的专业认证与系统化学习成果。"
        />
      </Reveal>

      <div className="space-y-8 border-t border-[var(--line)] pt-10">
        {certificates.map((cert, index) => (
          <Reveal key={cert.verifyUrl} delay={index * 0.05}>
            <article className="certificate-card">
              <div className="certificate-main">
                <p className="text-sm text-[var(--muted)]">{cert.issuer}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">
                  {cert.title}
                </h3>
                <p className="mt-4 text-[var(--ink-soft)]">
                  授予：{cert.recipient}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  完成日期：{cert.date}
                </p>
                <p className="mt-5 max-w-2xl leading-relaxed text-[var(--muted)]">
                  {cert.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    在线验证证书
                  </a>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Coursera Verify
                  </a>
                </div>
              </div>

              <aside className="certificate-side">
                <p className="text-xs tracking-[0.16em] text-white/70 uppercase">
                  8 Courses
                </p>
                <ol className="mt-4 space-y-3">
                  {cert.courses.map((course, courseIndex) => (
                    <li
                      key={course}
                      className="text-sm leading-snug text-white/92"
                    >
                      <span className="mr-2 text-white/45">
                        {String(courseIndex + 1).padStart(2, "0")}
                      </span>
                      {course}
                    </li>
                  ))}
                </ol>
              </aside>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
