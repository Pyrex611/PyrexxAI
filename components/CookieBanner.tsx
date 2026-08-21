"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pyrexxai-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("pyrexxai-cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("pyrexxai-cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="region"
          aria-label="Cookie consent banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-50 dark:bg-brand-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-1">
                  We value your clinical data privacy
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  We use cookies to analyze web traffic and deliver tailored experiences. Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  to learn about our HIPAA-aligned data commitments.
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-auto items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-6 py-3 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 text-sm"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-full shadow-cta hover:shadow-cta-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 text-sm"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="hidden md:flex p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 rounded-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}