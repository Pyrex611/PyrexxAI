"use server";

import { Resend } from "resend";
import ContactTemplate from "@/components/emails/ContactTemplate";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const honeypot = formData.get("website") as string;
    if (honeypot) return { success: true, message: "Your inquiry has been securely submitted." };

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const clinic = formData.get("clinic") as string;
    const practiceType = formData.get("practiceType") as string;
    const callVolume = formData.get("callVolume") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message || !clinic) {
      return { success: false, message: "Please fill out all required fields." };
    }

    const { error } = await resend.emails.send({
      from: "PyrexxAI Leads <leads@pyrexxai.com>", 
      to: ["hello@pyrexxai.com"], 
      subject: `New AI Lead: ${clinic} (${practiceType})`,
      react: React.createElement(ContactTemplate, { name, email, clinic, practiceType, callVolume, message }),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, message: "Failed to send the message. Please try again later." };
    }

    return { success: true, message: "Your inquiry has been securely submitted. We will contact you shortly." };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, message: "An unexpected error occurred." };
  }
}