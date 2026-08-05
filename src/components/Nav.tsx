"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "关于" },
  { href: "#education", label: "教育" },
  { href: "#skills", label: "技能" },
  { href: "#experience", label: "经历" },
  { href: "#projects", label: "作品" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 border-b-[5px] border-[var(--ink)] transition-colors duration-200 ${
        scrolled ? "bg-[var(--bg)]/95 backdrop-blur-sm" : "bg-[var(--bg)]"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-5">
        <a
          href="#about"
          className="font-display text-base font-semibold tracking-tight text-[var(--ink)] sm:text-lg"
        >
          <span className="mr-2 inline-block h-3 w-3 bg-[var(--mondrian-red)] align-middle" />
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => (
            <li key={link.href} className="flex items-center">
              <a
                href={link.href}
                className="font-mono-tech px-3 py-2 text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase transition-colors hover:bg-[var(--mondrian-yellow)] hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
              {index < links.length - 1 ? (
                <span className="h-4 w-[2px] bg-[var(--ink)]" aria-hidden />
              ) : null}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--ink)] text-[var(--ink)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">菜单</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {open ? (
        <div className="border-t-[3px] border-[var(--ink)] bg-[var(--bg)] px-3 py-3 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-[var(--ink)]/20">
                <a
                  href={link.href}
                  className="font-mono-tech block py-3 text-xs tracking-[0.16em] text-[var(--ink)] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </motion.header>
  );
}
