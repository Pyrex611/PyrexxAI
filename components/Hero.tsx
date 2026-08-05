"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Shield, Server, Activity, Users, ArrowRight, 
  LayoutDashboard, BarChart3, User, PhoneCall, 
  CalendarCheck, Clock, CheckCircle2, ChevronRight, Bot 
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
    <section className="relative pt-32 pb-16 overflow-hidden dark:bg-slate-950 transition-colors duration-300">
      {/* Backlight Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-100/40 dark:bg-brand-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-40 left-1/4 w-[600px] h-[300px] bg-accent-50/40 dark:bg-accent-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP ROW: Blooio-Style Split Text Layout */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger} 
          className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-16 lg:mb-20 pt-8"
        >
          {/* Left Column: Big Headline */}
          <motion.div variants={fadeUp} className="w-full lg:w-5/12 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/60 px-4 py-1.5 rounded-full text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <span>✦ Purpose-Built for Healthcare</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.05] text-balance">
              Turn every missed call into a booked patient.
            </h1>
          </motion.div>

          {/* Right Column: Context & CTAs */}
          <motion.div variants={fadeUp} className="w-full lg:w-6/12 text-left lg:pt-4">
            <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Meet the new standard for clinical front desks — a custom-trained voice AI built for medical practices. Every inbound call is answered instantly, triaged, and booked directly into your EMR. Zero hold times. 100% HIPAA-compliant.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
              <Link 
                href={CAL_LINK} 
                className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Try now for free &rarr;
              </Link>
              <a 
                href="https://app.pyrexxai.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-full text-base font-semibold transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
              >
                Explore Live App
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* MIDDLE SECTION: Horizontally Scrollable Mobile Pill Menu */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full overflow-x-auto scrollbar-hide pb-6 mb-8 flex lg:justify-center"
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

        {/* BOTTOM SECTION: 3-Column Interactive Phone Widget */}
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-8 pb-10"
        >
          {/* Left Column: Navigation Tabs */}
          <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-60 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 shrink-0 lg:pt-12">
            {[
              { id: "dashboard", icon: LayoutDashboard, label: "Live Dashboard" },
              { id: "analytics", icon: BarChart3, label: "Performance" },
              { id: "profile", icon: User, label: "Clinic Profile" }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabState)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold transition-all shrink-0 lg:w-full border ${
                    isActive 
                      ? "bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-500/20" 
                      : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Center Column: The Properly Sized Phone Widget */}
          <div className="shrink-0 relative w-[300px] sm:w-[320px] h-[620px] bg-slate-900 dark:bg-black rounded-[3rem] p-2.5 shadow-2xl border-[6px] border-slate-800/80 dark:border-slate-800">
            {/* The Inner Screen */}
            <div className="w-full h-full bg-slate-50 dark:bg-[#0A0B0D] rounded-[2.5rem] overflow-hidden relative flex flex-col border border-slate-800/50">
              
              {/* iPhone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                <div className="w-32 h-5 bg-slate-900 dark:bg-black rounded-b-xl"></div>
              </div>
              
              {/* Top Status Bar */}
              <div className="h-10 w-full px-6 flex justify-between items-end pb-1 text-[10px] font-medium text-gray-500 z-20">
                <span>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-2.5 bg-gray-500 rounded-sm"></div>
                  <div className="w-4 h-2.5 bg-gray-500 rounded-sm"></div>
                </div>
              </div>

              {/* Screen Content Wrapper */}
              <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-24 relative">
                <AnimatePresence mode="wait">
                  
                  {/* Dashboard View */}
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

                      {/* Active Call Card */}
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

                  {/* Analytics View */}
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

                  {/* Profile View */}
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

          {/* Right Column: Context & Request Setup Action */}
          <div className="flex-1 text-center lg:text-left w-full max-w-sm flex flex-col justify-center lg:pt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {tabContent[activeTab].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-base">
              {tabContent[activeTab].desc}
            </p>
            <div className="space-y-4">
              <Link 
                href={CAL_LINK} 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Request Setup <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}