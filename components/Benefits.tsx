'use client'
import React from 'react'

const benefits = [
  { title: 'More booked appointments', desc: 'Never lose callers to voicemail. Increase conversion from inquiry to appointment.' },
  { title: 'Reduced staffing costs', desc: 'AI handles routine calls and intake so staff focus on care.' },
  { title: 'No missed leads', desc: 'Instant follow-up via SMS & chat keeps leads warm.' },
  { title: 'Better patient experience', desc: 'Fast responses and consistent intake improve satisfaction.' }
]

export default function Benefits() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-extrabold">Outcomes that matter</h2>
          <p className="text-slate-600 mt-2 max-w-lg">We focus on measurable business outcomes so you can grow patient volume without compromising care.</p>
        </div>

        <div className="grid gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 border rounded-lg">
              <h4 className="font-semibold">{b.title}</h4>
              <p className="text-slate-600 mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}