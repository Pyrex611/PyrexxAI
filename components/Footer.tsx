import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bot, Github, Linkedin, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.13 2.29 1.89 3.73 2.18v3.52c-1.74-.01-3.41-.65-4.79-1.73-.2-.16-.39-.33-.58-.51v6.78c-.02 2.05-.62 4.09-1.78 5.68-1.57 2.18-4.14 3.56-6.87 3.63-2.92.1-5.84-1.18-7.51-3.56-1.55-2.14-1.99-5.01-1.14-7.52C1.56 10.12 4.16 8.35 6.9 8.31c.36-.01.72.02 1.08.06V11.9c-.83-.17-1.72-.01-2.45.41-.83.47-1.39 1.34-1.52 2.29-.21 1.4.52 2.87 1.77 3.48.98.48 2.16.42 3.08-.16.74-.47 1.18-1.28 1.25-2.15.02-2.54.01-15.75.01-15.75z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B0F17] border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-sm">
                <Image src="/logo.png" alt="PyrexxAI Logo" fill sizes="36px" quality={100} className="object-cover z-10" />
                <Bot className="text-white w-5 h-5 absolute z-0" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">PyrexxAI</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Intelligent voice AI implementations for MedSpas, Dental & Therapy Clinics. Stop missing calls, start scaling.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://github.com/PyrexxAI" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/company/pyrexxai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://x.com/pyrexxai" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><XIcon className="w-5 h-5" /></a>
              <a href="https://facebook.com/share/1LXRSNNjPR/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://instagram.com/pyrexxai" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com/@pyrexxai" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="https://tiktok.com/@pyrexx_ai" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><TikTokIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@pyrexxai.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" /> hello@pyrexxai.com
                </a>
              </li>
              <li>
                <a href="tel:+13023376310" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" /> +1 (302) 337-6310
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/ai-receptionist" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">AI Receptionist</Link></li>
              <li><Link href="/website-building" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Website Building</Link></li>
              <li><Link href="/database-reactivation" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Database Reactivation</Link></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 dark:text-gray-500">© {new Date().getFullYear()} PyrexxAI. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-sm text-gray-400 dark:text-gray-500">Engineered for seamless patient experiences.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}