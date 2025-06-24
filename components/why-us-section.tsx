"use client"

import { Leaf, Phone } from "lucide-react"

interface FeatureItem {
  icon: React.ReactNode
  title: string
  desc: string
}

interface WhyUsSectionProps {
  features: FeatureItem[]
}

const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
  <div className="text-center group">
    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-xl">
      <div className="text-green-600 group-hover:text-orange-500 transition-colors duration-300">
        {feature.icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
  </div>
)

export default function WhyUsSection({ features }: WhyUsSectionProps) {
  return (
    <section className="py-24 px-6" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto pr-20">
        <header className="text-center mb-20">
          <h2 id="why-us-heading" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Dlaczego{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">My?</span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">Nasze przewagi konkurencyjne</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
