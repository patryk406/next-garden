'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const footerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end']
  })

  // Efekt parallax z zachowaniem tylko ruchu pionowego
  const y = useTransform(scrollYProgress, [0, 1], [150, 0])

  return (
      <div className="relative w-full overflow-hidden">
        <motion.footer
            ref={footerRef}
            style={{ y }}
            className="relative z-10 px-6 pt-12 pb-20 w-full"
        >
          {/* Delikatny gradient w stylu strony */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-50 via-orange-50/30 to-white opacity-90" />

          {/* Top social links */}
          <div className="flex items-center justify-between flex-wrap text-sm mb-12 max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 text-green-700">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
              <a href="#oferta" className="hover:text-green-700 transition-colors">Projektowanie</a>
              <a href="#realizacje" className="hover:text-green-700 transition-colors">Realizacje</a>
              <a href="#uslugi" className="hover:text-green-700 transition-colors">Pielęgnacja</a>
            </div>
            <div className="text-gray-500 text-xs mt-4 md:mt-0">
              © 2025 Fantastyczne ogrody Wszelkie prawa zastrzeżone.
            </div>
          </div>

          {/* Next Up Section - zmodyfikowane na CTA */}
          <div className="max-w-7xl mx-auto text-left">
            <p className="text-lg text-green-700">Skontaktuj się z nami</p>
            <h2 className="text-4xl font-bold text-gray-800">STWÓRZMY TWÓJ OGRÓD</h2>
            <div className="mt-4 flex items-center space-x-4">
              <div className="h-2 bg-gradient-to-r from-green-500 to-orange-400 flex-1 rounded-full" />
              <motion.a
                  href="#contact"
                  aria-label="Przejdź do formularza kontaktowego"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.a>
            </div>
          </div>
        </motion.footer>
      </div>
  )
}
