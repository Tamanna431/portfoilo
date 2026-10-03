"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme =
      storedTheme ||
      (document.documentElement.classList.contains("light") ? "light" : "dark");

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (mode: "dark" | "light") => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      type="button"
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 dark:border-white/15 dark:bg-white/5 text-white dark:text-white transition-all duration-300 hover:scale-105 shadow-sm group cursor-pointer"
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
      aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
    >
      {theme === "dark" ? (
        <span className="material-symbols-outlined text-[20px] text-amber-300 group-hover:rotate-45 transition-transform duration-300">
          light_mode
        </span>
      ) : (
        <span className="material-symbols-outlined text-[20px] text-indigo-500 group-hover:-rotate-12 transition-transform duration-300">
          dark_mode
        </span>
      )}
    </button>
  );
}
