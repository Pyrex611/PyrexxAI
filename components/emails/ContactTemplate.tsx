import * as React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text, Tailwind } from "@react-email/components";

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
      <Tailwind>
        <Body className="bg-gray-50 font-sans text-gray-900">
          <Container className="bg-white border border-gray-200 rounded-2xl my-10 mx-auto p-8 max-w-xl shadow-sm">
            <Heading className="text-2xl font-bold text-blue-600 mb-6">New Enterprise Inbound Lead</Heading>
            <Section className="mb-6 space-y-2">
              <Text className="text-base leading-relaxed m-0 mb-1"><strong>Prospect Name:</strong> {name}</Text>
              <Text className="text-base leading-relaxed m-0 mb-1"><strong>Work Email:</strong> {email}</Text>
              <Text className="text-base leading-relaxed m-0 mb-1"><strong>Clinic / Practice:</strong> {clinic}</Text>
              <Text className="text-base leading-relaxed m-0 mb-1"><strong>Specialty Type:</strong> {practiceType}</Text>
              <Text className="text-base leading-relaxed m-0 mb-1"><strong>Monthly Inbound Volume:</strong> {callVolume}</Text>
            </Section>
            <Hr className="border-gray-200 my-6" />
            <Section>
              <Text className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Scope & EMR Requirements</Text>
              <Text className="text-sm leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200 text-gray-800">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}