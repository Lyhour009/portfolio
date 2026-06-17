"use client";

import { statistics, technologies } from "@/src/data/about";
import { ArrowUpRight, CodeXml, Layers3, Lightbulb } from "lucide-react";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/70 py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}

      <div className="container-page">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
          className="mb-12 max-w-2xl"
        >
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building digital products with
            <span className="pink-gradient"> purpose and care.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            I combine thoughtful design, modern technologies, and clean code to
            turn ideas into responsive and useful web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Main introduction card */}
          <motion.article
            variants={fadeUpVariants}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_10px_35px_rgba(236,72,153,0.06)] sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <CodeXml className="size-6" />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight">
                Full Stack Developer
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                I am a full stack developer who enjoys creating modern,
                responsive, and user-friendly applications. I focus on solving
                real problems instead of building features without purpose.
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                I care about clean user interfaces, maintainable code, good
                performance, and making every product simple for people to use.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Let&apos;s build something together
                <ArrowUpRight className="size-4" />
              </motion.a>
            </div>
          </motion.article>

          {/* Approach cards */}
          <motion.div
            variants={fadeUpVariants}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            <article className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Lightbulb className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold">Problem-first thinking</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    I begin by understanding the real problem before choosing a
                    design, feature, or technology.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Layers3 className="size-5" />
                </div>

                <div>
                  <h3 className="font-bold">Clean and scalable code</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    I organize components and logic clearly so projects remain
                    easy to understand, update, and grow.
                  </p>
                </div>
              </div>
            </article>
          </motion.div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="mt-6 rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">
                Technologies I use
              </p>

              <h3 className="mt-1 text-xl font-bold">
                My current development toolkit
              </h3>
            </div>

            <p className="text-sm text-muted-foreground">
              Always learning and improving
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -2,
                }}
                className="rounded-xl border border-border bg-secondary/60 px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-secondary hover:text-primary"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 grid gap-4 sm:grid-cols-3"
        >
          {statistics.map((item) => (
            <motion.article
              key={item.label}
              variants={fadeUpVariants}
              whileHover={{
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {item.value}
              </p>

              <h3 className="mt-3 font-bold">{item.label}</h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
