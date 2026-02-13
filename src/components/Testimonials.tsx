"use client";

import { testimonials } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiStar } from "react-icons/hi2";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-24 px-4 bg-gray-50/80 dark:bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.testimonials_title}{" "}
          <span className="gradient-text">{t.testimonials_what}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-16 max-w-lg mx-auto">
          Feedback from colleagues and clients I&apos;ve worked with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 card-hover flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar
                    key={i}
                    className="w-4 h-4 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100 dark:border-gray-800">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-purple-500/20">
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
                    {item.role} @ {item.company}
                  </p>
                </div>
              </div>

              {/* Large quote decoration */}
              <div className="absolute top-4 right-5 text-6xl leading-none text-gray-100 dark:text-gray-800 font-serif pointer-events-none select-none">
                &ldquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
