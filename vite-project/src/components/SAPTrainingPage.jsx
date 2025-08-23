import Navbar from './Navbar'
import Footer from './Footer'

export default function SAPTrainingPage({ onNavigateToServices, onNavigateToHome, onNavigateToAbout, onNavigateToSAPTraining, onNavigateToFAQ, onNavigateToExperts }) {
  const trainingPrograms = [
    {
      title: "SAP S/4HANA Fundamentals",
      duration: "5 Days",
      level: "Beginner",
      price: "$2,499",
      description: "Learn the fundamentals of SAP S/4HANA, the next-generation ERP suite. This comprehensive course covers basic navigation, core functionalities, and business processes.",
      modules: [
        "SAP S/4HANA Architecture Overview",
        "User Interface and Navigation",
        "Financial Accounting Basics",
        "Materials Management Introduction",
        "Sales and Distribution Overview"
      ],
      features: [
        "Hands-on Lab Sessions",
        "Real-world Case Studies",
        "Certificate of Completion",
        "24/7 Learning Support"
      ],
      bgGradient: "from-blue-600 to-purple-600"
    },
    {
      title: "SAP ABAP Programming",
      duration: "10 Days",
      level: "Intermediate",
      price: "$3,999",
      description: "Master SAP ABAP programming language and development tools. Learn to create custom applications, reports, and enhancements in SAP systems.",
      modules: [
        "ABAP Syntax and Programming Logic",
        "Data Dictionary and Database Tables",
        "Reports and ALV Development",
        "Module Pool Programming",
        "Enhancement Techniques",
        "Object-Oriented ABAP"
      ],
      features: [
        "Live Coding Sessions",
        "Project-based Learning",
        "Industry Expert Instructors",
        "Job Placement Assistance"
      ],
      bgGradient: "from-purple-600 to-blue-600"
    },
    {
      title: "SAP FICO (Finance & Controlling)",
      duration: "8 Days",
      level: "Intermediate",
      price: "$3,299",
      description: "Comprehensive training on SAP Financial Accounting and Controlling modules. Learn financial processes, reporting, and controlling functionalities.",
      modules: [
        "General Ledger Configuration",
        "Accounts Payable and Receivable",
        "Asset Accounting",
        "Cost Center Accounting",
        "Profit Center Accounting",
        "Financial Reporting"
      ],
      features: [
        "Real Business Scenarios",
        "Configuration Practice",
        "Global Best Practices",
        "Certification Preparation"
      ],
      bgGradient: "from-orange-500 to-orange-600"
    },
    {
      title: "SAP MM (Materials Management)",
      duration: "6 Days",
      level: "Intermediate",
      price: "$2,799",
      description: "Learn SAP Materials Management module covering procurement, inventory management, and vendor management processes.",
      modules: [
        "Master Data Management",
        "Purchasing Processes",
        "Inventory Management",
        "Invoice Verification",
        "Material Requirements Planning",
        "Vendor Evaluation"
      ],
      features: [
        "Process Flow Training",
        "Integration Scenarios",
        "Best Practice Guidelines",
        "Practical Exercises"
      ],
      bgGradient: "from-blue-600 to-purple-600"
    },
    {
      title: "SAP Basis Administration",
      duration: "7 Days",
      level: "Advanced",
      price: "$3,599",
      description: "Advanced course on SAP Basis administration covering system installation, configuration, monitoring, and maintenance.",
      modules: [
        "SAP System Architecture",
        "Installation and Upgrades",
        "User Administration",
        "Transport Management",
        "Performance Monitoring",
        "Backup and Recovery"
      ],
      features: [
        "Hands-on Lab Environment",
        "Troubleshooting Techniques",
        "Production System Scenarios",
        "Expert Mentorship"
      ],
      bgGradient: "from-purple-600 to-blue-600"
    },
    {
      title: "SAP SD (Sales & Distribution)",
      duration: "7 Days",
      level: "Intermediate",
      price: "$2,999",
      description: "Master SAP Sales and Distribution processes including order management, pricing, delivery, and billing functionalities.",
      modules: [
        "Sales Order Processing",
        "Pricing and Conditions",
        "Delivery Management",
        "Billing and Invoicing",
        "Credit Management",
        "Integration with Other Modules"
      ],
      features: [
        "End-to-end Process Training",
        "Configuration Workshops",
        "Industry-specific Scenarios",
        "Career Guidance"
      ],
      bgGradient: "from-orange-500 to-orange-600"
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-blue-100 text-blue-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Navbar
        onNavigateToServices={onNavigateToServices}
        onNavigateToHome={onNavigateToHome}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToSAPTraining={onNavigateToSAPTraining}
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateToExperts={onNavigateToExperts}
        currentPage="sap-training"
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-white via-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 tracking-tight leading-tight">
              SAP Training Programs
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light max-w-4xl mx-auto leading-relaxed">
              Accelerate your career with our comprehensive SAP training programs. Learn from industry experts and gain hands-on experience with real-world scenarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50">
                View All Programs
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Training Programs Grid */}
        <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Training Programs</h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive range of SAP training courses designed for different skill levels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden ring-1 ring-white/50">
                  {/* Card Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-r ${program.bgGradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-black text-white tracking-tight">{program.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-8">
                    {/* Training Details */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(program.level)}`}>
                          {program.level}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold">
                          {program.duration}
                        </span>
                      </div>
                      <span className="text-2xl font-black text-blue-600">{program.price}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed font-light">
                      {program.description}
                    </p>
                    
                    {/* Modules */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Course Modules:</h4>
                      <ul className="space-y-2">
                        {program.modules.slice(0, 3).map((module, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                            {module}
                          </li>
                        ))}
                        {program.modules.length > 3 && (
                          <li className="text-sm text-blue-600 font-semibold">
                            +{program.modules.length - 3} more modules
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Enroll Now
                      </button>
                      <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Training Section */}
        <section className="py-24 bg-gradient-to-r from-white via-orange-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 tracking-tight">
                Why Choose AI4S Training?
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                Experience the difference with our expert-led, hands-on SAP training programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "👨‍🏫",
                  title: "Expert Instructors",
                  description: "Learn from SAP-certified professionals with 10+ years of industry experience"
                },
                {
                  icon: "🛠️",
                  title: "Hands-on Learning",
                  description: "Practice on real SAP systems with live projects and scenarios"
                },
                {
                  icon: "🎓",
                  title: "Certification Support",
                  description: "Comprehensive preparation for official SAP certification exams"
                },
                {
                  icon: "💼",
                  title: "Career Assistance",
                  description: "Job placement support and career guidance after course completion"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">Ready to Start Your SAP Journey?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have advanced their careers with our SAP training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50 tracking-wide">
                Schedule a Consultation
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-10 py-5 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-bold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
