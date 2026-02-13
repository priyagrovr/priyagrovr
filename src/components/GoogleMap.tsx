"use client";

import { mapConfig } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiMapPin } from "react-icons/hi2";

export default function GoogleMap() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {t.map_title}{" "}
          <span className="gradient-text">{t.map_location}</span>
        </h2>

        <div className="relative rounded-2xl overflow-hidden gradient-border">
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src={mapConfig.embedUrl}
              title={mapConfig.title}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] dark:grayscale-[50%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          <HiMapPin className="w-4 h-4 text-purple-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {mapConfig.title}
          </p>
        </div>
      </div>
    </section>
  );
}
