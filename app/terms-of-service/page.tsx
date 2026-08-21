import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | PyrexxAI",
  description: "Terms of service, pricing schedules, and acceptable use policies for PyrexxAI.",
  alternates: {
    canonical: "https://pyrexxai.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-base text-brand-600 dark:text-brand-400 font-medium">pyrexxai.com</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last Updated: August 20, 2026 | Effective: August 20, 2026
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          1. STANDARD PRICING & RETAINER TERMS
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Service Component</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Standard Amount</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Billing Cadence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-medium">Implementation & Logic Training</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-bold">$1,500.00</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">One-time upon SOW execution</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-medium">Monthly Platform Management</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-bold">$1,000.00 / month</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Monthly recurring starting on system launch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
}