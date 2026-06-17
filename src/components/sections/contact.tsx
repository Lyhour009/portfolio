"use client";

import { contactLinks } from "@/src/data/contact";
import { ArrowUpRight, MapPin, Send } from "lucide-react";
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="container-page">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[0_6px_20px_rgba(236,72,153,0.08)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Left side */}
          <motion.div
            variants={fadeUpVariants}
            className="relative overflow-hidden  p-7 sm:p-10"
          >
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build something useful together.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                Have a project idea, internship opportunity, or development
                role? Send me a message and I will reply as soon as possible.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex size-10 items-center justify-center rounded-xl bg-card text-primary">
                  <MapPin className="size-4" />
                </div>

                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p>Cambodia</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-muted-foreground">
                        {label}
                      </p>

                      <p className="truncate text-sm font-semibold">{value}</p>
                    </div>

                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div variants={fadeUpVariants} className="p-7 sm:p-10">
            <div>
              <p className="text-sm font-semibold text-primary">
                Send a message
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Tell me about your project
              </h3>
            </div>

            <form
              action="mailto:your-email@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-foreground"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What would you like to discuss?"
                  className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Write your message here..."
                  className="mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="pink-button w-full gap-2 sm:w-auto"
              >
                Send Message
                <Send className="size-4" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
