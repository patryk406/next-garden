"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Fence, Layout, Ruler, Hammer, Square, Scissors, CloudSun, Leaf } from "lucide-react"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { colors } from "@/lib/colors"

interface Service {
    icon: ReactNode
    title: string
    description: string
    price: string
    category: string
}

// Kategorie usług
const categories = [
    { id: "projektowanie", name: "Projektowanie" },
    { id: "budowa", name: "Budowa" },
    { id: "pielegnacja", name: "Pielęgnacja" }
]

// Animowany komponent karty
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card
                className="group overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_6px_30px_-10px_rgba(0,0,0,0.15)] bg-white rounded-2xl border-0 shadow-lg h-full flex flex-col"
            >
                <CardHeader className="text-center pb-4 flex-shrink-0">
                    <motion.div
                        className="mx-auto w-20 h-20 bg-[#F5F1E3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"
                        whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
                    >
                        <div className="text-[#6A994E] group-hover:text-[#D98E73] transition-colors duration-300">
                            {service.icon}
                        </div>
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-[#2D2D2D] group-hover:text-[#6A994E] transition-colors duration-300 mb-4">
                        {service.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <CardDescription className="text-[#4A4A4A] text-center leading-relaxed mb-6 flex-grow">
                        {service.description}
                    </CardDescription>
                    <div className="text-center mt-auto">
                        <Badge className="bg-[#D98E73]/10 text-[#D98E73] border-[#D98E73]/20 text-lg px-4 py-2 font-semibold shadow-sm">
                            {service.price}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

// Animowany nagłówek sekcji
const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const titleWords = title.split(' ')

    return (
        <header ref={ref} className="text-center mb-16 sm:mb-20">
            <motion.h2
                className="section-title text-[#2D2D2D] mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                aria-label={title}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-semibold"
                >
                    {titleWords[0]}{" "}
                </motion.span>
                <motion.span
                    className="relative inline-block"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <span className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6A994E] to-[#7DB25F]">
                        {titleWords[1]}
                    </span>
                    <span className="absolute -inset-0 z-0 text-[#6A994E] blur-[3px] opacity-20 font-black">
                        {titleWords[1]}
                    </span>
                </motion.span>
            </motion.h2>
            <motion.p
                className="body-text text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                {subtitle}
            </motion.p>
        </header>
    )
}

// Lista usług
const services: Service[] = [
    {
        icon: <Ruler className="w-8 h-8" />,
        title: "Projektowanie ogrodów",
        description: "Kompleksowe planowanie przestrzeni ogrodowej zgodnie z Twoimi oczekiwaniami.",
        price: "od 1000 zł",
        category: "Projektowanie"
    },
    {
        icon: <CloudSun className="w-8 h-8" />,
        title: "Systemy nawadniania",
        description: "Projektowanie i instalacja automatycznych systemów nawadniających.",
        price: "od 2500 zł",
        category: "Projektowanie"
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Budowa tarasów",
        description: "Projektowanie i realizacja tarasów z różnych materiałów, dopasowanych do Twojego ogrodu.",
        price: "od 5000 zł",
        category: "Budowa"
    },
    {
        icon: <Square className="w-8 h-8" />,
        title: "Układanie kostki brukowej",
        description: "Profesjonalne układanie kostki brukowej na podjazdach, ścieżkach i tarasach.",
        price: "od 200 zł/m²",
        category: "Budowa"
    },
    {
        icon: <Home className="w-8 h-8" />,
        title: "Podesty i altany",
        description: "Budowa estetycznych i trwałych podestów oraz altan ogrodowych.",
        price: "od 2000 zł",
        category: "Budowa"
    },
    {
        icon: <Fence className="w-8 h-8" />,
        title: "Ogrodzenia",
        description: "Montaż ogrodzeń drewnianych, metalowych i panelowych.",
        price: "wycena indywidualna",
        category: "Budowa"
    },
    {
        icon: <Scissors className="w-8 h-8" />,
        title: "Przycinanie roślin",
        description: "Profesjonalne przycinanie drzew, krzewów i żywopłotów.",
        price: "od 150 zł",
        category: "Pielęgnacja"
    },
    {
        icon: <Leaf className="w-8 h-8" />,
        title: "Pielęgnacja trawników",
        description: "Kompleksowa pielęgnacja trawników, wertykulacja, aeracja i nawożenie.",
        price: "od 3 zł/m²",
        category: "Pielęgnacja"
    }
]

// Kategoria z usługami
const CategorySection = ({ category, services, indexOffset = 0 }: {
    category: string,
    services: Service[],
    indexOffset?: number
}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-24 last:mb-0"
        >
            <motion.h3
                className="subsection-title text-[#2D2D2D] mb-8 pl-4 border-l-4 border-[#6A994E]"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
            >
                {category}
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index + indexOffset} />
                ))}
            </div>
        </motion.div>
    )
}

export default function ServicesSection() {
    // Referencja dla animacji wejścia
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

    // Grupowanie usług według kategorii
    const servicesByCategory = categories.map(category => ({
        ...category,
        services: services.filter(service => service.category === category.name)
    }))

    return (
        <section
            id="services"
            className="py-16 sm:py-24 lg:py-32 px-6 relative bg-[#F5F1E3]/50"
            role="region"
            aria-label="Nasze usługi"
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Nasze Usługi"
                    subtitle="Kompleksowa opieka nad Twoim ogrodem przez cały rok"
                />

                {servicesByCategory.map((category, categoryIndex) => (
                    <CategorySection
                        key={category.id}
                        category={category.name}
                        services={category.services}
                        indexOffset={categoryIndex * 3}
                    />
                ))}
            </div>
        </section>
    )
}
