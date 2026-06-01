import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the PyrexxAI virtual assistant, an expert sales engineer for an AI voice receptionist agency. 
Your goal is to answer questions about PyrexxAI concisely, professionally, and accurately, and ultimately guide the user to book a demo.

KEY FACTS ABOUT PYREXXAI:
- We deploy custom-trained AI voice receptionists for MedSpas, Dental Clinics, and Therapy Practices in the US.
- Features: 24/7 inbound call handling, lead intake, direct EMR/EHR booking, missed-call text-back.
- Integration: We integrate natively with Jane App, Mindbody, eClinicalWorks, and other major EMRs.
- Timeline: We go live in exactly 14 days from the kickoff call.
- Compliance: 100% HIPAA compliant. We provide a signed Business Associate Agreement (BAA) to all clients.
- Pricing: $1,500 one-time setup fee, and $1,000/month for platform management.
- Concurrent Calls: The AI can handle an unlimited number of concurrent calls. No one is ever put on hold.
- Call Routing: We can route emergency calls to an on-call doctor.

TONE: Helpful, clinical, confident, and very concise (keep answers under 3 sentences). 
If asked a highly complex question, suggest they book a demo at https://cal.com/clifford-bulya/15min or use the contact form.`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "arcee-ai/trinity-large-preview:free";

    if (!apiKey) {
      console.error("CRITICAL ERROR: OPENROUTER_API_KEY is missing from environment variables.");
      return NextResponse.json(
        { content: "System Configuration Error: The OpenRouter API key is missing on the server. Please add OPENROUTER_API_KEY to your environment." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    // Filter out the hardcoded UI greeting (id: "1") and map remaining messages to OpenRouter roles
    const conversationHistory = messages
      .filter((msg: any) => msg.id !== "1")
      .map((msg: any) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.content,
      }));

    // Inject System Instructions seamlessly at the beginning of the array
    const payloadMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory
    ];

    console.log(`[PyrexxAI] Routing prompt to OpenRouter model: ${model}`);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://pyrexxai.com",
        "X-Title": "PyrexxAI Assistant",
      },
      body: JSON.stringify({
        model: model,
        messages: payloadMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenRouter API error status: ${response.status}`, errorText);
      throw new Error(`OpenRouter API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return NextResponse.json({ content: reply });
  } catch (error) {
    console.error("OpenRouter Integration Error:", error);
    return NextResponse.json(
      { content: "I'm currently experiencing high volume. Please book a demo or use our contact form to speak with our engineering team!" },
      { status: 500 }
    );
  }
}