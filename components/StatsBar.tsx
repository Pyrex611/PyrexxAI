import React from "react";

export default function StatsBar() {
  return (
    <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0B0F17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-transparent md:divide-gray-100 dark:md:divide-gray-800">
          <div className="text-center md:text-left px-4">
            <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 stat-number mb-2">38%</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">of clinic calls go unanswered</p>
          </div>
          <div className="text-center md:text-left px-4">
            <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 stat-number mb-2">$67K+</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">lost annually per practice</p>
          </div>
          <div className="text-center md:text-left px-4">
            <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 stat-number mb-2">14 Days</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">from kickoff to live AI agent</p>
          </div>
          <div className="text-center md:text-left px-4">
            <div className="text-4xl font-bold text-brand-600 dark:text-brand-400 stat-number mb-2">24/7</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">coverage with zero overtime</p>
          </div>
        </div>
      </div>
    </section>
  );
}