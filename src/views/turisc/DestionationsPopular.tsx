export const DestionationsPopular = () =>
{
  return(
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Destinos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: "Islas Galápagos", image: "/placeholder.svg?height=200&width=200" },
          { name: "Costa Pacífica", image: "/placeholder.svg?height=200&width=200" },
          { name: "Selva Amazónica", image: "/placeholder.svg?height=200&width=200" },
        ].map((destination, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
            <img
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-medium">{destination.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}