import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Star, Play, X, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Tour Salar de Uyuni",
    description: "Embárcate en una aventura única por el desierto de sal más grande del mundo. Descubre paisajes surrealistas, lagunas de colores y una biodiversidad increíble en este tour de 3 días por el Salar de Uyuni.",
    image: "https://images.unsplash.com/photo-1551224364-0082433a7d32?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
    ],
    duration: "3 días",
    location: "Uyuni, Potosí",
    groupSize: "2-6 personas",
    rating: 4.9,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    includes: [
      "Transporte 4x4",
      "Guía bilingüe",
      "Alojamiento",
      "Comidas completas",
      "Equipo de seguridad",
    ],
    highlights: [
      "Amanecer en el Salar",
      "Isla Incahuasi",
      "Lagunas de colores",
      "Desierto de Siloli",
      "Aguas termales",
    ],
  },
];

export const ProductServiceView = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const product = products[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 pb-12">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-sky-900/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link 
              to="/product-service" 
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180 mr-2" />
              Volver a Tours
            </Link>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{product.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{product.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span>{product.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Descripción del Tour
              </h2>
              <p className="text-emerald-700 leading-relaxed mb-8">{product.description}</p>
              
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Ver Video del Tour
              </button>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Galería
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Destacados
              </h3>
              <ul className="space-y-3">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Incluye
              </h3>
              <ul className="space-y-3">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={product.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};