"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, CodeXml, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { navigationItems } from "@/src/data/navigation";
import { ThemeToggle } from "@/src/components/shared/theme-toggle";

const NAVBAR_OFFSET = 90;
const MOBILE_MENU_ANIMATION_DURATION = 300;

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

function getSectionId(href: string) {
  return href.replace("#", "");
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /*
   * Updates the active navigation item while scrolling.
   */
  useEffect(() => {
    function updateActiveSection() {
      const sections = navigationItems
        .map((item) => {
          const sectionId = getSectionId(item.href);

          return document.getElementById(sectionId);
        })
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) {
        return;
      }

      const currentPosition = window.scrollY + NAVBAR_OFFSET + 20;

      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= currentPosition) {
          currentSection = section.id;
        }
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (isAtPageBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /*
   * Closes the mobile menu and scrolls to a section.
   */
  function handleNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
      console.warn(`Navigation section "${sectionId}" was not found.`);

      return;
    }

    const menuWasOpen = isMenuOpen;

    setActiveSection(sectionId);
    setIsMenuOpen(false);

    /*
     * On mobile, wait for the collapsing menu animation.
     * Otherwise, the changing header height can interrupt scrolling.
     */
    const delay = menuWasOpen ? MOBILE_MENU_ANIMATION_DURATION : 0;

    window.setTimeout(() => {
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_OFFSET;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${sectionId}`);
    }, delay);
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
        {/* Logo */}
        <Link
          href="#home"
          onClick={(event) => handleNavigation(event, "home")}
          className="group flex items-center gap-2"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-300 group-hover:rotate-6">
            <CodeXml className="size-5" />
          </span>

          <span className="text-lg font-bold tracking-tight">
            Lyhour-
            <span className="text-primary">Dev</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item, index) => {
            const sectionId = getSectionId(item.href);

            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, sectionId)}
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
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}

                {isActive ? (
                  <motion.span
                    layoutId="desktop-active-navigation"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                ) : (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <motion.a
            href="#contact"
            onClick={(event) => handleNavigation(event, "contact")}
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

            <span className="relative flex items-center gap-2 rounded-[11px] bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_6px_18px_rgba(236,72,153,0.22)] transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(236,72,153,0.28)]">
              <span>Contact Me</span>

              <span className="flex size-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </span>
            </span>
          </motion.a>

          <div className="hidden h-6 w-px bg-border/80 sm:block" />

          <ThemeToggle />

          {/* Mobile menu button */}
          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
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

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuAnimation}
            transition={{
              duration: MOBILE_MENU_ANIMATION_DURATION / 1000,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col py-4">
              {navigationItems.map((item, index) => {
                const sectionId = getSectionId(item.href);

                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigation(event, sectionId)}
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
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>

                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-navigation"
                        className="size-2 rounded-full bg-primary"
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={(event) => handleNavigation(event, "contact")}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground sm:hidden"
              >
                Contact Me
                <ArrowUpRight className="size-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
