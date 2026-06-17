"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="size-10 rounded-xl border border-border bg-card"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
    >
      <motion.span
        key={resolvedTheme}
        initial={{
          opacity: 0,
          rotate: -45,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </motion.span>
    </motion.button>
  );
}
