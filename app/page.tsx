import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Results from '@/components/Results';
import TrustHIPAA from '@/components/TrustHIPAA';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const ROICalculator = dynamic(() => import('@/components/ROICalculator'), { ssr: true });
const Offerings = dynamic(() => import('@/components/Offerings'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const CustomPositioning = dynamic(() => import('@/components/CustomPositioning'), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true });

export default function PyrexxAILandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 selection:bg-brand-100 dark:selection:bg-brand-900/50 selection:text-brand-900 dark:selection:text-brand-100 transition-colors duration-300">
      <Navbar />
      <Hero />
      {/* StatsBar is now cleanly invoked right after the hero, framing the dashboard preview */}
      <StatsBar />
      <ROICalculator />
      <Offerings />
      <HowItWorks />
      <Results />
      <TrustHIPAA />
      <CustomPositioning />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}