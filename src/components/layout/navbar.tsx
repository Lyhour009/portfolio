"use client";

import { useState } from "react";
import { ArrowUpRight, CodeXml, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/src/data/navigation";
import { ThemeToggle } from "@/src/components/shared/theme-toggle";
import Link from "next/link";

const navbarAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const mobileMenuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarAnimation}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="container-page flex h-18 items-center justify-between"
      >
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-300 group-hover:rotate-6">
            <CodeXml className="size-5" />
          </span>

          <span className="text-lg font-bold tracking-tight">
            Lyhour-<span className="text-primary">Dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15 + index * 0.06,
                duration: 0.35,
              }}
              className="group relative py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}

              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 22,
            }}
            className="group relative hidden overflow-hidden rounded-xl sm:block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative flex items-center gap-2 rounded-[15px] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(236,72,153,0.28)] transition-all duration-300 group-hover:shadow-[0_18px_42px_rgba(236,72,153,0.4)]">
              <span>Contact Me</span>

              <span className="flex size-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </span>
          </motion.a>

          <div className="h-6 w-px bg-border/80 sm:block" />

          <ThemeToggle />

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary hover:bg-secondary hover:text-primary lg:hidden"
          >
            <motion.span
              key={isMenuOpen ? "close" : "menu"}
              initial={{
                opacity: 0,
                rotate: -30,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {isMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </motion.span>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuAnimation}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={closeMenu}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground sm:hidden"
              >
                Let&apos;s Talk
                <ArrowUpRight className="size-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
