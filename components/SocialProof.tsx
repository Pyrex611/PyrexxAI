'use client'
import React from 'react'
import Image from 'next/image'

const logos = ['/logos/logo-1.svg', '/logos/logo-2.svg', '/logos/logo-3.svg']

export default function SocialProof() {
  return (
    <section className="py-8">
      <div className="flex flex-col gap-6 items-start">
        <div className="flex items-center gap-6">
          <div className="kicker">Trusted by</div>
          <div className="flex items-center gap-6">
            {logos.map((l) => (
              <div key={l} className="h-8 opacity-80">
                <Image src={l} alt="logo" width={96} height={32} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          <div className="p-6 border rounded-lg">
            <p className="font-bold text-lg">+30%</p>
            <p className="text-slate-600 mt-2">Average increase in bookings</p>
          </div>

          <div className="p-6 border rounded-lg">
            <p className="font-bold text-lg">24/7</p>
            <p className="text-slate-600 mt-2">Call handling & lead capture</p>
          </div>

          <div className="p-6 border rounded-lg">
            <p className="font-bold text-lg">Reduced no-shows</p>
            <p className="text-slate-600 mt-2">Automated confirmations & reminders</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full mt-4">
          <blockquote className="p-6 bg-slate-50 border rounded-lg">
            <p className="font-semibold">“We doubled our consultations in 2 months.”</p>
            <p className="text-sm text-slate-600 mt-2">— Dr. Lee, Medspa Owner</p>
          </blockquote>

          <blockquote className="p-6 bg-slate-50 border rounded-lg">
            <p className="font-semibold">“On-call coverage made staffing so much easier.”</p>
            <p className="text-sm text-slate-600 mt-2">— Clinic Manager</p>
          </blockquote>

          <blockquote className="p-6 bg-slate-50 border rounded-lg">
            <p className="font-semibold">“Integrated with our scheduling in days.”</p>
            <p className="text-sm text-slate-600 mt-2">— Practice Director</p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}