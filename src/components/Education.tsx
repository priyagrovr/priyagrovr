"use client";

import { education, certifications } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiAcademicCap, HiCheckBadge } from "react-icons/hi2";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.education_title}{" "}
          <span className="gradient-text">{t.education_and}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                  <HiAcademicCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-purple-500 dark:text-purple-400 font-medium mb-2">
                    {edu.period}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {t.education_certifications}
        </h3>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <HiCheckBadge className="w-6 h-6 text-purple-500 shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
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
    </section>
  );
}
