"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";
import { HiChevronDown } from "react-icons/hi2";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline text-xs font-medium text-gray-700 dark:text-gray-300">
          {current.code.toUpperCase()}
        </span>
        <HiChevronDown className="w-3 h-3 text-gray-500" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg z-50 py-1 max-h-64 overflow-y-auto">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                lang === l.code
                  ? "text-purple-500 dark:text-purple-400 font-medium"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
              {lang === l.code && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
