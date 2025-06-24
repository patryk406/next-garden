"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import React from "react";

interface ContactItemProps {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  subtitle?: string
}

const ContactItem = ({ icon, title, content, subtitle }: ContactItemProps) => (
  <div className="flex items-start space-x-6 group">
    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
      <div className="text-green-600 group-hover:text-orange-500 transition-colors duration-300">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      {content}
      {subtitle && <p className="text-gray-500">{subtitle}</p>}
    </div>
  </div>
)

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-r from-green-50/50 to-orange-50/50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto pr-20">
        <header className="text-center mb-20">
          <h2 id="contact-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Skontaktuj się{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              z nami
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Rozpocznij transformację swojego ogrodu już dziś
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <address className="space-y-12 not-italic">
            <ContactItem
              icon={<MapPin />}
              title="Nasz adres"
              content={<p className="text-gray-600 text-lg">ul. Ogrodowa 123, 00-001 Warszawa</p>}
              subtitle="Obsługujemy całą Polskę"
            />
            
            <ContactItem
              icon={<Phone />}
              title="Telefon"
              content={
                <p className="text-gray-600 text-lg">
                  <a href="tel:+48123456789" className="hover:text-green-600 transition-colors">
                    +48 123 456 789
                  </a>
                </p>
              }
              subtitle="Dostępny 7 dni w tygodniu"
            />
            
            <ContactItem
              icon={<Mail />}
              title="Email"
              content={
                <p className="text-gray-600 text-lg">
                  <a href="mailto:kontakt@fantastyczneogrody.pl" className="hover:text-green-600 transition-colors">
                    kontakt@fantastyczneogrody.pl
                  </a>
                </p>
              }
              subtitle="Odpowiadamy w ciągu 24h"
            />
          </address>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="w-full h-80 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Mapa lokalizacji</h3>
                  <p className="text-gray-600 text-lg">ul. Ogrodowa 123</p>
                  <p className="text-gray-500">00-001 Warszawa</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
