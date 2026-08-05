import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";
import { ShieldCheck, Server, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Discovery Call | PyrexxAI",
  description: "Schedule a free demo with PyrexxAI. Discover how our custom AI voice receptionists can eliminate missed calls and integrate directly with your EMR.",
  alternates: {
    canonical: "https://pyrexxai.com/book-demo",
  },
};

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="space-y-8 lg:mt-10">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                Let's modernize your <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
                  clinic's front desk.
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Choose a time for a seamless, 15-minute discovery call. We will show you a live demonstration of the AI voice agent and evaluate your current EMR workflows.
              </p>
            </div>

            <div className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg border-b border-gray-100 dark:border-gray-800 pb-4">
                What to expect:
              </h3>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <Server className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Custom Architecture Map</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We outline exactly how PyrexxAI connects to your specific booking system.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">HIPAA Compliance Review</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">We walk you through our BAA process and end-to-end data encryption standards.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/30 rounded-xl flex items-center justify-center shrink-0 mr-4">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">14-Day Launch Protocol</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">If we are a good fit, we can have your custom voice agent live and taking calls in 14 days.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative z-10">
            <CalEmbed />
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
