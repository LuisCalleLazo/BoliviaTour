"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Calendar, MapPin, Users, Star, Play, X, ArrowRight, Edit, Trash, ImageIcon, Video } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Tour Salar de Uyuni",
    description:
      "Embárcate en una aventura única por el desierto de sal más grande del mundo. Descubre paisajes surrealistas, lagunas de colores y una biodiversidad increíble en este tour de 3 días por el Salar de Uyuni.",
    image: "https://images.unsplash.com/photo-1551224364-0082433a7d32?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800&h=600&fit=crop",
    ],
    duration: "3 días",
    location: "Uyuni, Potosí",
    groupSize: "2-6 personas",
    rating: 4.9,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    includes: ["Transporte 4x4", "Guía bilingüe", "Alojamiento", "Comidas completas", "Equipo de seguridad"],
    highlights: [
      "Amanecer en el Salar",
      "Isla Incahuasi",
      "Lagunas de colores",
      "Desierto de Siloli",
      "Aguas termales",
    ],
  },
]

export const ProductServiceView = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editMode, setEditMode] = useState<"video" | "gallery" | null>(null)
  const [videoUrl, setVideoUrl] = useState(products[0].videoUrl)
  const [galleryImages, setGalleryImages] = useState([...products[0].gallery])

  // Para nuevas imágenes
  const [newImages, setNewImages] = useState<File[]>([])
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([])
  const [newVideo, setNewVideo] = useState<File | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  const product = products[0]

  const handleEditVideo = () => {
    setEditMode("video")
    setIsEditModalOpen(true)
  }

  const handleEditGallery = () => {
    setEditMode("gallery")
    setIsEditModalOpen(true)
  }

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value)
  }

  const handleRemoveGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files)
      setNewImages((prev) => [...prev, ...filesArray])

      const newPreviews = filesArray.map((file) => URL.createObjectURL(file))
      setNewImagePreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewVideo(e.target.files[0])
    }
  }

  const handleRemoveNewImage = (index: number) => {
    setNewImages(newImages.filter((_, i) => i !== index))
    setNewImagePreviews(newImagePreviews.filter((_, i) => i !== index))
  }

  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar los cambios en el backend
    // Por ahora solo actualizamos el estado local

    if (editMode === "video") {
      // Si hay un nuevo video, aquí se procesaría la subida
      console.log("Video URL actualizada:", videoUrl)
      if (newVideo) {
        console.log("Nuevo archivo de video para subir:", newVideo)
      }
    } else if (editMode === "gallery") {
      console.log("Galería actualizada:", galleryImages)
      if (newImages.length > 0) {
        console.log("Nuevas imágenes para subir:", newImages)
        // Aquí simularíamos que las imágenes se subieron y obtuvieron URLs
        const mockNewImageUrls = newImagePreviews.map((preview) => preview)
        setGalleryImages([...galleryImages, ...mockNewImageUrls])
      }
    }

    // Limpiar estado y cerrar modal
    setNewImages([])
    setNewImagePreviews([])
    setNewVideo(null)
    setIsEditModalOpen(false)
    setEditMode(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 pb-12">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-sky-900/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <a
              href="/product-service"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180 mr-2" />
              Volver a Tours
            </a>
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{product.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{product.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span>{product.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Descripción del Tour
              </h2>
              <p className="text-emerald-700 leading-relaxed mb-8">{product.description}</p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Ver Video del Tour
                </button>

                <button
                  onClick={handleEditVideo}
                  className="inline-flex items-center gap-2 bg-white border border-emerald-500 text-emerald-600 px-6 py-3 rounded-full hover:bg-emerald-50 transition-all duration-300"
                >
                  <Edit className="w-5 h-5" />
                  Editar Video
                </button>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                  Galería
                </h2>
                <button
                  onClick={handleEditGallery}
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <Edit className="w-5 h-5" />
                  Editar Galería
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Destacados
              </h3>
              <ul className="space-y-3">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Incluye
              </h3>
              <ul className="space-y-3">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                {editMode === "video" ? "Editar Video" : "Editar Galería"}
              </h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {editMode === "video" && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                      URL del Video (YouTube, Vimeo, etc.)
                    </label>
                    <input
                      type="text"
                      id="videoUrl"
                      value={videoUrl}
                      onChange={handleVideoUrlChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="https://www.youtube.com/embed/..."
                    />
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">O sube un archivo de video</p>
                    <div
                      className="border-2 border-dashed rounded-lg p-4 text-center border-gray-300 hover:border-emerald-300 cursor-pointer"
                      onClick={() => videoInputRef.current?.click()}
                    >
                      <Video className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Haz clic para subir un video</p>
                      <p className="text-xs text-gray-400 mt-1">MP4, WEBM hasta 50MB</p>
                      <input
                        type="file"
                        ref={videoInputRef}
                        onChange={handleVideoFileChange}
                        accept="video/*"
                        className="hidden"
                      />
                    </div>
                    {newVideo && <p className="mt-2 text-sm text-emerald-600">Video seleccionado: {newVideo.name}</p>}
                  </div>

                  {videoUrl && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Vista previa:</p>
                      <div className="aspect-video rounded-lg overflow-hidden border">
                        <iframe
                          src={videoUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {editMode === "gallery" && (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">Imágenes actuales</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => handleRemoveGalleryImage(index)}
                            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-sm font-medium text-gray-700 mb-3">Agregar nuevas imágenes</p>
                    <div
                      className="border-2 border-dashed rounded-lg p-4 text-center border-gray-300 hover:border-emerald-300 cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Haz clic para subir imágenes</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP hasta 5MB</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                    </div>

                    {newImagePreviews.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Nuevas imágenes:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {newImagePreviews.map((preview, index) => (
                            <div key={index} className="relative group">
                              <img
                                src={preview || "/placeholder.svg"}
                                alt={`New image ${index + 1}`}
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <button
                                onClick={() => handleRemoveNewImage(index)}
                                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductServiceView
