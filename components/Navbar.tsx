"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Menu, X as CloseIcon, ChevronDown } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target as Node)) {
        setDesktopCompanyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent, trigger: "services" | "company") => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (trigger === "services") {
        setDesktopServicesOpen(!desktopServicesOpen);
        setDesktopCompanyOpen(false);
      } else {
        setDesktopCompanyOpen(!desktopCompanyOpen);
        setDesktopServicesOpen(false);
      }
    }
  };

  const isServiceActive = pathname.startsWith("/ai-receptionist") || pathname.startsWith("/website-building") || pathname.startsWith("/database-reactivation");
  const isCompanyActive = pathname.startsWith("/about") || pathname.startsWith("/careers");

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg z-50 border-b border-gray-100/60 dark:border-gray-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center space-x-2 group" aria-label="PyrexxAI Home" onClick={() => setIsOpen(false)}>
          <div className="relative w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <Image 
              src="/logo.png" 
              alt="PyrexxAI Logo" 
              fill 
              sizes="32px"
              quality={100}
              className="object-cover z-10" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <Bot className="text-white w-5 h-5 absolute z-0" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">PyrexxAI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          
          <div 
            className="relative" 
            ref={servicesRef}
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button 
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              onKeyDown={(e) => handleKeyDown(e, "services")}
              aria-expanded={desktopServicesOpen}
              className={`flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 ${
                isServiceActive ? "text-brand-600 dark:text-brand-400 border-b-2 border-brand-600" : ""
              }`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {desktopServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="py-2 flex flex-col">
                    <Link href="/ai-receptionist" onClick={() => setDesktopServicesOpen(false)} className="px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-gray-50">AI Receptionist</Link>
                    <Link href="/website-building" onClick={() => setDesktopServicesOpen(false)} className="px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-gray-50">Website Building</Link>
                    <Link href="/database-reactivation" onClick={() => setDesktopServicesOpen(false)} className="px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-gray-50">Database Reactivation</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#how-it-works" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1">How it Works</Link>
          
          <Link 
            href="/contact" 
            className={`hover:text-brand-600 dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1 ${
              pathname.startsWith("/contact") ? "text-brand-600 dark:text-brand-400 border-b-2 border-brand-600" : ""
            }`}
          >
            Contact
          </Link>

          <div 
            className="relative" 
            ref={companyRef}
            onMouseEnter={() => setDesktopCompanyOpen(true)}
            onMouseLeave={() => setDesktopCompanyOpen(false)}
          >
            <button 
              onClick={() => setDesktopCompanyOpen(!desktopCompanyOpen)}
              onKeyDown={(e) => handleKeyDown(e, "company")}
              aria-expanded={desktopCompanyOpen}
              className={`flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 ${
                isCompanyActive ? "text-brand-600 dark:text-brand-400 border-b-2 border-brand-600" : ""
              }`}
            >
              Company <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopCompanyOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {desktopCompanyOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="py-2 flex flex-col">
                    <Link href="/about" onClick={() => setDesktopCompanyOpen(false)} className="px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-gray-50">About Us</Link>
                    <Link href="/#faq" onClick={() => setDesktopCompanyOpen(false)} className="px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-gray-50">Help & Support</Link>
                    <Link href="/careers" onClick={() => setDesktopCompanyOpen(false)} className="px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:bg-gray-50">Careers</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
            >
              Book a Free Demo &rarr;
            </a>
          </div>
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white dark:bg-gray-950 shadow-xl p-6 flex flex-col space-y-4 md:hidden z-40 overflow-y-auto"
          >
            <div className="py-2 border-b border-gray-100 dark:border-gray-800">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
                className="flex items-center justify-between w-full text-gray-900 dark:text-white text-lg font-medium focus-visible:outline-none"
              >
                Services <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="flex flex-col space-y-3 mt-4 pl-4 overflow-hidden"
                  >
                    <Link href="/ai-receptionist" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-400 font-medium">AI Receptionist</Link>
                    <Link href="/website-building" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-400 font-medium">Website Building</Link>
                    <Link href="/database-reactivation" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-400 font-medium">Database Reactivation</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="text-gray-900 dark:text-white text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800">How it Works</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-gray-900 dark:text-white text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-800">Contact</Link>
            
            <div className="py-2 border-b border-gray-100 dark:border-gray-800">
              <button 
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} 
                className="flex items-center justify-between w-full text-gray-900 dark:text-white text-lg font-medium focus-visible:outline-none"
              >
                Company <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileCompanyOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="flex flex-col space-y-3 mt-4 pl-4 overflow-hidden"
                  >
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-400 font-medium">About Us</Link>
                    <Link href="/#faq" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-400 font-medium">Help & Support</Link>
                    <Link href="/careers" onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-400 font-medium">Careers</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-6">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block w-full bg-brand-600 text-white px-5 py-4 rounded-xl text-center font-bold shadow-cta text-lg">
                Book a Free Demo &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}