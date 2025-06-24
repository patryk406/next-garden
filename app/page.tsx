"use client"

import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import WhyUsSection from "@/components/why-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function GardenLandingPage() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

      <div className="relative min-h-screen z-10 bg-gradient-to-br from-green-50 via-orange-50 to-green-50 overflow-x-hidden">
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
