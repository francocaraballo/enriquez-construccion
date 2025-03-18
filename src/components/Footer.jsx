export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              {/* <HardHat className="h-8 w-8 text-orange-500" /> ACA PONER EL LOGO */}
              <span className="ml-2 text-xl font-bold">Enriquez Construccion</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building excellence since 1995. Quality construction services for commercial and residential projects.
            </p>
            <p className="text-gray-400">
              <strong>License:</strong> #CON12345678
            </p>
          </div>

          {/* Quick as */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  General Contracting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Construction Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Design-Build
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Renovations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Heavy Equipment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  Maintenance & Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.2 15.89h-2.48V9.56h2.48v8.33zm-1.24-9.46c-.79 0-1.43-.64-1.43-1.43s.64-1.42 1.43-1.42c.79 0 1.43.64 1.43 1.42s-.64 1.43-1.43 1.43zm10.44 9.46h-2.48v-3.89c0-.92-.02-2.1-1.28-2.1-1.28 0-1.48 1-1.48 2.04v3.95h-2.47V9.56h2.37v1.08h.03c.33-.62 1.13-1.27 2.32-1.27 2.48 0 2.94 1.63 2.94 3.76v4.76z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.99c-1.45 1.32-3.3 1.95-5.01 1.95-1.71 0-3.56-.63-5.01-1.95-1.39-1.31-2.01-3.11-2.01-4.99 0-1.89.62-3.68 2.01-4.99C8.43 5.68 10.28 5 12 5c1.71 0 3.56.68 5.01 2.01 1.39 1.31 2.01 3.1 2.01 4.99 0 1.88-.62 3.68-2.01 4.99zM8 7.99V16l8-4-8-4.01z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BuildRight Construction. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition duration-300">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

