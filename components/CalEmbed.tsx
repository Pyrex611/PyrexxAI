"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Building,
  User,
  Mail,
  Phone,
  Layers,
} from "lucide-react";
import { toast } from "sonner";

export default function CalEmbed() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clinic: "",
    phone: "",
    emr: "Jane App",
    callVolume: "100-500",
  });

  const [dates, setDates] = useState<{ dayName: string; dayNumber: number; fullDate: string }[]>([]);

  useEffect(() => {
    const nextDays = [];
    const today = new Date();
    let count = 0;
    let offset = 1;

    while (count < 10) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        const fullDate = d.toISOString().split("T")[0];
        const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
        const dayNumber = d.getDate();
        nextDays.push({ dayName, dayNumber, fullDate });
        count++;
      }
      offset++;
    }

    setDates(nextDays);
    if (nextDays.length > 0) {
      setSelectedDate(nextDays[0].fullDate);
    }
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    setLoadingSlots(true);
    fetch(`/api/calendar/slots?date=${selectedDate}`)
      .then((res) => res.json())
      .then((data) => {
        setAvailableSlots(data.slots || []);
        if (data.slots && data.slots.length > 0) {
          setSelectedSlot(data.slots[0]);
        } else {
          setSelectedSlot("");
        }
      })
      .catch(() => {
        setAvailableSlots(["09:00", "10:30", "11:30", "13:00", "14:30", "15:30"]);
        setSelectedSlot("10:30");
      })
      .finally(() => setLoadingSlots(false));
  }, [selectedDate]);

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleProceedToDetails = () => {
    if (!selectedDate || !selectedSlot) {
      toast.error("Please select a date and appointment slot.");
      return;
    }
    setStep(2);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.clinic) {
      toast.error("Please provide your name, clinic name, and work email.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          slotTime: `${selectedDate}T${selectedSlot}:00`,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStep(3);
        toast.success("Discovery Call Reserved", {
          description: "Calendar invitation and Google Meet details dispatched.",
        });
      } else {
        toast.error("Booking Error", { description: json.message || "Please try again." });
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[580px] bg-white dark:bg-[#0E131F] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl transition-colors duration-300 relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xs">
            {step === 3 ? "✓" : `0${step}`}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">
              {step === 1 && "Select Time Slot (15 min)"}
              {step === 2 && "Clinical Workflow Details"}
              {step === 3 && "Booking Confirmed"}
            </h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">
              {step === 1 && "Live EMR demonstration & architecture map"}
              {step === 2 && "Step 2 of 2: Custom integration intake"}
              {step === 3 && "Calendar invitation dispatched"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/40">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>HIPAA Safe</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="flex-1 flex flex-col justify-between space-y-6"
          >
            <div>
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2.5 flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                Select Consultation Date
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {dates.map((d) => {
                  const isSelected = selectedDate === d.fullDate;
                  return (
                    <button
                      key={d.fullDate}
                      onClick={() => setSelectedDate(d.fullDate)}
                      className={`flex flex-col items-center justify-center min-w-[62px] py-2.5 px-2 rounded-2xl border text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-brand-600 text-white border-brand-500 shadow-md scale-105"
                          : "bg-gray-50 dark:bg-gray-900/60 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-brand-500/50"
                      }`}
                    >
                      <span className="text-[10px] opacity-75 uppercase">{d.dayName}</span>
                      <span className="text-base font-extrabold mt-0.5">{d.dayNumber}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1">
              <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                Available Slots (Eastern Time)
              </label>

              {loadingSlots ? (
                <div className="h-36 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-brand-600 dark:text-brand-400" />
                </div>
              ) : availableSlots.length === 0 ? (
                <div className="h-36 flex flex-col items-center justify-center text-center p-4 border border-dashed border-gray-200 dark:border-gray-800 rounded-2xl">
                  <p className="text-xs text-gray-500">No remaining slots for this date.</p>
                  <p className="text-[11px] text-brand-600 dark:text-brand-400 font-semibold mt-1">
                    Please choose another day.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {availableSlots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => handleSlotSelect(slot)}
                        className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                          isSelected
                            ? "bg-brand-600 text-white border-brand-500 shadow-md"
                            : "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:border-brand-500"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              onClick={handleProceedToDetails}
              disabled={!selectedSlot}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-full shadow-cta transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Details <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.form
            key="step-2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onSubmit={handleBookingSubmit}
            className="flex-1 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <User className="w-3 h-3 text-brand-500" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. Jenkins"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Mail className="w-3 h-3 text-brand-500" /> Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="dr@clinic.com"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Building className="w-3 h-3 text-brand-500" /> Clinic Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clinic}
                    onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                    placeholder="Elite Aesthetics"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-brand-500" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-brand-500" /> EMR / Software
                  </label>
                  <select
                    value={formData.emr}
                    onChange={(e) => setFormData({ ...formData, emr: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Jane App">Jane App</option>
                    <option value="Boulevard">Boulevard</option>
                    <option value="Mindbody">Mindbody</option>
                    <option value="AthenaHealth">AthenaHealth</option>
                    <option value="eClinicalWorks">eClinicalWorks</option>
                    <option value="Other">Other / Custom</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-500" /> Call Volume
                  </label>
                  <select
                    value={formData.callVolume}
                    onChange={(e) => setFormData({ ...formData, callVolume: e.target.value })}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Under 100">Under 100/mo</option>
                    <option value="100-500">100 - 500/mo</option>
                    <option value="500+">500+ calls/mo</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-bold transition-all flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-full shadow-cta transition-all flex items-center justify-center gap-2 text-xs disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Confirming Reservation...
                  </>
                ) : (
                  <>Confirm Discovery Call &rarr;</>
                )}
              </button>
            </div>
          </motion.form>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex flex-col items-center justify-center text-center py-6 space-y-4"
          >
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Consultation Reserved!
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-sm">
                We have scheduled your 15-minute live EMR architecture demonstration for{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {selectedDate} at {selectedSlot}
                </span>
                .
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 w-full text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Attendee:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email:</span>
                <span className="font-semibold text-gray-900 dark:text-white">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Integration Target:</span>
                <span className="font-semibold text-brand-600 dark:text-brand-400">{formData.emr}</span>
              </div>
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-brand-600 dark:text-brand-400 font-bold hover:underline"
            >
              Book Another Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}