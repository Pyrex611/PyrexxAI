import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import AIAssistant from "@/components/AIAssistant";
import CookieBanner from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F17" }, 
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pyrexxai.com"),
  title: {
    default: "PyrexxAI | AI Voice Receptionists for MedSpas & Dental Clinics",
    template: "%s | PyrexxAI",
  },
  description:
    "PyrexxAI deploys custom-trained AI voice receptionists for MedSpas, dental clinics, and therapy practices. Capture every call 24/7, book appointments automatically, and eliminate missed revenue — HIPAA-compliant.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "PyrexxAI",
    statusBarStyle: "default",
  },
  keywords: [
    "AI receptionist for medspa",
    "AI voice agent dental clinic",
    "AI front desk healthcare",
    "HIPAA compliant AI receptionist",
    "automated appointment booking clinic",
    "AI lead intake medical practice",
    "24/7 AI phone answering medspa",
    "Jane App AI integration",
    "Boulevard EMR AI voice agent"
  ],
  authors: [{ name: "PyrexxAI" }],
  creator: "PyrexxAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pyrexxai.com",
    siteName: "PyrexxAI",
    title: "PyrexxAI — AI Voice Receptionists That Never Miss a Patient Call",
    description:
      "Stop losing Revenue to missed calls. PyrexxAI deploys fully custom AI receptionists for MedSpas, dental, and therapy clinics — HIPAA-compliant, live in 14 days.",
    images: [
      {
        url: "https://pyrexxai.com/api/og?title=AI%20Voice%20Receptionist%20for%20Clinics",
        width: 1200,
        height: 630,
        alt: "PyrexxAI — AI Voice Receptionists for Healthcare Clinics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PyrexxAI — AI Receptionists for MedSpas & Clinics",
    description:
      "Custom AI voice agents that answer every call, book appointments 24/7, and integrate with your EMR. HIPAA-compliant. Live in 14 days.",
    images: ["https://pyrexxai.com/api/og?title=AI%20Voice%20Receptionist%20for%20Clinics"],
    creator: "@pyrexxai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pyrexxai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Expanded Schema with Wikidata Entity Interlinking (E-E-A-T & GEO)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PyrexxAI",
    url: "https://pyrexxai.com",
    logo: "https://pyrexxai.com/logo.png",
    sameAs: [
      "https://github.com/PyrexxAI",
      "https://linkedin.com/company/pyrexxai",
      "https://twitter.com/pyrexxai",
      "https://instagram.com/pyrexxai",
      "https://facebook.com/pyrexxai",
      "https://youtube.com/@pyrexxai"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@pyrexxai.com",
      telephone: "+13023376310",
      contactType: "sales",
      availableLanguage: "English",
      areaServed: "US"
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PyrexxAI Voice Receptionist Engine",
    operatingSystem: "Cloud / Web",
    applicationCategory: "HealthApplication",
    sameAs: [
      "https://www.wikidata.org/wiki/Q356350", // HIPAA
      "https://www.wikidata.org/wiki/Q1140323" // Electronic Health Record
    ],
    offers: {
      "@type": "Offer",
      price: "1500.00",
      priceCurrency: "USD"
    }
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white dark:bg-[#0B0F17] dark:text-gray-50 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster position="bottom-right" richColors />
          <AIAssistant />
          {children}
          <Analytics />
          <SpeedInsights />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}