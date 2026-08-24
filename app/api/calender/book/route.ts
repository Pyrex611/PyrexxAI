import { NextResponse } from "next/server";
import { persistBooking, persistLead } from "@/lib/supabase";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, clinic, phone, emr, callVolume, slotTime, timezone = "America/New_York" } = body;

    if (!name || !email || !slotTime) {
      return NextResponse.json(
        { success: false, message: "Missing required booking parameters." },
        { status: 400 }
      );
    }

    await persistLead({
      name,
      email,
      clinic: clinic || "Medical Practice",
      practice_type: emr || "Healthcare",
      call_volume: callVolume || "Unknown",
      source: "booking_widget",
      status: "booked",
      metadata: { phone, slotTime, timezone },
    });

    let calBookingId = `px-book-${Date.now()}`;

    const calApiKey = process.env.CAL_API_KEY;
    const eventTypeId = process.env.CAL_EVENT_TYPE_ID;

    if (calApiKey && eventTypeId) {
      try {
        const calRes = await fetch("https://api.cal.com/v2/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${calApiKey}`,
            "cal-api-version": "2024-08-13",
          },
          body: JSON.stringify({
            eventTypeId: Number(eventTypeId),
            start: slotTime,
            attendee: {
              name,
              email,
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
        console.error("Cal.com API booking write warning:", err);
      }
    }

    await persistBooking({
      lead_name: name,
      lead_email: email,
      clinic_name: clinic || "Medical Practice",
      phone,
      slot_time: slotTime,
      status: "confirmed",
      cal_booking_id: calBookingId,
    });

    return NextResponse.json({
      success: true,
      bookingId: calBookingId,
      message: "Discovery call scheduled successfully.",
    });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error scheduling booking." },
      { status: 500 }
    );
  }
}