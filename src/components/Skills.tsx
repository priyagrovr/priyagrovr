"use client";

import { skills } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

const categories = [
  "Frontend",
  "Backend",
  "AI & LLM",
  "Database",
  "DevOps & Cloud",
] as const;

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50/80 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.skills_title}{" "}
          <span className="gradient-text">{t.skills_tech}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-16 max-w-lg mx-auto">
          Technologies and tools I work with daily
        </p>

        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category
            );
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {category[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group p-4 rounded-xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 card-hover cursor-default"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors">
                            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-sm text-gray-800 dark:text-gray-200 block truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-purple-500 dark:text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-progress"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
