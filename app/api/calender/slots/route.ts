import { NextResponse } from "next/server";

export const runtime = "edge";

interface SlotResponse {
  date: string;
  slots: string[];
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = searchParams.get("date") || new Date().toISOString().split("T")[0];
    const calApiKey = process.env.CAL_API_KEY;
    const eventTypeId = process.env.CAL_EVENT_TYPE_ID;

    if (calApiKey && eventTypeId) {
      try {
        const calRes = await fetch(
          `https://api.cal.com/v2/slots/available?eventTypeId=${eventTypeId}&startTime=${dateParam}T00:00:00Z&endTime=${dateParam}T23:59:59Z`,
          {
            headers: {
              Authorization: `Bearer ${calApiKey}`,
              "cal-api-version": "2024-08-13",
            },
            cache: "no-store",
          }
        );

        if (calRes.ok) {
          const json = await calRes.json();
          const slots: string[] = json?.data?.slots?.[dateParam]?.map((s: any) => s.time) || [];
          return NextResponse.json({ date: dateParam, slots });
        }
      } catch (err) {
        console.error("Cal.com v2 upstream slot fetching fallback:", err);
      }
    }

    // Dynamic Default Schedule (9:00 AM - 4:30 PM EST)
    const baseHours = ["09:00", "10:30", "11:30", "13:00", "14:30", "15:30", "16:30"];
    const dayOfWeek = new Date(dateParam).getDay();
    const availableSlots = dayOfWeek === 0 || dayOfWeek === 6 ? [] : baseHours;

    return NextResponse.json({
      date: dateParam,
      slots: availableSlots,
    } as SlotResponse);
  } catch (error) {
    return NextResponse.json({ date: "", slots: [] }, { status: 500 });
  }
}