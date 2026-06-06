import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Database, TrendingUp, HandCoins, MessageSquareText } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Database Reactivation for Clinics | PyrexxAI",
  description: "Turn your dormant patient list into immediate revenue. Our AI-driven reactivation campaigns operate on a 100% risk-free, commission-only basis.",
  alternates: {
    canonical: "https://pyrexxai.com/database-reactivation",
  },
};

export default function DatabaseReactivationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 selection:bg-brand-100 dark:selection:bg-brand-900/50 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 px-4 py-2 rounded-full text-emerald-700 dark:text-emerald-400 text-sm font-bold mb-8 uppercase tracking-wider">
          <span>100% Risk-Free Commission Basis</span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
          Unlock Hidden Revenue from Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-brand-600 dark:from-emerald-400 dark:to-brand-400">
            Dormant Patient List.
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          You already spent money acquiring them. Let our intelligent AI systems seamlessly reach out to past patients to fill your calendar—and you only pay us when they actually show up.
        </p>

        <a 
          href={CAL_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          Start Your Free Campaign &rarr;
        </a>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. We Mine Your EMR</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                We securely export a list of patients who haven't visited your clinic in 6+ months for routine check-ups, follow-ups, or top-off treatments.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquareText className="w-8 h-8 text-brand-600 dark:text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. AI Initiates Contact</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Our conversational AI initiates a highly personalized SMS or Voice campaign, offering them a compelling reason to re-book, and handles the scheduling directly.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 rounded-2xl flex items-center justify-center mb-6">
                <HandCoins className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. You Pay for Shows</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                No monthly retainers. No upfront ad spend. We only take a pre-agreed commission on the patients that successfully complete their appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}