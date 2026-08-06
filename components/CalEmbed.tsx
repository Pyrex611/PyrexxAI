"use client";

import React, { useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Calendar, Play, Loader2, Lock } from "lucide-react";

export default function CalEmbed() {
  const [activated, setActivated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleActivate = async () => {
    setLoading(true);
    try {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#2563EB" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setActivated(true);
    } catch (e) {
      console.error("Cal.com initialization error:", e);
      setActivated(true); // Fallback render
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[650px] overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl bg-white dark:bg-[#0A0B0D] relative flex flex-col justify-center items-center">
      {!activated ? (
        <div className="p-8 text-center max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 bg-brand-50 dark:bg-brand-900/30 rounded-3xl flex items-center justify-center mx-auto border border-brand-100 dark:border-brand-800/50 shadow-inner">
            <Calendar className="w-10 h-10 text-brand-600 dark:text-brand-400" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Schedule Your Discovery Call
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Select a time to evaluate your EMR workflow and see a live AI receptionist demonstration.
            </p>
          </div>

          <button
            onClick={handleActivate}
            disabled={loading}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-2xl shadow-cta transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Initializing Calendar...
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" /> Load Live Calendar
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            <span>Encrypted Booking Connection (Cal.com)</span>
          </div>
        </div>
      ) : (
        <Cal
          calLink="clifford-bulya/15min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ theme: "auto" }}
        />
      )}
    </div>
  );
}