import { NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are the PyrexxAI virtual assistant, an expert sales engineer for an AI voice receptionist agency. 
Your goal is to answer questions about PyrexxAI concisely, professionally, and accurately, and guide the user to book a demo.

KEY FACTS ABOUT PYREXXAI:
- We deploy custom-trained AI voice receptionists for MedSpas, Dental Clinics, and Therapy Practices in the US.
- Features: 24/7 inbound call handling, lead intake, direct EMR/EHR booking, missed-call text-back.
- Integration: We integrate natively with Jane App, Mindbody, eClinicalWorks, Boulevard, and other major EMRs.
- Timeline: We go live in exactly 14 days from the kickoff call.
- Compliance: 100% HIPAA compliant. We provide a signed Business Associate Agreement (BAA) to all clients.
- Pricing: $1,500 one-time setup fee, and $1,000/month for platform management.
- Concurrent Calls: The AI handles unlimited concurrent calls. Zero hold times.

FORMATTING RULES:
- Use markdown links for URLs.
- Book demo: [book a free demo](/book-demo)
- Contact form: [contact form](/contact)
- HIPAA compliance: [HIPAA compliance page](/hipaa-compliance)
- Solutions: [solutions page](/ai-receptionist)
- Keep responses ultra-concise (under 3 sentences).`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "arcee-ai/trinity-large-preview:free";

    if (!apiKey) {
      return NextResponse.json(
        { content: "System Error: OpenRouter API key missing. Please check server configuration." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    const conversationHistory = messages
      .filter((msg: any) => msg.id !== "1")
      .map((msg: any) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: msg.content,
      }));

    const payloadMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory,
    ];

    const openRouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
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
        max_tokens: 800,
        stream: true,
      }),
    });

    if (!openRouterRes.ok) {
      const errorText = await openRouterRes.text();
      throw new Error(`OpenRouter status ${openRouterRes.status}: ${errorText}`);
    }

    // Stream the response directly back to the client using TransformStream
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = openRouterRes.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith(":")) continue;
            if (trimmed === "data: [DONE]") {
              controller.close();
              return;
            }

            if (trimmed.startsWith("data: ")) {
              try {
                const parsed = JSON.parse(trimmed.slice(6));
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch (e) {
                // Ignore parse errors on chunk boundaries
              }
            }
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("OpenRouter Stream Error:", error);
    return NextResponse.json(
      { content: "I'm having trouble connecting to the network right now. Please [book a free demo](/book-demo) directly!" },
      { status: 500 }
    );
  }
}