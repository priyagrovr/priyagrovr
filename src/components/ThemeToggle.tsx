"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <HiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <HiMoon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
