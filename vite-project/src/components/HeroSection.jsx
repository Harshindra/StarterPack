export default function HeroSection() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-white via-blue-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 to-orange-500/8"></div>
      <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59,130,246,0.08) 1px, transparent 0)', backgroundSize: '60px 60px'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2"> SAP & AI Solutions</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-4xl mx-auto">
            We provide cutting-edge AI and technology solutions to help your business thrive in the digital age.
            Partner with us for innovative software development, cloud solutions, and expert consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50">
              Get Started
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
