import { MdOutlineDisabledByDefault as DefaultIcon } from "react-icons/md";
import { MdOutlineArrowForwardIos as IconArrow } from "react-icons/md";


const services = [
  {
    id: 1,
    title: "Construccion en seco",
    description: "Full-service contracting for projects of all sizes, from planning to completion.",
    icon: IconArrow,
  },
  {
    id: 2,
    title: "Albañileria",
    description: "Expert oversight of your construction project, ensuring quality, timeline, and budget compliance.",
    icon: IconArrow,
  },
  {
    id: 3,
    title: "Plomeria",
    description: "Integrated approach combining design and construction services for streamlined project delivery.",
    icon: IconArrow,
  },
  {
    id: 4,
    title: "Mamposteria",
    description: "Transform existing spaces with our comprehensive renovation and remodeling services.",
    icon: IconArrow,
  },
  {
    id: 5,
    title: "Revestimientos en general",
    description: "Specialized heavy equipment services for excavation, demolition, and site preparation.",
    icon: IconArrow,
  },
  {
    id: 6,
    title: "Trabajos en yeso",
    description: "Ongoing maintenance and repair services to keep your property in optimal condition.",
    icon: IconArrow,
  },
  {
    id: 7,
    title: "Pintura en general",
    description: "Ongoing maintenance and repair services to keep your property in optimal condition.",
    icon: IconArrow,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contamos con una amplia gama de servicios de construcción y empleados capacitados para satisfacer todas tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300"
              >
               <div className="w-full flex items-center justify-start mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
               </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Listo para comenzar con tu proyecto?</h3>
              <p className="text-blue-100">
                No dudes en contactarnos para pedir tu presupuesto sin costo.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

