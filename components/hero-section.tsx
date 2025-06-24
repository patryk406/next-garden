"use client"
import Image from "next/image"
import Logo from "@/components/ui/logo"
import { motion } from "framer-motion"
import { useRef } from "react"

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A3A3C]/70 via-[#3A3A3C]/40 to-[#3A3A3C]/70"></div>

        {/* Nowoczesny overlay z gradientem */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4C4B3F]/30 to-transparent"></div>
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
                ? "bg-[#D98E73] text-white shadow-lg shadow-[#D98E73]/20"
                : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
        } px-8 py-4 text-lg sm:text-xl rounded-lg transition-all duration-300 hover:shadow-xl`}
        whileHover={{ scale: 1.03 }}
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

        {/* Dodanie nowoczesnego efektu po najechaniu */}
        {primary && (
            <motion.div
                className="absolute inset-0 -z-10 bg-[#C27A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ opacity: 1 }}
            />
        )}
    </motion.button>
)

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
    const heroRef = useRef(null)

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center"
            role="banner"
            aria-label="Fantastyczne Ogrody - Strona główna"
            ref={heroRef}
        >
            <div className="fixed w-full min-h-screen flex items-center justify-center overflow-hidden">
                <HeroBackground />

                <div className="relative z-20 text-center p-6 md:p-10 max-w-5xl mx-auto rounded-xl">
                    <motion.div
                        className="relative mb-8"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="hero-title text-white tracking-tight leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <span className="block relative z-10 pb-2">
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    FANTASTYCZNE
                                </motion.span>
                            </span>
                            <motion.span
                                className="block z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A994E] via-[#7DB25F] to-[#6A994E]"
                                initial={{ opacity: 0, scale: 1.2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                    <span >OGRODY</span>
                            </motion.span>
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Tworzymy przestrzenie, które zachwycają przez <span className="text-[#7DB25F]">cały rok</span>
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
