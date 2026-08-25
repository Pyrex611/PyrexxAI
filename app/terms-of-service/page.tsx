import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | PyrexxAI",
  description: "Terms of service, pricing schedules, healthcare compliance responsibilities, and acceptable use policies for PyrexxAI.",
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

        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500 mb-2 uppercase tracking-wide">
            Legally Binding Agreement
          </h3>
          <p className="text-amber-900/80 dark:text-amber-200/80 text-sm leading-relaxed">
            By accessing https://pyrexxai.com, scheduling a demo, or executing a Statement of Work (SOW), you agree to these Terms of Service. Clients with executed Master Service Agreements (MSA) and Business Associate Agreements (BAA) are also governed by those specific agreements.
          </p>
        </div>

        {/* 1. ACCEPTANCE OF TERMS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          1. ACCEPTANCE OF TERMS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          By accessing the Site or utilizing PyrexxAI voice intake agents, you ('Client' or 'User') agree to be bound by these Terms. If you are entering into these Terms on behalf of a clinic or entity, you warrant that you possess the legal authority to bind that entity.
        </p>

        {/* 2. DESCRIPTION OF SERVICES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          2. DESCRIPTION OF SERVICES
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          PyrexxAI provides enterprise artificial intelligence solutions for medical clinics, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li><strong>AI Voice Receptionist Implementation:</strong> Custom training and scripting of voice agents tailored to clinical intake protocols;</li>
          <li><strong>24/7 Inbound Call Handling:</strong> Automated phone triage, FAQ resolution, and appointment scheduling;</li>
          <li><strong>EMR API Integration:</strong> Direct read/write synchronization with Jane App, Boulevard, Mindbody, and supported EHRs;</li>
          <li><strong>Platform Management:</strong> Weekly logic updates, monitoring, and HIPAA-compliant audit trails.</li>
        </ul>

        {/* 3. ELIGIBILITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          3. ELIGIBILITY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Our services are intended exclusively for commercial healthcare operators, medical spas, and dental clinics. Users must be at least 18 years of age and legally authorized to conduct business.
        </p>

        {/* 4. ACCOUNTS & CREDENTIAL SECURITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          4. ACCOUNTS & CREDENTIAL SECURITY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Clients are responsible for maintaining the confidentiality of any EMR API keys, phone SIP credentials, and dashboard access tokens provided to PyrexxAI. Promptly report any compromised credentials to hello@pyrexxai.com.
        </p>

        {/* 5. CALL RECORDING & CONSENT DISCLOSURES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          5. CALL RECORDING & CONSENT DISCLOSURES
        </h2>
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/50 rounded-2xl p-6 mb-6">
          <h4 className="text-sm font-bold text-red-800 dark:text-red-500 mb-2 uppercase tracking-wide">
            Client Responsibility: Recording Disclosures
          </h4>
          <p className="text-red-900/80 dark:text-red-200/80 text-sm leading-relaxed">
            Client is solely responsible for ensuring that all legally required call recording disclosures and consent notifications are provided to callers prior to recording or transcription, including compliance with state two-party consent laws (e.g., California, Florida, Illinois).
          </p>
        </div>

        {/* 6. HEALTHCARE & AI DISCLOSURES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          6. HEALTHCARE & AI DISCLOSURES
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          The AI voice agent is a tool for patient intake and administrative scheduling only:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-600 dark:text-gray-400 mb-6">
          <li><strong>Not Medical Advice:</strong> The agent does not provide medical diagnosis, clinical treatment plans, or emergency triage;</li>
          <li><strong>Caller AI Transparency:</strong> Voice agents include standard disclosures informing callers they are speaking with an artificial intelligence assistant;</li>
          <li><strong>Emergency Escalation:</strong> Client must configure emergency bypass routing to direct acute callers to 911 or on-call clinical staff.</li>
        </ul>

        {/* 7. INTELLECTUAL PROPERTY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          7. INTELLECTUAL PROPERTY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI retains all proprietary rights in its core voice engine, scheduling workflows, and software infrastructure. Client retains full ownership of their patient health data, booking records, and clinical trademarks.
        </p>

        {/* 8. STANDARD PRICING & FEES */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          8. STANDARD PRICING & FEES
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Service</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Fee Amount</th>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Billing Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-medium">Implementation & Logic Setup</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-bold">$1,500.00 (one-time)</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Due upon SOW kickoff</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-medium">Monthly Platform Management</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 font-bold">$1,000.00 / month</td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">Monthly recurring on launch date</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 9. TERM & TERMINATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          9. TERM & TERMINATION
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Subscriptions operate on a month-to-month basis unless otherwise specified in your SOW. You may cancel service with thirty (30) days' written notice to legal@pyrexxai.com. Upon termination, data destruction proceeds under the terms of the BAA.
        </p>

        {/* 10. DISCLAIMERS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          10. DISCLAIMERS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          THE SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT EXPRESS OR IMPLIED WARRANTIES OF ANY KIND. PYREXXAI DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
        </p>

        {/* 11. LIMITATION OF LIABILITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          11. LIMITATION OF LIABILITY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 uppercase">
          PYREXXAI'S TOTAL AGGREGATE LIABILITY FOR CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE TOTAL FEES PAID BY CLIENT IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM. FOR BAA-RELATED PHI INCIDENTS CAUSED BY PYREXXAI GROSS NEGLIGENCE, THE CAP EQUALS TWELVE (12) MONTHS OF FEES.
        </p>

        {/* 12. INDEMNIFICATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          12. INDEMNIFICATION
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Client agrees to indemnify and hold harmless PyrexxAI from third-party claims arising from Client's clinical operations, failure to provide compliant call recording disclosures, or use outside the scope of the executed SOW.
        </p>

        {/* 13. GOVERNING LAW & ARBITRATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          13. GOVERNING LAW & ARBITRATION
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          These Terms are governed by the laws of the State of Delaware. Any dispute not resolved through informal negotiations within 15 days shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in New Castle County, Delaware.
        </p>

        {/* 14. THIRD-PARTY PLATFORMS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          14. THIRD-PARTY PLATFORMS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI interfaces with third-party EMRs (Jane, Boulevard, Mindbody). We are not responsible for outages, rate limits, or schema changes made by third-party EMR software providers.
        </p>

        {/* 15. FORCE MAJEURE */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          15. FORCE MAJEURE
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          Neither party shall be liable for delays resulting from acts of God, telecommunications outages, or third-party infrastructure failures beyond reasonable control.
        </p>

        {/* 16. AI ACCURACY & HUMAN OVERSIGHT */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          16. AI ACCURACY & HUMAN OVERSIGHT
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          While PyrexxAI agents operate with high transcription fidelity, ambient phone noise and accents may affect comprehension. Clinical staff are responsible for reviewing intake transcripts prior to administering treatments.
        </p>

        {/* 17. PUBLICITY */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          17. PUBLICITY
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI may identify Client as a customer in marketing materials. Client may revoke this authorization at any time by emailing marketing@pyrexxai.com.
        </p>

        {/* 18. GENERAL PROVISIONS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          18. GENERAL PROVISIONS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          If any provision of these Terms is deemed unenforceable, the remaining terms shall continue in full force. In the event of a direct conflict between these Terms and an executed MSA/BAA, the MSA/BAA governs.
        </p>

        {/* 19. CHANGES TO TERMS */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          19. CHANGES TO TERMS
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
          PyrexxAI may revise these Terms from time to time. Continued use of the service following posted notice constitutes acceptance of revisions.
        </p>

        {/* 20. CONTACT INFORMATION */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          20. CONTACT INFORMATION
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 w-1/3">Legal Notices</th>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"><a href="mailto:legal@pyrexxai.com" className="text-brand-600 dark:text-brand-400 hover:underline">legal@pyrexxai.com</a></td>
              </tr>
              <tr>
                <th className="bg-gray-100 dark:bg-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800">Support</th>
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