import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

export function Hero() {
  const navigate = useNavigate();
  // const { t } = useTranslation();
  
  return (
    <section className="relative h-[60vh] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
        alt="Paisaje de Sudamérica"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center flex-wrap">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center px-4 mb-12">
          VIAJE A TU MEDIDA
        </h1>
        <div className="flex gap-4 justify-end w-full max-w-7xl px-4">
          <button 
            className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => {navigate('/product-service')}}>
            Ver Productos
          </button>
          <button className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => {navigate('/contact')}}>
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}