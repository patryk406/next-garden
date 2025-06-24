"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Fence, Layout, Ruler, Hammer, Square, Scissors } from "lucide-react"
import {ReactNode} from "react";

interface Service {
    icon: ReactNode
    title: string
    description: string
    price: string
}

const ServiceCard = ({ service }: { service: Service }) => (
    <Card
        className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-green-100/50 h-full flex flex-col"
    >
        <CardHeader className="text-center pb-4 flex-shrink-0">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <div className="text-green-600 group-hover:text-orange-500 transition-colors duration-300">
                    {service.icon}
                </div>
            </div>
            <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-4">
                {service.title}
            </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
            <CardDescription className="text-gray-600 text-center leading-relaxed mb-6 flex-grow">
                {service.description}
            </CardDescription>
            <div className="text-center mt-auto">
                <Badge className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 border-orange-200 text-lg px-4 py-2 font-semibold shadow-sm">
                    {service.price}
                </Badge>
            </div>
        </CardContent>
    </Card>
)

// Komponent nagłówka sekcji
const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <header className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            {title.split(' ')[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                {title.split(' ')[1]}
            </span>
        </h2>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
        </p>
    </header>
)

// Lista usług
const services: Service[] = [
    {
        icon: <Square className="w-8 h-8" />,
        title: "Układanie kostki brukowej",
        description: "Profesjonalne układanie kostki brukowej na podjazdach, ścieżkach i tarasach.",
        price: "od 200 zł/m²",
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Budowa tarasów",
        description: "Projektowanie i realizacja tarasów z różnych materiałów, dopasowanych do Twojego ogrodu.",
        price: "od 5000 zł",
    },
    {
        icon: <Ruler className="w-8 h-8" />,
        title: "Podjazdy",
        description: "Wykonanie trwałych i estetycznych podjazdów do domu i garażu.",
        price: "od 250 zł/m²",
    },
    {
        icon: <Hammer className="w-8 h-8" />,
        title: "Planowanie ogrodu",
        description: "Kompleksowe planowanie przestrzeni ogrodowej zgodnie z Twoimi oczekiwaniami.",
        price: "od 1000 zł",
    },
    {
        icon: <Scissors className="w-8 h-8" />,
        title: "Przycinanie roślin",
        description: "Profesjonalne przycinanie drzew, krzewów i żywopłotów.",
        price: "od 150 zł",
    },
    {
        icon: <Fence className="w-8 h-8" />,
        title: "Ogrodzenia",
        description: "Montaż ogrodzeń drewnianych, metalowych i panelowych.",
        price: "wycena indywidualna",
    },
    {
        icon: <Home className="w-8 h-8" />,
        title: "Podesty przy wejściu",
        description: "Budowa estetycznych i trwałych podestów przy wejściu do domu.",
        price: "od 2000 zł",
    },
]

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 relative" role="region" aria-label="Nasze usługi">
            <div className="max-w-7xl mx-auto pr-20">
                <SectionHeader
                    title="Nasze Usługi"
                    subtitle="Kompleksowa opieka nad Twoim ogrodem przez cały rok"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
