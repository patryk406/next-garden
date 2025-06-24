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

  const y = useTransform(scrollYProgress, [0, 1], [150, 0])

  return (
      <div className="relative w-full overflow-hidden">
        <motion.footer
            ref={footerRef}
            style={{ y }}
            className="relative z-10 px-6 pt-12 pb-20 w-full"
        >
          {/* Zaktualizowany gradient tła w nowej kolorystyce */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#F5F1E3] via-[#F5F1E3]/20 to-white opacity-95" />

          {/* Top social links */}
          <div className="flex items-center justify-between flex-wrap text-sm mb-12 max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 text-[#6A994E]">
              <a href="#" aria-label="Facebook" className="hover:text-[#D98E73] transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#D98E73] transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#D98E73] transition-colors duration-300">
                <Youtube size={16} />
              </a>
            </div>
            <div className="flex flex-wrap gap-6 font-medium">
              <a href="#oferta" className="text-[#3A3A3C] hover:text-[#6A994E] transition-colors duration-300">
                Projektowanie
              </a>
              <a href="#realizacje" className="text-[#3A3A3C] hover:text-[#6A994E] transition-colors duration-300">
                Realizacje
              </a>
              <a href="#uslugi" className="text-[#3A3A3C] hover:text-[#6A994E] transition-colors duration-300">
                Pielęgnacja
              </a>
            </div>
            <div className="text-[#B2B2B2] text-xs mt-4 md:mt-0 font-light">
              © 2025 Fantastyczne ogrody. Wszelkie prawa zastrzeżone.
            </div>
          </div>

          {/* Next Up Section - zmodyfikowane na CTA */}
          <div className="max-w-7xl mx-auto text-left">
            <p className="text-lg text-[#6A994E] font-medium">Skontaktuj się z nami</p>
            <h2 className="text-4xl font-bold text-[#3A3A3C] tracking-tight font-poppins">
              STWÓRZMY <span className="relative">
                <span className="relative z-10 text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#6A994E] to-[#7DB25F]">TWÓJ</span>
                <span className="absolute inset-0 z-0 blur-[2px] text-[#6A994E] opacity-25">TWÓJ</span>
              </span> OGRÓD
            </h2>
            <div className="mt-4 flex items-center space-x-4">
              <div className="h-2 bg-gradient-to-r from-[#6A994E] to-[#D98E73] flex-1 rounded-full opacity-90" />
              <motion.a
                  href="#contact"
                  aria-label="Przejdź do formularza kontaktowego"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-[#6A994E] hover:text-[#D98E73] transition-colors duration-300"
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
