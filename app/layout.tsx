import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Fantastyczne Ogrody - Profesjonalne Usługi Ogrodnicze | Projektowanie i Pielęgnacja",
    description:
        "Profesjonalne usługi ogrodnicze w całej Polsce. Projektowanie ogrodów, systemy nawadniania, pielęgnacja. 15 lat doświadczenia. Bezpłatna wycena!",
    keywords:
        "usługi ogrodnicze, projektowanie ogrodów, systemy nawadniania, pielęgnacja ogrodów, trawniki, ogrody, krajobraz",
    authors: [{ name: "Fantastyczne Ogrody" }],
    creator: "Fantastyczne Ogrody",
    publisher: "Fantastyczne Ogrody",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "https://fantastyczneogrody.pl",
        title: "Fantastyczne Ogrody - Profesjonalne Usługi Ogrodnicze",
        description:
            "Tworzymy przestrzenie, które zachwycają przez cały rok. Profesjonalne usługi ogrodnicze z 15-letnim doświadczeniem.",
        siteName: "Fantastyczne Ogrody",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fantastyczne Ogrody - Profesjonalne Usługi Ogrodnicze",
        description: "Tworzymy przestrzenie, które zachwycają przez cały rok.",
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#16a34a",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
        <head>
            <link rel="canonical" href="https://fantastyczneogrody.pl" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Fantastyczne Ogrody",
                        description: "Profesjonalne usługi ogrodnicze - projektowanie, pielęgnacja, systemy nawadniania",
                        url: "https://fantastyczneogrody.pl",
                        telephone: "+48123456789",
                        email: "kontakt@fantastyczneogrody.pl",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "ul. Ogrodowa 123",
                            addressLocality: "Warszawa",
                            postalCode: "00-001",
                            addressCountry: "PL",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: "52.2297",
                            longitude: "21.0122",
                        },
                        openingHours: "Mo-Su 08:00-20:00",
                        priceRange: "$$",
                        serviceArea: {
                            "@type": "Country",
                            name: "Polska",
                        },
                    }),
                }}
            />
            <title>Fantastyczne ogrody</title>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
