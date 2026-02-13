"use client";

import { FiGitCommit, FiStar, FiGitPullRequest, FiCode } from "react-icons/fi";
import { useLanguage } from "@/i18n/LanguageContext";
import { useMemo } from "react";
import type { Translations } from "@/i18n/translations";

const stats: { key: keyof Translations; value: string; icon: typeof FiGitCommit }[] = [
  { key: "github_contributions", value: "1,200+", icon: FiGitCommit },
  { key: "github_stars", value: "350+", icon: FiStar },
  { key: "github_pull_requests", value: "180+", icon: FiGitPullRequest },
  { key: "github_repositories", value: "45+", icon: FiCode },
];

function seededOpacities(count: number): number[] {
  const opacities = [0.1, 0.25, 0.5, 0.75, 1];
  const result: number[] = [];
  let seed = 42;
  for (let i = 0; i < count; i++) {
    seed = (seed * 16807 + 11) % 2147483647;
    result.push(opacities[seed % opacities.length]);
  }
  return result;
}

export default function GitHubStats() {
  const { t } = useLanguage();
  const cellOpacities = useMemo(() => seededOpacities(48), []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t.github_title}{" "}
          <span className="gradient-text">{t.github_stats}</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="relative p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all group"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t[stat.key]}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.github_activity}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {t.github_last_12}
            </span>
          </div>
          <div className="grid grid-cols-12 gap-1">
            {cellOpacities.map((opacity, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm bg-purple-500"
                style={{ opacity }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
