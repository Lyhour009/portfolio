"use client";

import { skillCategories } from "@/src/data/skill";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/70 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 top-32 -z-10 size-72 rounded-full bg-pink-300/15 blur-3xl dark:bg-pink-500/10"
      />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technologies I use to build
            <span className="pink-gradient"> modern products.</span>
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground sm:text-lg">
            A practical toolkit for creating responsive interfaces, reliable
            application logic, and maintainable web projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="group rounded-3xl border border-border bg-card p-6 shadow-[0_8px_28px_rgba(236,72,153,0.05)] transition-colors hover:border-primary/30 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                    <CategoryIcon className="size-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.04,
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        className="flex items-center gap-2.5 rounded-2xl border border-border bg-secondary/40 px-3 py-3 text-sm font-medium transition-colors hover:border-primary/30 hover:bg-secondary hover:text-primary"
                      >
                        <SkillIcon className="size-4 shrink-0" />

                        <span className="truncate">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
