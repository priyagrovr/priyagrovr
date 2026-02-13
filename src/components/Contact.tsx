"use client";

import { personalInfo, socialLinks } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageContext";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend } from "react-icons/fi";
import { FormEvent, useState } from "react";

const socialIcons: Record<string, React.ElementType> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
};

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.contact_title}{" "}
          <span className="gradient-text">{t.contact_get_in}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t.contact_description}
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 mb-8 transition-colors"
            >
              <FiMail className="w-5 h-5" />
              {personalInfo.email}
            </a>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.name] || FiGithub;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-500/50 transition-all"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder={t.contact_name}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.contact_email}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors text-sm"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder={t.contact_message}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm hover:opacity-90 transition-opacity w-full justify-center"
            >
              {submitted ? (
                t.contact_sent
              ) : (
                <>
                  {t.contact_send}
                  <FiSend className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
