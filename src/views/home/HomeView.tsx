import { DestinationCard } from "../../components";
import { Hero } from "./Hero";

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


export const HomeView = () =>
{
  return(
    <>
      <Hero />
      {/* Mision y Vision */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">MISION</h2>
        <p className="text-gray-600 mb-8">
          Somos una agencia de viajes que brinda experiencias unicas e innovadoras con una relacion respetuosa del ambiente.
          Nos caracteriza la personalización de nuestros servicios turistíticos, ofreciendo servicios de calidad y confianza.
          Realizando viajes a medida del cliente.
        </p>
        <h2 className="text-3xl font-bold mb-8">VISION</h2>
        <p className="text-gray-600 mb-8">
          Ser referentes a nivel nacional e internacional, reconocidos por nuestra experiencia, confianza, calidad, innovación
          y valores; comprometidos con la conservación de los recursos naturales; impulsando el desarrollo de un turismo sostenible
          y sustentable
        </p>
      </section>


      {/* Destinations Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">DESTINOS EXPLORADOS DE SUDAMÉRICA</h2>
        <p className="text-gray-600 mb-8">Los destinos más visitados por nuestros usuarios:</p>

        {/* Grid of Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} title={destination.title} image={destination.image} />
          ))}
        </div>
      </section>
    </>
  );
}