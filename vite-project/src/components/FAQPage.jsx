import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function FAQPage({ onNavigateToServices, onNavigateToHome, onNavigateToAbout, onNavigateToSAPTraining, onNavigateToFAQ }) {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      question: "Where is my business data being stored?",
      answer: "Your business data is stored in secure, enterprise-grade cloud infrastructure with multiple layers of protection. We use industry-leading cloud providers with SOC 2 Type II certification, ensuring your data is encrypted both in transit and at rest. Our data centers are geographically distributed with automatic backup and disaster recovery protocols. You maintain full ownership and control of your data, and we comply with international data protection standards including GDPR and other relevant regulations."
    },
    {
      question: "What are the various solutions that we provide?",
      answer: "We offer a comprehensive range of technology solutions including: SAP implementation and consulting services, Custom web and mobile application development, Cloud migration and infrastructure management, AI and machine learning solutions, Data analytics and business intelligence, Cybersecurity services and audits, DevOps and automation services, Digital marketing solutions, and Professional SAP training programs. Each solution is tailored to meet your specific business needs and can be customized based on your industry requirements."
    },
    {
      question: "Can it be scaled according to my business growth?",
      answer: "Yes, our solutions are designed to be highly scalable. Whether you are a small startup or a large enterprise, our services can be adjusted to meet your growing business needs. We ensure that as your business expands, our solutions grow with you, offering seamless scalability without compromising performance or security."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary depending on the complexity and scope of your project. Simple integrations may take 2-4 weeks, while comprehensive SAP implementations can range from 3-12 months. During our initial consultation, we provide a detailed project timeline with clear milestones. Our agile methodology ensures regular progress updates and allows for adjustments based on your evolving requirements."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Absolutely! We offer comprehensive post-implementation support including 24/7 technical assistance, regular system maintenance and updates, user training and adoption support, performance monitoring and optimization, and dedicated account management. Our support packages are flexible and can be customized based on your specific needs and service level requirements."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across multiple industries including Manufacturing, Healthcare, Financial Services, Retail and E-commerce, Logistics and Supply Chain, Energy and Utilities, Government and Public Sector, and Education. Our industry-specific expertise allows us to understand unique business challenges and provide tailored solutions that comply with sector-specific regulations and best practices."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Data security is our top priority. We implement multi-layered security measures including end-to-end encryption, regular security audits and penetration testing, access controls and user authentication, continuous monitoring and threat detection, and compliance with industry standards (ISO 27001, SOC 2, GDPR). Our security team stays updated with the latest threats and implements proactive measures to protect your business data."
    },
    {
      question: "What training and certification programs do you offer?",
      answer: "We offer comprehensive SAP training programs covering S/4HANA Fundamentals, ABAP Programming, FICO (Finance & Controlling), Materials Management (MM), Basis Administration, and Sales & Distribution (SD). Our programs include hands-on lab sessions, real-world case studies, certification preparation, and job placement assistance. All courses are led by SAP-certified instructors with extensive industry experience."
    }
  ]

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Navbar 
        onNavigateToServices={onNavigateToServices} 
        onNavigateToHome={onNavigateToHome} 
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToSAPTraining={onNavigateToSAPTraining}
        onNavigateToFAQ={onNavigateToFAQ}
        currentPage="faq" 
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-white via-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about our services, implementation process, and support options.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50">
                Contact Support
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Common Questions</h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                Everything you need to know about our services and solutions
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ring-1 ring-white/50"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-blue-50/50 transition-all duration-300 group"
                  >
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-200/50 pt-6">
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-white via-orange-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Still Have Questions?</h2>
              <p className="text-xl mb-8 opacity-90 font-light">
                Our team of experts is here to help you find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-lg">
                  Contact Us Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg transform hover:scale-105">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
