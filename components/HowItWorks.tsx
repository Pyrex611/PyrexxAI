'use client'
import React from 'react'

const steps = [
  { title: 'Connect your systems', desc: 'Link phone, scheduling, and EHR systems.' },
  { title: 'Train AI on your business', desc: 'We customize language, intake flows, and policies.' },
  { title: 'Go live', desc: 'We manage the rollout and training for staff.' },
  { title: 'Start capturing more bookings', desc: 'Monitor, optimize, and scale.' }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12">
      <div>
        <h2 className="text-2xl font-extrabold">How it works</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">We map your workflow, build the AI intake flows, integrate with your tools, and manage the go-live so clinics see fast results.</p>
      </div>

      <div className="mt-8 grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="p-6 border rounded-lg">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">{i + 1}</div>
            <h4 className="mt-4 font-semibold">{s.title}</h4>
            <p className="text-slate-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}