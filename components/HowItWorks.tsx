"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { getFadeUpVariants } from "@/lib/utils";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);

  const steps =[
    { num: "01", title: "Operational Audit", desc: "We map your current phone, booking, and lead workflows to identify structural leaks." },
    { num: "02", title: "Custom Training", desc: "We build and train your AI agent on your clinic's exact services, FAQs, and brand tone." },
    { num: "03", title: "EMR Integration", desc: "We connect your AI agent securely to your phone system and EMR system — zero downtime." },
    { num: "04", title: "Optimize & Retrain", desc: "Your agent goes live. We evaluate performance and upgrade system logic weekly." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Effortless Implementation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">From kickoff to live AI receptionist in under 14 days.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative mb-16">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-gray-800 -z-10" />
          {steps.map((step, i) => (
            <motion.div key={i} whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative bg-white dark:bg-gray-950 md:bg-transparent md:dark:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm dark:shadow-none md:shadow-none border dark:border-gray-800 md:border-none border-gray-100">
              <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-brand-100 dark:border-brand-900/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-brand-600 dark:text-brand-400 mb-6 shadow-sm mx-auto md:mx-0 transition-colors">
                {step.num}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center md:text-left">{step.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-center md:text-left leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Database Reactivation Column */}
        <motion.div 
          whileInView="visible" 
          initial="hidden" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp} 
          className="bg-brand-600/5 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900/50 rounded-3xl p-8 max-w-4xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-2xl text-brand-600 dark:text-brand-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest bg-brand-100/50 dark:bg-brand-900/40 px-3 py-1 rounded-full">Optional Free Growth Campaign</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-2">Commission-Based Database Reactivation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Tapping your dormant list is the fastest way to generate bookings instantly. We configure your AI platform to reach out to old patients on a 100% risk-free commission basis. We only get paid when patients successfully book and show up for their appointments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Low-Friction Account Creation CTA */}
        <div className="text-center">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
          >
            Create Your Demo Account <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">No credit card required. Explore custom setup features instantly.</p>
        </div>

      </div>
    </section>
  );
}