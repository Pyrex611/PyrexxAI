'use client'
import React, { useState } from 'react'

export default function DemoCTA() {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    const form = e.target as HTMLFormElement
    const data = {
      name: (form.name as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value
    }

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (json.ok) setMsg('Thanks — we received your request. We will be in touch to schedule the demo.')
      else setMsg('Something went wrong. Please email hello@pyrexx.ai')
    } catch (err) {
      setMsg('Network error. Please try again or email hello@pyrexx.ai')
    } finally {
      setLoading(false)
      form.reset()
    }
  }

  return (
    <section id="demo" className="py-16 bg-slate-50">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-extrabold">See it in action</h2>
          <p className="text-slate-600 mt-2">Book a live demo and see how Pyrexx AI can start capturing more bookings for your clinic.</p>
          <ul className="mt-4 text-sm text-slate-600">
            <li>Personalized walkthrough</li>
            <li>Integration & onboarding plan</li>
            <li>ROI and timeline estimate</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-white border rounded-lg shadow-sm">
          <div className="grid gap-3">
            <label className="text-sm">
              <div className="text-slate-700">Full name</div>
              <input name="name" required className="mt-1 block w-full rounded-md border p-3" />
            </label>

            <label className="text-sm">
              <div className="text-slate-700">Email</div>
              <input name="email" type="email" required className="mt-1 block w-full rounded-md border p-3" />
            </label>

            <label className="text-sm">
              <div className="text-slate-700">Phone</div>
              <input name="phone" className="mt-1 block w-full rounded-md border p-3" />
            </label>

            <div className="flex items-center justify-between mt-3">
              <button type="submit" disabled={loading} className="bg-primary text-white px-4 py-2 rounded-md font-semibold">
                {loading ? 'Sending…' : 'Request demo'}
              </button>
              <div className="text-sm text-slate-500">Or email hello@pyrexx.ai</div>
            </div>

            {msg && <div className="mt-3 text-sm text-slate-700">{msg}</div>}
          </div>
        </form>
      </div>
    </section>
  )
}