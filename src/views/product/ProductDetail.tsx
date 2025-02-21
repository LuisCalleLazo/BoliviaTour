import { Link } from "react-router-dom"

const products = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripción detallada del producto 1",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    specs: ["Especificación 1", "Especificación 2", "Especificación 3"],
    certifications: ["ISO 9001", "CE"],
    recommendations: "Recomendado para uso industrial en ambientes controlados.",
  },
]

export const ProductServiceView = () => {
  const product = products[0]

  return (
    <div className="flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/product-service" className="text-blue-600 hover:underline mb-4 inline-block">
          &larr; Volver a Productos y Servicios
        </Link>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <h2 className="text-xl font-semibold mb-2">Especificaciones Técnicas</h2>
            <ul className="list-disc list-inside mb-6">
              {product.specs.map((spec, index) => (
                <li key={index} className="text-gray-600">
                  {spec}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Certificaciones</h2>
            <ul className="list-disc list-inside mb-6">
              {product.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600">
                  {cert}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Recomendaciones de Uso</h2>
            <p className="text-gray-600">{product.recommendations}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

