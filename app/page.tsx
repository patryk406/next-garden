"use client"

import { Leaf } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import WhyUsSection from "@/components/why-us-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

interface FaqItem {
  question: string
  answer: string
}

interface PortfolioItem {
  title: string
  description: string
  beforeImage: string
  afterImage: string
}

interface FeatureItem {
  icon: React.ReactNode
  title: string
  desc: string
}

export default function GardenLandingPage() {

  const testimonials: Testimonial[] = [
    {
      name: "Anna Kowalska",
      location: "Kraków",
      text: "Mój ogród nigdy nie wyglądał lepiej! Profesjonalne podejście i piękne efekty.",
      rating: 5,
    },
    {
      name: "Marek Nowak",
      location: "Warszawa",
      text: "Ekspresowa pomoc przed ślubem córki. Ogród wyglądał jak z bajki!",
      rating: 5,
    },
    {
      name: "Ewa Wiśniewska",
      location: "Gdańsk",
      text: "Kompleksowa opieka przez cały rok. Polecam każdemu miłośnikowi zieleni.",
      rating: 5,
    },
  ]

  const faqItems: FaqItem[] = [
    {
      question: "Jak często należy kosić trawnik?",
      answer:
          "W sezonie wegetacyjnym zalecamy koszenie co 7-10 dni, dostosowując częstotliwość do tempa wzrostu trawy i warunków pogodowych.",
    },
    {
      question: "Czy używacie ekologicznych środków?",
      answer:
          "Tak, priorytetowo stosujemy naturalne i ekologiczne metody pielęgnacji, bezpieczne dla środowiska, dzieci i zwierząt.",
    },
    {
      question: "Jakie są koszty projektowania ogrodu?",
      answer:
          "Koszt projektu zależy od wielkości i złożoności. Podstawowy projekt zaczyna się od 500 zł, kompleksowy projekt z wizualizacją 3D od 1500 zł.",
    },
    {
      question: "Czy oferujecie gwarancję na swoje usługi?",
      answer:
          "Tak, udzielamy gwarancji na wszystkie nasze usługi. Na nasadzenia 12 miesięcy, na systemy nawadniania 24 miesiące.",
    },
    {
      question: "W jakim czasie realizujecie projekty?",
      answer:
          "Czas realizacji zależy od zakresu prac. Podstawowe projekty 1-2 tygodnie, kompleksowe przekształcenia mogą trwać do 6 tygodni.",
    },
  ]

  const portfolioItems: PortfolioItem[] = [
    {
      title: "Nowoczesny ogród miejski",
      description: "Transformacja małego podwórka w zielony raj",
      beforeImage: "/placeholder.jpg",
      afterImage: "/placeholder.jpg",
    },
    {
      title: "Klasyczny ogród angielski",
      description: "Renowacja zabytkowego ogrodu",
      beforeImage: "/placeholder.jpg",
      afterImage: "/placeholder.jpg",
    },
    {
      title: "Ogród na dachu",
      description: "Stworzenie zielonej przestrzeni na tarasie",
      beforeImage: "/placeholder.jpg",
      afterImage: "/placeholder.jpg",
    },
    {
      title: "Ogród rodzinny",
      description: "Przestrzeń dla całej rodziny z placem zabaw",
      beforeImage: "/placeholder.jpg",
      afterImage: "/placeholder.jpg",
    },
  ]

  const features: FeatureItem[] = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-draw-path"
          />
          <path
            d="M8 14L4 21H20L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-path-delay-1"
          />
        </svg>
      ),
      title: "15 lat doświadczenia",
      desc: "Setki zadowolonych klientów w całej Polsce",
    },
    {
      icon: <Leaf className="w-10 h-10" aria-hidden="true" />,
      title: "Metody ekologiczne",
      desc: "Bezpieczne dla środowiska i Twojej rodziny",
    },
    {
      icon: <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-draw-path"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw-path-delay-1"
        />
      </svg>,
      title: "Gwarancja jakości",
      desc: "Pełna gwarancja na wszystkie usługi",
    },
    {
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5.48999V20.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.75 8.48999H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 11.49H5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>,
      title: "Kompleksowe usługi",
      desc: "Od projektu po regularną pielęgnację",
    }
  ]

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
          <PortfolioSection portfolioItems={portfolioItems} />
        <WhyUsSection features={features} />
          <TestimonialsSection testimonials={testimonials} />
          <FaqSection faqItems={faqItems} />
          <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
