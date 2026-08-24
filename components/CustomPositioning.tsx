"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { getFadeUpVariants } from "@/lib/utils";

export default function CustomPositioning() {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = getFadeUpVariants(prefersReducedMotion);

  return (
    <section className="py-24 bg-white dark:bg-[#0B0F17] text-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div whileInView="visible" initial="hidden" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Not just another tool.<br />A complete technical partner.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Most AI tools hand you a dashboard and a manual. PyrexxAI acts as your dedicated AI engineering implementation team. We map your clinical intake workflows, build your agent from scratch, integrate with your specific EMR, and handle every edge case.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm max-w-4xl mx-auto text-left">
            <table className="w-full text-sm lg:text-base border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
                  <th className="py-4 px-6 font-semibold text-gray-700 dark:text-gray-300 w-1/3">Feature</th>
                  <th className="py-4 px-6 font-semibold text-gray-500 dark:text-gray-400 w-1/3 border-l border-gray-200 dark:border-gray-800">DIY Voice AI Software</th>
                  <th className="py-4 px-6 font-bold text-brand-700 dark:text-brand-400 w-1/3 border-l border-brand-200 dark:border-brand-900/50 bg-brand-50 dark:bg-brand-900/20">PyrexxAI Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950">
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-200">Agent Persona</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-800">Generic template voices</td>
                  <td className="py-4 px-6 font-medium text-brand-900 dark:text-brand-300 border-l border-brand-200 dark:border-brand-900/50 bg-brand-50/30 dark:bg-brand-900/10">Custom-trained clinic voice & tone</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-200">Setup Effort</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-800">You configure everything yourself</td>
                  <td className="py-4 px-6 font-medium text-brand-900 dark:text-brand-300 border-l border-brand-200 dark:border-brand-900/50 bg-brand-50/30 dark:bg-brand-900/10">Done-for-you in 14 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-200">EMR Integration</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-800">Fragile generic webhooks</td>
                  <td className="py-4 px-6 font-medium text-brand-900 dark:text-brand-300 border-l border-brand-200 dark:border-brand-900/50 bg-brand-50/30 dark:bg-brand-900/10">Direct native calendar read/write bridges</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-200">Ongoing Maintenance</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-800">No dedicated engineering support</td>
                  <td className="py-4 px-6 font-medium text-brand-900 dark:text-brand-300 border-l border-brand-200 dark:border-brand-900/50 bg-brand-50/30 dark:bg-brand-900/10">Weekly logic upgrades & re-training</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-gray-200">Compliance & Legal</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-800">You figure out HIPAA liability</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 dark:text-emerald-400 border-l border-brand-200 dark:border-brand-900/50 bg-brand-50/30 dark:bg-brand-900/10">Signed BAA + Full HIPAA guarantee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}