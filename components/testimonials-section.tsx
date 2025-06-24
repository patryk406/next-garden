"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useInView } from "framer-motion"

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

// Przeniesienie danych z komponentu page.tsx
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="bg-white rounded-2xl border-0 shadow-xl">
      <CardContent className="p-6 sm:p-10 text-center">
        <motion.div
          className="flex justify-center mb-6"
          aria-label={`Ocena: ${testimonial.rating} na 5 gwiazdek`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#D98E73] fill-current" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
        <motion.blockquote
          className="text-xl sm:text-2xl text-[#2D2D2D] mb-8 italic leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {testimonial.text}
        </motion.blockquote>
        <motion.cite
          className="not-italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="font-bold text-lg sm:text-xl text-[#3A3A3C]">{testimonial.name}</div>
          <div className="text-[#4A4A4A] text-base sm:text-lg">{testimonial.location}</div>
        </motion.cite>
      </CardContent>
    </Card>
  </motion.div>
)

const TestimonialControls = ({ 
  testimonials, 
  currentIndex, 
  setCurrentIndex 
}: { 
  testimonials: Testimonial[], 
  currentIndex: number, 
  setCurrentIndex: (index: number) => void 
}) => (
  <div className="flex justify-center mt-8 space-x-3" role="tablist" aria-label="Wybierz opinię klienta">
    {testimonials.map((_, index) => (
      <motion.button
        key={index}
        role="tab"
        aria-selected={index === currentIndex}
        aria-label={`Opinia ${index + 1}`}
        className={cn(
          "w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300",
          index === currentIndex
            ? "bg-[#D98E73] scale-125 shadow-lg"
            : "bg-[#B2B2B2] hover:bg-[#D98E73]/70"
        )}
        onClick={() => setCurrentIndex(index)}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </div>
)

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 lg:py-32 px-6 bg-[#F5F1E3]/50"
      aria-labelledby="testimonials-heading"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        <motion.header
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="testimonials-heading" className="section-title text-[#2D2D2D] mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold"
            >
              Opinie{" "}
            </motion.span>
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A994E] to-[#7DB25F]">
                Klientów
              </span>
              <span className="absolute -inset-0 z-0 text-[#6A994E] blur-[3px] opacity-20 font-black">
                Klientów
              </span>
            </motion.span>
          </h2>
          <motion.p
            className="body-text text-[#4A4A4A] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Zobacz co mówią o nas nasi klienci
          </motion.p>
        </motion.header>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <TestimonialCard key={currentTestimonial} testimonial={testimonials[currentTestimonial]} />
          </AnimatePresence>
          <TestimonialControls
            testimonials={testimonials}
            currentIndex={currentTestimonial}
            setCurrentIndex={setCurrentTestimonial} 
          />
        </motion.div>
      </div>
    </section>
  )
}
