import React from 'react'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import Offerings from '../components/Offerings'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import CustomSolutions from '../components/CustomSolutions'
import DemoCTA from '../components/DemoCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="space-y-28">
      <Hero />
      <div className="container">
        <SocialProof />
      </div>
      <div className="container">
        <Offerings />
      </div>
      <div className="container">
        <HowItWorks />
      </div>
      <div className="container">
        <Benefits />
      </div>
      <div className="container">
        <CustomSolutions />
      </div>
      <DemoCTA />
      <Footer />
    </div>
  )
}