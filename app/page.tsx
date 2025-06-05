"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Mail, MapPin, Phone, Star } from "lucide-react"
import Image from "next/image"
import { Leaf } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import Navigation from "@/components/navigation"

export default function GardenLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    services: null,
    portfolio: null,
    testimonials: null,
    faq: null,
    contact: null,
  })

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs.current).forEach(([section, ref]) => {
        if (ref) {
          const offsetTop = ref.offsetTop
          const height = ref.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const testimonials = [
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

  const faqItems = [
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

  const portfolioItems = [
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <div className="min-h-screen">
        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

        <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
        <div className="relative min-h-screen z-10 bg-gradient-to-br from-green-50 via-orange-50 to-green-50 overflow-x-hidden">
        <div ref={(el) => (sectionRefs.current.services = el)}>
          <ServicesSection />
        </div>

        {/* Portfolio Section */}
        <section
            id="portfolio"
            ref={(el) => (sectionRefs.current.portfolio = el)}
            className="py-24 px-6 bg-gradient-to-r from-green-50/50 to-orange-50/50 relative"
        >
          <div className="max-w-7xl mx-auto pr-20">
            <header className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Nasze
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Realizacje
              </span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Zobacz efekty naszej pracy - przed i po transformacji
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-10">
              {portfolioItems.map((item, index) => (
                  <article
                      key={index}
                      className="group overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 rounded-2xl"
                  >
                    <div className="relative overflow-hidden">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <Image
                              src={item.beforeImage || "/placeholder.svg"}
                              alt={`${item.title} - stan przed realizacją projektu ogrodniczego`}
                              width={400}
                              height={300}
                              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-red-100 text-red-600 border-red-200 font-semibold">Przed</Badge>
                          </div>
                        </div>
                        <div className="relative">
                          <Image
                              src={item.afterImage || "/placeholder.svg"}
                              alt={`${item.title} - stan po realizacji projektu ogrodniczego`}
                              width={400}
                              height={300}
                              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-green-100 text-green-600 border-green-200 font-semibold">Po</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-8">
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-3">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-lg leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 px-6" aria-labelledby="why-us-heading">
          <div className="max-w-7xl mx-auto pr-20">
            <header className="text-center mb-20">
              <h2 id="why-us-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Dlaczego{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">My?</span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto">Nasze przewagi konkurencyjne</p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
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
                  icon: <Phone className="w-10 h-10" aria-hidden="true" />,
                  title: "Dostępność 24/7",
                  desc: "Zawsze jesteśmy gotowi pomóc",
                },
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
                      </svg>
                  ),
                  title: "Gwarancja jakości",
                  desc: "Pełna gwarancja na wszystkie usługi",
                },
              ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
                      <div className="text-green-600 group-hover:text-orange-500 transition-colors duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
            id="testimonials"
            ref={(el) => (sectionRefs.current.testimonials = el)}
            className="py-24 px-6 bg-gradient-to-r from-green-50/50 to-orange-50/50"
            aria-labelledby="testimonials-heading"
        >
          <div className="max-w-5xl mx-auto pr-20">
            <header className="text-center mb-20">
              <h2 id="testimonials-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Opinie
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                Klientów
              </span>
              </h2>
              <p className="text-2xl text-gray-700">Zobacz co mówią o nas nasi klienci</p>
            </header>

            <div className="relative">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <div
                      className="flex justify-center mb-6"
                      aria-label={`Ocena: ${testimonials[currentTestimonial].rating} na 5 gwiazdek`}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 text-orange-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </blockquote>
                  <cite className="not-italic">
                    <div className="font-bold text-xl text-gray-800">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600 text-lg">{testimonials[currentTestimonial].location}</div>
                  </cite>
                </CardContent>
              </Card>

              <div className="flex justify-center mt-8 space-x-3" role="tablist" aria-label="Wybierz opinię klienta">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={index === currentTestimonial}
                        aria-label={`Opinia ${index + 1}`}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === currentTestimonial
                                ? "bg-orange-500 scale-125 shadow-lg"
                                : "bg-gray-300 hover:bg-orange-300"
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
            id="faq"
            ref={(el) => (sectionRefs.current.faq = el)}
            className="py-24 px-6"
            aria-labelledby="faq-heading"
        >
          <div className="max-w-5xl mx-auto pr-20">
            <header className="text-center mb-20">
              <h2 id="faq-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Często zadawane{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                pytania
              </span>
              </h2>
              <p className="text-2xl text-gray-700">Znajdź odpowiedzi na najczęstsze pytania</p>
            </header>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                  <Card
                      key={index}
                      className="bg-white/90 gap-0 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader
                        className="cursor-pointer hover:bg-green-50/50 transition-colors duration-300"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        role="button"
                        aria-expanded={openFaq === index}
                        aria-controls={`faq-answer-${index}`}
                    >
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-bold text-gray-800 pr-4">{item.question}</CardTitle>
                        <ChevronDown
                            className={`w-6 h-6 text-green-600 transition-transform duration-300 flex-shrink-0 ${
                                openFaq === index ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                        />
                      </div>
                    </CardHeader>
                    <div
                        id={`faq-answer-${index}`}
                        className={`overflow-hidden transition-all duration-300 ${
                            openFaq === index ? "max-h-96 opacity-100" : "max-h-0  opacity-0"
                        }`}
                    >
                      <CardContent className="pb-8 pt-8">
                        <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
                      </CardContent>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
            id="contact"
            ref={(el) => (sectionRefs.current.contact = el)}
            className="py-24 px-6 bg-gradient-to-r from-green-50/50 to-orange-50/50"
            aria-labelledby="contact-heading"
        >
          <div className="max-w-7xl mx-auto pr-20">
            <header className="text-center mb-20">
              <h2 id="contact-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Skontaktuj się{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                z nami
              </span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Rozpocznij transformację swojego ogrodu już dziś
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <address className="space-y-12 not-italic">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <MapPin
                        className="w-8 h-8 text-green-600 group-hover:text-orange-500 transition-colors duration-300"
                        aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Nasz adres</h3>
                    <p className="text-gray-600 text-lg">ul. Ogrodowa 123, 00-001 Warszawa</p>
                    <p className="text-gray-500">Obsługujemy całą Polskę</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Phone
                        className="w-8 h-8 text-green-600 group-hover:text-orange-500 transition-colors duration-300"
                        aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Telefon</h3>
                    <p className="text-gray-600 text-lg">
                      <a href="tel:+48123456789" className="hover:text-green-600 transition-colors">
                        +48 123 456 789
                      </a>
                    </p>
                    <p className="text-gray-500">Dostępny 7 dni w tygodniu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Mail
                        className="w-8 h-8 text-green-600 group-hover:text-orange-500 transition-colors duration-300"
                        aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">
                      <a href="mailto:kontakt@fantastyczneogrody.pl" className="hover:text-green-600 transition-colors">
                        kontakt@fantastyczneogrody.pl
                      </a>
                    </p>
                    <p className="text-gray-500">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
              </address>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="w-full h-80 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-gray-700 mb-2">Mapa lokalizacji</h3>
                      <p className="text-gray-600 text-lg">ul. Ogrodowa 123</p>
                      <p className="text-gray-500">00-001 Warszawa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-6" role="contentinfo">
          <div className="max-w-7xl mx-auto pr-20">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <svg
                      className="h-12 w-12 mr-3"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                  >
                    <path
                        d="M30 10C30 10 20 20 35 30C50 40 40 50 30 50"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="animate-draw-path"
                    />
                    <path
                        d="M20 50C20 50 10 30 20 20C30 10 40 20 40 30C40 40 30 50 20 50Z"
                        fill="#FF9800"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        className="animate-fill-shape"
                    />
                    <circle cx="15" cy="15" r="3" fill="#FFFFFF" className="animate-pop" />
                    <circle cx="45" cy="25" r="3" fill="#FFFFFF" className="animate-pop-delay-1" />
                    <circle cx="25" cy="45" r="3" fill="#FFFFFF" className="animate-pop-delay-2" />
                  </svg>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-orange-300">
                    Fantastyczne Ogrody
                  </h3>
                </div>
                <p className="text-green-100 leading-relaxed text-lg">
                  Profesjonalne usługi ogrodnicze z pasją i zaangażowaniem. Tworzymy ogrody, które zachwycają przez cały
                  rok.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-300">Nasze usługi</h4>
                <ul className="space-y-3 text-green-100">
                  <li className="hover:text-orange-300 transition-colors duration-300">Projektowanie ogrodów</li>
                  <li className="hover:text-orange-300 transition-colors duration-300">Systemy nawadniania</li>
                  <li className="hover:text-orange-300 transition-colors duration-300">Zakładanie trawników</li>
                  <li className="hover:text-orange-300 transition-colors duration-300">Pielęgnacja drzew</li>
                  <li className="hover:text-orange-300 transition-colors duration-300">Ogrody kwiatowe</li>
                  <li className="hover:text-orange-300 transition-colors duration-300">Elementy małej architektury</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-300">Kontakt</h4>
                <address className="space-y-4 not-italic">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-300" aria-hidden="true" />
                    <span className="text-green-100">ul. Ogrodowa 123, 00-001 Warszawa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-300" aria-hidden="true" />
                    <a href="tel:+48123456789" className="text-green-100 hover:text-orange-300 transition-colors">
                      +48 123 456 789
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-300" aria-hidden="true" />
                    <a
                        href="mailto:kontakt@fantastyczneogrody.pl"
                        className="text-green-100 hover:text-orange-300 transition-colors"
                    >
                      kontakt@fantastyczneogrody.pl
                    </a>
                  </div>
                </address>
              </div>
            </div>

            <div className="border-t border-green-700 pt-8 text-center">
              <p className="text-green-200 text-lg">
                © {new Date().getFullYear()} Fantastyczne Ogrody. Wszystkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </footer>
        </div>
      </div>
  )
}
