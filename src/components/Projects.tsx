"use client";

import { projects } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const gradients = [
  "from-purple-600 via-violet-600 to-blue-600",
  "from-blue-600 via-cyan-600 to-teal-600",
  "from-violet-600 via-purple-600 to-pink-600",
  "from-indigo-600 via-blue-600 to-purple-600",
  "from-purple-600 via-fuchsia-600 to-pink-600",
  "from-blue-600 via-violet-600 to-purple-600",
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.projects_title}{" "}
          <span className="gradient-text">{t.projects_featured}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-16 max-w-lg mx-auto">
          {t.projects_subtitle}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 card-hover"
            >
              {/* Gradient header with pattern */}
              <div
                className={`relative h-40 bg-gradient-to-br ${gradients[index % gradients.length]} p-6 flex items-end`}
              >
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/20 group-hover:scale-110 transition-transform" />
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                    <span className="text-white text-lg font-bold">
                      {project.title[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
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
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
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
