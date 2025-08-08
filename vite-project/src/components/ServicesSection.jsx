import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Build powerful, scalable web applications tailored to your business needs. Our expert team uses the latest technologies to create responsive, user-friendly websites that drive results and enhance your online presence.",
      features: ["Responsive Design", "Modern Technologies", "SEO Optimized"],
      imageBgColor: "bg-gradient-to-br from-gray-800 to-gray-700 border border-green-600/30",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-green-500 to-green-600",
      checkmarkColor: "green",
      isReversed: false // Image left, content right
    },
    {
      title: "Cloud Solutions",
      description: "Migrate your business to the cloud with confidence. We provide comprehensive cloud consulting, migration services, and ongoing support to ensure your infrastructure is scalable, secure, and cost-effective.",
      features: ["AWS & Azure Certified", "24/7 Support", "Cost Optimization"],
      imageBgColor: "bg-gradient-to-br from-gray-800 to-gray-700 border border-purple-600/30",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.277 12.553a.5.5 0 01.67-.223L10 14.69l6.053-2.36a.5.5 0 01.67.223.5.5 0 01-.223.67L10.5 15.31a.5.5 0 01-.353 0L4.147 13.223a.5.5 0 01-.223-.67z"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      checkmarkColor: "blue",
      isReversed: true // Image right, content left
    },
    {
      title: "Professional AI Training",
      description: "Master AI and machine learning with our comprehensive training programs. Led by certified instructors with real-world experience, our courses cover all major AI technologies and prepare you for the future.",
      features: ["Certified AI Instructors", "Hands-on ML Projects", "Industry Certification"],
      imageBgColor: "bg-gradient-to-br from-gray-800 to-gray-700 border border-orange-600/30",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 0v1a1 1 0 102 0V3a2 2 0 012 2v6.447l-.105.447-.895 3.684A2 2 0 0113.382 18H6.618a2 2 0 01-1.93-1.516L3.79 12.947 3.684 12.5A1 1 0 014 12V5z" clipRule="evenodd"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      checkmarkColor: "orange",
      isReversed: false // Image left, content right
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">Comprehensive AI solutions for modern businesses</p>
        </div>
        
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  )
}
