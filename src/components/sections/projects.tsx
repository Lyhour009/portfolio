"use client";

import Image from "next/image";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { ProjectCategory, projects } from "@/src/data/project";
import { useMemo, useState } from "react";
import Link from "next/link";

type ProjectFilter = "All" | ProjectCategory;

const projectFilters: ProjectFilter[] = ["All", "Full Stack", "Frontend"];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/70 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projects built to solve
              <span className="pink-gradient"> real problems.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              A selection of products I designed and developed using modern
              frontend, backend, and database technologies.
            </p>
          </div>

          <motion.a
            href="https://github.com/Lyhour009"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary"
          >
            View all projects
            <ArrowUpRight className="size-4" />
          </motion.a>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2 items-center justify-center">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`relative overflow-hidden rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:bg-secondary hover:text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-project-filter"
                    className="absolute inset-0 bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10">{filter}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 24,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 12,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_8px_28px_rgba(236,72,153,0.05)] transition-colors hover:border-primary/30"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Layers3 className="size-5" />
                  </div>

                  <p className="mt-5 text-sm font-semibold text-primary">
                    {project.type}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-xl border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="py-6 text-right">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
                    >
                      View case study
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>

                  {/* Buttons always stay at the bottom */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="pink-button flex-1 justify-center gap-2 whitespace-nowrap"
                      >
                        Live Demo
                        <ArrowUpRight className="size-4" />
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="white-button flex-1 justify-center gap-2 whitespace-nowrap"
                      >
                        <FaGithub className="size-4" />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
