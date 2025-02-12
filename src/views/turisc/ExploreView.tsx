import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface Destination {
  id: number
  name: string
  image: string
}

interface Country {
  id: number
  name: string
  flag: string
  svgPath: string
  destinations: Destination[]
}

export const ExploreView = () => {
  const [expandedCountry, setExpandedCountry] = useState<number | null>(null)
  // const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const countries: Country[] = [
    {
      id: 1,
      name: "Argentina",
      flag: "🇦🇷",
      svgPath: "M100 350 L120 400 L140 500 L130 550 L110 600 L100 650 L120 700 L140 750",
      destinations: [
        { id: 1, name: "Buenos Aires", image: "/placeholder.svg?height=100&width=100" },
        { id: 2, name: "Bariloche", image: "/placeholder.svg?height=100&width=100" },
      ],
    },
    {
      id: 2,
      name: "Brasil",
      flag: "🇧🇷",
      svgPath: "M200 200 L250 220 L300 250 L350 300 L300 350 L250 400 L200 350 L180 300",
      destinations: [
        { id: 3, name: "Rio de Janeiro", image: "/placeholder.svg?height=100&width=100" },
        { id: 4, name: "São Paulo", image: "/placeholder.svg?height=100&width=100" },
      ],
    },
    {
      id: 3,
      name: "Chile",
      flag: "🇨🇱",
      svgPath: "M80 400 L100 450 L90 500 L100 550 L90 600 L100 650 L90 700",
      destinations: [
        { id: 5, name: "Santiago", image: "/placeholder.svg?height=100&width=100" },
        { id: 6, name: "Torres del Paine", image: "/placeholder.svg?height=100&width=100" },
      ],
    },
    {
      id: 4,
      name: "Perú",
      flag: "🇵🇪",
      svgPath: "M50 250 L100 270 L150 290 L130 340 L100 320 L70 300",
      destinations: [
        { id: 7, name: "Machu Picchu", image: "/placeholder.svg?height=100&width=100" },
        { id: 8, name: "Cusco", image: "/placeholder.svg?height=100&width=100" },
      ],
    },
    {
      id: 5,
      name: "Colombia",
      flag: "🇨🇴",
      svgPath: "M100 150 L150 170 L200 190 L180 240 L130 220 L80 200",
      destinations: [
        { id: 9, name: "Cartagena", image: "/placeholder.svg?height=100&width=100" },
        { id: 10, name: "Bogotá", image: "/placeholder.svg?height=100&width=100" },
      ],
    },
  ]

  const toggleCountry = (countryId: number) => {
    setExpandedCountry(expandedCountry === countryId ? null : countryId)
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Los Destinos de Sudamérica por Zona</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Lista de países */}
        <div className="md:w-1/3 space-y-2">
          {countries.map((country) => (
            <div key={country.id} className="border border-gray-600 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCountry(country.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <span>{country.name}</span>
                </div>
                {expandedCountry === country.id ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {expandedCountry === country.id && (
                <div className="bg-gray-700 p-4 space-y-3">
                  {country.destinations.map((destination) => (
                    <div
                      key={destination.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span>{destination.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mapa simplificado */}
        {/* <div className="md:w-2/3 bg-gray-700 rounded-lg p-4">
          <svg viewBox="0 0 400 800" className="w-full h-full">
            {countries.map((country) => (
              <path
                key={country.id}
                d={country.svgPath}
                fill={hoveredCountry === country.name ? "#4B5563" : "#374151"}
                stroke="#E5E7EB"
                strokeWidth="2"
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
                onClick={() => toggleCountry(country.id)}
                className="cursor-pointer transition-colors duration-200"
              />
            ))}
          </svg>
        </div> */}
      </div>
    </div>
  )
}

