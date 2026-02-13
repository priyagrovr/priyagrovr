"use client";

import { skills } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

const categories = ["Frontend", "Backend", "AI & LLM", "Database", "DevOps & Cloud"] as const;

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.skills_title} <span className="gradient-text">{t.skills_tech}</span>
        </h2>

        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} className="mb-10 last:mb-0">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group relative p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-purple-500 dark:text-purple-400 shrink-0" />
                        <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block text-right">
                        {skill.level}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
