import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

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
    const body = await req.json();
    const { messages } = body;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT 
    });

    // 1. Remove the initial hardcoded AI greeting from the history context (id: "1")
    const rawHistory = messages.slice(0, -1).filter((msg: any) => msg.id !== "1");

    // 2. Format history and ensure alternating user/model sequence
    let formattedHistory: { role: string; parts: { text: string }[] }[] = [];
    let lastRole = "";

    for (const msg of rawHistory) {
      const currentRole = msg.role === "ai" ? "model" : "user";
      
      if (currentRole === lastRole) {
        // Gemini strictly requires alternating roles. Combine sequential messages from the same role.
        formattedHistory[formattedHistory.length - 1].parts[0].text += `\n${msg.content}`;
      } else {
        formattedHistory.push({
          role: currentRole,
          parts: [{ text: msg.content }]
        });
        lastRole = currentRole;
      }
    }

    // 3. Ensure the absolute first message in the history array is a "user" message
    if (formattedHistory.length > 0 && formattedHistory[0].role === "model") {
      formattedHistory.shift();
    }

    const chat = model.startChat({ history: formattedHistory });
    const latestMessage = messages[messages.length - 1].content;

    const result = await chat.sendMessage(latestMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { content: "I'm currently experiencing high volume. Please book a demo or use our contact form to speak with our engineering team!" },
      { status: 500 }
    );
  }
}