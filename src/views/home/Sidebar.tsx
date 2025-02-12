"use client"

import { useState } from "react"
import { Book, ChevronDown, MapPin, Phone, Menu, X } from "lucide-react"
import type React from "react" // Added import for React

interface NavItem {
  title: string
  icon: React.ElementType
  submenu: string[]
  href: string[]
}

const navItems: NavItem[] = [
  {
    title: "Destinos",
    icon: MapPin,
    submenu: ["Explorar Destinos"],
    href: ["#"],
  },
  {
    title: "Blog",
    icon: Book,
    submenu: ["Blog Principal"],
    href: ["#"],
  },
  {
    title: "Contacto",
    icon: Phone,
    submenu: ["Contáctenos"],
    href: ["#"],
  },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full p-5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Bolivia Tour</h1>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-100 rounded-md transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === item.title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.title && (
                  <div className="ml-9 space-y-2">
                    {item.submenu.map((subItem, index) => (
                      <a
                        key={subItem}
                        href={item.href[index]}
                        className="block p-2 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Buttons */}
          <div className="mt-auto space-y-3 pt-6">
            <button className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Contacto
            </button>
            <button className="w-full py-2 px-4 border border-black rounded-md hover:bg-gray-50 transition-colors">
              Quienes Somos
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

