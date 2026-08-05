"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative px-3 pb-8 pt-20 sm:px-5 sm:pt-24">
      <motion.div
        className="hero-grid mondrian-frame mx-auto max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="hero-cell hero-cell-name">
          <div className="tech-scan" aria-hidden />
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="font-mono-tech mb-4 text-[11px] tracking-[0.22em] text-[var(--muted)] uppercase"
          >
            {profile.location} {"/"} PORTFOLIO_SYS
          </motion.p>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3.2rem,9vw,6.8rem)] leading-[0.9] tracking-[-0.05em] text-[var(--ink)]"
          >
            {profile.name}
          </motion.h1>
        </div>

        <motion.div
          className="hero-cell hero-cell-yellow"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          style={{ transformOrigin: "top" }}
          aria-hidden
        />

        <motion.div
          className="hero-cell hero-cell-red"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.32, duration: 0.45 }}
          style={{ transformOrigin: "right" }}
          aria-hidden
        >
          <div className="absolute inset-3 border border-white/30" />
        </motion.div>

        <motion.div
          className="hero-cell hero-cell-blue"
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.38, duration: 0.4 }}
          style={{ transformOrigin: "bottom" }}
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(255,255,255,0.18) 10px, rgba(255,255,255,0.18) 11px)",
            }}
          />
        </motion.div>

        <div className="hero-cell hero-cell-copy">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.45 }}
            className="max-w-xl text-lg text-[var(--ink-soft)] sm:text-xl"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.45 }}
            className="max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base"
          >
            {profile.summary}
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.4 }}
            className="mt-2 flex flex-wrap gap-3"
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

        <div className="hero-cell hero-cell-signal">
          <p className="text-[10px] tracking-[0.2em] text-[var(--tech)] uppercase">
            SYS.OK
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/80">
            GRID / MONDRIAN
            <br />
            BUILD.NEXT
          </p>
        </div>
      </motion.div>
    </section>
  );
}
