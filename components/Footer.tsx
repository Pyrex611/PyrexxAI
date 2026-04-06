'use client'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md" />
          <div>
            <div className="font-semibold">Pyrexx AI</div>
            <div className="text-sm text-slate-500">hello@pyrexx.ai</div>
          </div>
        </div>

        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Pyrexx AI. All rights reserved.</div>
      </div>
    </footer>
  )
}