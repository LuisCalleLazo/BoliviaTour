import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-sky-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
          Información de Contacto
        </h2>
        <ul className="space-y-6">
          <li className="flex items-center gap-4 group">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-emerald-800">Teléfono</p>
              <span className="text-emerald-600">+591 788 86 429</span>
            </div>
          </li>
          <li className="flex items-center gap-4 group">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-emerald-800">Email</p>
              <span className="text-emerald-600">info@tuempresa.com</span>
            </div>
          </li>
          <li className="flex items-center gap-4 group">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-emerald-800">Dirección</p>
              <span className="text-emerald-600">Calle Sagarnaga entre linares e illampu Nº 334, oficina 4</span>
            </div>
          </li>
          <li className="flex items-center gap-4 group">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-lg text-white transform group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-emerald-800">Horario</p>
              <span className="text-emerald-600">10:00 am - 19:30 pm</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-12 rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3753550976897!2d-68.13999492374283!3d-16.495889141768386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f207236c9c2bd%3A0x9c498c69ed01b7d1!2sCalle%20Sagarnaga%2C%20La%20Paz!5e0!3m2!1sen!2sbo!4v1709764532301!5m2!1sen!2sbo"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full hover:opacity-90 transition-opacity duration-300"
        ></iframe>
      </div>
    </div>
  );
}