import React from "react";
import { ShieldCheck, Lock, CheckCircle2, Settings } from "lucide-react";

export default function TrustHIPAA() {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-800 via-brand-900 to-gray-900 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
            Built for Healthcare. Compliant by Design.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <Lock className="w-8 h-8 text-brand-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">HIPAA Compliant Architecture</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              End-to-end encryption in transit (TLS 1.3) and at rest (AES-256). Zero Protected Health Information (PHI) is ever used to train public AI models.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <CheckCircle2 className="w-8 h-8 text-brand-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Business Associate Agreement</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide a signed BAA as a standard legal guarantee before launch, ensuring your practice maintains full HIPAA/HITECH compliance.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <Settings className="w-8 h-8 text-brand-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Voice AI You Control</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your agent, your voice, your custom protocols. You maintain full visibility into every call transcript and booking via your secure dashboard.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-emerald-500 pl-6 py-2">
            <p className="text-xl lg:text-2xl font-medium text-gray-300 italic mb-4">
              "In 2024, 725 large healthcare data breaches exposed PHI for 276 million Americans. We built PyrexxAI so your clinic isn't next."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}