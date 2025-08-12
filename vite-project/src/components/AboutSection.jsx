import FeatureCard from './FeatureCard'

export default function AboutSection() {
  const features = [
    {
      title: "Expert AI Team",
      description: "Our team consists of highly skilled AI professionals with years of experience in machine learning, deep learning, and advanced AI technologies.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      hoverBorderColor: "blue"
    },
    {
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in all our AI deliverables, with rigorous testing and quality control processes to ensure excellence.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-orange-500 to-blue-600",
      hoverBorderColor: "green"
    },
    {
      title: "Rapid Deployment",
      description: "We understand the importance of speed in AI implementation and consistently deliver projects on time without compromising on quality or functionality.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      hoverBorderColor: "orange"
    },
    {
      title: "24/7 AI Support",
      description: "Our dedicated AI support team is available round the clock to assist you with any questions or issues you may encounter with your AI solutions.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-orange-500 to-blue-600",
      hoverBorderColor: "purple"
    },
    {
      title: "Scalable AI Solutions",
      description: "Our AI solutions are designed to grow with your business, ensuring that your technology infrastructure can scale as your needs evolve.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1z" clipRule="evenodd"/>
          <path d="M10.5 2a2.5 2.5 0 00-2.5 2.5v11a1.5 1.5 0 003 0v-11A2.5 2.5 0 0010.5 2z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-blue-600 to-orange-500",
      hoverBorderColor: "cyan"
    },
    {
      title: "Customer Focused AI",
      description: "We put our customers at the center of everything we do, ensuring that every AI solution is tailored to meet your specific business requirements.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-r from-orange-500 to-blue-600",
      hoverBorderColor: "pink"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-white via-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Excellence in every aspect of our SAP & AI services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
