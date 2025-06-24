"use client"

import { Leaf } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FeatureItem {
  icon: React.ReactNode
  title: string
  desc: string
}

// Przeniesienie danych z komponentu page.tsx
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

const FeatureCard = ({ feature, index }: { feature: FeatureItem; index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="mx-auto w-24 h-24 bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl"
        whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
      >
        <motion.div className="text-green-600 group-hover:text-orange-500 transition-colors duration-300">
          {feature.icon}
        </motion.div>
      </motion.div>
      <motion.h3
        className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
      >
        {feature.title}
      </motion.h3>
      <motion.p
        className="text-gray-600 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
      >
        {feature.desc}
      </motion.p>
    </motion.div>
  )
}

export default function WhyUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      className="py-24 px-6"
      aria-labelledby="why-us-heading"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto pr-20">
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="why-us-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Dlaczego{" "}
            </motion.span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My?
            </motion.span>
          </h2>
          <motion.p
            className="text-2xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Nasze przewagi konkurencyjne
          </motion.p>
        </motion.header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
