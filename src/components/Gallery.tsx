"use client";

import { galleryItems } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

const gradients = [
  "from-purple-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-blue-600 to-violet-600",
  "from-purple-600 to-blue-400",
  "from-indigo-500 to-purple-500",
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.gallery_title}{" "}
          <span className="gradient-text">{t.gallery_my}</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Gradient placeholder image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full grid grid-cols-6 grid-rows-4 gap-1 p-4">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-white/30"
                    />
                  ))}
                </div>
              </div>

              {/* Hover overlay with info */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-white/80 text-xs">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
