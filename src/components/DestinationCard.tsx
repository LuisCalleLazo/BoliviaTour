interface DestinationCardProps {
  title: string
  image: string
}

export function DestinationCard({ title, image }: DestinationCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow hover:cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">Descubre este increíble destino en Sudamérica.</p>
      </div>
    </div>
  )
}

