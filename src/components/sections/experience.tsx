"use client";

import { experiences } from "@/src/data/experience";
import { CalendarDays, MapPin } from "lucide-react";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function Experience() {
  return (
    <section
      id="experience"
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
          className="max-w-2xl"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My development
            <span className="pink-gradient"> journey so far.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            A timeline of how I have been learning, building projects, and
            improving my skills through practical development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="relative mt-12 space-y-6"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 hidden w-px bg-border sm:block"
          />

          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={`${experience.title}-${experience.period}`}
                variants={itemVariants}
                className="relative sm:pl-16"
              >
                <div className="absolute left-0 top-8 z-10 hidden size-12 items-center justify-center rounded-2xl border border-border bg-background text-primary shadow-sm sm:flex">
                  <Icon className="size-5" />
                </div>

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="rounded-3xl border border-border bg-card p-6 shadow-[0_8px_28px_rgba(236,72,153,0.05)] transition-colors hover:border-primary/30 sm:p-8"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary sm:hidden">
                          <Icon className="size-5" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold sm:text-2xl">
                            {experience.title}
                          </h3>

                          <p className="mt-1 font-medium text-primary">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3 py-2 text-xs font-medium text-muted-foreground">
                        <CalendarDays className="size-3.5 text-primary" />
                        {experience.period}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3 py-2 text-xs font-medium text-muted-foreground">
                        <MapPin className="size-3.5 text-primary" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <span className="inline-flex rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
                      {experience.type}
                    </span>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
