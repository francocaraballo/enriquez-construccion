import { services } from "../data/services.data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center mb-4">
              {/* <HardHat className="h-8 w-8 text-orange-500" /> ACA PONER EL LOGO */}
              <span className="ml-2 text-xl font-bold">Enriquez Construccion</span>
            </div>
            <p className="text-gray-400 mb-4">
              Mas de 10 años de experiencia en el rubro. Calidad, seriedad y responsabilidad en cada uno de nuestros trabajos.
            </p>
          </div>

          {/* Accesos rapidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accesos rapidos</h3>
            <ul className="space-y-2">              
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              {
                services.map((service) => (
                  <li key={service.id}>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                      {service.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Enriquez Construccion. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Sitio realizado por <a className="text-gray-200 underline" href="https://github.com/francocaraballo">Franco</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

