export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-1000 hover:scale-105">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-pulse">
              Transform Your Business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"> AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We provide cutting-edge AI and technology solutions to help your business thrive in the digital age. 
              Partner with us for innovative software development, cloud solutions, and expert consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                Get Started
              </button>
              <button className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-2xl shadow-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-blue-500/50">
              <div className="text-white text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">AI Driven Innovation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
