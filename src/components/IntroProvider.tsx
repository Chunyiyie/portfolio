"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";

type IntroContextValue = {
  ready: boolean;
};

const IntroContext = createContext<IntroContextValue>({ ready: false });

export function useIntroReady() {
  return useContext(IntroContext).ready;
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showCover, setShowCover] = useState(true);
  const [textIn, setTextIn] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const textDelay = reduce ? 0 : 80;
    const revealDelay = reduce ? 0 : 1500;

    const textTimer = window.setTimeout(() => setTextIn(true), textDelay);
    const revealTimer = window.setTimeout(() => {
      setReady(true);
      setShowCover(false);
    }, revealDelay);

    return () => {
      window.clearTimeout(textTimer);
      window.clearTimeout(revealTimer);
    };
  }, []);

  const value = useMemo(() => ({ ready }), [ready]);

  return (
    <IntroContext.Provider value={value}>
      <AnimatePresence>
        {showCover ? (
          <motion.div
            key="intro-cover"
            className="intro-cover"
            initial={{ y: "0%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="intro-cover-inner">
              <motion.p
                className="intro-name"
                initial={{ opacity: 0, y: 18 }}
                animate={textIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {profile.name.split("").map((char, index) => (
                  <span key={`name-${index}`}>{char}</span>
                ))}
              </motion.p>
              <motion.p
                className="intro-kicker"
                aria-label="Personal Portfolio"
                initial={{ opacity: 0, y: 10 }}
                animate={textIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {"PERSONAL PORTFOLIO".split("").map((char, index) => (
                  <span key={`sub-${index}`}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </motion.p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
