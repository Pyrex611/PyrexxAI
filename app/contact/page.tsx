import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | PyrexxAI Enterprise Solutions",
  description: "Get in touch with PyrexxAI. Request an audit, ask about EMR integrations, or secure a custom AI voice receptionist for your clinic.",
  alternates: {
    canonical: "https://pyrexxai.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Let's modernize your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600 dark:from-brand-400 dark:to-accent-400">
              patient intake operations.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you need a custom EMR integration or a full-scale AI phone deployment, our engineering team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Direct Channels</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
                    <a href="mailto:hello@pyrexxai.com" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      hello@pyrexxai.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Call Our AI Agent</h4>
                    <a href="tel:+13023376310" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      +1 (302) 337-6310
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Live Demo</h4>
                    <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      Schedule via Cal.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-brand-600 dark:text-brand-400 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Headquarters</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Serving Medical Clinics & MedSpas Nationwide
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}