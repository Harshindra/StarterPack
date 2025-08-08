export default function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-800">AI4S</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Home
                </a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="#sap-training" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  SAP Training
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  FAQ
                </a>
                <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-all">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1 - Hero Section */}
      <section id="home" className="pt-16 bg-blue-50">
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
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium">
                  Get Started
                </button>
                <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Section 2 - Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for modern businesses</p>
          </div>
          
          {/* Service Card 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="w-full h-80 bg-green-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Responsive Design
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Modern Technologies
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  SEO Optimized
                </li>
              </ul>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Cloud Solutions</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Migrate your business to the cloud with confidence. We provide comprehensive cloud consulting, migration services, 
                and ongoing support to ensure your infrastructure is scalable, secure, and cost-effective.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  AWS & Azure Certified
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Cost Optimization
                </li>
              </ul>
            </div>
            <div>
              <div className="w-full h-80 bg-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.277 12.553a.5.5 0 01.67-.223L10 14.69l6.053-2.36a.5.5 0 01.67.223.5.5 0 01-.223.67L10.5 15.31a.5.5 0 01-.353 0L4.147 13.223a.5.5 0 01-.223-.67z"/>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-80 bg-orange-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Certified Instructors
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Hands-on Projects
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-5 h-5 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Certification Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of our service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of highly skilled professionals with years of experience in software development, 
                cloud computing, and SAP implementation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of quality in all our deliverables, with rigorous testing and 
                quality control processes to ensure excellence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the importance of deadlines and consistently deliver projects on time without 
                compromising on quality or functionality.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is available round the clock to assist you with any questions or 
                issues you may encounter.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" clipRule="evenodd"/>
                  <path d="M10.5 2a2.5 2.5 0 00-2.5 2.5v11a1.5 1.5 0 003 0v-11A2.5 2.5 0 0010.5 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Our solutions are designed to grow with your business, ensuring that your technology infrastructure 
                can scale as your needs evolve.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We put our customers at the center of everything we do, ensuring that every solution is tailored 
                to meet your specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Partners */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Associate Partners</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 font-bold text-lg">Microsoft</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 font-bold text-lg">AWS</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 font-bold text-lg">SAP</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 font-bold text-lg">Oracle</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 font-bold text-lg">Google</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 font-bold text-lg">Salesforce</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Clients */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600">Powering success for companies worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">ACME</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">TECH</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">GLOBAL</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">NOVA</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">METRO</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">PEAK</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">ALPHA</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">BETA</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">OMEGA</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">DELTA</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">SIGMA</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <span className="text-gray-700 font-bold text-sm">ZETA</span>
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
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <span className="ml-2 text-xl font-bold">AI4S</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative AI and technology solutions for the future.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Tech Street</li>
                <li>Innovation City, IC 12345</li>
                <li>+1 (555) 123-4567</li>
                <li>info@ai4s.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI4S. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
