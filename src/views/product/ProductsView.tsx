import { Link } from "react-router-dom";
import { Calendar, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Tour Salar de Uyuni",
    description: "Explora el desierto de sal más grande del mundo en una aventura inolvidable",
    image: "https://images.unsplash.com/photo-1551224364-0082433a7d32?w=800&h=600&fit=crop",
    category: "Tour Premium",
    duration: "3 días",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Tiwanaku y Lago Titicaca",
    description: "Descubre la antigua civilización y el lago navegable más alto del mundo",
    image: "https://images.unsplash.com/photo-1553550015-8b0d7c1489e7?w=800&h=600&fit=crop",
    category: "Tour Cultural",
    duration: "2 días",
    rating: 4.8,
  },
  {
    id: 3,
    name: "La Paz City Tour",
    description: "Recorre la ciudad maravillosa y sus principales atractivos turísticos",
    image: "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
    category: "City Tour",
    duration: "1 día",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Madidi - Rurrenabaque",
    description: "Aventúrate en la selva amazónica y conoce su biodiversidad única",
    image: "https://images.unsplash.com/photo-1596395819057-e37f55a8516b?w=800&h=600&fit=crop",
    category: "Aventura",
    duration: "4 días",
    rating: 4.9,
  },
];

export const ProductsView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-subtle-zoom"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551224364-0082433a7d32?w=1200&h=600&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-sky-900/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg text-center px-4">
            Nuestros Tours y Servicios
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              to={`/product-service-detail/${product.id}`} 
              key={product.id} 
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-600">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                    {product.name}
                  </h2>
                  <p className="text-emerald-700 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between text-sm text-emerald-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{product.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};