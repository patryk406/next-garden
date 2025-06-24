"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
    <CardContent className="p-12 text-center">
      <div
        className="flex justify-center mb-6"
        aria-label={`Ocena: ${testimonial.rating} na 5 gwiazdek`}
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-8 h-8 text-orange-400 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
        {testimonial.text}
      </blockquote>
      <cite className="not-italic">
        <div className="font-bold text-xl text-gray-800">{testimonial.name}</div>
        <div className="text-gray-600 text-lg">{testimonial.location}</div>
      </cite>
    </CardContent>
  </Card>
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
      <button
        key={index}
        role="tab"
        aria-selected={index === currentIndex}
        aria-label={`Opinia ${index + 1}`}
        className={cn(
          "w-4 h-4 rounded-full transition-all duration-300",
          index === currentIndex
            ? "bg-orange-500 scale-125 shadow-lg"
            : "bg-gray-300 hover:bg-orange-300"
        )}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
)

export default function TestimonialsSection({ testimonials }: TestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section
      id="testimonials"
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
          <TestimonialCard testimonial={testimonials[currentTestimonial]} />
          <TestimonialControls 
            testimonials={testimonials} 
            currentIndex={currentTestimonial} 
            setCurrentIndex={setCurrentTestimonial} 
          />
        </div>
      </div>
    </section>
  )
}
