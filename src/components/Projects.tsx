"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  projectCategories,
  projects,
  type Project,
} from "@/data/projects";

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("全部");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (active === "全部") return projects;
    return projects.filter((project) => project.category === active);
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-14">
      <div className="filter-bar mx-auto max-w-[88rem]">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className="filter-chip"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category === "全部" ? "+ Projects" : `+${category}`}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((project, index) => (
          <ProjectTile
            key={project.title}
            project={project}
            index={index}
            reduceMotion={!!reduceMotion}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  index,
  reduceMotion,
}: {
  project: Project;
  index: number;
  reduceMotion: boolean;
}) {
  const href = project.demoUrl || project.repoUrl || "#about";

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="project-tile"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
      />
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
