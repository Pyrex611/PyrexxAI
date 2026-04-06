'use client'
import React from 'react'

export default function CustomSolutions() {
  return (
    <section id="custom" className="py-12">
      <div>
        <h2 className="text-2xl font-extrabold">Custom solutions — not just a tool</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">
          Pyrexx AI delivers bespoke automation built around your exact workflow. We integrate with your scheduling, EHR, and payment systems to deliver a seamless patient journey.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Built around your workflow</h4>
            <p className="text-slate-600 mt-2">We model the intake flow to match how your front desk works today.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Custom integrations</h4>
            <p className="text-slate-600 mt-2">EHR, scheduling, SMS providers and analytics — we connect them all.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold">Ongoing optimization</h4>
            <p className="text-slate-600 mt-2">We monitor performance and iterate to improve conversion and patient experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}