"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Shield, Server, Activity, Users, ArrowRight, 
  LayoutDashboard, BarChart3, User, PhoneCall, 
  CalendarCheck, Clock, CheckCircle2, ChevronRight, Bot, Zap, ShieldCheck
} from "lucide-react";
import { CAL_LINK, getFadeUpVariants, getStaggerContainer } from "@/lib/utils";

type TabState = "dashboard" | "analytics" | "profile";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);
  const stagger = getStaggerContainer(prefersReducedMotion);
  const [activeTab, setActiveTab] = useState<TabState>("dashboard");

  const tabContent = {
    dashboard: {
      title: "Live Operational Control",
      desc: "Monitor your AI voice receptionist in real-time. Watch as it triages calls, updates your EMR schedule, and recovers missed bookings without human friction."
    },
    analytics: {
      title: "Patient Acquisition Analytics",
      desc: "Track deflection rates, appointment write speed, and net ROI effortlessly with complete transparency into your practice's growth."
    },
    profile: {
      title: "Clinical System Controls",
      desc: "Configure business hours, manage EMR API credentials, and review your HIPAA Business Associate Agreements directly from your mobile device."
    }
  };

  return (
    <section className="relative pt-36 pb-16 overflow-hidden dark:bg-slate-950 transition-colors duration-300">
      {/* Backlight Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-100/40 dark:bg-brand-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[300px] bg-accent-50/40 dark:bg-accent-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Blooio-Style Split 12-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-12">
          
          {/* Left Column (5 Cols): Consumer Psychology Value Prop */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger} 
            className="lg:col-span-5 text-center lg:text-left space-y-6"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/60 px-4 py-1.5 rounded-full text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <span>✦ Purpose-Built for Healthcare Practices</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Turn Every Missed Patient Call Into a <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-accent-500 to-brand-400">
                Booked Appointment.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Deploy a custom-trained voice AI receptionist that answers 100% of inbound calls, integrates natively with your EMR, and schedules patients 24/7 — live in 14 days.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href={CAL_LINK} 
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 text-center"
              >
                Book a Free Demo &rarr;
              </Link>
              <a 
                href="https://app.pyrexxai.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-all text-center"
              >
                Explore Live App
              </a>
            </motion.div>

            {/* Micro-Trust Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 14-Day Setup</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> EMR Synced</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Overtime</span>
            </motion.div>
          </motion.div>

          {/* Center Column (4 Cols): Phone Mockup & Floating Psychology Chips */}
          <div className="lg:col-span-4 relative flex justify-center items-center my-8 lg:my-0">
            
            {/* Floating Chip 1 (Top Left) */}
            <div className="absolute -top-4 -left-2 sm:left-2 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-xl animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">24/7 Availability</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Zero voicemails, no hold times</p>
              </div>
            </div>

            {/* Floating Chip 2 (Top Right) */}
            <div className="absolute top-12 -right-2 sm:right-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-brand-200/80 dark:border-brand-800/60 p-3.5 rounded-2xl shadow-xl animate-float-delayed hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CalendarCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">New Appointment Booked</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Emily R. • Botox Consult (Jane App)</p>
              </div>
            </div>

            {/* Floating Chip 3 (Bottom Left) */}
            <div className="absolute bottom-12 -left-4 sm:left-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-xl animate-float-delayed hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">12ms EMR Write Speed</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Instant schedule locking</p>
              </div>
            </div>

            {/* Floating Chip 4 (Bottom Right) */}
            <div className="absolute -bottom-4 -right-2 sm:right-2 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-200/80 dark:border-slate-800/80 p-3.5 rounded-2xl shadow-xl animate-float-slow hidden sm:flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">100% HIPAA BAA Included</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Encrypted clinical intake</p>
              </div>
            </div>

            {/* Mobile Phone Device Frame */}
            <div className="relative w-[280px] sm:w-[300px] h-[580px] bg-slate-900 dark:bg-black rounded-[3rem] p-2.5 shadow-2xl border-4 border-slate-800/80 dark:border-slate-800">
              <div className="w-full h-full bg-slate-50 dark:bg-[#0A0B0D] rounded-[2.3rem] overflow-hidden relative flex flex-col border border-slate-800/50">
                
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                  <div className="w-28 h-4 bg-slate-900 dark:bg-black rounded-b-xl"></div>
                </div>
                
                {/* Status Bar */}
                <div className="h-9 w-full px-6 flex justify-between items-end pb-1 text-[10px] font-medium text-gray-500 z-20">
                  <span>9:41</span>
                  <div className="flex gap-1 items-center">
                    <div className="w-3 h-2 bg-gray-500 rounded-sm"></div>
                  </div>
                </div>

                {/* Internal App Views */}
                <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-24 relative">
                  <AnimatePresence mode="wait">
                    
                    {activeTab === "dashboard" && (
                      <motion.div key="dashboard" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration: 0.2}} className="space-y-4 pt-2">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
                            <p className="text-xs text-gray-500">Welcome, Elite MedSpa</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-brand-600 dark:text-brand-400">
                            <Bot className="w-4 h-4" />
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-sm border border-brand-100 dark:border-brand-800">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Live Call</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 tabular-nums">01:24</span>
                          </div>
                          <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-brand-50 dark:bg-gray-800 rounded-full flex items-center justify-center">
                              <PhoneCall className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900 dark:text-white">+1 (415) ***-8291</p>
                              <p className="text-xs text-gray-500">Intent: Booking Appt</p>
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-6 mb-3">Recent Activity</h3>
                        <div className="space-y-2">
                          {[
                            { name: "Sarah J.", intent: "Consultation", time: "10m ago" },
                            { name: "Mike T.", intent: "Reschedule", time: "1h ago" },
                            { name: "Anna L.", intent: "Pricing Info", time: "3h ago" },
                          ].map((call, i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-gray-900 dark:text-white">{call.name}</p>
                                  <p className="text-[10px] text-gray-500">{call.intent}</p>
                                </div>
                              </div>
                              <span className="text-[10px] text-gray-400">{call.time}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "analytics" && (
                      <motion.div key="analytics" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration: 0.2}} className="space-y-4 pt-2">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Performance</h2>
                        
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <p className="text-[10px] text-gray-500 uppercase font-semibold">Total Calls</p>
                            <p className="text-xl font-bold text-gray-900 dark:text-white">842</p>
                          </div>
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <p className="text-[10px] text-gray-500 uppercase font-semibold">AI Bookings</p>
                            <p className="text-xl font-bold text-brand-600 dark:text-brand-400">312</p>
                          </div>
                        </div>

                        <div className="bg-brand-600 p-5 rounded-2xl text-white">
                          <p className="text-xs text-brand-200 uppercase font-semibold mb-1">Net ROI Generated</p>
                          <p className="text-2xl font-bold">$18,400</p>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 mt-4 space-y-4">
                          <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                              <span className="text-gray-600 dark:text-gray-300">Resolution Rate</span>
                              <span className="text-emerald-500">94%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-emerald-500 h-full w-[94%] rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs font-semibold mb-1">
                              <span className="text-gray-600 dark:text-gray-300">EMR Sync Accuracy</span>
                              <span className="text-brand-500">100%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-brand-500 h-full w-full rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "profile" && (
                      <motion.div key="profile" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration: 0.2}} className="space-y-4 pt-2">
                        <div className="flex flex-col items-center justify-center py-6">
                          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500 mb-3 border-4 border-white dark:border-gray-950 shadow-sm">
                            EA
                          </div>
                          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Elite Aesthetics</h2>
                          <span className="text-xs text-emerald-500 font-semibold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded mt-2">Active Plan</span>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">EMR Integration</span>
                            <span className="text-xs bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 px-2 py-1 rounded font-bold">Jane App</span>
                          </div>
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">HIPAA BAA</span>
                            <span className="text-xs text-gray-500">Signed May 2026</span>
                          </div>
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">AI Prompt Settings</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* App Bottom Navigation */}
                <div className="absolute bottom-0 w-full h-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex justify-around items-center px-4 pb-4 pt-2 z-30">
                  <button onClick={() => setActiveTab("dashboard")} className={`flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400'}`}>
                    <LayoutDashboard className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">Home</span>
                  </button>
                  <button onClick={() => setActiveTab("analytics")} className={`flex flex-col items-center gap-1 ${activeTab === 'analytics' ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400'}`}>
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">Metrics</span>
                  </button>
                  <button onClick={() => setActiveTab("profile")} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400'}`}>
                    <User className="w-5 h-5" />
                    <span className="text-[10px] font-semibold">Profile</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (3 Cols): Context & Request Setup Action */}
          <div className="lg:col-span-3 text-center lg:text-left w-full space-y-4">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200/80 dark:border-slate-800/80 p-6 rounded-3xl shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                {tabContent[activeTab].desc}
              </p>
              <Link 
                href={CAL_LINK} 
                className="w-full inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-cta hover:shadow-cta-hover"
              >
                Request Setup <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium text-center">
              Or <Link href="/dashboard" className="text-brand-600 dark:text-brand-400 underline font-semibold">explore full demo dashboard</Link>
            </p>
          </div>

        </div>

        {/* Scrollable Pill Container */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full overflow-x-auto scrollbar-hide pb-4 mb-8 flex lg:justify-center px-6 lg:px-0"
        >
          <div className="flex gap-2 bg-gray-100/80 dark:bg-gray-900/50 p-1.5 rounded-full border border-gray-200/50 dark:border-gray-800/80 shadow-inner w-max shrink-0">
            <Link href="/hipaa-compliance" className="px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-sm hover:bg-brand-700 transition-colors flex items-center gap-1.5 shrink-0">
              <Shield className="w-3.5 h-3.5" /> HIPAA Compliant
            </Link>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1.5 shrink-0">
              <Server className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" /> Live in 14 Days
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1.5 shrink-0">
              <Activity className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" /> 99.9% Uptime
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1.5 shrink-0">
              <Users className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" /> 24/7 Coverage
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}