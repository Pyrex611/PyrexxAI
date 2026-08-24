import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | PyrexxAI",
  description: "Join the team at PyrexxAI and help us build the future of voice AI for healthcare.",
  alternates: {
    canonical: "https://pyrexxai.com/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300 flex flex-col">
      <Navbar />

      <section className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mb-8">
          <Briefcase className="w-10 h-10 text-brand-600 dark:text-brand-400" />
        </div>

        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Join the PyrexxAI Team
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          We are building the future of automated patient intake and intelligent voice reception for medical clinics nationwide.
        </p>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm w-full max-w-2xl">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">No Open Positions</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our engineering team is currently at full capacity, but we are always looking to connect with exceptional voice AI, full-stack, and sales engineering talent.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-sm"
          >
            Get in touch <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}