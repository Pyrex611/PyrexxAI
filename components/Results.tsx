import React from "react";
import { TrendingUp, Clock, MessageSquare, Stethoscope } from "lucide-react";

export default function Results() {
  return (
    <section id="results" className="py-24 bg-gray-50 dark:bg-[#0B0F17] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Transform Your Bottom Line
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white dark:bg-gray-950 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-center overflow-hidden relative transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 dark:bg-brand-900/10 rounded-full blur-3xl -z-10" />
            <TrendingUp className="w-10 h-10 text-brand-600 dark:text-brand-400 mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">40% Fewer No-Shows</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Automated appointment reminders and instant rebooking for cancellations keep your schedule full and eliminate dead time.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-center transition-colors">
            <Clock className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">$0 After-Hours Cost</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your AI agent works nights, weekends, and holidays at zero overtime charge.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-center transition-colors">
            <MessageSquare className="w-8 h-8 text-accent-600 dark:text-accent-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">&lt;60s Response Time</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Every web inquiry, SMS, and missed call gets an immediate, intelligent clinical response.
            </p>
          </div>
          <div className="md:col-span-2 bg-white dark:bg-gray-950 rounded-3xl p-8 lg:p-10 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-center relative overflow-hidden transition-colors">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent-50 dark:bg-accent-900/10 rounded-full blur-3xl -z-10" />
            <Stethoscope className="w-10 h-10 text-brand-600 dark:text-brand-400 mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Patients Report Higher Satisfaction Scores
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No hold music. No voicemail. Patients get answers instantly — making your practice feel premium even before they walk in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}