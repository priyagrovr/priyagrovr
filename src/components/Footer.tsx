"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
};

const CURRENT_YEAR = 2026;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold gradient-text">PG</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {CURRENT_YEAR} {personalInfo.name}. {t.footer_rights}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.name] || FiGithub;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                aria-label={link.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
