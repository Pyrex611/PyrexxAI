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
            PyrexxAI builds AI voice receptionists for healthcare businesses. This policy explains what information we collect on our website and through our services, how we use it, who we share it with, and your rights over it. We take privacy seriously, especially because our clients serve patients. We do not sell your data. Ever.
          </p>
        </div>

        {/* 1. WHO WE ARE */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          1. WHO WE ARE
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI ('we', 'our', 'us') is an AI software and services company that provisions custom-tuned voice agents for healthcare businesses, specializing in medical spas (medspas), dental practices, and therapy clinics. Our registered details and primary contact channels are listed below.
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
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Privacy Inquiries</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:privacy@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">privacy@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">General Support</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:hello@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">hello@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Governing Law</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">State of Delaware, USA</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. INFORMATION WE COLLECT */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          2. INFORMATION WE COLLECT
        </h2>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.1 Information You Give Us Directly</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When you visit our website, fill out a contact form, schedule a discovery call, or communicate with our team, we may collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li>Full name, business name, job title, and work email address;</li>
          <li>Phone number and clinic physical address;</li>
          <li>Clinical infrastructure details (e.g., EMR used, monthly inbound call volume);</li>
          <li>Any information voluntarily included in contact inquiries or discovery calls.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.2 Information We Collect Automatically</h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          When you browse https://pyrexxai.com, our server logs and analytics tools collect technical information including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li>IP address and approximate geographic location (city/region level);</li>
          <li>Browser type, operating system, device viewport dimensions;</li>
          <li>Pages visited, time spent on pages, and referring URL paths.</li>
        </ul>

        <h3 className="text-xl font-semibold text-brand-700 dark:text-brand-400 mt-8 mb-4">2.3 Patient and Caller Data (Service Data)</h3>
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 mb-6">
          <h4 className="text-sm font-bold text-red-800 dark:text-red-500 mb-2 uppercase tracking-wide">
            HIPAA-Protected Information & BAA Scope
          </h4>
          <p className="text-red-900/80 dark:text-red-200/80 text-sm leading-relaxed">
            Patient and caller data processed through our AI voice agent service constitutes Protected Health Information (PHI) under HIPAA. This data is handled under a separate, legally binding Business Associate Agreement (BAA) executed with each healthcare client. PyrexxAI functions as a Business Associate, not a Covered Entity.
          </p>
        </div>

        {/* 3. HOW WE USE YOUR INFORMATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          3. HOW WE USE YOUR INFORMATION
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-brand-50 dark:bg-brand-900/20 px-4 py-3 text-sm font-semibold text-brand-900 dark:text-brand-100 border border-brand-200 dark:border-brand-800">Purpose</th>
                <th className="bg-brand-50 dark:bg-brand-900/20 px-4 py-3 text-sm font-semibold text-brand-900 dark:text-brand-100 border border-brand-200 dark:border-brand-800">Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Responding to discovery call bookings & inquiries</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest / Pre-contractual steps</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Deploying and configuring AI voice agents for clients</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Performance of contract</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Processing platform retainers and billing</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Performance of contract / Legal obligation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Complying with HIPAA security and breach notification rules</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legal & BAA obligation</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. SUB-PROCESSORS & SERVICE PROVIDERS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          4. SUB-PROCESSORS & SERVICE PROVIDERS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          We engage trusted third-party providers with signed Data Processing Agreements and BAA commitments to deliver enterprise services:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Provider</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Function</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Data Handled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Supabase Inc.</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Encrypted lead persistence & audit logs</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Lead submissions, booking metadata</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Cal.com Inc.</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Discovery call scheduling API</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Name, email, selected time slots</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Resend Inc.</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Transactional email notifications</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Contact form email dispatch</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. ZERO TRAINING ON PHI */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          5. ZERO AI MODEL TRAINING ON PATIENT DATA
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI strictly enforces isolated, non-training API connections with all LLM and voice infrastructure providers. Individual patient health information, intake transcripts, and phone audio are <strong>never</strong> used to train, fine-tune, or improve any public foundation AI model.
        </p>

        {/* 6. DATA RETENTION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          6. DATA RETENTION
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We retain personal and clinical service data strictly for as long as necessary to perform our contractual and legal obligations:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Data Category</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Retention Period</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Clinical Service Data (Call Logs/Transcripts)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-semibold">90 days post-contract termination</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">BAA / DPA requirements</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Client Billing & Contract Records</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">7 years from invoice date</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Tax & legal compliance</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Website Inquiries & Demo Submissions</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">3 years from last interaction</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Legitimate interest</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 7. COOKIES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          7. COOKIES & TRACKING
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We use strictly necessary session cookies to maintain application state and privacy preferences, along with first-party analytics cookies to measure aggregated performance. You may decline non-essential cookies at any time via our Cookie Preferences banner.
        </p>

        {/* 8. YOUR PRIVACY RIGHTS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          8. YOUR PRIVACY RIGHTS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          You have the right to request access to, correction of, or deletion of personal data held about you by contacting privacy@pyrexxai.com. We respond to verified consumer requests within thirty (30) calendar days.
        </p>

        {/* 9. DATA SECURITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          9. DATA SECURITY & ENCRYPTION
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          All data processed by PyrexxAI is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We implement Role-Based Access Control (RBAC), multi-factor authentication, and automated audit trails.
        </p>

        {/* 10. CHILDREN'S PRIVACY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          10. CHILDREN'S PRIVACY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our services are intended exclusively for healthcare business operators and are not directed to minors under the age of 18.
        </p>

        {/* 11. INTERNATIONAL DATA TRANSFERS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          11. INTERNATIONAL DATA TRANSFERS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI operates primarily within the United States. Where cross-border data transfers occur, we implement Standard Contractual Clauses (SCCs) to ensure equivalent data protection.
        </p>

        {/* 12. THIRD-PARTY LINKS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          12. THIRD-PARTY LINKS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our website may contain links to external partner tools. We encourage you to review their independent privacy policies before submitting data.
        </p>

        {/* 13. CHANGES TO THIS POLICY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          13. CHANGES TO THIS POLICY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          We may update this Privacy Policy periodically. Significant changes affecting active clients will be communicated via email at least 14 days prior to taking effect.
        </p>

        {/* 14. CONTACT US */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          14. CONTACT US
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          For legal, privacy, or BAA compliance inquiries:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 w-1/3">Privacy Email</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:privacy@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">privacy@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Support Email</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:hello@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">hello@pyrexxai.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </main>
  );
}