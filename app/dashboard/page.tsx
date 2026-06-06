"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Activity, Phone, ShieldCheck, CheckCircle2, Search, 
  BarChart3, Flame, CalendarCheck, Clock, X 
} from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

type ActiveTab = "overview" | "calls" | "intents" | "transcripts" | "health";

type CallLog = {
  id: string;
  caller: string;
  time: string;
  duration: string;
  intent: string;
  sentiment: "Positive" | "Neutral" | "Negative";
  outcome: string;
  transcript: { role: "ai" | "user"; text: string }[];
};

export default function DashboardDemoPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCallers, setActiveCallers] = useState(2);
  const [selectedCall, setSelectedCall] = useState<CallLog | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCallers((prev) => (Math.random() > 0.5 ? Math.max(1, prev - 1) : Math.min(4, prev + 1)));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const mockCalls: CallLog[] = [
    {
      id: "C-9048",
      caller: "+1 (302) ***-1284",
      time: "10 mins ago",
      duration: "02:14",
      intent: "Book Appointment",
      sentiment: "Positive",
      outcome: "EMR Synced",
      transcript: [
        { role: "ai", text: "Hello! Thank you for calling Luxe Aesthetics. How can I help you today?" },
        { role: "user", text: "Hi, I'd like to book a dermal filler appointment with Dr. Jenkins next Wednesday." },
        { role: "ai", text: "I can absolutely help with that. Looking at our calendar for next Wednesday, June 10th, I have openings at 10:00 AM and 2:30 PM. Do either of those work?" },
        { role: "user", text: "2:30 PM works perfectly for me." },
        { role: "ai", text: "Perfect, I've reserved that slot for you and sent a confirmation text. We look forward to seeing you!" }
      ]
    },
    {
      id: "C-9047",
      caller: "+1 (415) ***-9821",
      time: "45 mins ago",
      duration: "01:05",
      intent: "Reschedule Booking",
      sentiment: "Neutral",
      outcome: "EMR Synced",
      transcript: [
        { role: "ai", text: "Hi there! Welcome to Luxe Aesthetics. What can I adjust for you?" },
        { role: "user", text: "Hey, I need to push my appointment today back by an hour if possible." },
        { role: "ai", text: "Let me check Dr. Jenkins' schedule. Yes, we can move you from 3:00 PM to 4:00 PM today. I've updated this in our system." },
        { role: "user", text: "Awesome, thank you so much." }
      ]
    },
    {
      id: "C-9046",
      caller: "+1 (646) ***-4432",
      time: "2 hours ago",
      duration: "03:45",
      intent: "HIPAA Queries",
      sentiment: "Neutral",
      outcome: "Info Provided",
      transcript: [
        { role: "ai", text: "Hello, Luxe Aesthetics. How may I assist you?" },
        { role: "user", text: "Hi, I'm calling to verify how my medical records are protected when booking online." },
        { role: "ai", text: "Our systems utilize fully HIPAA-compliant architecture. All personal data is fully encrypted at rest using AES-256 and never shared with unauthorized parties." },
        { role: "user", text: "Okay, that's exactly what I needed to hear. Thank you." }
      ]
    }
  ];

  const filteredCalls = mockCalls.filter(call => 
    call.caller.includes(searchTerm) || call.intent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#0A0B0D] text-gray-100 transition-colors duration-300">
      <Navbar />

      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        
        {/* Core Warning Dashboard Alert */}
        <div className="bg-brand-600/10 border border-brand-500/30 rounded-3xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Flame className="w-6 h-6 text-brand-500 shrink-0 animate-pulse" />
            <div>
              <p className="font-bold text-white">Explore PyrexxAI Command Center (Live Demonstration)</p>
              <p className="text-sm text-gray-400">This is a fully featured model of your future client dashboard. Book a consultation to activate this system for your practice.</p>
            </div>
          </div>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shrink-0 shadow-lg">
            Request Setup &rarr;
          </a>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Dashboard Left Rail Sidebar */}
          <div className="lg:col-span-1 bg-[#131518] rounded-3xl p-6 border border-gray-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 border-b border-gray-800 pb-4">
                <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping"></div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Voice Agent Live</span>
              </div>
              
              <ul className="space-y-2">
                {[
                  { id: "overview", label: "Overview Metrics", icon: BarChart3 },
                  { id: "calls", label: "Call Logger Feed", icon: Phone },
                  { id: "intents", label: "Intent Map Analytics", icon: Activity },
                  { id: "transcripts", label: "Live Transcripts", icon: Search },
                  { id: "health", label: "EMR Pipeline Health", icon: ShieldCheck }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => {
                          setActiveTab(tab.id as ActiveTab);
                          setSelectedCall(null);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                          activeTab === tab.id 
                            ? "bg-brand-600 text-white shadow-cta" 
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-800 mt-6 text-center">
              <span className="text-xs text-gray-500">Client ID: PX-78241</span>
            </div>
          </div>

          {/* Core Dynamic Content Sandbox */}
          <div className="lg:col-span-3 space-y-8">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#131518] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Calls</p>
                <p className="text-3xl font-bold mt-1 text-white stat-number">3,842</p>
                <span className="text-xs text-emerald-500 font-semibold">+14.2% vs last mo</span>
              </div>
              <div className="bg-[#131518] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">AI Bookings</p>
                <p className="text-3xl font-bold mt-1 text-white stat-number">1,124</p>
                <span className="text-xs text-emerald-500 font-semibold">Jane App synced</span>
              </div>
              <div className="bg-[#131518] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Avg Duration</p>
                <p className="text-3xl font-bold mt-1 text-white stat-number">01:54</p>
                <span className="text-xs text-emerald-500 font-semibold">-12s optimize delta</span>
              </div>
              <div className="bg-[#131518] border border-gray-800 rounded-2xl p-5">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Escalation Rate</p>
                <p className="text-3xl font-bold mt-1 text-white stat-number">5.8%</p>
                <span className="text-xs text-gray-500">Under standard threshold</span>
              </div>
            </div>

            <div className="bg-[#131518] border border-gray-800 rounded-3xl p-6 lg:p-8 min-h-[400px]">
              
              {/* TAB: Overview */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Clinic Performance Overview</h3>
                    <span className="text-xs text-brand-400 font-bold uppercase tracking-wider">Metrics sync: Just now</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#0A0B0D] border border-gray-800 p-6 rounded-2xl space-y-4">
                      <h4 className="text-sm font-bold text-brand-400 uppercase tracking-wider">ROI Conversion Matrix</h4>
                      <p className="text-sm text-gray-400">Comparing estimated monthly revenue at risk against active bookings resolved by the AI voice reception channel.</p>
                      <div className="flex justify-between items-center bg-brand-600/5 border border-brand-900/50 p-4 rounded-xl">
                        <span className="text-xs text-gray-400">Diverted Inbound Value</span>
                        <span className="text-xl font-bold text-emerald-500">$142,800</span>
                      </div>
                    </div>
                    <div className="bg-[#0A0B0D] border border-gray-800 p-6 rounded-2xl flex flex-col justify-between">
                      <h4 className="text-sm font-bold text-brand-400 uppercase tracking-wider">EMR Database Health</h4>
                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between text-xs">
                          <span>API Webhook Latency</span>
                          <span className="font-semibold text-emerald-500">12ms</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Sync Success Rate</span>
                          <span className="font-semibold text-brand-500">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB: Calls */}
              {activeTab === "calls" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Inbound Call Logs</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="Search caller or intent..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-[#0A0B0D] border border-gray-800 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-800 text-xs text-gray-500 uppercase tracking-wider">
                          <th className="py-3 px-4">Caller ID</th>
                          <th className="py-3 px-4">Time</th>
                          <th className="py-3 px-4">Duration</th>
                          <th className="py-3 px-4">Intent</th>
                          <th className="py-3 px-4">Sentiment</th>
                          <th className="py-3 px-4">Outcome</th>
                          <th className="py-3 px-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800/50">
                        {filteredCalls.map((call) => (
                          <tr key={call.id} className="text-sm hover:bg-gray-900/30">
                            <td className="py-4 px-4 font-semibold text-white">{call.caller}</td>
                            <td className="py-4 px-4 text-gray-400">{call.time}</td>
                            <td className="py-4 px-4 text-gray-400 tabular-nums">{call.duration}</td>
                            <td className="py-4 px-4">
                              <span className="bg-brand-600/10 text-brand-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                                {call.intent}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`text-xs font-bold ${
                                call.sentiment === "Positive" ? "text-emerald-500" : "text-amber-500"
                              }`}>{call.sentiment}</span>
                            </td>
                            <td className="py-4 px-4">
                              <span className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-md text-xs font-bold">
                                {call.outcome}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <button 
                                onClick={() => setSelectedCall(call)}
                                className="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-bold"
                              >
                                View Transcript
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {selectedCall && (
                    <div className="bg-[#0A0B0D] border border-gray-800 rounded-2xl p-6 mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-white">Call Transcript Details ({selectedCall.id})</h4>
                        <button onClick={() => setSelectedCall(null)} className="text-gray-500 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto p-4 bg-[#131518] rounded-xl border border-gray-800">
                        {selectedCall.transcript.map((msg, i) => (
                          <div key={i} className={`flex flex-col ${msg.role === "ai" ? "items-start" : "items-end"}`}>
                            <span className="text-[10px] text-gray-500 font-bold mb-1 uppercase">
                              {msg.role === "ai" ? "PyrexxAI" : "Patient"}
                            </span>
                            <div className={`p-3 rounded-xl text-xs max-w-[80%] ${
                              msg.role === "ai" ? "bg-brand-600/10 text-brand-300 rounded-tl-none" : "bg-brand-600 text-white rounded-tr-none"
                            }`}>
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB: Intents Map */}
              {activeTab === "intents" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Clinical Intent Resolution</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Schedule Appointment", count: 484, success: 98.4 },
                      { name: "Reschedule / Move Booking", count: 212, success: 94.2 },
                      { name: "HIPAA & Compliance Inquiries", count: 184, success: 100 },
                      { name: "Treatment & Pricing FAQs", count: 110, success: 88.5 }
                    ].map((intent, i) => (
                      <div key={i} className="bg-[#0A0B0D] p-5 border border-gray-800 rounded-2xl flex justify-between items-center">
                        <div>
                          <p className="font-bold text-white text-base">{intent.name}</p>
                          <p className="text-xs text-gray-500 mt-1">Processed: {intent.count} cases</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500 uppercase font-semibold">AI Success Rate</p>
                          <p className="text-lg font-bold text-brand-400 mt-1">{intent.success}%</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB: Live Transcripts */}
              {activeTab === "transcripts" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Full-Text Transcript Archiver</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Search and pull recorded audio and transcripts directly from your medical records database. Select a call from the <button onClick={() => setActiveTab("calls")} className="text-brand-400 font-bold hover:underline">Call Logger Feed</button> to audit individual patient experiences.
                  </p>
                </div>
              )}

              {/* TAB: EMR Health */}
              {activeTab === "health" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <h3 className="text-xl font-bold text-white">EMR Sync Status</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#0A0B0D] border border-gray-800 p-6 rounded-2xl space-y-4">
                      <div className="flex items-center space-x-3 text-emerald-500">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-bold">Active API Hook</span>
                      </div>
                      <p className="text-xs text-gray-500">Synced directly with clinic scheduler (Jane App / Boulevard / Mindbody)</p>
                    </div>
                    <div className="bg-[#0A0B0D] border border-gray-800 p-6 rounded-2xl space-y-4">
                      <div className="flex items-center space-x-3 text-emerald-500">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="font-bold">Encryption Verified</span>
                      </div>
                      <p className="text-xs text-gray-500">End-to-end clinical compliance pipeline is operational.</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}