"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 border-b bg-[var(--bg)]/92 backdrop-blur-md ${
        scrolled ? "border-[var(--line)]" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[88rem] items-center justify-between px-4 sm:px-8">
        <a
          href="#projects"
          className="font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-[var(--ink)]"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.92rem] text-[var(--ink-soft)] transition-opacity hover:opacity-55"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-[0.92rem] text-[var(--ink)] transition-opacity hover:opacity-55"
            >
              Contact
            </a>
          </li>
        </ul>

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
