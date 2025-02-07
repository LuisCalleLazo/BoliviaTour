import { useState } from 'react'
import './App.css'
import { MapPin, Book, Phone, X, Menu, ChevronDown } from "lucide-react"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      >
        <div className="flex flex-col h-full p-5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Bolivia Tour</h1>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-4">
            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown("destinos")}
                className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Destinos</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${activeDropdown === "destinos" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "destinos" && (
                <div className="ml-9 space-y-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">
                    Explorar Destinos
                  </a>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown("blog")}
                className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Book className="w-5 h-5" />
                  <span>Blog</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${activeDropdown === "blog" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "blog" && (
                <div className="ml-9 space-y-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">
                    Blog Principal
                  </a>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => toggleDropdown("contacto")}
                className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded-md transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>Contacto</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${activeDropdown === "contacto" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "contacto" && (
                <div className="ml-9 space-y-2">
                  <a href="#" className="block p-2 hover:bg-gray-100 rounded-md transition-colors">
                    Contáctenos
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Bottom Buttons */}
          <div className="mt-auto space-y-3 pt-6">
            <button className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Contacto
            </button>
            <button className="w-full py-2 px-4 border border-black rounded-md hover:bg-gray-50 transition-colors">
              Quienes Somos
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
            alt="Paisaje de Sudamérica"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4">
              EXPLORA SUDAMÉRICA CON NOSOTROS
            </h1>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">DESTINOS EXPLORADOS DE SUDAMÉRICA</h2>
          <p className="text-gray-600 mb-8">Los destinos más visitados por nuestros usuarios:</p>

          {/* Grid of Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((destination, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{destination.title}</h3>
                  <p className="text-gray-600">Descubre este increíble destino en Sudamérica.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
