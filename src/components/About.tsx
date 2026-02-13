"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.about_title} <span className="gradient-text">{t.about_me}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 animate-gradient" />
              <div className="absolute inset-1 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl font-bold gradient-text">
                  {personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {personalInfo.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {personalInfo.bio}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t.about_get_in_touch}
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
              >
                {t.about_download_cv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
