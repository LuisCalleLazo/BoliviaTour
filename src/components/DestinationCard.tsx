"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface DestinationCardProps {
  title: string
  image: string
}

export const DestinationCard = ({ title, image }: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg group h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300 transform">
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <div
          className={`flex items-center overflow-hidden transition-all duration-500 ease-in-out ${
            isHovered ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href={`/destinations/${title.toLowerCase().replace(/,\s|\s/g, "-")}`}
            className="inline-flex items-center text-sm font-medium text-white hover:text-teal-300 transition-colors"
          >
            Descubrir destino
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
