'use client'
import React from 'react'

const offerings = [
  {
    title: 'AI Receptionist',
    bullets: ['24/7 call handling', 'Appointment booking', 'Missed call recovery']
  },
  {
    title: 'AI Lead Intake Specialist',
    bullets: ['Instant responses', 'SMS & web chat', 'Lead qualification']
  },
  {
    title: 'Custom Integrations',
    bullets: ['EHR & scheduling integrations', 'Custom workflows', 'Data sync & reporting']
  }
]

export default function Offerings() {
  return (
    <section id="offerings" className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-extrabold">Core offerings</h2>
          <p className="text-slate-600 mt-2">Clinical-grade AI solutions focused on booking more patients and saving staff time.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {offerings.map((o) => (
          <div key={o.title} className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg">{o.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {o.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}