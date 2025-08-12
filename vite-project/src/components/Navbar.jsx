export default function Navbar({ onNavigateToServices, onNavigateToHome, onNavigateToAbout, currentPage }) {
  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-md shadow-xl fixed top-0 w-full z-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Company Logo - Interactive */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div
                onClick={onNavigateToHome}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer group"
              >
                <span className="text-white font-bold text-xl group-hover:animate-pulse">AI4S</span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={onNavigateToHome}
                className={`${currentPage === 'home' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105`}
              >
                Home
              </button>
              <button
                onClick={onNavigateToServices}
                className={`${currentPage === 'services' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105`}
              >
                Services
              </button>
              <a href="#sap-training" className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                SAP Training
              </a>
              <button
                onClick={onNavigateToAbout}
                className={`${currentPage === 'about' ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600' : 'text-gray-700'} hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105`}
              >
                About
              </button>
              <a href="#faq" className="text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                FAQ
              </a>
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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
