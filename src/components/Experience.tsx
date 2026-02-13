"use client";

import { experience } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiMapPin, HiBriefcase } from "react-icons/hi2";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.experience_title}{" "}
          <span className="gradient-text">{t.experience_work}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
          {t.experience_subtitle}
        </p>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-blue-500" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                <div className="absolute left-2.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-gray-50 dark:ring-gray-900/50" />

                <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-purple-500 dark:text-purple-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </p>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <HiMapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                      <HiBriefcase className="w-3 h-3" />
                      {exp.type}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
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
