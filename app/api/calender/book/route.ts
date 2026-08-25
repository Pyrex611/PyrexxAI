import { NextResponse } from "next/server";
import { submitBookingAction } from "@/app/actions/booking";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const result = await submitBookingAction(body);

    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error) {
    console.error("Booking Route Handler Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during booking." },
      { status: 500 }
    );
  }
}