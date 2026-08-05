"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-end overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24"
    >
      <div className="hero-atmosphere" aria-hidden />
      <div className="hero-grain" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-5 text-sm tracking-[0.18em] text-[var(--accent-strong)] uppercase"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[clamp(3.4rem,10vw,7.5rem)] leading-[0.92] tracking-[-0.04em] text-[var(--ink)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mt-6 max-w-2xl text-xl text-[var(--ink-soft)] sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href={`mailto:${profile.email}`} className="btn-primary">
            联系我
          </a>
          <a href="#projects" className="btn-ghost">
            查看作品
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
        </motion.div>
      </div>
    </section>
  );
}
