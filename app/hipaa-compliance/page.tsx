import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, FileText, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "HIPAA Compliant AI Receptionist | Data Security",
  description: "PyrexxAI maintains strict HIPAA compliance. We provide Business Associate Agreements (BAA), end-to-end encryption, and secure data handling for medical clinics.",
  alternates: {
    canonical: "https://pyrexxai.com/hipaa-compliance",
  },
};

export default function HIPAACompliancePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 selection:bg-brand-100 dark:selection:bg-brand-900/50 selection:text-brand-900 dark:selection:text-brand-100 transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Uncompromising Data Security & HIPAA Compliance
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          At PyrexxAI, we understand that protecting Patient Health Information (PHI) is the foundation of your clinical practice. Our entire artificial intelligence architecture has been engineered from the ground up to exceed the stringent requirements of the Health Insurance Portability and Accountability Act (HIPAA).
        </p>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <FileText className="w-8 h-8 text-brand-600 dark:text-brand-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Business Associate Agreements (BAA)</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              We enter into formal, legally binding Business Associate Agreements with all our healthcare clients. This guarantees that PyrexxAI assumes strict legal liability for the safeguarding of any PHI processed through our voice or text intake agents.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <Lock className="w-8 h-8 text-brand-600 dark:text-brand-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              All voice data, text transcripts, and booking information processed by our AI is encrypted both in transit (using TLS 1.3) and at rest (using AES-256). Data is securely routed directly into your EMR without lingering in vulnerable third-party databases.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <Server className="w-8 h-8 text-brand-600 dark:text-brand-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Zero AI Model Training on PHI</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              We strictly enforce isolated LLM environments. None of your patients' sensitive data or conversational transcripts are ever utilized to train public foundation models. Your clinic's data remains entirely proprietary and siloed.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-brand-600 dark:text-brand-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Access Controls & Auditing</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Your PyrexxAI dashboard includes granular Role-Based Access Control (RBAC). Furthermore, every interaction, system change, and data retrieval is meticulously logged, ensuring full audit readiness for compliance officers.
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}