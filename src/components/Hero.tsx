"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell scroll-mt-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm text-[var(--muted)]"
          >
            About
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-xl text-xl leading-relaxed text-[var(--ink-soft)]"
          >
            {profile.title}
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex flex-col justify-end"
        >
          <p className="max-w-md text-base leading-relaxed text-[var(--muted)]">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Contact
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {social.label}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">{profile.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
