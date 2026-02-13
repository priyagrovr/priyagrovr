"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiCodeBracket, HiBriefcase, HiAcademicCap } from "react-icons/hi2";

const highlightKeys = [
  { icon: HiCodeBracket, labelKey: "about_years" as const, subKey: "about_experience_label" as const },
  { icon: HiBriefcase, labelKey: "about_projects_count" as const, subKey: "about_projects_label" as const },
  { icon: HiAcademicCap, labelKey: "about_degree" as const, subKey: "about_degree_label" as const },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {t.about_title} <span className="gradient-text">{t.about_me}</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile card */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              {/* Spinning gradient ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 animate-spin-slow opacity-20 blur-sm" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden animate-pulse-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 animate-gradient" />
                <div className="absolute inset-[3px] rounded-3xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-7xl font-bold gradient-text">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>

              {/* Stat cards floating */}
              {highlightKeys.map((item, i) => {
                const Icon = item.icon;
                const positions = [
                  "-top-4 -right-4",
                  "-bottom-4 -left-4",
                  "-bottom-4 -right-4",
                ];
                return (
                  <div
                    key={i}
                    className={`absolute ${positions[i]} px-3 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 animate-float`}
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-purple-500" />
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-gray-100">
                          {t[item.labelKey]}
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">
                          {t[item.subKey]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {personalInfo.role}
            </h3>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-[15px]">
              {personalInfo.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5"
              >
                {t.about_get_in_touch}
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium text-sm hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:-translate-y-0.5"
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
