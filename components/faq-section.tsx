"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useInView } from "framer-motion"

interface FaqItem {
  question: string
  answer: string
}

// Przeniesienie danych z komponentu page.tsx
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
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-white gap-0 rounded-xl border-0 shadow-md hover:shadow-lg transition-all duration-300">
        <CardHeader
          className="cursor-pointer hover:bg-[#F5F1E3]/50 transition-colors duration-300"
          onClick={toggleOpen}
          role="button"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg sm:text-xl font-semibold text-[#2D2D2D] pr-4">{item.question}</CardTitle>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown
                className="w-6 h-6 text-[#6A994E] flex-shrink-0"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </CardHeader>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`faq-answer-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="pb-6 pt-0 sm:pb-8 sm:pt-2">
                <motion.p
                  className="text-[#4A4A4A] leading-relaxed text-base sm:text-lg"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {item.answer}
                </motion.p>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 lg:py-32 px-6 bg-[#F5F1E3]/30"
      aria-labelledby="faq-heading"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        <motion.header
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="faq-heading" className="section-title text-[#2D2D2D] mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold"
            >
              Często zadawane{" "}
            </motion.span>
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A994E] to-[#7DB25F]">
                pytania
              </span>
              <span className="absolute -inset-0 z-0 text-[#6A994E] blur-[3px] opacity-20 font-black">
                pytania
              </span>
            </motion.span>
          </h2>
          <motion.p
            className="body-text text-[#4A4A4A] max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Znajdź odpowiedzi na najczęstsze pytania
          </motion.p>
        </motion.header>

        <div className="space-y-4 sm:space-y-6">
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
