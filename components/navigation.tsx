"use client"

import { useState, useEffect } from "react"
import { Home, Leaf, Camera, Star, HelpCircle, Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
    scrollToSection: (href: string) => void
}

interface MenuItem {
    name: string
    href: string
    id: string
    icon: React.ReactNode
}

const NavButton = ({
    item,
    onClick
}: {
    item: MenuItem,
    onClick: () => void
}) => (
    <button
        onClick={onClick}
        className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 text-gray-700 hover:bg-gray-100/80 hover:text-gray-900"
        )}
        aria-label={item.name}
    >
        {item.icon}
        <span className="hidden lg:inline">{item.name}</span>
    </button>
)

const MobileNavButton = ({
    item,
    onClick
}: {
    item: MenuItem,
    onClick: () => void
}) => (
    <button
        onClick={onClick}
        className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 text-gray-700 hover:bg-gray-100/80"
        )}
    >
        {item.icon}
        <span className="font-medium">{item.name}</span>
    </button>
)

const Logo = () => (
    <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
        </div>
        <span className="font-semibold text-gray-800">Garden</span>
    </div>
)

const menuItems: MenuItem[] = [
    { name: "Strona główna", href: "#hero", id: "hero", icon: <Home className="w-4 h-4" /> },
    { name: "Usługi", href: "#services", id: "services", icon: <Leaf className="w-4 h-4" /> },
    { name: "Realizacje", href: "#portfolio", id: "portfolio", icon: <Camera className="w-4 h-4" /> },
    { name: "FAQ", href: "#faq", id: "faq", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Kontakt", href: "#contact", id: "contact", icon: <Phone className="w-4 h-4" /> },
]

export default function Navigation({ scrollToSection }: NavigationProps) {
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleMenuItemClick = (href: string) => {
        scrollToSection(href)
        setIsMenuOpen(false)
    }

    if (isMobile) {
        return (
            <>
                {/* Mobile Navigation */}
                <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92vw] max-w-sm z-50
                    bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50
                    shadow-lg shadow-black/5 px-4 py-3">

                    <div className="flex items-center justify-between">
                        <Logo />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100/80 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 z-40 transition-all duration-300",
                    isMenuOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 pointer-events-none'
                )}>
                    <div className="absolute inset-0 bg-black/20" />

                    <div className={cn(
                        "absolute top-20 left-1/2 -translate-x-1/2 w-[92vw] max-w-sm",
                        "bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/50",
                        "shadow-xl shadow-black/10 p-4 transition-all duration-300",
                        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    )}>
                        <div className="space-y-1">
                            {menuItems.map((item, index) => (
                                <MobileNavButton
                                    key={index}
                                    item={item}
                                    onClick={() => handleMenuItemClick(item.href)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-4xl z-50
            bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50
            shadow-lg shadow-black/5 px-6 py-4 transition-all duration-300
            hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">

            <div className="flex items-center justify-between">
                <Logo />

                <div className="flex gap-1">
                    {menuItems.filter(item => item.id !== "contact").map((item, index) => (
                        <NavButton
                            key={index}
                            item={item}
                            onClick={() => scrollToSection(item.href)}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scrollToSection('#contact')}
                    className="px-5 py-2 rounded-xl bg-green-600 text-white font-medium text-sm
                        shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-200"
                >
                    <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">Kontakt</span>
                    </span>
                </button>
            </div>
        </nav>
    )
}
