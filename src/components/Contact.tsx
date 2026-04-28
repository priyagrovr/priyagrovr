"use client";

import { personalInfo, socialLinks, whatsappNumber } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FormEvent, useState } from "react";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
};

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const phoneDigits = whatsappNumber.replace(/[^0-9]/g, "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = `Hi Priya,%0A%0AMy name is ${encodeURIComponent(
      name,
    )}.%0AEmail: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(
      message,
    )}`;
    const waUrl = `https://wa.me/${phoneDigits}?text=${body}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gray-50/80 dark:bg-gray-900/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {t.contact_title}{" "}
          <span className="gradient-text">{t.contact_get_in}</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-500 mb-16 max-w-lg mx-auto">
          {t.contact_description}
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info side */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800">
              <FiMail className="w-5 h-5 text-purple-500 mb-3" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {t.contact_email_label}
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-400 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            <a
              href={`https://wa.me/${phoneDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 hover:border-green-400 dark:hover:border-green-500 transition-colors"
            >
              <FaWhatsapp className="w-5 h-5 text-green-500 mb-3" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                WhatsApp
              </p>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {whatsappNumber}
              </span>
            </a>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {t.contact_social}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.name] || FiGithub;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact_name}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact_email}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all text-sm"
                />
              </div>
              <textarea
                rows={5}
                name="message"
                placeholder={t.contact_message}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all text-sm resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all hover:-translate-y-0.5 w-full justify-center disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {submitted ? (
                  t.contact_sent
                ) : (
                  <>
                    <FaWhatsapp className="w-5 h-5" />
                    {t.contact_send}
                  </>
                )}
              </button>
              <p className="text-xs text-center text-gray-500 dark:text-gray-500">
                Opens WhatsApp with your message pre-filled
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
