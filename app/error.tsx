"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />

      <section className="flex-grow flex items-center justify-center pt-32 pb-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/50 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-10 h-10 text-red-500 dark:text-red-400" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Something went wrong!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            An unexpected error has occurred in the application. Our engineering team has been notified.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 items-center justify-center"
          >
            <RefreshCcw className="w-5 h-5 mr-2" /> Try Again
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}