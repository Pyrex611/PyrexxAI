"use server";

import { persistBooking, persistLead } from "@/lib/supabase";

export interface BookingPayload {
  name: string;
  email: string;
  clinic: string;
  phone?: string;
  emr?: string;
  callVolume?: string;
  slotTime: string;
  timezone?: string;
}

export async function submitBookingAction(payload: BookingPayload): Promise<{
  success: boolean;
  bookingId?: string;
  message?: string;
}> {
  try {
    if (!payload || typeof payload !== "object") {
      return { success: false, message: "Invalid booking payload." };
    }

    const {
      name = "",
      email = "",
      clinic = "",
      phone = "",
      emr = "Jane App",
      callVolume = "100-500",
      slotTime = "",
      timezone = "America/New_York",
    } = payload;

    if (!name.trim() || !email.trim() || !slotTime.trim()) {
      return { success: false, message: "Missing required booking details (name, email, or time slot)." };
    }

    // Step 1: Persist lead to Supabase (Zero Lost Leads Guarantee)
    await persistLead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      clinic: clinic ? clinic.trim() : "Medical Practice",
      practice_type: emr,
      call_volume: callVolume,
      source: "booking_widget",
      status: "booked",
      metadata: { phone, slotTime, timezone },
    });

    let calBookingId = `px-book-${Date.now()}`;

    // Step 2: Forward to Cal.com API v2 if server keys are present
    const calApiKey = process.env.CAL_API_KEY;
    const eventTypeId = process.env.CAL_EVENT_TYPE_ID;

    if (calApiKey && eventTypeId) {
      try {
        const calRes = await fetch("https://api.cal.com/v2/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${calApiKey.trim()}`,
            "cal-api-version": "2024-08-13",
          },
          body: JSON.stringify({
            eventTypeId: Number(eventTypeId),
            start: slotTime,
            attendee: {
              name: name.trim(),
              email: email.trim().toLowerCase(),
              timeZone: timezone,
              phoneNumber: phone,
            },
            metadata: { clinic, emr, callVolume },
          }),
        });

        if (calRes.ok) {
          const calData = await calRes.json();
          calBookingId = calData?.data?.id || calBookingId;
        }
      } catch (err) {
        console.warn("Cal.com API reservation warning (gracefully caught):", err);
      }
    }

    // Step 3: Record confirmed booking in Supabase
    await persistBooking({
      lead_name: name.trim(),
      lead_email: email.trim().toLowerCase(),
      clinic_name: clinic ? clinic.trim() : "Medical Practice",
      phone,
      slot_time: slotTime,
      status: "confirmed",
      cal_booking_id: calBookingId,
    });

    return {
      success: true,
      bookingId: calBookingId,
      message: "Discovery call confirmed successfully.",
    };
  } catch (error) {
    console.error("Booking Server Action Error:", error);
    return {
      success: false,
      message: "An unexpected error occurred while scheduling your appointment.",
    };
  }
}