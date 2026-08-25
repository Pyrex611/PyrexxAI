import * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactTemplateProps {
  name: string;
  email: string;
  clinic: string;
  practiceType: string;
  callVolume: string;
  message: string;
}

export default function ContactTemplate({
  name,
  email,
  clinic,
  practiceType,
  callVolume,
  message,
}: ContactTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New PyrexxAI Lead Inbound: {name} at {clinic}</Preview>
      <Body style={{ backgroundColor: "#F9FAFB", fontFamily: "sans-serif", margin: 0, padding: "20px" }}>
        <Container style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "16px", margin: "40px auto", padding: "32px", maxWidth: "560px" }}>
          <Heading style={{ fontSize: "22px", fontWeight: "800", color: "#2563EB", margin: "0 0 20px 0" }}>
            New Enterprise Lead Inbound
          </Heading>
          
          <Section style={{ marginBottom: "24px" }}>
            <Text style={{ fontSize: "14px", lineHeight: "24px", color: "#1F2937", margin: "0 0 8px 0" }}>
              <strong>Prospect Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "24px", color: "#1F2937", margin: "0 0 8px 0" }}>
              <strong>Work Email:</strong> <a href={`mailto:${email}`} style={{ color: "#2563EB" }}>{email}</a>
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "24px", color: "#1F2937", margin: "0 0 8px 0" }}>
              <strong>Clinic / Organization:</strong> {clinic}
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "24px", color: "#1F2937", margin: "0 0 8px 0" }}>
              <strong>Specialty Type:</strong> {practiceType}
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "24px", color: "#1F2937", margin: "0 0 8px 0" }}>
              <strong>Monthly Inbound Volume:</strong> {callVolume}
            </Text>
          </Section>

          <Hr style={{ borderColor: "#E5E7EB", margin: "24px 0" }} />

          <Section>
            <Text style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#6B7280", margin: "0 0 8px 0" }}>
              Scope & EMR Requirements
            </Text>
            <Text style={{ fontSize: "14px", lineHeight: "22px", backgroundColor: "#F3F4F6", padding: "16px", borderRadius: "12px", border: "1px solid #E5E7EB", color: "#111827", margin: 0 }}>
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}