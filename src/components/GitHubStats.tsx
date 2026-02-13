"use client";

import { FiGitCommit, FiStar, FiGitPullRequest, FiCode } from "react-icons/fi";
import { useLanguage } from "@/i18n/LanguageContext";
import { useMemo } from "react";
import type { Translations } from "@/i18n/translations";

const stats: {
  key: keyof Translations;
  value: string;
  icon: typeof FiGitCommit;
  color: string;
}[] = [
  { key: "github_contributions", value: "1,200+", icon: FiGitCommit, color: "from-purple-500 to-violet-500" },
  { key: "github_stars", value: "350+", icon: FiStar, color: "from-amber-500 to-orange-500" },
  { key: "github_pull_requests", value: "180+", icon: FiGitPullRequest, color: "from-blue-500 to-cyan-500" },
  { key: "github_repositories", value: "45+", icon: FiCode, color: "from-green-500 to-emerald-500" },
];

function seededOpacities(count: number): number[] {
  const opacities = [0.08, 0.2, 0.4, 0.65, 0.9];
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
  const cellOpacities = useMemo(() => seededOpacities(84), []);

  return (
    <section className="py-24 px-4 bg-gray-50/80 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {t.github_title}{" "}
          <span className="gradient-text">{t.github_stats}</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.key}
                className="relative p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 text-center card-hover overflow-hidden group"
              >
                {/* Background glow */}
                <div
                  className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity`}
                />
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t[stat.key]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contribution heatmap */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t.github_activity}
            </h3>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {t.github_last_12}
            </span>
          </div>
          <div className="grid grid-cols-14 gap-[3px]">
            {cellOpacities.map((opacity, i) => (
              <div
                key={i}
                className="aspect-square rounded-[3px] bg-purple-500 transition-opacity hover:opacity-100"
                style={{ opacity }}
                title={`${Math.round(opacity * 10)} contributions`}
              />
            ))}
          </div>
          <div className="flex items-center justify-end gap-1 mt-3">
            <span className="text-[10px] text-gray-400 mr-1">{t.github_less}</span>
            {[0.08, 0.2, 0.4, 0.65, 0.9].map((o) => (
              <div
                key={o}
                className="w-3 h-3 rounded-[2px] bg-purple-500"
                style={{ opacity: o }}
              />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">{t.github_more}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
