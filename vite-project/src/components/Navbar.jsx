export default function Navbar({ onNavigateToServices, onNavigateToHome, onNavigateToAbout, onNavigateToSAPTraining, onNavigateToFAQ, currentPage }) {
  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-2xl fixed top-0 w-full z-50 border-b border-blue-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Company Logo - Interactive */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img
                onClick={onNavigateToHome}
                src="https://cdn.builder.io/api/v1/image/assets%2Fffe704f5409f4984866d8f787feaf679%2Fcc82fb24863a4b328c93e2088148343d?format=webp&width=800"
                alt="AI4S Logo"
                className="h-12 w-auto cursor-pointer transform transition-all duration-500 hover:scale-110 hover:drop-shadow-2xl mix-blend-multiply opacity-90 hover:opacity-100 filter hover:brightness-110"
              />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={onNavigateToHome}
                className={`${currentPage === 'home' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                Home
              </button>
              <button
                onClick={onNavigateToServices}
                className={`${currentPage === 'services' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                Services
              </button>
              <button
                onClick={onNavigateToSAPTraining}
                className={`${currentPage === 'sap-training' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                SAP Training
              </button>
              <button
                onClick={onNavigateToAbout}
                className={`${currentPage === 'about' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                About
              </button>
              <button
                onClick={onNavigateToFAQ}
                className={`${currentPage === 'faq' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                FAQ
              </button>
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg ring-2 ring-orange-200/50">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-2 rounded-md transition-all duration-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
