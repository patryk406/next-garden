"use client"
import Image from "next/image"
import Logo from "@/components/ui/logo"

interface HeroSectionProps {
    scrollToSection: (href: string) => void
}

const HeroBackground = () => (
    <div className="absolute inset-0 z-0">
        <Image
            src="/garden-bg.jpg"
            alt="Fantastyczny ogród z magiczną atmosferą"
            fill
            priority
            className="object-cover"
            sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-transparent to-green-900/40"></div>
    </div>
)

const CtaButton = ({
    onClick,
    icon,
    children,
    primary = false
}: {
    onClick: () => void,
    icon: string,
    children: React.ReactNode,
    primary?: boolean
}) => (
    <button
        onClick={onClick}
        className={`group relative overflow-hidden ${
            primary 
                ? "bg-gradient-to-r from-green-600/80 to-green-700/80 backdrop-blur-md hover:from-green-700/90 hover:to-green-800/90 text-white border border-green-500/20" 
                : "bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50"
        } px-10 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
    >
        <div className="relative flex items-center justify-center">
            <span className="mr-2">{icon}</span>
            {children}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
    </button>
)

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
    return (
        <section id="hero" className="relative min-h-screen" role="banner">
            <div className="fixed w-full min-h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div
                    className={`relative z-20 text-center p-6 max-w-5xl mx-auto transition-all duration-1000 rounded-2xl drop-shadow-2xl drop-shadow-green-600`}
                >
                    <div className="relative h-20 w-72 mx-auto mb-8">
                        <Logo />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                        Fantastyczne
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-orange-300 to-green-300">
                        Ogrody
                      </span>
                    </h1>

                    <p className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                        Tworzymy przestrzenie, które zachwycają przez cały rok
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <CtaButton
                            onClick={() => scrollToSection("#contact")}
                            icon="✨"
                            primary
                        >
                            Zamów bezpłatną wycenę
                        </CtaButton>

                        <CtaButton
                            onClick={() => scrollToSection("#services")}
                            icon="🌿"
                        >
                            Poznaj nasze usługi
                        </CtaButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
