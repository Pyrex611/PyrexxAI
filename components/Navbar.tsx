'use client'
import React from 'react'
import Link from 'next/link'
import Icon from './Icon'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-100">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Icon name="logo" />
          <div>
            <div className="font-extrabold">Pyrexx AI</div>
            <div className="text-xs text-slate-500 -mt-0.5">Custom AI for clinics</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#offerings" className="text-slate-700 hover:text-primary">Solutions</a>
          <a href="#how-it-works" className="text-slate-700 hover:text-primary">How it works</a>
          <a href="#custom" className="text-slate-700 hover:text-primary">Custom</a>
          <a href="#demo" className="text-slate-700 hover:text-primary">Demo</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden md:inline-flex items-center bg-primary text-white px-4 py-2 rounded-md font-semibold hover:opacity-95 transition">
            Book a demo
          </a>
          <button className="md:hidden p-2 rounded-md border" aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}