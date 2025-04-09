import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-600 to-sky-600 text-white py-12 shadow-[inset_0_4px_24px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Nuestra Empresa</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Ofreciendo experiencias únicas y servicios de calidad en turismo desde 2025. Descubre Bolivia con nosotros.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/product-service" 
                  className="text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50"></span>
                  Productos y Servicios
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-white flex items-center gap-2 transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white/50"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Contáctanos</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-white/80">turismo.extremo.bo@gmail.com</p>
                  <p className="text-white/80">joseuscamaytaespiritu@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-white/80">(591) 78886429</p>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-white/80">La Paz, Bolivia</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/80">
              &copy; {new Date().getFullYear()} Bolivia Tour. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}