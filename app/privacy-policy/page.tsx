import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | PyrexxAI",
  description: "PyrexxAI's website privacy policy, HIPAA Business Associate commitments, and clinical data protection practices.",
  alternates: {
    canonical: "https://pyrexxai.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-brand-600 dark:text-brand-400 font-medium">pyrexxai.com</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: August 20, 2026 | Effective: August 20, 2026
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-500 mb-2 uppercase tracking-wide">
            Plain-English Summary
          </h3>
          <p className="text-emerald-900/80 dark:text-emerald-200/80 text-sm leading-relaxed">
            PyrexxAI builds AI voice receptionists for healthcare businesses. This policy explains what information we collect, how we protect it under HIPAA, who we share it with, and your rights over it. We never sell your data, and we never train public foundation AI models on patient health information.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          1. WHO WE ARE
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI ('we', 'our', 'us') is an AI software and services company providing custom-tuned voice agents for healthcare businesses, specializing in medical spas, dental practices, and therapy clinics.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 w-1/3">Company Name</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">PyrexxAI</td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Canonical Website</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="https://pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">https://pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Privacy Contact</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:privacy@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">privacy@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Governing Law</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">State of Delaware, USA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          2. HIPAA & PATIENT HEALTH INFORMATION (PHI)
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When providing voice agent services to healthcare clients, PyrexxAI functions as a **HIPAA Business Associate**. Our processing is governed by the executed Business Associate Agreement (BAA) with each client:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li><strong>Zero Foundation Model Training:</strong> Individual patient PHI is never used to train, fine-tune, or improve any public foundation AI model.</li>
          <li><strong>Encryption Standards:</strong> All voice streams, booking payloads, and transcripts are encrypted in transit via TLS 1.3 and at rest via AES-256.</li>
          <li><strong>BAA Retention Alignment:</strong> Call logs and appointment records are retained strictly per the client's documented BAA lifecycle (standard 90-day retention post-termination).</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}