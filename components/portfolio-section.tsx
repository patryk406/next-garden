"use client"

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface PortfolioItem {
  title: string
  description: string
  beforeImage: string
  afterImage: string
}

// Przeniesienie danych z komponentu page.tsx
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

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.article
      ref={cardRef}
      className="group overflow-hidden bg-white rounded-2xl border-0 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.beforeImage || "/placeholder.svg"}
              alt={`${item.title} - stan przed realizacją projektu ogrodniczego`}
              width={400}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#3A3A3C] text-white border-[#3A3A3C] font-medium">Przed</Badge>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.afterImage || "/placeholder.svg"}
              alt={`${item.title} - stan po realizacji projektu ogrodniczego`}
              width={400}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-[#6A994E] text-white border-[#6A994E] font-medium">Po</Badge>
            </div>
          </motion.div>
        </div>
      </div>
      <CardHeader className="p-6 sm:p-8">
        <CardTitle className="text-xl md:text-2xl font-semibold text-[#2D2D2D] group-hover:text-[#6A994E] transition-colors duration-300 mb-3">
          {item.title}
        </CardTitle>
        <CardDescription className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
          {item.description}
        </CardDescription>
      </CardHeader>
    </motion.article>
  )
}

export default function PortfolioSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-24 lg:py-32 px-6 bg-white relative"
      aria-labelledby="portfolio-heading"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="portfolio-heading" className="section-title text-[#2D2D2D] mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold"
            >
              Nasze{" "}
            </motion.span>
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A994E] to-[#7DB25F]">
                Realizacje
              </span>
              <span className="absolute -inset-0 z-0 text-[#6A994E] blur-[3px] opacity-20 font-black">
                Realizacje
              </span>
            </motion.span>
          </h2>
          <motion.p
            className="body-text text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Zobacz efekty naszej pracy - przed i po transformacji
          </motion.p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
