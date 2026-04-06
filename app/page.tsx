"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PhoneCall, 
  MessageSquare, 
  CalendarCheck, 
  TrendingUp, 
  Settings, 
  ShieldCheck,
  ChevronRight,
  Stethoscope,
  Bot
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
          <Bot className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">Pyrexx AI</span>
      </div>
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
        <a href="#offerings" className="hover:text-blue-600 transition-colors">Solutions</a>
        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
        <a href="#custom" className="hover:text-blue-600 transition-colors">Custom Build</a>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5">
        Book a Demo
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Abstract Background Gradients */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply" />
      <div className="absolute top-40 left-1/4 w-[600px] h-[300px] bg-purple-400/20 blur-[120px] rounded-full mix-blend-multiply" />
    </div>

    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto space-y-8">
        <motion.div variants={fadeUp} className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-600 text-sm font-medium">
          <Stethoscope className="w-4 h-4" />
          <span>Purpose-built for Medspas & Dental Clinics</span>
        </motion.div>
        
        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
          Never Miss Another <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Patient Call.
          </span>
        </motion.h1>
        
        <motion.p variants={fadeUp} className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Deploy premium AI receptionists and lead intake specialists that work 24/7. Automate your clinic's growth, capture every lead, and deliver a flawless patient experience.
        </motion.p>
        
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 flex items-center justify-center">
            Book a Demo <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-full text-base font-semibold transition-all">
            Calculate ROI
          </button>
        </motion.div>
      </motion.div>

      {/* UI Mockup Presentation */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 relative max-w-5xl mx-auto"
      >
        <div className="rounded-2xl border border-gray-200/60 bg-white/50 backdrop-blur-xl shadow-2xl p-2 sm:p-4">
          <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-video flex items-center justify-center relative">
            {/* Mockup Content placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
            <div className="relative z-10 flex flex-col items-center space-y-4 opacity-50">
              <Bot className="w-16 h-16 text-blue-600" />
              <p className="font-medium text-gray-500">Interactive AI Dashboard Visualization</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-10 border-y border-gray-100 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
        Trusted by 100+ high-growth aesthetic & dental practices
      </p>
      <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
        {/* Replace with actual client logos */}
        {['Aesthetics Co.', 'Elite Dental', 'Luxe Medspa', 'Therapy Partners', 'Smile Clinic'].map((logo, i) => (
          <div key={i} className="text-xl font-bold text-gray-800 flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-gray-300" />
            <span>{logo}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Offerings = () => (
  <section id="offerings" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Complete AI Front Desk</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We deploy intelligent agents that handle your highest friction tasks, allowing your staff to focus on the patients in front of them.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* AI Receptionist Card */}
        <motion.div 
          whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp}
          className="group relative p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 group-hover:bg-blue-100 transition-colors" />
          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
            <PhoneCall className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Receptionist</h3>
          <p className="text-gray-600 mb-6 line-clamp-3">
            A lifelike voice AI that answers every call, 24/7. It books appointments directly into your EMR, answers FAQs, and recovers missed calls instantly.
          </p>
          <ul className="space-y-3 mb-8">
            {['24/7 Inbound Call Handling', 'Direct EMR/EHR Integration', 'Missed Call Text-Back'].map((feature, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium">
                <ShieldCheck className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" /> {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AI Lead Intake Card */}
        <motion.div 
          whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp}
          className="group relative p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10 group-hover:bg-purple-100 transition-colors" />
          <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Lead Intake Specialist</h3>
          <p className="text-gray-600 mb-6">
            Instantly responds to website inquiries, SMS, and DMs. Qualifies leads, answers pricing questions, and funnels high-intent prospects to booking.
          </p>
          <ul className="space-y-3 mb-8">
            {['Under 60-Second Response Time', 'Multi-channel (SMS, Web, Social)', 'Smart Lead Qualification'].map((feature, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium">
                <ShieldCheck className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" /> {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps =[
    { num: "01", title: "Connect", desc: "We integrate securely with your existing EMR, phone systems, and CRM." },
    { num: "02", title: "Train", desc: "We train the AI on your clinic's specific FAQs, pricing, and tone of voice." },
    { num: "03", title: "Deploy", desc: "Your AI agents go live, running in the background flawlessly." },
    { num: "04", title: "Scale", desc: "Watch your booking volume rise while staffing costs decrease." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Effortless Implementation</h2>
          <p className="text-lg text-gray-600">From kickoff to live in under 14 days.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp}
              className="relative"
            >
              <div className="text-5xl font-extrabold text-gray-200 mb-4">{step.num}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-24 w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transform Your Bottom Line</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-blue-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">
          <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">+30% More Booked Appointments</h3>
          <p className="text-gray-600">By capturing after-hours calls and instantly responding to web leads, our clinics see a dramatic increase in actual scheduled consultations.</p>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
          <CalendarCheck className="w-10 h-10 text-gray-700 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Missed Leads</h3>
          <p className="text-gray-600 text-sm">Every single inquiry is handled instantly.</p>
        </div>
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-center">
          <PhoneCall className="w-10 h-10 text-gray-700 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced Overhead</h3>
          <p className="text-gray-600 text-sm">Eliminate the need for after-hours answering services or extra reception staff.</p>
        </div>
        <div className="md:col-span-2 bg-purple-50 rounded-3xl p-8 border border-purple-100 flex flex-col justify-center">
          <Stethoscope className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Patient Experience</h3>
          <p className="text-gray-600">No hold times, no voicemails. Patients get instant answers and immediate bookings, making your practice look highly professional.</p>
        </div>
      </div>
    </div>
  </section>
);

const CustomPositioning = () => (
  <section id="custom" className="py-24 bg-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div whileInView="visible" initial="hidden" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto">
        <Settings className="w-12 h-12 text-blue-400 mx-auto mb-6" />
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Not just another tool. <br/> A custom-engineered solution.</h2>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          We don't hand you software and wish you luck. Pyrexx AI acts as your dedicated technical partner. We map your exact workflow, build custom integrations to your specific EMR, and continually optimize your AI agents.
        </p>
        <div className="inline-flex items-center space-x-2 text-blue-400 font-semibold bg-blue-900/30 px-6 py-3 rounded-full border border-blue-800/50">
          <ShieldCheck className="w-5 h-5" />
          <span>Fully HIPAA Compliant Architecture</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Ready to modernize your front desk?
      </h2>
      <p className="text-xl text-gray-600 mb-10">
        Book a demo to see exactly how Pyrexx AI sounds, acts, and books appointments.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-1">
        See It In Action
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <Bot className="text-blue-600 w-6 h-6" />
        <span className="text-xl font-bold text-gray-900">Pyrexx AI</span>
      </div>
      <div className="flex space-x-6 text-sm text-gray-500">
        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600">Terms of Service</a>
        <a href="mailto:clifford.pyrexxai@gmail.com" className="hover:text-blue-600">clifford.pyrexai@gmail.com</a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-8 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Pyrexx AI. All rights reserved. Built for modern medical practices.
    </div>
  </footer>
);

export default function PyrexxAILandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <SocialProof />
      <Offerings />
      <HowItWorks />
      <Benefits />
      <CustomPositioning />
      <CTA />
      <Footer />
    </main>
  );
}