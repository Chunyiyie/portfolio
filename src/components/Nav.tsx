"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { useIntroReady } from "@/components/IntroProvider";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const ready = useIntroReady();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={
        ready || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }
      }
      transition={{ duration: 0.55, ease, delay: ready ? 0.05 : 0 }}
      className={`sticky top-0 z-50 border-b bg-[var(--bg)]/92 backdrop-blur-md ${
        scrolled ? "border-[var(--line)]" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[88rem] items-center justify-between px-4 sm:px-8">
        <motion.a
          href="#projects"
          className="font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-[var(--ink)]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={ready || reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {profile.name}
        </motion.a>

        <motion.ul
          className="hidden items-center gap-7 md:flex"
          initial={reduceMotion ? false : "hidden"}
          animate={ready ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05, delayChildren: 0.15 },
            },
          }}
        >
          {links.map((link) => (
            <motion.li
              key={link.href}
              variants={{
                hidden: { opacity: 0, y: -8 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease },
                },
              }}
            >
              <a
                href={link.href}
                className="text-[0.92rem] text-[var(--ink-soft)] transition-opacity hover:opacity-55"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          <motion.li
            variants={{
              hidden: { opacity: 0, y: -8 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease },
              },
            }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="text-[0.92rem] text-[var(--ink)] transition-opacity hover:opacity-55"
            >
              Contact
            </a>
          </motion.li>
        </motion.ul>

        <button
          type="button"
          className="inline-flex h-10 items-center text-sm text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--line)] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-base text-[var(--ink)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="block py-1 text-base text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </motion.header>
  );
}
