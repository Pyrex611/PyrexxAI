"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Shield, Server, Activity, Users, ArrowRight,
  PhoneCall, Mic, Volume2, CheckCircle2, MessageSquare,
  Sparkles, Bot, Clock, Calendar, Smartphone, ChevronRight
} from "lucide-react";
import { CAL_LINK, getFadeUpVariants, getStaggerContainer } from "@/lib/utils";

type DemoMode = "call" | "message";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);
  const stagger = getStaggerContainer(prefersReducedMotion);

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
              <div className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-brand-500" />
                <span>Native EMR API Bridges</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>14-Day Deployment</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Blooio-Inspired iPhone Phone Demo Widget */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Mode Switcher Pill */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-1.5 rounded-full shadow-lg mb-6 flex gap-1 z-20">
              <button
                onClick={() => setMode("call")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  mode === "call"
                    ? "bg-brand-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5" /> AI Inbound Call
              </button>
              <button
                onClick={() => setMode("message")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  mode === "message"
                    ? "bg-brand-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" /> iMessage Intake
              </button>
            </div>

            {/* Apple iPhone Bezel Container */}
            <div className="relative w-[320px] sm:w-[350px] h-[640px] bg-gray-900 dark:bg-black rounded-[3.2rem] p-3 shadow-2xl border-4 border-gray-800 dark:border-gray-900 ring-1 ring-white/10">
              
              {/* Screen Shell */}
              <div className="w-full h-full bg-white dark:bg-[#0A0B0D] rounded-[2.6rem] overflow-hidden relative flex flex-col justify-between border border-gray-200 dark:border-gray-800">
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-40 pointer-events-none">
                  <div className="w-28 h-5 bg-gray-900 dark:bg-black rounded-b-2xl flex items-center justify-end px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500/80 animate-pulse"></div>
                  </div>
                </div>

                {/* Top Status Header */}
                <div className="h-10 px-6 pt-2 flex justify-between items-center text-[10px] font-semibold text-gray-500 dark:text-gray-400 z-30">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    <span>5G</span>
                  </div>
                </div>

                {/* Screen Dynamic Body */}
                <div className="flex-1 px-4 pt-2 pb-6 overflow-y-auto scrollbar-hide flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    
                    {/* MODE 1: LIVE VOICE AI CALL */}
                    {mode === "call" && (
                      <motion.div
                        key="call-mode"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex-1 flex flex-col justify-between space-y-4"
                      >
                        {/* Call Active Header */}
                        <div className="text-center pt-2 space-y-1">
                          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                            Live Voice Agent Active
                          </div>
                          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">Luxe Aesthetics</h3>
                          <p className="text-xs text-gray-400 font-mono">{formatTimer(seconds)}</p>
                        </div>

                        {/* Audio Wave Visualizer */}
                        <div className="bg-brand-50/50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/60 rounded-2xl p-4 text-center">
                          <div className="flex justify-center items-center gap-1 h-8 mb-2">
                            <span className="wave-bar text-brand-600 dark:text-brand-400 h-4"></span>
                            <span className="wave-bar text-brand-600 dark:text-brand-400 h-7"></span>
                            <span className="wave-bar text-brand-600 dark:text-brand-400 h-5"></span>
                            <span className="wave-bar text-brand-600 dark:text-brand-400 h-8"></span>
                            <span className="wave-bar text-brand-600 dark:text-brand-400 h-3"></span>
                          </div>
                          <span className="text-[10px] font-semibold text-brand-700 dark:text-brand-300">
                            PyrexxAI Voice Engine Standard Quality
                          </span>
                        </div>

                        {/* Live Call Transcript Bubble Stream */}
                        <div className="space-y-2 text-xs">
                          <div className="bg-gray-100 dark:bg-gray-800 p-2.5 rounded-xl rounded-tl-none text-gray-800 dark:text-gray-200">
                            <p className="font-bold text-[9px] text-gray-500 mb-0.5">Caller (+1 302 ***-1284)</p>
                            "I'd like to book Botox with Dr. Jenkins next Tuesday at 2 PM."
                          </div>

                          <div className="bg-brand-600 text-white p-2.5 rounded-xl rounded-tr-none ml-2">
                            <p className="font-bold text-[9px] text-brand-200 mb-0.5">PyrexxAI Voice Agent</p>
                            "Dr. Jenkins has 2:00 PM available next Tuesday! I'll reserve that slot for you now."
                          </div>
                        </div>

                        {/* Direct EMR Write Confirmation Notification */}
                        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-3 flex items-center gap-2.5 shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-gray-900 dark:text-white">Jane App EMR Synced</p>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400">Appointment confirmed & written</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* MODE 2: iMESSAGE INTAKE AUTOMATION */}
                    {mode === "message" && (
                      <motion.div
                        key="msg-mode"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex-1 flex flex-col justify-between space-y-3"
                      >
                        <div className="text-center pt-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                          <div className="w-10 h-10 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center mx-auto text-xs shadow-md mb-1">
                            PX
                          </div>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">PyrexxAI iMessage Intake</p>
                          <p className="text-[10px] text-emerald-500 font-semibold">Sub-60s Automated Reply</p>
                        </div>

                        <div className="space-y-2 text-xs flex-1 overflow-y-auto">
                          <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-2.5 rounded-2xl rounded-bl-none max-w-[85%]">
                            Hi, what is the price for dermal fillers?
                          </div>

                          <div className="bg-brand-600 text-white p-2.5 rounded-2xl rounded-br-none ml-auto max-w-[88%] shadow-sm">
                            Hello! Dermal fillers start at $650/syringe. Would you like to check Dr. Jenkins' open consultation slots for this week?
                          </div>

                          <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-2.5 rounded-2xl rounded-bl-none max-w-[85%]">
                            Yes please, Thursday afternoon works!
                          </div>

                          <div className="bg-brand-600 text-white p-2.5 rounded-2xl rounded-br-none ml-auto max-w-[88%] shadow-sm">
                            Great! I have reserved Thursday at 3:30 PM in Boulevard EMR. See you then!
                          </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full flex items-center justify-between text-xs text-gray-400 px-4">
                          <span>iMessage</span>
                          <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">↑</span>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="h-4 flex justify-center items-center pb-1">
                  <div className="w-28 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>

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
          </motion.div>

        </div>
      </div>
    </section>
  );
}