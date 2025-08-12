import ServiceCard from './ServiceCard'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ServicesPage({ onBackToHome, onNavigateToServices, onNavigateToHome, onNavigateToAbout }) {
  const allServices = [
    {
      title: "Custom Web Development",
      description: "Build powerful, scalable web applications tailored to your business needs. Our expert team uses the latest technologies to create responsive, user-friendly websites that drive results and enhance your online presence.",
      features: ["Responsive Design", "Modern Technologies", "SEO Optimized"],
      imageBgColor: "bg-gradient-to-br from-blue-50 to-white border border-blue-200",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      checkmarkColor: "green",
      isReversed: false
    },
    {
      title: "Cloud Solutions",
      description: "Migrate your business to the cloud with confidence. We provide comprehensive cloud consulting, migration services, and ongoing support to ensure your infrastructure is scalable, secure, and cost-effective.",
      features: ["AWS & Azure Certified", "24/7 Support", "Cost Optimization"],
      imageBgColor: "bg-gradient-to-br from-orange-50 to-white border border-orange-200",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 17a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3.277 12.553a.5.5 0 01.67-.223L10 14.69l6.053-2.36a.5.5 0 01.67.223.5.5 0 01-.223.67L10.5 15.31a.5.5 0 01-.353 0L4.147 13.223a.5.5 0 01-.223-.67z"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-orange-500 to-blue-600",
      checkmarkColor: "blue",
      isReversed: true
    },
    {
      title: "Professional AI Training",
      description: "Master AI and machine learning with our comprehensive training programs. Led by certified instructors with real-world experience, our courses cover all major AI technologies and prepare you for the future.",
      features: ["Certified AI Instructors", "Hands-on ML Projects", "Industry Certification"],
      imageBgColor: "bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-300",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 0v1a1 1 0 102 0V3a2 2 0 012 2v6.447l-.105.447-.895 3.684A2 2 0 0113.382 18H6.618a2 2 0 01-1.93-1.516L3.79 12.947 3.684 12.5A1 1 0 014 12V5z" clipRule="evenodd"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      checkmarkColor: "orange",
      isReversed: false
    },
    {
      title: "Mobile App Development",
      description: "Create stunning mobile applications for iOS and Android platforms. We build native and cross-platform apps that deliver exceptional user experiences and help your business reach customers on the go.",
      features: ["Native & Cross-Platform", "App Store Optimization", "Push Notifications"],
      imageBgColor: "bg-gradient-to-br from-blue-50 to-white border border-blue-200",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-13zM3 3.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-13z" clipRule="evenodd"/>
          <path d="M8.5 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 9zm3.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      checkmarkColor: "blue",
      isReversed: true
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with our DevOps expertise. We implement CI/CD pipelines, container orchestration, and infrastructure as code to accelerate your software delivery.",
      features: ["CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code"],
      imageBgColor: "bg-gradient-to-br from-orange-50 to-white border border-orange-200",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-orange-500 to-blue-600",
      checkmarkColor: "red",
      isReversed: false
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with our analytics and business intelligence solutions. We help you make data-driven decisions that drive growth and improve operational efficiency.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards"],
      imageBgColor: "bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-300",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      checkmarkColor: "yellow",
      isReversed: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business from cyber threats with our comprehensive security solutions. We provide security audits, penetration testing, and ongoing monitoring to keep your digital assets safe.",
      features: ["Security Audits", "Penetration Testing", "24/7 Monitoring"],
      imageBgColor: "bg-gradient-to-br from-orange-50 to-white border border-orange-200",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-orange-500 to-blue-600",
      checkmarkColor: "indigo",
      isReversed: false
    },
    {
      title: "Digital Marketing Solutions",
      description: "Boost your online presence with our comprehensive digital marketing strategies. From SEO to social media marketing, we help you reach your target audience and grow your business online.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy"],
      imageBgColor: "bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-300",
      imageIcon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
        </svg>
      ),
      iconBgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      checkmarkColor: "pink",
      isReversed: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Navbar
        onNavigateToServices={onNavigateToServices}
        onNavigateToHome={onNavigateToHome}
        onNavigateToAbout={onNavigateToAbout}
        currentPage="services"
      />
      <div className="py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">All Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </div>
          
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Ready to get started with our services?</p>
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
