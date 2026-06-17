"use client";

import Image from "next/image";
import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/src/data/project";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 22,
              }}
              className={`group overflow-hidden rounded-3xl border border-border bg-card shadow-[0_10px_35px_rgba(236,72,153,0.06)] transition-colors hover:border-primary/30 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={
                  project.featured ? "grid lg:grid-cols-[1.15fr_0.85fr]" : ""
                }
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes={
                      project.featured
                        ? "(max-width: 1024px) 100vw, 60vw"
                        : "(max-width: 1024px) 100vw, 50vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {project.featured && (
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                      <Sparkles className="size-3.5" />
                      Featured project
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Layers3 className="size-5" />
                  </div>

                  <p className="mt-6 text-sm font-semibold text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-xl border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="pink-button gap-2"
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
                        className="white-button gap-2"
                      >
                        <FaGithub className="size-4" />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
