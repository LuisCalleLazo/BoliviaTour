"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react"

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
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
          </div>
          <p className="text-gray-600 mb-8">Nos pondremos en contacto contigo lo antes posible.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Asunto del mensaje"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 min-h-[150px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-600" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-600" />
                <span>info@tuempresa.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span>Calle Principal 123, 28001 Madrid, España</span>
              </li>
            </ul>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6117630636364!2d-3.7037974846009856!3d40.41694637936441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287d6da3df33%3A0x6e2194f2a42d32f6!2sPuerta%20del%20Sol%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1645454332432!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

