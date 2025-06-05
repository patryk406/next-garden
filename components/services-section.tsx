"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Flower2, Leaf, Scissors, Shovel, Lightbulb, Settings, TreePine, Sprout } from "lucide-react"

const services = [
    {
        icon: <Leaf className="w-8 h-8" />,
        title: "Projektowanie ogrodów",
        description:
            "Tworzymy unikalne projekty ogrodów dopasowane do Twoich potrzeb i stylu życia. Od koncepcji po realizację.",
        price: "od 1500 zł",
    },
    {
        icon: <Droplets className="w-8 h-8" />,
        title: "Systemy nawadniania",
        description: "Profesjonalny montaż automatycznych systemów nawadniania dla zdrowej i pięknej zieleni.",
        price: "od 2000 zł",
    },
    {
        icon: <Shovel className="w-8 h-8" />,
        title: "Zakładanie trawników",
        description: "Przygotowanie terenu, wysiew trawy lub układanie trawy z rolki dla idealnego efektu.",
        price: "od 25 zł/m²",
    },
    {
        icon: <Scissors className="w-8 h-8" />,
        title: "Pielęgnacja drzew",
        description: "Profesjonalne przycinanie, formowanie i pielęgnacja drzew oraz krzewów ozdobnych.",
        price: "od 200 zł",
    },
    {
        icon: <Flower2 className="w-8 h-8" />,
        title: "Ogrody kwiatowe",
        description: "Projektowanie i zakładanie rabat kwiatowych z roślin sezonowych i wieloletnich.",
        price: "od 150 zł/m²",
    },
    {
        icon: <TreePine className="w-8 h-8" />,
        title: "Elementy małej architektury",
        description: "Montaż ścieżek, murków, pergoli, oczek wodnych i innych elementów dekoracyjnych.",
        price: "od 500 zł",
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Oświetlenie ogrodu",
        description: "Instalacja systemów oświetlenia podkreślających piękno ogrodu po zmroku.",
        price: "od 1200 zł",
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Regularna pielęgnacja",
        description: "Kompleksowa opieka nad ogrodem przez cały rok - koszenie, przycinanie, nawożenie.",
        price: "od 300 zł/miesiąc",
    },
    {
        icon: <Sprout className="w-8 h-8" />,
        title: "Wertykulacja i aeracja",
        description: "Profesjonalna wertykulacja i aeracja trawników dla lepszego wzrostu i zdrowia trawy.",
        price: "od 15 zł/m²",
    },
]

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 relative" role="main">
            <div className="max-w-7xl mx-auto pr-20">
                <header className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        Nasze{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">Usługi</span>
                    </h2>
                    <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Kompleksowa opieka nad Twoim ogrodem przez cały rok
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    )
}
