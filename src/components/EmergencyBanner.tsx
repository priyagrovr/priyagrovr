"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiXMark, HiSparkles } from "react-icons/hi2";

export default function EmergencyBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white text-sm">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-banner-scroll" />

      <div className="relative max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
        <HiSparkles className="w-4 h-4 shrink-0 animate-pulse" />
        <p className="text-center font-medium tracking-wide">
          {t.banner_text}
        </p>
        <a
          href="#contact"
          className="shrink-0 px-4 py-1 rounded-full bg-white text-purple-600 text-xs font-bold hover:bg-white/90 transition-colors shadow-sm"
        >
          {t.banner_cta}
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss banner"
        >
          <HiXMark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
