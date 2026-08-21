"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Menu, X as CloseIcon, ChevronDown, Calendar } from "lucide-react";
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

  const isServiceActive =
    pathname.startsWith("/ai-receptionist") ||
    pathname.startsWith("/website-building") ||
    pathname.startsWith("/database-reactivation");
  const isCompanyActive = pathname.startsWith("/about") || pathname.startsWith("/careers");

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 rounded-full px-4 sm:px-6 h-16 flex items-center justify-between transition-colors duration-300">
        <Link
          href="/"
          className="flex items-center space-x-2.5 shrink-0 group"
          aria-label="PyrexxAI Home"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="PyrexxAI Logo"
              fill
              sizes="32px"
              quality={100}
              className="object-cover z-10"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <Bot className="text-white w-5 h-5 absolute z-0" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">PyrexxAI</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button
              id="services-menu-trigger"
              onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              onKeyDown={(e) => handleKeyDown(e, "services")}
              aria-expanded={desktopServicesOpen}
              aria-haspopup="true"
              aria-controls="services-dropdown"
              className={`flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 ${
                isServiceActive ? "text-brand-600 dark:text-brand-400 font-semibold" : ""
              }`}
            >
              Services{" "}
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition-transform duration-200 ${
                  desktopServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {desktopServicesOpen && (
                <motion.div
                  id="services-dropdown"
                  role="menu"
                  aria-labelledby="services-menu-trigger"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden p-1.5"
                >
                  <div className="flex flex-col">
                    <Link
                      href="/ai-receptionist"
                      role="menuitem"
                      onClick={() => setDesktopServicesOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      AI Receptionist
                    </Link>
                    <Link
                      href="/website-building"
                      role="menuitem"
                      onClick={() => setDesktopServicesOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      Website Building
                    </Link>
                    <Link
                      href="/database-reactivation"
                      role="menuitem"
                      onClick={() => setDesktopServicesOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      Database Reactivation
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#how-it-works"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-2 py-1"
          >
            How it Works
          </Link>

          <div
            className="relative"
            ref={companyRef}
            onMouseEnter={() => setDesktopCompanyOpen(true)}
            onMouseLeave={() => setDesktopCompanyOpen(false)}
          >
            <button
              id="company-menu-trigger"
              onClick={() => setDesktopCompanyOpen(!desktopCompanyOpen)}
              onKeyDown={(e) => handleKeyDown(e, "company")}
              aria-expanded={desktopCompanyOpen}
              aria-haspopup="true"
              aria-controls="company-dropdown"
              className={`flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 ${
                isCompanyActive ? "text-brand-600 dark:text-brand-400 font-semibold" : ""
              }`}
            >
              Company{" "}
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition-transform duration-200 ${
                  desktopCompanyOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {desktopCompanyOpen && (
                <motion.div
                  id="company-dropdown"
                  role="menu"
                  aria-labelledby="company-menu-trigger"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden p-1.5"
                >
                  <div className="flex flex-col">
                    <Link
                      href="/about"
                      role="menuitem"
                      onClick={() => setDesktopCompanyOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      role="menuitem"
                      onClick={() => setDesktopCompanyOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/#faq"
                      role="menuitem"
                      onClick={() => setDesktopCompanyOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      Help & Support
                    </Link>
                    <Link
                      href="/careers"
                      role="menuitem"
                      onClick={() => setDesktopCompanyOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 my-auto" />

          <Link
            href={CAL_LINK}
            aria-label="Book a Discovery Call"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Calendar className="w-5 h-5" />
          </Link>

          <Link
            href="/dashboard"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-cta hover:shadow-cta-hover hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Dashboard
          </Link>
        </div>

        <div className="flex items-center space-x-2 lg:hidden">
          <ThemeToggle />
          <button
            className="p-2.5 text-gray-600 dark:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg active:bg-gray-100 dark:active:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border border-white/80 dark:border-white/10 shadow-2xl rounded-3xl p-5 flex flex-col space-y-3 lg:hidden z-40 max-h-[85vh] overflow-y-auto scrollbar-hide"
          >
            <div className="py-2 border-b border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-gray-900 dark:text-white text-base font-semibold py-1 focus-visible:outline-none"
              >
                Services{" "}
                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col space-y-2.5 mt-3 pl-3 overflow-hidden"
                  >
                    <Link
                      href="/ai-receptionist"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                    >
                      AI Receptionist
                    </Link>
                    <Link
                      href="/website-building"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                    >
                      Website Building
                    </Link>
                    <Link
                      href="/database-reactivation"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                    >
                      Database Reactivation
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#how-it-works"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-white text-base font-semibold py-2 border-b border-gray-100 dark:border-gray-800"
            >
              How it Works
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-white text-base font-semibold py-2 border-b border-gray-100 dark:border-gray-800"
            >
              Contact
            </Link>

            <div className="py-2 border-b border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="flex items-center justify-between w-full text-gray-900 dark:text-white text-base font-semibold py-1 focus-visible:outline-none"
              >
                Company{" "}
                <ChevronDown
                  aria-hidden="true"
                  className={`w-5 h-5 transition-transform duration-200 ${
                    mobileCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {mobileCompanyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-col space-y-2.5 mt-3 pl-3 overflow-hidden"
                  >
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/#faq"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                    >
                      Help & Support
                    </Link>
                    <Link
                      href="/careers"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-600 dark:text-gray-400 font-medium text-sm py-1"
                    >
                      Careers
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-3 grid grid-cols-2 gap-3">
              <Link
                href={CAL_LINK}
                onClick={() => setIsOpen(false)}
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-3 rounded-full text-center font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" /> Book Demo
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="bg-brand-600 text-white py-3 rounded-full text-center font-bold text-xs shadow-cta flex items-center justify-center"
              >
                Dashboard &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}