import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Script from "next/script";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

type IntegrationDetail = {
  slug: string;
  name: string;
  category: string;
  emrName: string;
  description: string;
  heroHeadline: string;
  benefits: string[];
  features: { title: string; desc: string }[];
};

const INTEGRATION_DATA: Record<string, IntegrationDetail> = {
  "jane-app-medspa": {
    slug: "jane-app-medspa",
    name: "Jane App AI Receptionist for MedSpas",
    category: "Medical Spa / Aesthetics",
    emrName: "Jane App",
    heroHeadline: "Seamless Jane App EMR Voice Automation for MedSpas",
    description: "Connect PyrexxAI natively to your Jane App calendar. Our custom voice receptionist handles 100% of inbound phone calls, checks practitioner openings in real-time, and writes Botox & dermal filler bookings directly into your schedule.",
    benefits: [
      "Zero double bookings: Reads live Jane App availability.",
      "Custom service treatment duration routing.",
      "Instant patient SMS text-back on missed calls.",
      "Signed HIPAA Business Associate Agreement (BAA) included.",
    ],
    features: [
      { title: "Real-Time Jane App API Sync", desc: "Instantly creates or updates patient appointment profiles without manual front-desk entry." },
      { title: "Treatment FAQ & Pricing Agent", desc: "Answers precise patient questions regarding Botox units, syringe pricing, and pre-care guidelines." },
      { title: "24/7 After-Hours Intake", desc: "Captures evening and weekend calls when your clinic is closed, driving up monthly client retention." },
    ],
  },
  "boulevard-aesthetics": {
    slug: "boulevard-aesthetics",
    name: "Boulevard EMR AI Receptionist for Aesthetic Clinics",
    category: "Aesthetic Surgery & Clinics",
    emrName: "Boulevard",
    heroHeadline: "Enterprise Boulevard Integration for High-Volume Aesthetic Clinics",
    description: "Automate your front desk with a lifelike AI receptionist designed specifically for Boulevard EMR users. Elevate client experience and increase lifetime revenue.",
    benefits: [
      "Direct Boulevard calendar & client management sync.",
      "Automated deposit payment reminder workflows.",
      "Custom voice training tailored to luxury aesthetics.",
      "Full HIPAA compliance and encrypted PHI transmission.",
    ],
    features: [
      { title: "Boulevard Schedule Optimization", desc: "Intelligently fills practitioner schedule gaps to maximize clinic hourly revenue." },
      { title: "Pre-Treatment Consultation Screening", desc: "Qualifies high-intent cosmetic leads before placing them directly into your calendar." },
      { title: "Multi-Location Support", desc: "Routes inbound calls seamlessly across multiple aesthetic clinic locations." },
    ],
  },
  "mindbody-dental": {
    slug: "mindbody-dental",
    name: "Mindbody AI Voice Agent for Dental & Wellness Practices",
    category: "Dental & Wellness Practices",
    emrName: "Mindbody",
    heroHeadline: "Eliminate Unanswered Dental Calls with Mindbody AI Voice Automation",
    description: "Never send a dental emergency or teeth whitening lead to voicemail again. PyrexxAI connects directly into Mindbody to schedule patient visits 24/7.",
    benefits: [
      "24/7 emergency triage call routing.",
      "Automated cleaning & checkup reactivation.",
      "Mindbody appointment availability read & write API bridge.",
      "Sub-second AI response voice engine.",
    ],
    features: [
      { title: "Dental Emergency Triage", desc: "Differentiates routine checkups from urgent toothache calls and alerts on-call dentists immediately." },
      { title: "Mindbody Schedule Maintenance", desc: "Allows callers to re-book or move hygiene appointments effortlessly without calling back during business hours." },
      { title: "Patient Contact Sync", desc: "Verifies patient insurance coverage and personal details before finalizing booking." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(INTEGRATION_DATA).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = INTEGRATION_DATA[params.slug];
  if (!data) return {};

  return {
    title: `${data.name} | PyrexxAI`,
    description: data.description,
    alternates: {
      canonical: `https://pyrexxai.com/integrations/${data.slug}`,
    },
    openGraph: {
      title: `${data.name} | PyrexxAI`,
      description: data.description,
      images: [`https://pyrexxai.com/api/og?title=${encodeURIComponent(data.name)}`],
    },
  };
}

export default function IntegrationPSEOPage({ params }: { params: { slug: string } }) {
  const data = INTEGRATION_DATA[params.slug];
  if (!data) notFound();

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `PyrexxAI ${data.emrName} Integration`,
    operatingSystem: "Cloud / Web",
    applicationCategory: "HealthApplication",
    description: data.description,
    offers: {
      "@type": "Offer",
      price: "1500.00",
      priceCurrency: "USD",
    },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />
      <Script
        id="pSEO-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 px-4 py-2 rounded-full text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-8">
          <Zap className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          <span>{data.emrName} Native Integration</span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          {data.heroHeadline}
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CAL_LINK}
            className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-bold shadow-cta transition-all flex items-center justify-center gap-2"
          >
            Deploy For {data.emrName} <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Why {data.category} Choose PyrexxAI for {data.emrName}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-brand-600 dark:text-brand-400">
                Core Integration Advantages
              </h3>
              <ul className="space-y-4">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm font-medium text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-900 text-white p-8 rounded-3xl border border-brand-800 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">100% HIPAA-Compliant Architecture</h3>
                <p className="text-brand-100 text-sm leading-relaxed mb-6">
                  Every interaction processed through our {data.emrName} API connection is fully encrypted at rest and in transit. We sign a Business Associate Agreement (BAA) before launch.
                </p>
              </div>
              <div className="bg-brand-800/60 p-4 rounded-2xl border border-brand-700/50">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Standard Launch SLA</span>
                <p className="text-lg font-bold text-white mt-1">Live in 14 Days Guaranteed</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.features.map((feat, i) => (
              <div key={i} className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">{feat.title}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}