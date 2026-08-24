import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export interface LeadRecord {
  id?: string;
  name: string;
  email: string;
  clinic?: string;
  practice_type?: string;
  call_volume?: string;
  message?: string;
  source: "contact_form" | "booking_widget" | "ai_assistant";
  status: "new" | "qualified" | "contacted" | "booked" | "abandoned";
  created_at?: string;
  metadata?: Record<string, any>;
}

export interface BookingRecord {
  id?: string;
  lead_email: string;
  lead_name: string;
  clinic_name: string;
  phone?: string;
  slot_time: string;
  status: "confirmed" | "cancelled" | "pending";
  cal_booking_id?: string;
  created_at?: string;
}

let supabaseInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false },
    });
  }
  return supabaseInstance;
}

export async function persistLead(lead: LeadRecord): Promise<{ success: boolean; id?: string }> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.warn("Supabase credentials not configured. Lead recorded in server runtime fallback.");
      return { success: true, id: `local-${Date.now()}` };
    }

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: lead.name,
          email: lead.email.toLowerCase().trim(),
          clinic: lead.clinic,
          practice_type: lead.practice_type,
          call_volume: lead.call_volume,
          message: lead.message,
          source: lead.source,
          status: lead.status || "new",
          metadata: lead.metadata || {},
          created_at: new Date().toISOString(),
        },
      ])
      .select("id")
      .single();

    if (error) {
      console.error("Supabase lead write error:", error);
      return { success: false };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    console.error("Unexpected Supabase lead persistence error:", err);
    return { success: false };
  }
}

export async function persistBooking(booking: BookingRecord): Promise<{ success: boolean }> {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return { success: true };
    }

    const { error } = await supabase.from("bookings").insert([
      {
        lead_email: booking.lead_email.toLowerCase().trim(),
        lead_name: booking.lead_name,
        clinic_name: booking.clinic_name,
        phone: booking.phone,
        slot_time: booking.slot_time,
        status: booking.status,
        cal_booking_id: booking.cal_booking_id,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase booking write error:", error);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected Supabase booking error:", err);
    return { success: false };
  }
}