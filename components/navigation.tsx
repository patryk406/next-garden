"use client"

import { useState } from "react"
import { Home, Leaf, Camera, Star, HelpCircle, Phone } from "lucide-react"

interface NavigationProps {
    activeSection: string
    scrollToSection: (href: string) => void
}

const menuItems = [
    { name: "Strona główna", href: "#hero", id: "hero", icon: <Home className="w-5 h-5" /> },
    { name: "Usługi", href: "#services", id: "services", icon: <Leaf className="w-5 h-5" /> },
    { name: "Realizacje", href: "#portfolio", id: "portfolio", icon: <Camera className="w-5 h-5" /> },
    { name: "Opinie", href: "#testimonials", id: "testimonials", icon: <Star className="w-5 h-5" /> },
    { name: "FAQ", href: "#faq", id: "faq", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Kontakt", href: "#contact", id: "contact", icon: <Phone className="w-5 h-5" /> },
]

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
    const [isMenuHovered, setIsMenuHovered] = useState(false)

    return (
        <nav
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
            role="navigation"
            aria-label="Menu główne"
        >
            <div
                className={`bg-white/20 backdrop-blur-xl rounded-lg py-6 px-3 shadow-2xl border border-white/10 transition-all duration-300 ${
                    isMenuHovered ? "w-48" : "w-16"
                }`}
            >
                <div className="flex flex-col space-y-8">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSection(item.href)}
                            className="relative flex items-center group"
                            aria-label={item.name}
                            aria-current={activeSection === item.id ? "page" : undefined}
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    activeSection === item.id
                                        ? "bg-green-600 text-black"
                                        : "bg-white text-green-600 group-hover:bg-white/30"
                                }`}
                            >
                                {item.icon}
                            </div>
                            <span
                                className={`whitespace-nowrap pl-3 font-medium transition-all duration-300 ${
                                    isMenuHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute"
                                } ${activeSection === item.id ? "text-green-600 font-bold" : "text-black"}`}
                            >
                {item.name}
              </span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
