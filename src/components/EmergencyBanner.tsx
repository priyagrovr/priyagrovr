"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { HiXMark } from "react-icons/hi2";

export default function EmergencyBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-4">
        <p className="text-center font-medium">{t.banner_text}</p>
        <a
          href="#contact"
          className="shrink-0 px-4 py-1 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold transition-colors"
        >
          {t.banner_cta}
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <HiXMark className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
