"use client"
import Image from "next/image"

interface HeroSectionProps {
    isVisible: boolean
    scrollToSection: (href: string) => void
}

export default function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
    return (
        <section id="hero" className="relative min-h-screen" role="banner">
            <div className="fixed w-full min-h-screen flex items-center justify-center overflow-hidden">
                {/* Fantasy Garden Background Image */}
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

                {/* Main Content */}
                <div
                    className={`relative z-20 text-center p-6 max-w-5xl mx-auto transition-all duration-1000 rounded-2xl drop-shadow-2xl drop-shadow-green-600 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                >
                    {/* Logo */}
                    <div className="relative h-20 w-72 mx-auto mb-8">
                        <svg className="h-full w-full" viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M35 15C35 15 25 25 45 35C65 45 50 60 35 60"
                                stroke="#FFFFFF"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M20 60C20 60 10 35 25 25C40 15 50 25 50 35C50 45 35 60 20 60Z"
                                fill="#FF9800"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                            />
                            <circle cx="18" cy="20" r="4" fill="#FFFFFF" />
                            <circle cx="52" cy="30" r="4" fill="#FFFFFF" />
                            <circle cx="30" cy="55" r="4" fill="#FFFFFF" />
                            <text x="70" y="38" fontFamily="Inter" fontSize="20" fontWeight="700" fill="#FFFFFF">
                                Fantastyczne
                            </text>
                            <text x="70" y="60" fontFamily="Inter" fontSize="20" fontWeight="700" fill="#FF9800">
                                Ogrody
                            </text>
                        </svg>
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

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="group relative overflow-hidden bg-gradient-to-r from-green-600/80 to-green-700/80 backdrop-blur-md hover:from-green-700/90 hover:to-green-800/90 text-white px-10 py-4 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-green-500/20"
                        >
                            <div className="relative flex items-center justify-center">
                                <span className="mr-2">✨</span>
                                Zamów bezpłatną wycenę
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </button>

                        <button
                            onClick={() => scrollToSection("#services")}
                            className="group relative overflow-hidden bg-white/20 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/30 px-10 py-4 text-xl rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-white/50"
                        >
                            <div className="relative flex items-center justify-center">
                                <span className="mr-2">🌿</span>
                                Poznaj nasze usługi
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
