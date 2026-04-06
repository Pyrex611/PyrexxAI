import React from 'react'

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" {...props}>
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Icon({ name, className }: { name: 'logo' | 'phone'; className?: string }) {
  if (name === 'logo') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" width="28" height="28" aria-hidden>
        <rect width="24" height="24" rx="6" fill="#2563EB" />
        <path d="M7 12h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  return null
}