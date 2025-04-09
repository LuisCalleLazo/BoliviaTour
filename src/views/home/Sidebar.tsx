"use client"

import { useState } from "react"
import { Book, ChevronDown, MapPin, Mail, Menu, X, Home, Users } from "lucide-react"
import type React from "react"
import { cn } from "../../utils/cn"
import { Link } from "react-router-dom"
import logo from "../../assets/icons/logo.png";
interface NavItem {
  title: string
  icon: React.ElementType
  href: string
  submenu?: {
    title: string
    href: string
  }[]
}

const navItems: NavItem[] = [
  {
    title: "Inicio",
    icon: Home,
    href: "/",
  },
  {
    title: "Quienes Somos",
    icon: Users,
    href: "/about",
  },
  {
    
    title: "Productos y Servicios",
    icon: MapPin,
    href: "/product-service",
    // title: "Destinos",
    // icon: MapPin,
    // href: "/destinations",
    // submenu: [
    //   { title: "Explorar Destinos", href: "/destinations/explore" },
    //   { title: "Populares", href: "/destinations/popular" },
    // ],
  },
  {
    title: "Blog",
    icon: Book,
    href: "/blog",
    submenu: [
      { title: "Artículos", href: "/blog/articles" },
      // { title: "Guías", href: "/blog/guias" },
      // { title: "Tips de Viaje", href: "/blog/tips" },
    ],
  },
  {
    title: "Contactanos",
    icon: Mail,
    href: "/contact",
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
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 shadow-xl transform transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-800">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>

          <nav className="flex-1 py-6">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className={cn(
                      "flex items-center w-full px-6 py-3 text-sm transition-colors",
                      "hover:bg-gray-800 hover:text-white hover:cursor-pointer",
                      activeDropdown === item.title && "bg-gray-800 text-white",
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left">{item.title}</span>
                    <ChevronDown
                      className={cn("w-4 h-4 transition-transform", activeDropdown === item.title && "rotate-180")}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center w-full px-6 py-3 text-sm transition-colors",
                      "hover:bg-gray-800 hover:text-white",
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.title}</span>
                  </Link>
                )}
                {item.submenu && activeDropdown === item.title && (
                  <div className="bg-gray-800 py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="flex items-center pl-14 pr-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

