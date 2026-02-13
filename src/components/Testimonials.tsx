"use client";

import { testimonials } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiStar } from "react-icons/hi2";
import { FiLinkedin } from "react-icons/fi";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-gray-50/80 dark:bg-gray-900/30"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.testimonials_title}{" "}
          <span className="gradient-text">{t.testimonials_what}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-16 max-w-lg mx-auto">
          {t.testimonials_subtitle}
        </p>

        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-8 sm:p-10 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 card-hover overflow-hidden"
            >
              {/* Gradient accent top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500" />

              {/* Large quote decoration */}
              <div className="absolute top-6 right-8 text-8xl leading-none text-gray-100 dark:text-gray-800/50 font-serif pointer-events-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="relative text-[15px] sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line mb-8">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-purple-500/20 shrink-0">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {item.name}
                    </p>
                    <FiLinkedin className="w-4 h-4 text-blue-600 shrink-0" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-xs text-purple-500 dark:text-purple-400 font-medium mt-0.5">
                    {item.company}
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
