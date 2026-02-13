"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiArrowDown, HiDocumentText } from "react-icons/hi2";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <p className="text-sm sm:text-base font-medium text-purple-500 dark:text-purple-400 mb-4 tracking-wide uppercase">
          {t.hero_subtitle}
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {t.hero_greeting}{" "}
          <span className="gradient-text animate-gradient bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
            {personalInfo.name}
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-4 font-medium">
          {personalInfo.role}
        </h2>

        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
          >
            {t.hero_view_work}
            <HiArrowDown className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            <HiDocumentText className="w-4 h-4" />
            {t.hero_resume}
          </a>
        </div>
      </div>
    </section>
  );
}
