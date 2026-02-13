"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiBars3, HiXMark, HiSparkles } from "react-icons/hi2";
import type { Translations } from "@/i18n/translations";

const navLinks: { key: keyof Translations; href: string }[] = [
  { key: "nav_about", href: "#about" },
  { key: "nav_skills", href: "#skills" },
  { key: "nav_projects", href: "#projects" },
  { key: "nav_experience", href: "#experience" },
  { key: "nav_testimonials", href: "#testimonials" },
  { key: "nav_contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency Banner */}
      {bannerVisible && (
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white text-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-banner-scroll" />
          <div className="relative max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-3">
            <HiSparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
            <p className="text-center font-medium text-xs sm:text-sm truncate">
              {t.banner_text}
            </p>
            <a
              href="#contact"
              className="shrink-0 px-3 py-0.5 rounded-full bg-white text-purple-600 text-xs font-bold hover:bg-white/90 transition-colors"
            >
              {t.banner_cta}
            </a>
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-2 sm:right-3 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <HiXMark className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "glass border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
            : bannerVisible
              ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a
              href="#"
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              PG
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all"
                >
                  {t[link.key]}
                </a>
              ))}
              <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <HiXMark className="w-5 h-5" />
                ) : (
                  <HiBars3 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="lg:hidden pb-3 border-t border-gray-200/50 dark:border-gray-800/50">
              <div className="pt-2 space-y-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all"
                  >
                    {t[link.key]}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
