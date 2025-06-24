"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ContactItemProps {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  subtitle?: string
  index: number
}

const ContactItem = ({ icon, title, content, subtitle, index }: ContactItemProps) => {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      className="flex items-start space-x-6 group"
      ref={itemRef}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <div className="w-16 h-16 bg-[#F5F1E3] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
        <div className="text-[#6A994E] group-hover:text-[#D98E73] transition-colors duration-300">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-[#2D2D2D] mb-2">{title}</h3>
        {content}
        {subtitle && <p className="text-[#737373] text-sm">{subtitle}</p>}
      </div>
    </motion.div>
  )
}

export default function ContactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const mapRef = useRef(null)
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 })

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-6 bg-white"
      aria-labelledby="contact-heading"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 id="contact-heading" className="section-title text-[#2D2D2D] mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold"
            >
              Skontaktuj się{" "}
            </motion.span>
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A994E] to-[#7DB25F]">
                z nami
              </span>
              <span className="absolute -inset-0 z-0 text-[#6A994E] blur-[3px] opacity-20 font-black">
                z nami
              </span>
            </motion.span>
          </h2>
          <motion.p
            className="body-text text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Rozpocznij transformację swojego ogrodu już dziś
          </motion.p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <address className="space-y-8 sm:space-y-12 not-italic">
            <ContactItem
              icon={<MapPin className="w-8 h-8" />}
              title="Nasz adres"
              content={<p className="text-[#4A4A4A] text-base sm:text-lg">ul. Ogrodowa 123, 00-001 Warszawa</p>}
              subtitle="Obsługujemy całą Polskę"
              index={0}
            />
            
            <ContactItem
              icon={<Phone className="w-8 h-8" />}
              title="Telefon"
              content={
                <p className="text-[#4A4A4A] text-base sm:text-lg">
                  <a href="tel:+48123456789" className="hover:text-[#D98E73] transition-colors">
                    +48 123 456 789
                  </a>
                </p>
              }
              subtitle="Dostępny 7 dni w tygodniu"
              index={1}
            />
            
            <ContactItem
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              content={
                <p className="text-[#4A4A4A] text-base sm:text-lg">
                  <a href="mailto:kontakt@fantastyczneogrody.pl" className="hover:text-[#D98E73] transition-colors">
                    kontakt@fantastyczneogrody.pl
                  </a>
                </p>
              }
              subtitle="Odpowiadamy w ciągu 24h"
              index={2}
            />
          </address>

          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="bg-white rounded-2xl border-0 shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="w-full h-80 bg-[#F5F1E3] rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-[#D98E73] mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#3A3A3C] mb-2">Mapa lokalizacji</h3>
                    <p className="text-[#4A4A4A] text-base sm:text-lg">ul. Ogrodowa 123</p>
                    <p className="text-[#737373]">00-001 Warszawa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
