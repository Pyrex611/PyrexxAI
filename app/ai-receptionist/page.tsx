import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { CalendarCheck, Clock, Layers, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Receptionist for Medical Clinics",
  description: "Deploy a custom AI voice receptionist that integrates directly with your clinical EMR. Answer every call 24/7, book appointments automatically, and eliminate missed patient revenue.",
  alternates: {
    canonical: "https://pyrexxai.com/ai-receptionist",
  },
};

export default function AIReceptionistPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 selection:bg-brand-100 dark:selection:bg-brand-900/50 selection:text-brand-900 dark:selection:text-brand-100 transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          The World's Most Advanced <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
            AI Voice Receptionist
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Stop losing patients to voicemail. PyrexxAI provides a lifelike, HIPAA-compliant voice agent that handles 100% of your inbound call volume, books appointments directly into your EMR, and answers complex patient FAQs in real-time.
        </p>

        <div className="bg-brand-50/50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-800 rounded-2xl p-6 lg:p-8 text-left max-w-4xl mx-auto shadow-sm">
          <p className="text-sm font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider mb-2">
            What is a PyrexxAI Receptionist?
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            PyrexxAI is an enterprise-grade AI voice agent custom-engineered for MedSpas, Dental Clinics, and Therapy Practices. It utilizes advanced Natural Language Processing (NLP) to converse seamlessly with patients, verify pricing and procedures, and write scheduled appointments directly into clinical management systems like Jane, Boulevard, and Mindbody without human intervention.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                How does PyrexxAI integrate with your EMR?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Unlike DIY AI builders that rely on fragile webhooks, PyrexxAI builds native API bridges to your existing Electronic Medical Record (EMR) or booking software. The AI reads your real-time availability calendar, offers open slots to the patient over the phone, and instantly writes the confirmed appointment into your system.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CalendarCheck className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Real-Time Schedule Sync</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Zero double-bookings. The AI reads live practitioner availability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Instant Rescheduling</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Patients can call after hours to adjust or move appointments, freeing up front-desk bandwidth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Layers className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Service-Specific Routing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The AI intelligently books distinct durations based on the procedure (e.g., Botox vs. New Patient Consultation).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Patient</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    "Hi, I need to book a follow-up for my dermal fillers next Tuesday."
                  </p>
                </div>
                <div className="bg-brand-50 dark:bg-brand-900/20 rounded-xl p-4 border border-brand-100 dark:border-brand-800/50 ml-6">
                  <p className="text-xs text-brand-600 dark:text-brand-400 mb-1">PyrexxAI</p>
                  <p className="text-sm font-medium text-brand-900 dark:text-brand-100">
                    "I'd be happy to help with that. Dr. Smith has an opening at 10:00 AM or 2:30 PM next Tuesday. Which works better for you?"
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm bg-emerald-50 dark:bg-emerald-900/20 px-4 py-3 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Appointment written to EMR</span>
                </div>
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