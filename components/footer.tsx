"use client"

import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto pr-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <svg
                className="h-12 w-12 mr-3"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M30 10C30 10 20 20 35 30C50 40 40 50 30 50"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw-path"
                />
                <path
                  d="M20 50C20 50 10 30 20 20C30 10 40 20 40 30C40 40 30 50 20 50Z"
                  fill="#FF9800"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="animate-fill-shape"
                />
                <circle cx="15" cy="15" r="3" fill="#FFFFFF" className="animate-pop" />
                <circle cx="45" cy="25" r="3" fill="#FFFFFF" className="animate-pop-delay-1" />
                <circle cx="25" cy="45" r="3" fill="#FFFFFF" className="animate-pop-delay-2" />
              </svg>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-orange-300">
                Fantastyczne Ogrody
              </h3>
            </div>
            <p className="text-green-100 leading-relaxed text-lg">
              Profesjonalne usługi ogrodnicze z pasją i zaangażowaniem. Tworzymy ogrody, które zachwycają przez cały
              rok.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-300">Nasze usługi</h4>
            <ul className="space-y-3 text-green-100">
              <li className="hover:text-orange-300 transition-colors duration-300">Projektowanie ogrodów</li>
              <li className="hover:text-orange-300 transition-colors duration-300">Systemy nawadniania</li>
              <li className="hover:text-orange-300 transition-colors duration-300">Zakładanie trawników</li>
              <li className="hover:text-orange-300 transition-colors duration-300">Pielęgnacja drzew</li>
              <li className="hover:text-orange-300 transition-colors duration-300">Ogrody kwiatowe</li>
              <li className="hover:text-orange-300 transition-colors duration-300">Elementy małej architektury</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-orange-300">Kontakt</h4>
            <address className="space-y-4 not-italic">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-300" aria-hidden="true" />
                <span className="text-green-100">ul. Ogrodowa 123, 00-001 Warszawa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-300" aria-hidden="true" />
                <a href="tel:+48123456789" className="text-green-100 hover:text-orange-300 transition-colors">
                  +48 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-300" aria-hidden="true" />
                <a
                  href="mailto:kontakt@fantastyczneogrody.pl"
                  className="text-green-100 hover:text-orange-300 transition-colors"
                >
                  kontakt@fantastyczneogrody.pl
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 text-center">
          <p className="text-green-200 text-lg">
            © {new Date().getFullYear()} Fantastyczne Ogrody. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
