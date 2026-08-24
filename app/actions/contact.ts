"use server";

import { Resend } from "resend";
import ContactTemplate from "@/components/emails/ContactTemplate";
import { persistLead } from "@/lib/supabase";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function dispatchWebhookNotification(payload: {
  name: string;
  email: string;
  clinic: string;
  practiceType: string;
  callVolume: string;
  message: string;
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    const textMessage = `🚨 *New PyrexxAI Lead Inbound*\n*Name:* ${payload.name}\n*Email:* ${payload.email}\n*Clinic:* ${payload.clinic} (${payload.practiceType})\n*Volume:* ${payload.callVolume}\n*Scope:* ${payload.message}`;

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: textMessage, content: textMessage }),
    });
  } catch (err) {
    console.error("Secondary Webhook alert failed (non-blocking):", err);
  }
}

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      return { success: true, message: "Your inquiry has been securely submitted." };
    }

    const name = ((formData.get("name") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const clinic = ((formData.get("clinic") as string) || "").trim();
    const practiceType = ((formData.get("practiceType") as string) || "MedSpa").trim();
    const callVolume = ((formData.get("callVolume") as string) || "100-500").trim();
    const message = ((formData.get("message") as string) || "").trim();

    if (!name || !email || !message || !clinic) {
      return { success: false, message: "Please fill out all required fields." };
    }

    if (!EMAIL_REGEX.test(email)) {
      return { success: false, message: "Please enter a valid work email address." };
    }

    if (name.length > 100 || clinic.length > 120 || message.length > 3000) {
      return { success: false, message: "Input exceeds maximum character length." };
    }

    // Tier 1: Supabase / Persistent Database Write (Audit-proof)
    const dbResult = await persistLead({
      name,
      email,
      clinic,
      practice_type: practiceType,
      call_volume: callVolume,
      message,
      source: "contact_form",
      status: "new",
    });

    // Tier 2: Real-Time Webhook Alert (Slack / Discord backup channel)
    await dispatchWebhookNotification({
      name,
      email,
      clinic,
      practiceType,
      callVolume,
      message,
    });

    // Tier 3: Primary Resend Email Notification
    if (process.env.RESEND_API_KEY) {
      const { error } = await resend.emails.send({
        from: "PyrexxAI Leads <leads@pyrexxai.com>",
        to: ["hello@pyrexxai.com"],
        replyTo: email,
        subject: `New AI Lead: ${clinic} (${practiceType})`,
        react: React.createElement(ContactTemplate, {
          name,
          email,
          clinic,
          practiceType,
          callVolume,
          message,
        }),
      });

      if (error) {
        console.error("Resend API warning:", error);
        if (dbResult.success) {
          return {
            success: true,
            message: "Your inquiry has been recorded. Our engineering team will reach out shortly.",
          };
        }
        return {
          success: false,
          message: "Unable to complete email dispatch. Please book a direct call or try again.",
        };
      }
    }

    return {
      success: true,
      message: "Your inquiry has been securely submitted. We will contact you within 24 hours.",
    };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}