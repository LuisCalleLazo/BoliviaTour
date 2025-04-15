"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X, Upload, Plus, Video, ImageIcon } from "lucide-react"
import chacaltaya1 from '../../assets/places/chacaltaya_valle_de_luna/chacaltaya1.jpg';
import valleluna from '../../assets/places/chacaltaya_valle_de_luna/VALLE DE LUNA1.jpg';
import charquini from '../../assets/places/charquini/Charquini.jpeg';
// import cityValleLuna from '../../assets/places/city_valle_de_luna/valle_de_luna_1.jpg';
import copacabana from '../../assets/places/copacabana/copacabana.jpg';
import selvaPampas from '../../assets/places/selva_y_pampas/pampas-05.jpg';
import death_road from '../../assets/places/death_road/death_road_1.jpg';
import tiwanacu from '../../assets/places/tiwanacu/tiwanacu_1.jpg';
import uyuni from '../../assets/places/uyuni/salar_1.jpg';

export const ProductsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null)
  const [additionalImages, setAdditionalImages] = useState<File[]>([])
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState<string[]>([])
  const [video, setVideo] = useState<File | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)

  const mainImageRef = useRef<HTMLInputElement>(null)
  const additionalImagesRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLInputElement>(null)

  // Productos de ejemplo
  
  const products = [
    {
      id: 1,
      name: "Chacaltaya",
      description: "Explora el desierto de sal más grande del mundo en una aventura inolvidable",
      image: chacaltaya1,
      category: "Tour Premium",
      duration: "3 días",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Valle de la luna",
      description: "Descubre la antigua civilización y el lago navegable más alto del mundo",
      image: valleluna,
      category: "Tour Cultural",
      duration: "2 días",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Charquini",
      description: "Recorre la ciudad maravillosa y sus principales atractivos turísticos",
      image: charquini,
      category: "City Tour",
      duration: "1 día",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Selva y Pampas",
      description: "Aventúrate en la selva amazónica y conoce su biodiversidad única",
      image:selvaPampas,
      category: "Aventura",
      duration: "4 días",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Copacabana",
      description: "Aventúrate en la selva amazónica y conoce su biodiversidad única",
      image: copacabana,
      category: "Aventura",
      duration: "4 días",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Camino de la muerte",
      description: "Aventúrate en la selva amazónica y conoce su biodiversidad única",
      image: death_road,
      category: "Aventura",
      duration: "4 días",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Tiwanacu",
      description: "Aventúrate en la selva amazónica y conoce su biodiversidad única",
      image: tiwanacu,
      category: "Aventura",
      duration: "4 días",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Salar de Uyuni",
      description: "Aventúrate en la selva amazónica y conoce su biodiversidad única",
      image: uyuni,
      category: "Aventura",
      duration: "4 días",
      rating: 4.9,
    },
  ];

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setMainImage(file)
      setMainImagePreview(URL.createObjectURL(file))
    }
  }

  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files)
      setAdditionalImages((prev) => [...prev, ...filesArray])

      const newPreviews = filesArray.map((file) => URL.createObjectURL(file))
      setAdditionalImagePreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setVideo(file)
      setVideoPreview(URL.createObjectURL(file))
    }
  }

  const removeAdditionalImage = (index: number) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index))
    setAdditionalImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos al backend
    console.log("Formulario enviado", {
      mainImage,
      additionalImages,
      video,
      // Otros campos del formulario
    })

    // Cerrar modal y resetear formulario
    setIsModalOpen(false)
    resetForm()
  }

  const resetForm = () => {
    setMainImage(null)
    setMainImagePreview(null)
    setAdditionalImages([])
    setAdditionalImagePreviews([])
    setVideo(null)
    setVideoPreview(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 animate-subtle-zoom"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551224364-0082433a7d32?w=1200&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-sky-900/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg text-center px-4">
            Nuestros Tours y Servicios
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Botón para agregar destino */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Agregar Destino
          </button>
        </div>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <a href={`/product-service-detail`} key={product.id} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-600">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                    {product.name}
                  </h2>
                  <p className="text-emerald-700 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between text-sm text-emerald-600">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{product.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-current text-yellow-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Modal para agregar destino */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                Agregar Nuevo Destino
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Información básica */}
                <div className="space-y-4 md:col-span-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Destino
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Ej: Tour a Machu Picchu"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Describe este destino..."
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Categoría
                      </label>
                      <select
                        id="category"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        required
                      >
                        <option value="">Seleccionar categoría</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Gastronómico">Gastronómico</option>
                        <option value="Relax">Relax</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                        Duración
                      </label>
                      <input
                        type="text"
                        id="duration"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Ej: 3 días"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Imagen principal */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imagen Principal</label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center ${
                      mainImagePreview ? "border-emerald-300 bg-emerald-50" : "border-gray-300 hover:border-emerald-300"
                    }`}
                  >
                    {mainImagePreview ? (
                      <div className="relative">
                        <img
                          src={mainImagePreview || "/placeholder.svg"}
                          alt="Vista previa"
                          className="mx-auto max-h-48 rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setMainImage(null)
                            setMainImagePreview(null)
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div onClick={() => mainImageRef.current?.click()} className="cursor-pointer py-8">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">Haz clic para subir la imagen principal</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP hasta 5MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={mainImageRef}
                      onChange={handleMainImageChange}
                      accept="image/*"
                      className="hidden"
                      required={!mainImage}
                    />
                  </div>
                </div>

                {/* Imágenes adicionales */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imágenes Adicionales</label>
                  <div className="border-2 border-dashed rounded-lg p-4 text-center border-gray-300 hover:border-emerald-300">
                    <div onClick={() => additionalImagesRef.current?.click()} className="cursor-pointer py-4">
                      <Upload className="mx-auto h-10 w-10 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Haz clic para subir imágenes adicionales</p>
                      <p className="text-xs text-gray-400 mt-1">Puedes seleccionar múltiples imágenes</p>
                    </div>
                    <input
                      type="file"
                      ref={additionalImagesRef}
                      onChange={handleAdditionalImagesChange}
                      accept="image/*"
                      className="hidden"
                      multiple
                    />
                  </div>

                  {additionalImagePreviews.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {additionalImagePreviews.map((preview, index) => (
                        <div key={index} className="relative">
                          <img
                            src={preview || "/placeholder.svg"}
                            alt={`Imagen adicional ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeAdditionalImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Video */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video (Opcional)</label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-4 text-center ${
                      videoPreview ? "border-emerald-300 bg-emerald-50" : "border-gray-300 hover:border-emerald-300"
                    }`}
                  >
                    {videoPreview ? (
                      <div className="relative">
                        <video src={videoPreview} controls className="mx-auto max-h-48 rounded-lg" />
                        <button
                          type="button"
                          onClick={() => {
                            setVideo(null)
                            setVideoPreview(null)
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div onClick={() => videoRef.current?.click()} className="cursor-pointer py-8">
                        <Video className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">Haz clic para subir un video</p>
                        <p className="text-xs text-gray-400 mt-1">MP4, WEBM hasta 50MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={videoRef}
                      onChange={handleVideoChange}
                      accept="video/*"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Guardar Destino
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsView
