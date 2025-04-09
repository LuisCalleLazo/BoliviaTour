import { useState } from "react";
import { ChevronDown, MapPin, Mail, Menu, X, Home, Users } from "lucide-react";
import type React from "react";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
  submenu?: {
    title: string;
    href: string;
  }[];
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
  },
  {
    title: "Contactanos",
    icon: Mail,
    href: "/contact",
  },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gradient-to-r to-sky-900 from-emerald-900 rounded-full shadow-lg text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-[260px] bg-gradient-to-b to-sky-900 from-emerald-900 text-white shadow-2xl transform transition-all duration-500 ease-out z-40",
          "border-r border-white/10",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex justify-center items-center transform hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="Bolivia Tour Logo" className="h-16 object-contain" />
            </div>
          </div>

          <nav className="flex-1 py-6 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "flex items-center w-full px-6 py-4 text-sm transition-all duration-300",
                      "hover:bg-white/10 hover:pl-8",
                      activeDropdown === item.title && "bg-white/10",
                      hoveredItem === item.title && "pl-8"
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left font-medium">{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.title && "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "flex items-center w-full px-6 py-4 text-sm transition-all duration-300",
                      "hover:bg-white/10 hover:pl-8",
                      hoveredItem === item.title && "pl-8",
                      "group"
                    )}
                  >
                    <item.icon className={cn(
                      "w-5 h-5 mr-3 transition-transform duration-300",
                      "group-hover:scale-110"
                    )} />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                )}
                {item.submenu && activeDropdown === item.title && (
                  <div className="bg-white/5 animate-fadeIn">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className="flex items-center pl-14 pr-6 py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 hover:pl-16"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="p-6 border-t border-white/10 bg-white/5">
            <p className="text-sm text-white/70 text-center">
              Bolivia Tour © 2025
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}