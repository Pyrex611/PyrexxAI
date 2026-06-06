import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { MonitorSmartphone, Zap, ShieldCheck, Search, LayoutDashboard, Code2 } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

export const metadata: Metadata = {
  title: "High-Converting Medical Websites | PyrexxAI",
  description: "Custom, blazing-fast, HIPAA-compliant websites designed specifically for MedSpas, Dental Clinics, and Medical Practices to maximize patient conversions.",
  alternates: {
    canonical: "https://pyrexxai.com/website-building",
  },
};

export default function WebsiteBuildingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 selection:bg-brand-100 dark:selection:bg-brand-900/50 transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 px-6 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-100/40 dark:bg-brand-900/20 blur-[100px] rounded-full" />
        </div>

        <div className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800/50 px-4 py-2 rounded-full text-brand-700 dark:text-brand-300 text-sm font-medium mb-8">
          <MonitorSmartphone className="w-4 h-4" />
          <span>Premium Clinical Web Design</span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
          Websites Engineered for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
            Patient Conversion.
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Your website is your digital front door. We build blazing-fast, SEO-optimized, and fully HIPAA-compliant websites designed exclusively to turn your web traffic into booked appointments.
        </p>

        <a 
          href={CAL_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          Request a Website Audit &rarr;
        </a>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Beyond Generic Templates</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We abandon slow, bloated page builders. Your clinic's site is custom-coded using the same enterprise tech stack used by massive tech companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sub-Second Load Times</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We build with Next.js and deploy to edge networks. Your site loads instantly, preventing patients from bouncing to a competitor's site.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <Search className="w-10 h-10 text-brand-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technical SEO & GEO</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Outrank local competitors on Google and get cited by AI engines. We implement rich JSON-LD schemas and perfectly structured meta-tags.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">HIPAA-Compliant Forms</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Standard web forms put you at legal risk. We build secure, encrypted lead-capture pipelines that safely route patient data.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <LayoutDashboard className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Flawless Mobile UX</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Over 70% of clinical searches happen on mobile devices. We design mobile-first, ensuring smooth scrolling and easy tap-to-call functionality.
              </p>
            </div>

            <div className="md:col-span-2 bg-brand-900 p-8 rounded-3xl border border-brand-800 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-700/40 via-brand-900 to-gray-900 pointer-events-none" />
              <div className="relative z-10">
                <Code2 className="w-10 h-10 text-brand-300 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Seamless AI Integration</h3>
                <p className="text-brand-100 leading-relaxed max-w-lg mb-6">
                  Every website we build comes natively prepared for PyrexxAI integration. From intelligent web-chat lead qualification to direct EMR booking portals, your site becomes a living extension of your front desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}