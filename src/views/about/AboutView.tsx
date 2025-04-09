import { Users, Award, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutView = () => {
  const logos = [
    'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1560964645-5296b5099677?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=250&h=150&fit=crop',
    'https://images.unsplash.com/photo-1564594736624-def7a10ab047?w=250&h=150&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-subtle-zoom"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-sky-900/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-lg">
              Descubre Nuestro Mundo
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Explora Bolivia con expertos que conocen cada rincón de este hermoso país
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-emerald-800 leading-relaxed">
            Somos una agencia operadora de turismo apasionada por crear experiencias únicas y memorables. 
            Nos especializamos en organizar y diseñar planes turísticos que destacan la belleza natural 
            y cultural de Bolivia.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-sky-600 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Por Qué Elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Atención Personalizada",
                description: "Cada viaje es único, diseñado específicamente para ti"
              },
              {
                icon: Award,
                title: "Destinos Exclusivos",
                description: "Acceso a lugares únicos y experiencias extraordinarias"
              },
              {
                icon: Heart,
                title: "Experiencias Auténticas",
                description: "Vivencias genuinas con la cultura local"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-white/20 rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 overflow-hidden bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            Nuestros Socios de Viaje
          </h2>
          <div className="relative">
            <div className="flex space-x-8 animate-marquee">
              {[...logos, ...logos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[250px] h-[150px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 to-sky-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para tu próxima aventura?</h2>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto">
            Comienza a planear el viaje de tus sueños con nuestro equipo de expertos.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full text-emerald-600 font-semibold 
                     hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Reserva Ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};