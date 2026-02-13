"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappNumber } from "@/data/portfolio";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp_tooltip}
      title={t.whatsapp_tooltip}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-whatsapp-pulse" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 group-hover:scale-110 transition-all">
          <FaWhatsapp className="w-7 h-7" />
        </div>
      </div>
    </a>
  );
}
