'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/variants'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-12 pb-20">
      <div className="container grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="kicker mb-3">AI Receptionists for Clinics</p>
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-extrabold leading-tight">
            Never miss another patient call
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-6 text-slate-600 max-w-xl">
            Pyrexx AI combines bespoke AI receptionists and lead intake specialists that book appointments, qualify leads, and integrate with your systems — 24/7.
          </motion.p>

          <div className="mt-8 flex gap-3">
            <a href="#demo" className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-md font-semibold shadow hover:opacity-95 transition">
              Book a demo
            </a>
            <a href="#how-it-works" className="inline-flex items-center px-5 py-3 rounded-md border text-slate-700 hover:bg-slate-50 transition">
              How it works
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 max-w-md text-sm text-slate-600">
            <li>+30% booked appointments on average</li>
            <li>Reduces missed calls & missed revenue</li>
            <li>Works with your EHR & scheduling tools</li>
            <li>HIPAA-conscious integrations available</li>
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative w-full h-[360px] md:h-[420px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-tr from-accentStart to-accentEnd">
          <Image src="/mockup.png" alt="Pyrexx AI mockup" fill style={{ objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  )
}