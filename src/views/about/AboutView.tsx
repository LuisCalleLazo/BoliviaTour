export const AboutView = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/AC42/production/_95589044_gettyimages-534215078.jpg.webp')" }}
      >
        <div className="absolute inset-0 bg-blend-multiply flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Descubre Nuestro Mundo</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre Nosotros</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Somos una agencia de viajes apasionada por crear experiencias únicas e inolvidables. Con años de experiencia,
          nos dedicamos a hacer realidad los sueños de viaje de nuestros clientes.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Por Qué Elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Destinos Exclusivos", "Atención Personalizada", "Experiencias Auténticas"].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "María García", text: "Una experiencia increíble. El viaje superó todas mis expectativas." },
            {
              name: "Juan Pérez",
              text: "Atención al cliente excepcional y destinos maravillosos. ¡Totalmente recomendado!",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu próxima aventura?</h2>
          <p className="mb-8">Contáctanos hoy y comienza a planear el viaje de tus sueños.</p>
          <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Reserva Ahora
          </button>
        </div>
      </div>
    </div>
  )
}

