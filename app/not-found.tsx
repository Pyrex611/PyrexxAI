import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertCircle, ArrowRight } from "lucide-react";
import { CAL_LINK } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0B0F17] text-gray-900 dark:text-gray-50 transition-colors duration-300">
      <Navbar />

      <section className="flex-grow flex items-center justify-center pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10 text-gray-400 dark:text-gray-600" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track to modernizing your clinic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/"
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-cta hover:shadow-cta-hover flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              Return Home <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href={CAL_LINK}
              className="w-full sm:w-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}