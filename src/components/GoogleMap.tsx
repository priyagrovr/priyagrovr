"use client";

import { mapConfig } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";

export default function GoogleMap() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.map_title}{" "}
          <span className="gradient-text">{t.map_location}</span>
        </h2>

        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <iframe
            src={mapConfig.embedUrl}
            title={mapConfig.title}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          {mapConfig.title}
        </p>
      </div>
    </section>
  );
}
