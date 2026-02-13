"use client";

import { projects } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.projects_title}{" "}
          <span className="gradient-text">{t.projects_featured}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="h-32 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 -mt-6 relative">
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-4 shadow-sm">
                  <span className="text-lg font-bold gradient-text">
                    {project.title[0]}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      {t.projects_code}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      {t.projects_live_demo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
