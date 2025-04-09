
export const AboutView = () => {
  const logos = [
    'https://png.pngtree.com/png-clipart/20230923/original/pngtree-palm-tree-summe-tourism-logo-graphic-vector-png-image_12533650.png',
    'https://www.shutterstock.com/image-vector/beach-logo-design-vector-illustration-260nw-2201936735.jpg',
    'https://www.designevo.com/res/templates/thumb_small/blue-sea-and-beautiful-beach.webp',
    'https://png.pngtree.com/png-clipart/20230923/original/pngtree-palm-tree-summe-tourism-logo-graphic-vector-png-image_12533650.png',
    'https://www.shutterstock.com/image-vector/beach-logo-design-vector-illustration-260nw-2201936735.jpg',
    'https://png.pngtree.com/png-clipart/20230923/original/pngtree-palm-tree-summe-tourism-logo-graphic-vector-png-image_12533650.png',
    'https://www.shutterstock.com/image-vector/beach-logo-design-vector-illustration-260nw-2201936735.jpg',
    'https://www.designevo.com/res/templates/thumb_small/blue-sea-and-beautiful-beach.webp',
    'https://png.pngtree.com/png-clipart/20230923/original/pngtree-palm-tree-summe-tourism-logo-graphic-vector-png-image_12533650.png',
    'https://www.shutterstock.com/image-vector/beach-logo-design-vector-illustration-260nw-2201936735.jpg',
  ]


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/AC42/production/_95589044_gettyimages-534215078.jpg.webp')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Descubre Nuestro Mundo</h1>
        </div>
      </div>

      {/* Brands Carousel */}
      <div className="bg-gray-200 py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            Nuestras Marcas Representadas
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-4 animate-marquee">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 px-4">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Logo ${index + 1}`}
                    className="w-full object-contain"
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }
        `}</style>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Sobre Nosotros</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Somos una agencia operadora de turismo, que se dedica a organizar y vender planes turisticos
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-gray-300 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Por Qué Elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Destinos Exclusivos", "Atención Personalizada", "Experiencias Auténticas"].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature}</h3>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu próxima aventura?</h2>
          <p className="mb-8">Contáctanos hoy y comienza a planear el viaje de tus sueños.</p>
          <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Reserva Ahora
          </button>
        </div>
      </div>
    </div>
  )
}
