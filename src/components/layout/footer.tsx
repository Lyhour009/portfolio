"use client";

import { ArrowUp, Heart } from "lucide-react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-card/40">
      <div className="container-page">
        <div className="grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-start">
          {/* Brand */}
          <div className="max-w-md">
            <a href="#home" className="inline-flex items-center gap-1">
              <span className="text-xl font-bold tracking-tight">
                Lyhour-
                <span className="text-primary">Dev</span>
              </span>
            </a>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Full stack developer focused on building modern, responsive, and
              useful digital products with clean code and thoughtful design.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:bg-secondary hover:text-primary"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground">
              Quick navigation
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3"
            >
              {footerLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{
                    x: 3,
                  }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-4 border-t border-border/70 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Lyhour-Dev. All rights reserved.</p>

          <motion.a
            href="#home"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.94,
            }}
            aria-label="Back to top"
            className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:bg-secondary hover:text-primary"
          >
            <ArrowUp className="size-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
