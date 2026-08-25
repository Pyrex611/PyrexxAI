"use server";

import { persistLead } from "@/lib/supabase";
import ContactTemplate from "@/components/emails/ContactTemplate";
import React from "react";

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
  if (!webhookUrl || !webhookUrl.startsWith("http")) return;

  try {
    const textMessage = `🚨 *New PyrexxAI Lead Inbound*\n*Name:* ${payload.name}\n*Email:* ${payload.email}\n*Clinic:* ${payload.clinic} (${payload.practiceType})\n*Volume:* ${payload.callVolume}\n*Scope:* ${payload.message}`;

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: textMessage, content: textMessage }),
    });
  } catch (err) {
    console.warn("Secondary webhook alert failed (non-blocking):", err);
  }
}

export async function submitContactForm(
  prevStateOrFormData: any,
  maybeFormData?: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Handle both direct invocation (submitContactForm(formData)) and formState (submitContactForm(prev, formData))
    let formData: FormData;
    if (prevStateOrFormData instanceof FormData) {
      formData = prevStateOrFormData;
    } else if (maybeFormData instanceof FormData) {
      formData = maybeFormData;
    } else {
      return { success: false, message: "Invalid form submission payload." };
    }

    const honeypot = (formData.get("website") as string) || "";
    if (honeypot.trim() !== "") {
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

    // Tier 1: Supabase Persistent Database Storage
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

    // Tier 2: Real-time Webhook Push Notification (Slack / Discord)
    await dispatchWebhookNotification({
      name,
      email,
      clinic,
      practiceType,
      callVolume,
      message,
    });

    // Tier 3: Resend Email Notification (Lazy-loaded to prevent module load crashes)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && resendApiKey.trim() !== "") {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey.trim());

        await resend.emails.send({
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
      } catch (emailErr) {
        console.warn("Resend email dispatch warning (gracefully caught):", emailErr);
      }
    }

    return {
      success: true,
      message: "Your inquiry has been securely submitted. We will contact you within 24 hours.",
    };
  } catch (err) {
    console.error("Server Action Error (submitContactForm):", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again or book a discovery call directly.",
    };
  }
}