"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
};

const CURRENT_YEAR = 2026;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="#" className="text-2xl font-bold gradient-text">
              PG
            </a>
            <span className="hidden sm:block text-gray-300 dark:text-gray-700">
              |
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              Made with{" "}
              <FiHeart className="w-3 h-3 text-red-500 inline" />{" "}
              by {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.name] || FiGithub;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/50 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {CURRENT_YEAR} {personalInfo.name}. {t.footer_rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
