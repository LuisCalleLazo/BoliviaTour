import type React from "react"
import { useState } from "react"
import { MessageSquare } from "lucide-react"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-emerald-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg text-white">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
          Envíanos un mensaje
        </h2>
      </div>
      <p className="text-emerald-700 mb-8">
        Nos pondremos en contacto contigo lo antes posible.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-emerald-700">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 bg-white/50 hover:bg-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-emerald-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 bg-white/50 hover:bg-white"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 text-emerald-700">
            Asunto
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Asunto del mensaje"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
            className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 bg-white/50 hover:bg-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-emerald-700">
            Mensaje
          </label>
          <textarea
            id="message"
            placeholder="Escribe tu mensaje aquí..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 bg-white/50 hover:bg-white min-h-[150px] resize-y"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 shadow-lg"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  )
}