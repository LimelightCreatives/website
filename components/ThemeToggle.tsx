"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border-[2px] border-[var(--foreground)] px-3 py-2 font-display font-bold text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}