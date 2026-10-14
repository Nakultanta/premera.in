"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "premera-theme";
const EXPIRY_MS   = 10 * 24 * 60 * 60 * 1000; // 10 days

function getSaved(): "dark" | "light" | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { value, expires } = JSON.parse(raw);
    if (Date.now() > expires) { localStorage.removeItem(STORAGE_KEY); return null; }
    return value as "dark" | "light";
  } catch { return null; }
}

function persist(theme: "dark" | "light") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    value: theme,
    expires: Date.now() + EXPIRY_MS,
  }));
}

export default function ThemeToggle() {
  const [dark, setDark]       = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const saved = getSaved();
    const isDark = saved !== null ? saved === "dark" : mq.matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    setMounted(true);

    // Follow system changes only when user hasn't set a manual preference
    const onSysChange = (e: MediaQueryListEvent) => {
      if (getSaved() !== null) return;
      setDark(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mq.addEventListener("change", onSysChange);
    return () => mq.removeEventListener("change", onSysChange);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    persist(next ? "dark" : "light");
  }

  // Reserve space before mount to avoid layout shift
  if (!mounted) {
    return <div style={{ width: 48, height: 26 }} />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{ width: 48, height: 26 }}
      className="relative shrink-0 rounded-full border border-[#A1631A]/40 dark:border-[#C3832D]/40 bg-[#f5e8d0] dark:bg-[#2c1c0d] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A1631A]"
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          width: 20,
          height: 20,
          left: dark ? 25 : 3,
          transition: "left 0.3s ease",
        }}
        className="rounded-full bg-[#A1631A] dark:bg-[#C3832D] flex items-center justify-center text-[10px] leading-none"
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
