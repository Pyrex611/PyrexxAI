"use client";

import React, { useState, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPending || !formRef.current) return;

    setIsPending(true);
    const formData = new FormData(formRef.current);

    try {
      const result = await submitContactForm(formData);

      if (result && result.success) {
        toast.success("Inquiry Submitted", { description: result.message });
        setSubmitted(true);
        formRef.current.reset();
      } else {
        toast.error("Submission Failed", {
          description: result?.message || "Please check your information and try again.",
        });
      }
    } catch {
      toast.error("Submission Error", {
        description: "Network connection issue. Please try again or book a call directly.",
      });
    } finally {
      setIsPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Inquiry Successfully Logged
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6 leading-relaxed">
          Your clinic information has been recorded in our lead pipeline. Our engineering team will review your EMR requirements and reach out within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-full text-xs transition-all shadow-cta"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Dr. Sarah Jenkins"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="sarah@eliteclinic.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="clinic" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
            Clinic / Organization Name *
          </label>
          <input
            type="text"
            id="clinic"
            name="clinic"
            required
            className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Elite MedSpa"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="practiceType" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
              Practice Type
            </label>
            <select
              id="practiceType"
              name="practiceType"
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none"
            >
              <option value="MedSpa">MedSpa / Aesthetics</option>
              <option value="Dental">Dental Clinic</option>
              <option value="Therapy">Therapy / Mental Health</option>
              <option value="Other">Other Medical Practice</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="callVolume" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
              Monthly Call Volume
            </label>
            <select
              id="callVolume"
              name="callVolume"
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none"
            >
              <option value="Under 100">Under 100 calls</option>
              <option value="100-500">100 - 500 calls</option>
              <option value="500+">500+ calls</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
            Current EMR & Project Scope *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            placeholder="We use Jane App and want to automate our after-hours booking..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-4 rounded-full transition-all shadow-cta hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" /> Processing...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </button>
      </form>
    </div>
  );
}