"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiBars3, HiXMark } from "react-icons/hi2";
import type { Translations } from "@/i18n/translations";

const navLinks: { key: keyof Translations; href: string }[] = [
  { key: "nav_about", href: "#about" },
  { key: "nav_skills", href: "#skills" },
  { key: "nav_projects", href: "#projects" },
  { key: "nav_experience", href: "#experience" },
  { key: "nav_education", href: "#education" },
  { key: "nav_testimonials", href: "#testimonials" },
  { key: "nav_gallery", href: "#gallery" },
  { key: "nav_contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text">
            PG
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                {t[link.key]}
              </a>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                {t[link.key]}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
