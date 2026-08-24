import React from "react";
import Link from "next/link";
import { CAL_LINK } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="py-32 bg-white dark:bg-[#0B0F17] relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-brand-50/50 dark:bg-brand-900/10 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Every missed call is a patient choosing your competitor.
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Book a free 15-minute discovery call. We will show you exactly how PyrexxAI sounds, how it books, and how much revenue you are currently losing.
        </p>
        <Link
          href={CAL_LINK}
          className="inline-flex bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/50 animate-pulse-glow"
        >
          Book My Free Demo &rarr;
        </Link>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500 font-medium">
          No credit card. No long-term contracts. Cancel anytime.
        </p>
      </div>
    </section>
  );
}