"use client"

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"

interface PortfolioItem {
  title: string
  description: string
  beforeImage: string
  afterImage: string
}

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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.18,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
      <motion.article
          ref={cardRef}
          className="group overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform rounded-2xl"
          custom={index}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.035,
            rotate: -1.5,
            boxShadow: "0 12px 32px 0 rgba(34,197,94,0.10)",
            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          }}
          whileTap={{ scale: 0.98 }}
      >
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-2 gap-2">
            <motion.div
                className="relative"
                whileHover={{ scale: 1.07, rotate: 1.5 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                  src={item.beforeImage || "/placeholder.svg"}
                  alt={`${item.title} - stan przed realizacją projektu ogrodniczego`}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-red-100 text-red-600 border-red-200 font-semibold">Przed</Badge>
              </div>
            </motion.div>
            <motion.div
                className="relative"
                whileHover={{ scale: 1.07, rotate: -1.5 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                  src={item.afterImage || "/placeholder.svg"}
                  alt={`${item.title} - stan po realizacji projektu ogrodniczego`}
                  width={400}
                  height={300}
                  className="w-full h-52 object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-green-100 text-green-600 border-green-200 font-semibold">Po</Badge>
              </div>
            </motion.div>
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
      </motion.article>
  )
}

export default function PortfolioSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
      <section
          id="portfolio"
          className="py-24 px-6 bg-gradient-to-r from-green-50/50 to-orange-50/50 relative"
          aria-labelledby="portfolio-heading"
          ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto pr-20">
          <motion.header
              className="text-center mb-20"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 id="portfolio-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Nasze{" "}
              <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                Realizacje
              </motion.span>
            </h2>
            <motion.p
                className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              Zobacz efekty naszej pracy - przed i po transformacji
            </motion.p>
          </motion.header>

          <AnimatePresence>
            <motion.div
                className="grid md:grid-cols-2 gap-10"
                variants={gridVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="hidden"
            >
              {portfolioItems.map((item, index) => (
                  <PortfolioCard key={index} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
  )
}
