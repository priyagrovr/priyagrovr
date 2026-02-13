"use client";

import { education, certifications } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiAcademicCap, HiCheckBadge } from "react-icons/hi2";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {t.education_title}{" "}
          <span className="gradient-text">{t.education_and}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 card-hover overflow-hidden"
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />

              <div className="flex items-start gap-4 mt-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                  <HiAcademicCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.institution}
                  </p>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium">
                    {edu.period}
                  </span>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-5 flex items-center gap-2">
            <HiCheckBadge className="w-5 h-5 text-purple-500" />
            {t.education_certifications}
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                  <HiCheckBadge className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {cert.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
