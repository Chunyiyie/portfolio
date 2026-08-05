"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

type IntroContextValue = {
  ready: boolean;
};

const IntroContext = createContext<IntroContextValue>({ ready: true });

export function useIntroReady() {
  return useContext(IntroContext).ready;
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [showCover, setShowCover] = useState(true);

  const skipIntro = !!reduceMotion;
  const value = useMemo(
    () => ({ ready: skipIntro || ready }),
    [skipIntro, ready],
  );

  if (skipIntro) {
    return (
      <IntroContext.Provider value={{ ready: true }}>
        {children}
      </IntroContext.Provider>
    );
  }

  return (
    <IntroContext.Provider value={value}>
      <AnimatePresence>
        {showCover ? (
          <motion.div
            key="intro-cover"
            className="intro-cover"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              className="intro-cover-inner"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => {
                window.setTimeout(() => {
                  setReady(true);
                  setShowCover(false);
                }, 420);
              }}
            >
              <p className="intro-kicker">Portfolio</p>
              <p className="intro-name">{profile.name}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showCover ? 0.001 : 1 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.div>
    </IntroContext.Provider>
  );
}
