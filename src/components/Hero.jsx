import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <LazyLoadImage
          src="/placeholder.svg?height=1080&width=1920"
          alt="Construction site"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Building Your Vision, <span className="text-orange-500">Crafting Your Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            With over 25 years of experience, BuildRight Construction delivers exceptional quality and reliability for
            commercial and residential projects of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium text-lg inline-block text-center transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#projects"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md font-medium text-lg inline-block text-center transition duration-300"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 text-gray-200">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 text-gray-200">Free Estimates</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 text-gray-200">Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

