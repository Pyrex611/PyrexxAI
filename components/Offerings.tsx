"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PhoneCall, MessageSquare, CheckCircle2, TrendingUp, Smartphone } from "lucide-react";
import { getFadeUpVariants } from "@/lib/utils";

export default function Offerings() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">The Complete AI Front Desk</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We deploy intelligent agents that handle your highest friction tasks, allowing your staff to focus entirely on the patients in front of them.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group relative p-8 lg:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-card-hover dark:hover:shadow-none transition-all duration-300 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-50 dark:bg-brand-900/10 rounded-full blur-3xl -z-10 transition-colors" />
            
            {/* Animated Floating Inner Card */}
            <motion.div 
              animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 w-fit shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="flex items-end space-x-1 h-5 text-brand-600 dark:text-brand-400">
                  <span className="wave-bar h-2"></span><span className="wave-bar h-4"></span><span className="wave-bar h-5"></span><span className="wave-bar h-3"></span>
                </div>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Voice Agent</span>
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI Receptionist</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              A lifelike voice AI that answers every call, 24/7. It books appointments directly into your EMR, answers FAQs, and recovers missed calls instantly.
            </p>
            <ul className="space-y-4 mb-8">
              {['24/7 Inbound Call Handling', 'Direct EMR/EHR Booking Integration', 'Missed-Call Text-Back in 60s', 'Custom Voice & Personality Training'].map((feature, i) => (
                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 font-medium"><CheckCircle2 className="w-5 h-5 text-brand-500 dark:text-brand-400 mr-3 mt-0.5 flex-shrink-0" /> {feature}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm font-semibold text-brand-700 dark:text-brand-400"><TrendingUp className="w-4 h-4 inline mr-1" /> Average practice captures 38% more bookings in month 1.</p>
            </div>
          </motion.div>

          <motion.div whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group relative p-8 lg:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-card-hover dark:hover:shadow-none transition-all duration-300 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-50 dark:bg-accent-900/10 rounded-full blur-3xl -z-10 transition-colors" />
            
            {/* Animated Floating Inner Card */}
            <motion.div 
              animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 w-fit shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center text-accent-600 dark:text-accent-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-xs px-3 py-1.5 rounded-r-xl rounded-bl-xl shadow-sm">
                  What's the price for Botox?
                </div>
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">AI Lead Intake Specialist</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              Instantly responds to website inquiries, SMS, and DMs. Qualifies leads, answers pricing questions, and funnels high-intent prospects to booking.
            </p>
            <ul className="space-y-4 mb-8">
              {['Sub-60s Response on Web & SMS', 'Smart Lead Qualification & Scoring', 'Auto-Routing to Booking', 'Conversion-Optimized Scripts'].map((feature, i) => (
                <li key={i} className="flex items-start text-gray-700 dark:text-gray-300 font-medium"><CheckCircle2 className="w-5 h-5 text-accent-500 dark:text-accent-400 mr-3 mt-0.5 flex-shrink-0" /> {feature}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm font-semibold text-accent-700 dark:text-accent-400"><Smartphone className="w-4 h-4 inline mr-1" /> 64% of leads call the next clinic if you don't respond. We fix that.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}