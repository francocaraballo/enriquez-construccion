import { LazyLoadImage } from "react-lazy-load-image-component";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A 12-story commercial building with state-of-the-art facilities and sustainable design features.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    description: "Premium residential apartments with high-end finishes and panoramic city views.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    description: "A 50,000 sq ft industrial facility with advanced logistics infrastructure.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Industrial",
  },
  {
    id: 4,
    title: "Community Recreation Center",
    description: "Multi-purpose community center featuring sports facilities, meeting rooms, and event spaces.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Public",
  },
  {
    id: 5,
    title: "Retail Shopping Plaza",
    description: "Modern shopping complex with 25 retail units and underground parking.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Waterfront Restaurant",
    description: "Contemporary dining establishment with panoramic water views and outdoor seating.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise in various construction sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64">
                <LazyLoadImage src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-orange-500 font-medium hover:text-orange-600 flex items-center transition duration-300">
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

