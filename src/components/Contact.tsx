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
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Social
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
                  placeholder={t.contact_name}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all text-sm"
                />
                <input
                  type="email"
                  placeholder={t.contact_email}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all text-sm"
                />
              </div>
              <textarea
                rows={5}
                placeholder={t.contact_message}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 dark:focus:border-purple-500 transition-all text-sm resize-none"
              />
              <button
                type="submit"
                disabled={submitted}
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5 w-full justify-center disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {submitted ? (
                  t.contact_sent
                ) : (
                  <>
                    {t.contact_send}
                    <FiSend className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
