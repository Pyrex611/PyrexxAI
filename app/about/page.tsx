import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | The Team Behind PyrexxAI",
  description: "Learn why PyrexxAI was founded. We are a technical partner dedicated to bringing enterprise-grade voice AI and EMR integration to medical clinics.",
  alternates: {
    canonical: "https://pyrexxai.com/about",
  },
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Clifford Bulya",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "PyrexxAI",
    },
    url: "https://pyrexxai.com/about",
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          Bridging the Gap Between <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
            Healthcare and Intelligence.
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          PyrexxAI was founded with a singular mission: to eliminate the operational bottlenecks that prevent medical practices from scaling. We believe that no patient seeking care should ever be sent to voicemail.
        </p>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-950 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Technical Philosophy</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              The healthcare industry has been historically underserved by modern technology. While other sectors adopted seamless automation, medical clinics were left with disjointed EMR systems, expensive after-hours answering services, and overwhelmed front-desk staff.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We built PyrexxAI not as a DIY software tool, but as a dedicated technical partner. When you partner with us, we map your exact clinical workflows, custom-train conversational language models on your procedures, and build secure, HIPAA-compliant API bridges directly into your scheduling software.
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}