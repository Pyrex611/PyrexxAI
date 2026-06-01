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

export default function ContactTemplate({ name, email, clinic, practiceType, callVolume, message }: ContactTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New PyrexxAI Inquiry from {name} at {clinic}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans text-gray-900">
          <Container className="bg-white border border-gray-200 rounded-xl my-10 mx-auto p-8 max-w-xl">
            <Heading className="text-2xl font-bold text-blue-600 mb-6">New Enterprise Lead</Heading>
            <Section className="mb-6">
              <Text className="text-base leading-relaxed mb-2"><strong>Name:</strong> {name}</Text>
              <Text className="text-base leading-relaxed mb-2"><strong>Email:</strong> {email}</Text>
              <Text className="text-base leading-relaxed mb-2"><strong>Clinic:</strong> {clinic}</Text>
              <Text className="text-base leading-relaxed mb-2"><strong>Practice Type:</strong> {practiceType}</Text>
              <Text className="text-base leading-relaxed mb-2"><strong>Monthly Calls:</strong> {callVolume}</Text>
            </Section>
            <Hr className="border-gray-200 my-6" />
            <Section>
              <Text className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Scope & EMR Details</Text>
              <Text className="text-base leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}