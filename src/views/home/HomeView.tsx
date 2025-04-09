import { DestinationCard } from "../../components";
import { Hero } from "./Hero";
import { useState, useEffect } from "react";
import { ChevronRight, MapPin, Compass, Globe } from "lucide-react"

const destinations = [
  {
    title: "Machu Picchu, Perú",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Cristo Redentor, Brasil",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Salar de Uyuni, Bolivia",
    image:
      "https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
  },
  {
    title: "Torres del Paine, Chile",
    image:
      "https://images.unsplash.com/photo-1601000785686-c45240e25f25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Galápagos, Ecuador",
    image:
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
  },
  {
    title: "Buenos Aires, Argentina",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
  },
]


export const HomeView = () => {
  // Animation on scroll
  const [isVisible, setIsVisible] = useState({
    mission: false,
    vision: false,
    destinations: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.getElementById("mission-section")
      const visionSection = document.getElementById("vision-section")
      const destinationsSection = document.getElementById("destinations-section")

      if (missionSection) {
        const rect = missionSection.getBoundingClientRect()
        setIsVisible((prev) => ({ ...prev, mission: rect.top < window.innerHeight * 0.8 }))
      }

      if (visionSection) {
        const rect = visionSection.getBoundingClientRect()
        setIsVisible((prev) => ({ ...prev, vision: rect.top < window.innerHeight * 0.8 }))
      }

      if (destinationsSection) {
        const rect = destinationsSection.getBoundingClientRect()
        setIsVisible((prev) => ({ ...prev, destinations: rect.top < window.innerHeight * 0.8 }))
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-b from-white to-cyan-50">
      <Hero />

      {/* Mission and Vision Section with Card Design */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 md:gap-16">
        {/* Mission Section */}
        <section
          id="mission-section"
          className={`transition-all duration-1000 transform ${
            isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gradient-to-br from-teal-600 to-cyan-700 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                    <Compass className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">MISIÓN</h2>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Somos una agencia de viajes que brinda{" "}
                  <span className="font-semibold text-teal-600">experiencias únicas e innovadoras</span> con una
                  relación respetuosa del ambiente. Nos caracteriza la{" "}
                  <span className="font-semibold text-teal-600">personalización</span> de nuestros servicios turísticos,
                  ofreciendo servicios de <span className="font-semibold text-teal-600">calidad y confianza</span>.
                  Realizando viajes a medida del cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section
          id="vision-section"
          className={`transition-all duration-1000 transform ${
            isVisible.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/3 bg-gradient-to-br from-cyan-700 to-teal-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">VISIÓN</h2>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ser <span className="font-semibold text-cyan-600">referentes a nivel nacional e internacional</span>,
                  reconocidos por nuestra experiencia, confianza, calidad, innovación y valores; comprometidos con la{" "}
                  <span className="font-semibold text-cyan-600">conservación de los recursos naturales</span>;
                  impulsando el desarrollo de un{" "}
                  <span className="font-semibold text-cyan-600">turismo sostenible y sustentable</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Destinations Section */}
      <section
        id="destinations-section"
        className={`py-20 px-4 bg-gradient-to-b from-cyan-50 to-white transition-all duration-1000 transform ${
          isVisible.destinations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full text-teal-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Explora Sudamérica</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
              DESTINOS EXPLORADOS DE SUDAMÉRICA
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Los destinos más visitados por nuestros usuarios, seleccionados por su belleza natural y experiencias
              únicas:
            </p>
          </div>

          {/* Grid of Destinations with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <DestinationCard title={destination.title} image={destination.image} />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a
              href="/destinations"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Ver todos los destinos
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}