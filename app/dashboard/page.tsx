import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Live Dashboard Demo | PyrexxAI",
  description: "Explore the PyrexxAI Command Center. View live call logs, intent maps, EMR integrations, and real-time patient acquisition analytics.",
  alternates: {
    canonical: "https://pyrexxai.com/dashboard",
  },
};

export default function DashboardDemoPage() {
  return <DashboardClient />;
}
