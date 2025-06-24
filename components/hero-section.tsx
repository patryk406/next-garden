"use client"
import Image from "next/image"
import Logo from "@/components/ui/logo"
import { motion } from "framer-motion"

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
    <motion.button
        onClick={onClick}
        className={`group relative overflow-hidden ${
            primary 
                ? "bg-gradient-to-r from-green-600/80 to-green-700/80 backdrop-blur-md hover:from-green-700/90 hover:to-green-800/90 text-white border border-green-500/20" 
                : "bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 hover:border-white/50"
        } px-10 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: primary ? 0.8 : 1 }}
    >
        <div className="relative flex items-center justify-center">
            <span className="mr-2">{icon}</span>
            {children}
            <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            >→</motion.span>
        </div>
    </motion.button>
)

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
    return (
        <section id="hero" className="relative min-h-screen" role="banner" aria-label="Fantastyczne Ogrody - Strona główna">
            <div className="fixed w-full min-h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div
                    className={`relative z-20 text-center p-6 max-w-5xl mx-auto transition-all duration-1000 rounded-2xl drop-shadow-2xl drop-shadow-green-600`}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Fantastyczne
                        </motion.span>
                        <motion.span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-orange-300 to-green-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Ogrody
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-2xl md:text-3xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Tworzymy przestrzenie, które zachwycają przez cały rok
                    </motion.p>
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
