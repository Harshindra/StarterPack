import Navbar from './Navbar'
import Footer from './Footer'

export default function AboutPage({ onNavigateToServices, onNavigateToHome, onNavigateToAbout, onNavigateToSAPTraining }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Navbar
        onNavigateToServices={onNavigateToServices}
        onNavigateToHome={onNavigateToHome}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToSAPTraining={onNavigateToSAPTraining}
        currentPage="about"
      />
      
      <div className="pt-20">
        {/* Section 1: About AI4S - Column layout: Image, then heading, then content */}
        <section className="py-24 bg-gradient-to-r from-white via-blue-50 to-orange-50 animate-fade-in-up">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-12">
              {/* Image First */}
              <div className="w-full max-w-3xl">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden ring-2 ring-blue-200/30">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-white/30">
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Innovation & Excellence</h3>
                        <p className="text-purple-200 font-medium">Transforming businesses through technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heading Second */}
              <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-tight leading-tight animate-pulse">About AI4S</h1>

              {/* Content Third */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl">
                At AI4S, we specialize in delivering tailored SAP solutions and advanced AI services designed to meet the unique needs of businesses across industries. Our mission is to empower organizations to achieve their goals through innovative technology, expert consulting, and comprehensive SAP education. With a focus on scalability, customization, and cutting-edge practices, we ensure our clients stay ahead in a dynamic digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Mission - Content only */}
        <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-blue-50 animate-slide-in-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 tracking-tight leading-tight animate-bounce">Our Mission</h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                We are committed to providing our clients with top-tier, forward-thinking, and sustainable solutions. We envision ourselves as enablers, assisting clients in smoothly integrating state-of-the-art technology across various functions while ensuring cost-effectiveness and efficient implementation. Our solutions are designed to furnish clients with the most pertinent, up-to-date, and cost-efficient technology. At AI4S, we believe that our quest for excellence permeates from our work environment into the lives of our team members, and ultimately, benefits society as a whole.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Our Vision - Content only */}
        <section className="py-24 bg-gradient-to-r from-white via-orange-50 to-blue-50 animate-slide-in-right">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 tracking-tight leading-tight animate-pulse">Our Vision</h2>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                We aspire to propel your business to unprecedented heights by integrating advanced technology and fostering innovation in your operations. Our expertise equips us to collaborate with you in surmounting technological hurdles, allowing you to focus on your core competencies. AI4S draws its inspiration from its workforce. Our foundation is built on a wealth of experience, an enthusiasm for technology, a commitment to innovation, ethical practices, and exceeding client expectations. We specialize in delivering tailor-made solutions that enable your business to thrive. Our goal is to evolve alongside you.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-orange-50 animate-fade-in">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 tracking-tight animate-bounce">Ready to Transform Your Business?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              Let's work together to achieve your goals through innovative technology solutions.
            </p>
            <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50 tracking-wide">
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
