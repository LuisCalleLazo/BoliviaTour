import { Mail, MapPin, Phone, HourglassIcon } from "lucide-react"

export const ContactInfo = () =>
  {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-600" />
              <span>+591 788 86 429</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-600" />
              <span>info@tuempresa.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>Calle Sagarnaga entre linares e illampu Nº 334, oficina 4</span>
            </li>
            <li className="flex items-center gap-2">
              <HourglassIcon className="w-5 h-5 text-gray-600" />
              <span>10:00 am - 19:30 pm</span>
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
    );
  }