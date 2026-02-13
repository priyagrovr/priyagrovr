"use client";

import { testimonials } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiMessageCircle } from "react-icons/fi";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.testimonials_title}{" "}
          <span className="gradient-text">{t.testimonials_what}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all flex flex-col"
            >
              <FiMessageCircle className="w-6 h-6 text-purple-500 dark:text-purple-400 mb-4" />
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
