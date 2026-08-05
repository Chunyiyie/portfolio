"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { useIntroReady } from "@/components/IntroProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const ready = useIntroReady();
  const show = ready || !!reduceMotion;

  return (
    <section id="about" className="section-shell scroll-mt-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <motion.p
            initial={false}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease, delay: 0.05 }}
            className="mb-4 text-sm text-[var(--muted)]"
          >
            About
          </motion.p>
          <motion.h1
            initial={false}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, ease, delay: 0.12 }}
            className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={false}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-5 max-w-xl text-xl leading-relaxed text-[var(--ink-soft)]"
          >
            {profile.title}
          </motion.p>
        </div>

        <motion.div
          initial={false}
          animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease, delay: 0.28 }}
          className="flex flex-col justify-end"
        >
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Contact
            </a>
            <a href={`tel:${profile.phone}`} className="btn-ghost">
              {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              {profile.email}
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">{profile.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
