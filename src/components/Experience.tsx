"use client";

import { experience } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiMapPin } from "react-icons/hi2";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gray-50/80 dark:bg-gray-900/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.experience_title}{" "}
          <span className="gradient-text">{t.experience_work}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-16">
          {t.experience_subtitle}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] sm:left-[31px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-violet-500 to-blue-500 opacity-30" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-3 sm:left-6 top-6 z-10">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-[5px] ring-gray-50 dark:ring-gray-950 group-hover:ring-purple-100 dark:group-hover:ring-purple-900/30 transition-all" />
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          {exp.company}
                        </span>
                        <span className="text-gray-300 dark:text-gray-700">
                          |
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <HiMapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium border border-purple-100 dark:border-purple-800/50">
                        {exp.type}
                      </span>
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-purple-400 dark:bg-purple-500 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
