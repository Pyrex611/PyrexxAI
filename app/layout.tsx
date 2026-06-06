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
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" }, 
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
    "voice AI for therapy clinic",
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
      "Stop losing $67K+ per year to missed calls. PyrexxAI deploys fully custom AI receptionists for MedSpas, dental, and therapy clinics — HIPAA-compliant, live in 14 days.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PyrexxAI",
    url: "https://pyrexxai.com",
    logo: "https://pyrexxai.com/logo.png",
    sameAs: [
      "https://github.com/PyrexxAI",
      "https://linkedin.com/company/pyrexxai",
      "https://x.com/pyrexxai",
      "https://instagram.com/pyrexx_only",
      "https://facebook.com/share/1LXRSNNjPR/?mibextid=wwXlfr",
      "https://youtube.com/@pyrexxai",
			"https://www.tiktok.com/@pyrexx_ai"
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PyrexxAI",
    url: "https://pyrexxai.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://pyrexxai.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Voice Receptionist & Lead Intake Automation",
    provider: {
      "@type": "Organization",
      name: "PyrexxAI",
    },
    areaServed: "US",
    description:
      "Custom-trained AI voice agents for MedSpas, dental clinics, and therapy practices. Handles inbound calls, books appointments, qualifies leads, and integrates with EMR systems — HIPAA-compliant.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PyrexxAI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Receptionist",
            description: "24/7 inbound call handling, appointment booking, and direct EMR integration for healthcare clinics."
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Lead Intake Specialist",
            description: "Automated SMS, web chat, and social lead qualification and booking for MedSpas and clinics."
          },
        },
      ],
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How PyrexxAI Deploys Your AI Receptionist",
    description: "From kickoff to live AI receptionist in under 14 days.",
    step: [
      {
        "@type": "HowToStep",
        name: "Connect",
        text: "We integrate securely with your existing EMR, phone system, and CRM.",
      },
      {
        "@type": "HowToStep",
        name: "Train",
        text: "We train your AI agent on your clinic's FAQs, pricing, tone, and procedures.",
      },
      {
        "@type": "HowToStep",
        name: "Deploy",
        text: "Your AI agent goes live — answering calls, booking appointments, and qualifying leads 24/7.",
      },
      {
        "@type": "HowToStep",
        name: "Optimize",
        text: "We monitor performance and continuously improve your agent's accuracy and conversion rate.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of clinics does PyrexxAI work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MedSpas, dental practices, and therapeutic or mental health clinics. We specialize in high-ticket, high-touch healthcare environments where missing a call means losing significant revenue.",
        },
      },
      {
        "@type": "Question",
        name: "How is PyrexxAI different from a general AI chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are a full-service technical partner, not a DIY software platform. We custom-train voice AI specific to your practice, integrate it directly with your existing EMR, and continually optimize its performance."
        }
      },
      {
        "@type": "Question",
        name: "Is your AI voice agent HIPAA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. Our entire architecture is HIPAA compliant by design. We provide a Business Associate Agreement (BAA) and ensure zero Protected Health Information (PHI) is stored beyond the active session.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to go live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From our initial kickoff call to your AI receptionist handling live patient calls, the standard timeline is exactly 14 days. This includes mapping your workflows, voice training, and EMR integration."
        }
      },
      {
        "@type": "Question",
        name: "Does the AI book directly into my EMR/practice management system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build custom integrations to read your real-time availability and write appointments directly into your existing schedule. No manual data entry is required from your staff."
        }
      },
      {
        "@type": "Question",
        name: "What happens if the AI can't answer a patient's question?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a query falls outside the AI's training or involves a complex medical question, it elegantly escalates the interaction. It takes a detailed message and immediately routes it to your human staff via SMS, email, or your CRM."
        }
      },
      {
        "@type": "Question",
        name: "How does PyrexxAI handle after-hours emergencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We configure custom routing rules for your practice. Routine inquiries are answered and booked, while calls flagged by the caller as medical emergencies are immediately forwarded to your designated on-call doctor."
        }
      },
      {
        "@type": "Question",
        name: "What is the pricing model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We operate on a transparent monthly retainer that includes the AI infrastructure, continuous optimization, and support. Pricing is custom-quoted based on your clinic's call volume and EMR complexity. Because we replace expensive after-hours services and capture lost leads, most clinics see positive ROI in the first 30 days."
        }
      },
      {
        "@type": "Question",
        name: "Can the AI handle multiple calls simultaneously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your PyrexxAI receptionist can handle an unlimited number of concurrent inbound calls. Whether you receive two calls at once or fifty, no patient is ever put on hold or sent to voicemail."
        }
      },
      {
        "@type": "Question",
        name: "Do I need to change my existing phone number or system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You keep your current phone numbers and VOIP system. We simply set up conditional forwarding so that missed calls, or calls during specific hours, are instantly routed to your AI agent."
        }
      }
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Custom AI Receptionists for Clinics</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white dark:bg-gray-950 dark:text-gray-50 transition-colors duration-300`}>
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