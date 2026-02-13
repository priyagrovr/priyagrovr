"use client";

import { useState } from "react";
import { galleryItems } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  HiCpuChip,
  HiShoppingCart,
  HiChatBubbleLeftRight,
  HiCloud,
  HiSparkles,
  HiHeart,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  brain: HiCpuChip,
  cart: HiShoppingCart,
  chat: HiChatBubbleLeftRight,
  cloud: HiCloud,
  bot: HiSparkles,
  heart: HiHeart,
};

const filters = ["All", "Web", "Mobile", "AI"] as const;

export default function Gallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.gallery_title}{" "}
          <span className="gradient-text">{t.gallery_my}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-10 max-w-lg mx-auto">
          {t.gallery_subtitle}
        </p>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => {
            const Icon = iconMap[item.icon] || HiSparkles;
            return (
              <div
                key={`${item.title}-${index}`}
                className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
              >
                {/* Card with gradient top section */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-white/10 group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Mockup lines (simulating a UI preview) */}
                  <div className="relative z-10 space-y-1.5 opacity-40 group-hover:opacity-60 transition-opacity">
                    <div className="h-1.5 w-3/4 rounded-full bg-white/50" />
                    <div className="h-1.5 w-1/2 rounded-full bg-white/30" />
                    <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Info section */}
                <div className="p-5 bg-white dark:bg-gray-900 border border-t-0 border-gray-100 dark:border-gray-800 rounded-b-2xl">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 dark:text-gray-500 py-12">
            {t.gallery_no_items}
          </p>
        )}
      </div>
    </section>
  );
}
