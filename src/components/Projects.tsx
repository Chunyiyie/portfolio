"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  projectCategories,
  projects,
  type Project,
} from "@/data/projects";
import { useIntroReady } from "@/components/IntroProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("全部");
  const reduceMotion = useReducedMotion();
  const ready = useIntroReady();

  const filtered = useMemo(() => {
    if (active === "全部") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-14">
      <motion.div
        className="filter-bar mx-auto max-w-[88rem]"
        initial={reduceMotion ? false : "hidden"}
        animate={ready ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.06, delayChildren: 0.02 },
          },
        }}
      >
        {projectCategories.map((category) => (
          <motion.button
            key={category}
            type="button"
            className="filter-chip"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease },
              },
            }}
          >
            {category === "全部" ? "+ Projects" : `+${category}`}
          </motion.button>
        ))}
      </motion.div>

      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectTile
              key={project.title}
              project={project}
              index={index}
              reduceMotion={!!reduceMotion}
              ready={ready}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  index,
  reduceMotion,
  ready,
}: {
  project: Project;
  index: number;
  reduceMotion: boolean;
  ready: boolean;
}) {
  const href = project.demoUrl || project.repoUrl || "#about";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="project-tile"
      layout
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={
        ready || reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 28 }
      }
      transition={{
        duration: 0.7,
        ease,
        delay: reduceMotion || !ready ? 0 : Math.min(index * 0.07, 0.42),
      }}
      exit={
        reduceMotion
          ? undefined
          : {
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.22 },
            }
      }
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.12 }}
        animate={ready || reduceMotion ? { scale: 1 } : { scale: 1.12 }}
        transition={{ duration: 1.05, ease, delay: ready ? 0.05 : 0 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          priority={index < 3}
        />
      </motion.div>
      <div className="project-tile-overlay">
        <h3>{project.title}</h3>
        <p>
          {project.place}
          {project.tags[0] ? ` · ${project.tags[0]}` : ""}
        </p>
      </div>
    </motion.a>
  );
}
