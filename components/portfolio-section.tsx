"use client"

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PortfolioItem {
  title: string
  description: string
  beforeImage: string
  afterImage: string
}

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[]
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
  <article className="group overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 rounded-2xl">
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <Image
            src={item.beforeImage || "/placeholder.svg"}
            alt={`${item.title} - stan przed realizacją projektu ogrodniczego`}
            width={400}
            height={300}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-100 text-red-600 border-red-200 font-semibold">Przed</Badge>
          </div>
        </div>
        <div className="relative">
          <Image
            src={item.afterImage || "/placeholder.svg"}
            alt={`${item.title} - stan po realizacji projektu ogrodniczego`}
            width={400}
            height={300}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-green-100 text-green-600 border-green-200 font-semibold">Po</Badge>
          </div>
        </div>
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
  </article>
)

export default function PortfolioSection({ portfolioItems }: PortfolioSectionProps) {
  return (
    <section 
      id="portfolio" 
      className="py-24 px-6 bg-gradient-to-r from-green-50/50 to-orange-50/50 relative"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto pr-20">
        <header className="text-center mb-20">
          <h2 id="portfolio-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Nasze
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              Realizacje
            </span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Zobacz efekty naszej pracy - przed i po transformacji
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
