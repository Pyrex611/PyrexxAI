"use client";

import React, { useState } from "react";
import { CAL_LINK } from "@/lib/utils";

export default function ROICalculator() {
  const [calls, setCalls] = useState(200);
  const [missedRate, setMissedRate] = useState(35);
  const [ltv, setLtv] = useState(3000);

  const missedCalls = Math.round(calls * (missedRate / 100));
  const monthlyRisk = missedCalls * ltv;
  const pyrexxMonthlyCost = 1000;
  const netMonthlyROI = Math.max(0, monthlyRisk - pyrexxMonthlyCost);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="roi" className="py-12 md:py-24 bg-white dark:bg-[#0B0F17] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-brand-50 to-brand-100/50 dark:from-gray-900 dark:to-gray-800/50 rounded-3xl p-5 sm:p-8 lg:p-12 border border-brand-100 dark:border-gray-800 shadow-sm transition-colors">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-900 dark:text-white mb-2 md:mb-4 tracking-tight">
              Calculate Your Lost Revenue
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-brand-700/80 dark:text-gray-400">
              See exactly how much revenue walks out the door when calls go unanswered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6 sm:space-y-8 pt-2">
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <label
                    htmlFor="calls-slider"
                    className="text-xs sm:text-sm font-semibold text-brand-900 dark:text-gray-200"
                  >
                    Monthly Inbound Calls
                  </label>
                  <span className="font-bold text-brand-700 dark:text-brand-400 stat-number text-sm sm:text-base">
                    {calls}
                  </span>
                </div>
                <input
                  id="calls-slider"
                  type="range"
                  min="50"
                  max="2000"
                  step="10"
                  value={calls}
                  onChange={(e) => setCalls(Number(e.target.value))}
                  className="w-full h-2.5 bg-white dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  aria-label="Monthly inbound calls slider"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <label
                    htmlFor="missed-slider"
                    className="text-xs sm:text-sm font-semibold text-brand-900 dark:text-gray-200"
                  >
                    Missed Call Rate (%)
                  </label>
                  <span className="font-bold text-brand-700 dark:text-brand-400 stat-number text-sm sm:text-base">
                    {missedRate}%
                  </span>
                </div>
                <input
                  id="missed-slider"
                  type="range"
                  min="10"
                  max="70"
                  step="1"
                  value={missedRate}
                  onChange={(e) => setMissedRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-white dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  aria-label="Missed call rate slider"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2 items-center">
                  <label
                    htmlFor="ltv-slider"
                    className="text-xs sm:text-sm font-semibold text-brand-900 dark:text-gray-200"
                  >
                    Avg. Patient Lifetime Value
                  </label>
                  <span className="font-bold text-brand-700 dark:text-brand-400 stat-number text-sm sm:text-base">
                    ${ltv}
                  </span>
                </div>
                <input
                  id="ltv-slider"
                  type="range"
                  min="500"
                  max="15000"
                  step="100"
                  value={ltv}
                  onChange={(e) => setLtv(Number(e.target.value))}
                  className="w-full h-2.5 bg-white dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brand-600"
                  aria-label="Patient lifetime value slider"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-8 shadow-card dark:shadow-none border border-gray-100 dark:border-gray-800 flex flex-col justify-center transition-colors">
              <div className="space-y-4 md:space-y-6">
                <div className="border-b border-gray-100 dark:border-gray-800 pb-3 md:pb-4 flex justify-between items-end gap-2">
                  <div>
                    <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Missed Calls
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white stat-number">
                      {missedCalls} <span className="text-xs text-gray-500 font-normal">/mo</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      Revenue at Risk
                    </p>
                    <p className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-500 stat-number">
                      {formatCurrency(monthlyRisk)}
                    </p>
                  </div>
                </div>

                <div className="bg-brand-50/50 dark:bg-brand-900/20 rounded-xl p-4 border border-brand-100 dark:border-brand-800/50">
                  <p className="text-[10px] sm:text-xs font-semibold text-brand-700 dark:text-brand-400 uppercase tracking-wide mb-1">
                    Estimated Net Monthly ROI
                  </p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-500 stat-number">
                      +{formatCurrency(netMonthlyROI)}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">/ month</span>
                  </div>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-2">
                    *Based on standard $1,000/mo platform management retainer.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <a
                  href={CAL_LINK}
                  className="block w-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-full text-center font-bold transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-sm"
                >
                  Stop Losing Revenue &rarr;
                </a>
                <a
                  href="#how-it-works"
                  className="block w-full px-6 py-2.5 rounded-full text-center font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors text-xs sm:text-sm"
                >
                  See how PyrexxAI works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}