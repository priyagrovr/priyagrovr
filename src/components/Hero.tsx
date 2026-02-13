"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiArrowDown, HiDocumentText } from "react-icons/hi2";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb top-right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" />
        {/* Smaller orb bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-8 border border-purple-200 dark:border-purple-800/50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t.hero_subtitle}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight animate-fade-in-up-delay">
          {t.hero_greeting}
          <br />
          <span className="gradient-text animate-gradient bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
            {personalInfo.name}
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-3 font-medium animate-fade-in-up-delay-2">
          {personalInfo.role}
        </h2>

        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5"
          >
            {t.hero_view_work}
            <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-semibold hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:-translate-y-0.5"
          >
            <HiDocumentText className="w-4 h-4" />
            {t.hero_resume}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up-delay-3">
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
