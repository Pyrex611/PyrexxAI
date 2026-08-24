import { NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are the PyrexxAI virtual assistant, an expert sales engineer for an enterprise AI voice receptionist agency. 
Your goal is to answer questions about PyrexxAI concisely, professionally, and accurately, and guide the user to book a discovery call.

KEY FACTS ABOUT PYREXXAI:
- We deploy custom-trained AI voice receptionists for MedSpas, Dental Clinics, and Therapy Practices in the US.
- Features: 24/7 inbound call handling, lead intake, direct EMR/EHR booking, missed-call text-back.
- Integration: We integrate natively with Jane App, Mindbody, eClinicalWorks, Boulevard, and other major EMRs.
- Timeline: We go live in exactly 14 days from the kickoff call.
- Compliance: 100% HIPAA compliant. We provide a signed Business Associate Agreement (BAA) to all clients.
- Data Policy: Zero PHI is used to train public foundation AI models. Data is encrypted in transit (TLS 1.3) and at rest (AES-256).
- Pricing: $1,500 one-time setup fee, and $1,000/month for platform management.
- Concurrent Calls: The AI handles unlimited concurrent calls. Zero hold times.

FORMATTING RULES:
- Use markdown links for URLs:
  - Book demo: [book a free demo](/book-demo)
  - Contact form: [contact form](/contact)
  - HIPAA compliance: [HIPAA compliance page](/hipaa-compliance)
  - Solutions: [solutions page](/ai-receptionist)
- Keep responses ultra-concise (under 3 sentences).`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct";

    if (!apiKey) {
      return NextResponse.json(
        { content: "Please [book a free demo](/book-demo) to speak directly with our engineering team!" },
        { status: 200 }
      );
    }

    const body = await req.json().catch(() => ({ messages: [] }));
    const { messages = [] } = body;

    const conversationHistory = messages
      .filter((msg: any) => msg.id !== "1" && msg.content)
      .map((msg: any) => ({
        role: msg.role === "ai" ? "assistant" : "user",
        content: String(msg.content).slice(0, 1000),
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
        temperature: 0.5,
        max_tokens: 400,
        stream: true,
      }),
    });

    if (!openRouterRes.ok) {
      return NextResponse.json(
        { content: "We are experiencing high traffic. Please [book a free demo](/book-demo) directly or visit our [contact form](/contact)!" },
        { status: 200 }
      );
    }

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

        try {
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
                } catch {
                  // Ignore JSON boundary splits
                }
              }
            }
          }
        } catch {
          controller.enqueue(encoder.encode(" Please [book a free demo](/book-demo) to continue!"));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("OpenRouter Route Error:", error);
    return NextResponse.json(
      { content: "I'm having trouble connecting right now. Please [book a free demo](/book-demo) directly!" },
      { status: 200 }
    );
  }
}