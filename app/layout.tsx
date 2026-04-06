import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Pyrexx AI — AI Receptionists & Lead Intake for Clinics',
  description: 'PyrexxAI provides custom AI receptionists and lead intake specialists for medspas, dental clinics, and aesthetic practices.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}