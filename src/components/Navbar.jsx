// Navbar.jsx
import { useState } from 'react';
import { RxHamburgerMenu as Menu } from "react-icons/rx";
import { TfiClose as X } from "react-icons/tfi";


// Importar iconos de la librería que prefieras (react-icons, etc.)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Resto del código similar, pero cambiando los a de Next.js por a de react-router-dom
  // o usando <a href="#section-id"> para navegación dentro de la página
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
          {/* Aca va el logo */}
            <span className="ml-2 text-xl font-bold text-gray-800">Enriquez Construccion</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
            Inicio
          </a>
          <a href="#projects" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
            Proyectos
          </a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
            Servicios
          </a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 font-medium">
            Contacto
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300"
          >
            Presupuesto
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="/"
            className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
            onClick={toggleMenu}
          >
            Inicio
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
            onClick={toggleMenu}
          >
            Proyectos
          </a>
          <a
            href="#services"
            className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
            onClick={toggleMenu}
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
            onClick={toggleMenu}
          >
            Contacto
          </a>
          <a
            href="#contact"
            className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300"
            onClick={toggleMenu}
          >
            Presupuesto
          </a>
        </div>
      </div>
    )}
  </nav>
  );
}