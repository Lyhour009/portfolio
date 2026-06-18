"use client";

import { socialLinks } from "@/src/data/hero";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/70"
    >
      {/* Background decoration */}
      <div className="container-page grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        {/* Left content */}
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={fadeUpAnimation}>
            <span className="badge-soft gap-2">
              <span className="size-2 rounded-full bg-pink-500" />
              Kong Kemlyhour
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpAnimation}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m Lyhour.
            <span className="mt-2 block pink-gradient">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpAnimation}
            className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            I build modern, responsive and user-friendly web applications that
            solve real-world problems with clean code and thoughtful design.
          </motion.p>

          <motion.div
            variants={fadeUpAnimation}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="pink-button gap-2"
            >
              View My Work
              <ArrowRight className="size-4" />
            </motion.a>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="white-button gap-2"
            >
              <Download className="size-4 text-primary" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUpAnimation} className="mt-9">
            <p className="text-xs  uppercase text-muted-foreground">
              Find me online
            </p>

            <div className="mt-3 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:border-primary hover:bg-secondary hover:text-primary"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Code card */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="code-card overflow-hidden">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>

              <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                TS
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto px-5 py-7 sm:px-8">
              <pre className="font-mono text-[13px] leading-7 sm:text-sm">
                <code>
                  <span className="text-muted-foreground">1&nbsp;&nbsp;</span>
                  <span className="text-primary">const</span>
                  <span className="text-foreground"> developer = {"{"}</span>
                  {"\n"}

                  <span className="text-muted-foreground">2&nbsp;&nbsp;</span>
                  <span className="text-foreground">&nbsp;&nbsp;name: </span>
                  <span className="text-primary">
                    &apos;Kong Kemlyhour&apos;
                  </span>
                  <span className="text-foreground">,</span>
                  {"\n"}

                  <span className="text-muted-foreground">3&nbsp;&nbsp;</span>
                  <span className="text-foreground">&nbsp;&nbsp;role: </span>
                  <span className="text-primary">
                    &apos;Full Stack Developer&apos;
                  </span>
                  <span className="text-foreground">,</span>
                  {"\n"}

                  <span className="text-muted-foreground">4&nbsp;&nbsp;</span>
                  <span className="text-foreground">&nbsp;&nbsp;passion: </span>
                  <span className="text-primary">
                    &apos;Building useful products&apos;
                  </span>
                  <span className="text-foreground">,</span>
                  {"\n\n"}

                  <span className="text-muted-foreground">5&nbsp;&nbsp;</span>
                  <span className="text-foreground">&nbsp;&nbsp;skills: [</span>
                  {"\n"}

                  <span className="text-muted-foreground">6&nbsp;&nbsp;</span>
                  <span className="text-primary">
                    &nbsp;&nbsp;&nbsp;&nbsp;&apos;Next.js&apos;,
                    &apos;TypeScript&apos;,
                  </span>
                  {"\n"}

                  <span className="text-muted-foreground">7&nbsp;&nbsp;</span>
                  <span className="text-primary">
                    &nbsp;&nbsp;&nbsp;&nbsp;&apos;React&apos;, &apos;Tailwind
                    CSS&apos;,
                  </span>
                  {"\n"}

                  <span className="text-muted-foreground">8&nbsp;&nbsp;</span>
                  <span className="text-primary">
                    &nbsp;&nbsp;&nbsp;&nbsp;&apos;Supabase&apos;
                    ,&apos;Prisma&apos;
                  </span>
                  {"\n"}

                  <span className="text-muted-foreground">9&nbsp;&nbsp;</span>
                  <span className="text-foreground">&nbsp;&nbsp;],</span>
                  {"\n\n"}

                  <span className="text-muted-foreground">10&nbsp;</span>
                  <span className="text-foreground">&nbsp;&nbsp;mission: </span>
                  <span className="text-primary">
                    &apos;Turn ideas into products&apos;
                  </span>
                  {"\n"}

                  <span className="text-muted-foreground">11&nbsp;</span>
                  <span className="text-foreground">{"};"}</span>
                </code>
              </pre>
            </div>

            {/* Status footer */}
            <div className="flex items-center gap-2 border-t border-border bg-secondary/40 px-5 py-4 text-sm text-muted-foreground">
              <span className="size-2.5 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />
              Ready for opportunities
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-8 -z-10 size-40 rounded-full bg-pink-400/20 blur-3xl dark:bg-pink-500/15"
          />
        </motion.div>
      </div>
    </section>
  );
}
