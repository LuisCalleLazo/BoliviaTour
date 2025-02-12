interface BlogPost {
  title: string
  description: string
  date: string
  category: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Los mejores destinos de Bolivia",
    description: "Descubre los lugares más impresionantes que Bolivia tiene para ofrecer...",
    date: "2024-02-12",
    category: "Guías",
    image:
      "https://images.unsplash.com/photo-1494368308039-ed3393a402a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80",
  },
  {
    title: "Tips para viajar por Sudamérica",
    description: "Consejos esenciales para tu próxima aventura por Sudamérica...",
    date: "2024-02-10",
    category: "Tips de Viaje",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  },
  // Add more blog posts as needed
]

export const BlogView = () =>
{
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Blog de Viajes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">{post.category}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{new Date(post.date).toLocaleDateString()}</p>
              <p className="text-gray-600">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

