export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TC</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-800">TechCorp</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#services" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#sap-training" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  SAP Training
                </a>
                <a href="#about" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#faq" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  FAQ
                </a>
                <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-800 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1 - Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Business with 
                <span className="text-blue-600"> Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide cutting-edge technology solutions and SAP training to help your business thrive in the digital age. 
                Partner with us for innovative software development, cloud solutions, and expert consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Started
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Innovation Driven</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Alternating Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for modern businesses</p>
          </div>
          
          {/* Service Card 1 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-full h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Web Development</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Custom Web Development</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Build powerful, scalable web applications tailored to your business needs. Our expert team uses the latest technologies 
                to create responsive, user-friendly websites that drive results and enhance your online presence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Responsive Design
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Modern Technologies
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  SEO Optimized
                </li>
              </ul>
            </div>
          </div>

          {/* Service Card 2 - Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Cloud Solutions</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Migrate your business to the cloud with confidence. We provide comprehensive cloud consulting, migration services, 
                and ongoing support to ensure your infrastructure is scalable, secure, and cost-effective.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  AWS & Azure Certified
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Cost Optimization
                </li>
              </ul>
            </div>
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.277 12.553a.5.5 0 01.67-.223L10 14.69l6.053-2.36a.5.5 0 01.67.223.5.5 0 01-.223.67L10.5 15.31a.5.5 0 01-.353 0L4.147 13.223a.5.5 0 01-.223-.67z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 3 - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 0v1a1 1 0 102 0V3a2 2 0 012 2v6.447l-.105.447-.895 3.684A2 2 0 0113.382 18H6.618a2 2 0 01-1.93-1.516L3.79 12.947 3.684 12.5A1 1 0 014 12V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">SAP Training</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Professional SAP Training</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Master SAP with our comprehensive training programs. Led by certified instructors with real-world experience, 
                our courses cover all major SAP modules and prepare you for certification success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Certified Instructors
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Hands-on Projects
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Certification Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Cards with Image on Top */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of our service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of highly skilled professionals with years of experience in software development, 
                  cloud computing, and SAP implementation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards of quality in all our deliverables, with rigorous testing and 
                  quality control processes to ensure excellence.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand the importance of deadlines and consistently deliver projects on time without 
                  compromising on quality or functionality.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated support team is available round the clock to assist you with any questions or 
                  issues you may encounter.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" clipRule="evenodd"/>
                    <path d="M10.5 2a2.5 2.5 0 00-2.5 2.5v11a1.5 1.5 0 003 0v-11A2.5 2.5 0 0010.5 2z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our solutions are designed to grow with your business, ensuring that your technology infrastructure 
                  can scale as your needs evolve.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  We put our customers at the center of everything we do, ensuring that every solution is tailored 
                  to meet your specific business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Associate Partners */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Associate Partners</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-16">
              {/* Partner Logo 1 */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Microsoft</span>
                </div>
              </div>
              
              {/* Partner Logo 2 */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
              </div>
              
              {/* Partner Logo 3 */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SAP</span>
                </div>
              </div>
              
              {/* Partner Logo 4 */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Oracle</span>
                </div>
              </div>
              
              {/* Partner Logo 5 */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Google</span>
                </div>
              </div>
              
              {/* Partner Logo 6 */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Salesforce</span>
                </div>
              </div>

              {/* Duplicate logos for seamless animation */}
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Microsoft</span>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SAP</span>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Oracle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TC</span>
                </div>
                <span className="ml-2 text-xl font-bold">TechCorp</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative technology solutions and comprehensive SAP training programs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#sap-training" className="text-gray-400 hover:text-white transition-colors">SAP Training</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Tech Street</li>
                <li>Innovation City, IC 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>info@techcorp.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechCorp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
