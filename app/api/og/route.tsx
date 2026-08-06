import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "AI Voice Receptionist for Medical Clinics";
    const subtitle = searchParams.get("subtitle") || "Answer every patient call 24/7 & sync directly with your EMR.";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#0B0F17",
            padding: "80px",
            fontFamily: "sans-serif",
            backgroundImage: "radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.25) 0%, transparent 50%)",
          }}
        >
          {/* Header Branding */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              PX
            </div>
            <span style={{ fontSize: "32px", fontWeight: "800", color: "#FFFFFF", letterSpacing: "-0.02em" }}>
              PyrexxAI
            </span>
            <div
              style={{
                marginLeft: "16px",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "1px solid rgba(16, 185, 129, 0.4)",
                borderRadius: "999px",
                padding: "6px 16px",
                color: "#10B981",
                fontSize: "14px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              HIPAA Compliant
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "950px" }}>
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "900",
                color: "#FFFFFF",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                margin: "0",
              }}
            >
              {title}
            </h1>
            <p style={{ fontSize: "24px", color: "#9CA3AF", lineHeight: "1.4", margin: "0" }}>
              {subtitle}
            </p>
          </div>

          {/* Footer Metrics */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "32px",
            }}
          >
            <div style={{ display: "flex", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", color: "#6B7280", textTransform: "uppercase", fontWeight: "600" }}>
                  Deployment Time
                </span>
                <span style={{ fontSize: "22px", color: "#60A5FA", fontWeight: "800" }}>14 Days Guaranteed</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "14px", color: "#6B7280", textTransform: "uppercase", fontWeight: "600" }}>
                  EMR Integration
                </span>
                <span style={{ fontSize: "22px", color: "#60A5FA", fontWeight: "800" }}>Jane / Boulevard / Mindbody</span>
              </div>
            </div>
            <span style={{ fontSize: "18px", color: "#2563EB", fontWeight: "700" }}>pyrexxai.com</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate OpenGraph image`, { status: 500 });
  }
}