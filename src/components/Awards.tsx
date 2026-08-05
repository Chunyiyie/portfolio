import { awards } from "@/data/awards";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Awards() {
  return (
    <section id="awards" className="section-shell scroll-mt-14">
      <Reveal>
        <SectionHeading
          eyebrow="Awards"
          title="获奖"
          description="学术竞赛、奖学金与在校荣誉。"
        />
      </Reveal>

      <ol className="editorial-list border-t border-[var(--line)]">
        {awards.map((item, index) => (
          <Reveal key={`${item.year}-${item.title}`} delay={Math.min(index * 0.03, 0.24)}>
            <li className="grid gap-3 py-5 md:grid-cols-[140px_1fr] md:gap-12">
              <p className="text-sm text-[var(--muted)]">{item.year}</p>
              <p className="text-[var(--ink-soft)] leading-relaxed">{item.title}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
