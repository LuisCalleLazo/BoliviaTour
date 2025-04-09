import { Link } from "react-router-dom";

export const Footer = () =>
{
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Nuestra Empresa</h3>
            <p className="text-gray-400">Ofreciendo productos y servicios de calidad desde 2025.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Enlaces Rápidos</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/product-service" className="hover:text-white">
                  Productos y Servicios
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
            <p className="text-gray-400">Email (1): turismo.extremo.bo@gmail.com</p>
            <p className="text-gray-400">Email (2): joseuscamaytaespiritu@gmail.com</p>
            <p className="text-gray-400">Teléfono: (591) 78886429</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nuestra Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}