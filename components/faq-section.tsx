"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  faqItems: FaqItem[]
}

const FaqCard = ({ 
  item, 
  isOpen, 
  toggleOpen, 
  index 
}: { 
  item: FaqItem, 
  isOpen: boolean, 
  toggleOpen: () => void, 
  index: number 
}) => (
  <Card className="bg-white/90 gap-0 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
    <CardHeader
      className="cursor-pointer hover:bg-green-50/50 transition-colors duration-300"
      onClick={toggleOpen}
      role="button"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <div className="flex justify-between items-center">
        <CardTitle className="text-xl font-bold text-gray-800 pr-4">{item.question}</CardTitle>
        <ChevronDown
          className={cn(
            "w-6 h-6 text-green-600 transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </div>
    </CardHeader>
    <div
      id={`faq-answer-${index}`}
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <CardContent className="pb-8 pt-8">
        <p className="text-gray-600 leading-relaxed text-lg">{item.answer}</p>
      </CardContent>
    </div>
  </Card>
)

export default function FaqSection({ faqItems }: FaqSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      id="faq"
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
            <FaqCard
              key={index}
              item={item}
              index={index}
              isOpen={openFaq === index}
              toggleOpen={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
