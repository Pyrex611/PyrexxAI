import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the premium SaaS font (Inter)
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pyrexx AI | Premium AI Receptionists for Clinics",
  description: "Deploy premium AI receptionists and lead intake specialists that work 24/7. Automate your clinic's growth and capture every lead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}