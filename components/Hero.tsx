"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, PhoneCall, CalendarCheck, Clock, Activity, Users, Shield, Server, ArrowRight, BarChart3 } from "lucide-react";
import { CAL_LINK, getFadeUpVariants, getStaggerContainer } from "@/lib/utils";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);
  const stagger = getStaggerContainer(prefersReducedMotion);
  const [activeDemoTab, setActiveDemoTab] = useState<'live-call' | 'emr-sync' | 'metrics'>('live-call');

  return (
    <section className="relative pt-32 pb-16 overflow-hidden dark:bg-gray-950 transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 dark:bg-brand-900/20 blur-[100px] rounded-full" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[300px] bg-accent-50/40 dark:bg-accent-900/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto space-y-8 mb-12">
          
          <motion.h1 variants={fadeUp} className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Your Clinic's Front Desk.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
              Reimagined with AI.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            38% of patient calls go unanswered. PyrexxAI deploys custom voice AI that answers every call 24/7, books directly into your schedule, and qualifies every lead.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950">
              Book a Free Demo &rarr;
            </a>
            <Link href="/#how-it-works" className="w-full sm:w-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950">
              See How It Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Pill Menu Header (Moved below CTAs) */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8 bg-gray-100/80 dark:bg-gray-900/50 p-1.5 rounded-full w-fit mx-auto border border-gray-200/50 dark:border-gray-800/80 shadow-inner"
        >
          <Link 
            href="/hipaa-compliance" 
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-sm hover:bg-brand-700 transition-colors flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5" /> HIPAA Compliant
          </Link>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" /> Live in 14 Days
          </span>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" /> 99.9% Uptime
          </span>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" /> 24/7 Coverage
          </span>
        </motion.div>

        {/* Interactive Dashboard Representation */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-3xl border border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl shadow-[0_25px_60px_rgba(37,99,235,0.08)] overflow-hidden text-left flex flex-col">
            
            {/* macOS Style Window Header */}
            <div className="bg-gray-100/50 dark:bg-gray-800/30 border-b border-gray-200/50 dark:border-gray-800/50 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="mx-auto text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider">PYREXXAI COMMAND CENTER</div>
            </div>

            <div className="flex flex-col md:flex-row p-4 gap-6">
              {/* Mini Sidebar */}
              <div className="flex md:flex-col gap-2 overflow-x-auto w-full md:w-48 shrink-0 pb-2 md:pb-0 scrollbar-hide">
                <button 
                  onClick={() => setActiveDemoTab('live-call')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${activeDemoTab === 'live-call' ? 'bg-brand-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
                >
                  <PhoneCall className="w-4 h-4" /> Live Call Agent
                </button>
                <button 
                  onClick={() => setActiveDemoTab('emr-sync')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${activeDemoTab === 'emr-sync' ? 'bg-brand-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
                >
                  <CalendarCheck className="w-4 h-4" /> EMR Integration
                </button>
                <button 
                  onClick={() => setActiveDemoTab('metrics')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${activeDemoTab === 'metrics' ? 'bg-brand-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'}`}
                >
                  <BarChart3 className="w-4 h-4" /> Performance
                </button>
              </div>

              {/* Dynamic Content Area */}
              <div className="flex-1 bg-white dark:bg-[#0A0B0D] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden min-h-[320px] relative">
                <AnimatePresence mode="wait">
                  
                  {activeDemoTab === 'live-call' && (
                    <motion.div 
                      key="live-call"
                      initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}
                      className="p-6 h-full flex flex-col justify-center"
                    >
                      <div className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 mb-6">
                        <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center shrink-0">
                          <PhoneCall className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wider mb-1">Inbound Call Active</p>
                          <div className="flex items-end space-x-1 h-6 text-brand-600 dark:text-brand-400">
                            <span className="wave-bar"></span><span className="wave-bar"></span><span className="wave-bar"></span>
                            <span className="wave-bar"></span><span className="wave-bar"></span><span className="wave-bar"></span>
                            <span className="wave-bar"></span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">00:23</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-brand-50/50 dark:bg-brand-900/20 p-4 rounded-2xl rounded-tl-none border border-brand-100 dark:border-brand-800/50 w-4/5">
                          <p className="text-xs font-bold text-brand-600 dark:text-brand-400 mb-1">PyrexxAI</p>
                          <p className="text-sm text-gray-800 dark:text-gray-200">Hello! Thank you for calling Luxe Aesthetics. How can I help you today?</p>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tr-none border border-gray-200 dark:border-gray-700 w-4/5 ml-auto text-right">
                          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">Patient</p>
                          <p className="text-sm text-gray-800 dark:text-gray-200">Hi, I'd like to book a consultation with Dr. Jenkins next Wednesday.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeDemoTab === 'emr-sync' && (
                    <motion.div 
                      key="emr-sync"
                      initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}
                      className="p-6 h-full flex flex-col justify-center items-center"
                    >
                      <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full flex items-center shadow-sm border border-emerald-200 dark:border-emerald-700/50">
                          <CheckCircle2 className="w-4 h-4 mr-1.5" /> Booked by AI Agent
                        </div>
                        <div className="flex items-start space-x-4 mt-4">
                          <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/30 rounded-xl flex items-center justify-center shrink-0">
                            <CalendarCheck className="text-brand-600 dark:text-brand-400 w-6 h-6" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dr. Jenkins — Consultation</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Patient: Emily R. (New)</p>
                            <div className="inline-flex items-center bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 text-sm font-semibold px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 w-full justify-between">
                              <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-brand-500" /> Wed, Jun 10</span>
                              <span>2:30 PM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeDemoTab === 'metrics' && (
                    <motion.div 
                      key="metrics"
                      initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}
                      className="p-6 h-full flex flex-col justify-center"
                    >
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 text-left">Patient Acquisition Analytics</h4>
                      <div className="space-y-6 text-left">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                            <span>AI Call Resolution Success</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">94.2%</span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "94.2%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-emerald-500 h-full rounded-full"></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                            <span>Automatic EMR Write Accuracy</span>
                            <span className="font-bold text-brand-600 dark:text-brand-400">100%</span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.4 }} className="bg-brand-500 h-full rounded-full"></motion.div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                            <span>Inbound Peak Deflection</span>
                            <span className="font-bold text-violet-600 dark:text-violet-400">52.8%</span>
                          </div>
                          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "52.8%" }} transition={{ duration: 1, delay: 0.6 }} className="bg-violet-500 h-full rounded-full"></motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}