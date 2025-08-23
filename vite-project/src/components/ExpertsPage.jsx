import Navbar from './Navbar'
import Footer from './Footer'

export default function ExpertsPage({ onNavigateToServices, onNavigateToHome, onNavigateToAbout, onNavigateToSAPTraining, onNavigateToFAQ, onNavigateToExperts }) {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Technology Officer",
      expertise: "SAP S/4HANA & Digital Transformation",
      experience: "15+ Years",
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      certifications: ["SAP S/4HANA Certified", "Cloud Architecture Expert", "Digital Innovation Leader", "AWS Solutions Architect", "Microsoft Azure Expert"],
      description: "Leading digital transformation initiatives with expertise in SAP S/4HANA implementation and cloud migration strategies. Dr. Johnson has successfully led over 50 enterprise-level digital transformation projects.",
      education: "PhD in Computer Science, Stanford University",
      specializations: ["Digital Strategy", "Cloud Migration", "Enterprise Architecture", "Change Management"],
      achievements: ["Led $50M+ digital transformation projects", "Speaker at SAP TechEd", "Published 20+ research papers"],
      email: "sarah.johnson@ai4s.com",
      linkedin: "linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      role: "Senior SAP Consultant",
      expertise: "ABAP Development & System Integration",
      experience: "12+ Years",
      image: "bg-gradient-to-br from-purple-600 to-blue-600",
      certifications: ["SAP ABAP Certified", "Integration Specialist", "Performance Optimization Expert", "SAP PI/PO Certified", "SAP BTP Developer"],
      description: "Specializes in custom ABAP development and complex system integrations for enterprise-level implementations. Michael has developed solutions for Fortune 500 companies across multiple industries.",
      education: "Master's in Software Engineering, MIT",
      specializations: ["Custom ABAP Development", "System Integration", "Performance Tuning", "API Development"],
      achievements: ["Optimized systems for 200% performance improvement", "Developed 100+ custom solutions", "SAP Mentor"],
      email: "michael.chen@ai4s.com",
      linkedin: "linkedin.com/in/michaelchen"
    },
    {
      name: "Emily Rodriguez",
      role: "AI Solutions Architect",
      expertise: "Machine Learning & Data Analytics",
      experience: "10+ Years",
      image: "bg-gradient-to-br from-orange-500 to-orange-600",
      certifications: ["AWS ML Certified", "Google AI Professional", "Microsoft Azure AI Expert", "TensorFlow Developer", "Data Science Professional"],
      description: "Designs and implements cutting-edge AI solutions that drive business intelligence and operational efficiency. Emily has pioneered AI implementations that resulted in 40% efficiency improvements.",
      education: "PhD in Machine Learning, Carnegie Mellon University",
      specializations: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
      achievements: ["Built AI systems serving 1M+ users", "AI Innovation Award Winner", "Patent holder for ML algorithms"],
      email: "emily.rodriguez@ai4s.com",
      linkedin: "linkedin.com/in/emilyrodriguez"
    },
    {
      name: "David Thompson",
      role: "SAP Basis Administrator",
      expertise: "System Administration & Security",
      experience: "14+ Years",
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      certifications: ["SAP Basis Certified", "Security Specialist", "Cloud Infrastructure Expert", "CISSP Certified", "AWS SysOps Administrator"],
      description: "Ensures robust system performance and security with extensive experience in SAP Basis administration and monitoring. David maintains 99.9% uptime across all managed systems.",
      education: "Bachelor's in Information Systems, UC Berkeley",
      specializations: ["System Administration", "Security Management", "Performance Monitoring", "Disaster Recovery"],
      achievements: ["Maintained 99.9% uptime record", "Certified Ethical Hacker", "Led security audits for 50+ companies"],
      email: "david.thompson@ai4s.com",
      linkedin: "linkedin.com/in/davidthompson"
    },
    {
      name: "Lisa Wang",
      role: "Functional Consultant",
      expertise: "FICO & Business Process Optimization",
      experience: "11+ Years",
      image: "bg-gradient-to-br from-purple-600 to-blue-600",
      certifications: ["SAP FICO Certified", "Business Process Expert", "Financial Analytics Specialist", "SAP BPC Certified", "CPA Certified"],
      description: "Optimizes financial processes and implements best practices for accounting and controlling modules. Lisa has streamlined financial operations for organizations saving millions in operational costs.",
      education: "MBA in Finance, Wharton School",
      specializations: ["Financial Accounting", "Controlling", "Business Process Optimization", "Financial Reporting"],
      achievements: ["Saved clients $10M+ through process optimization", "Financial Process Innovation Award", "CFO Advisory Board Member"],
      email: "lisa.wang@ai4s.com",
      linkedin: "linkedin.com/in/lisawang"
    },
    {
      name: "James Parker",
      role: "Training Director",
      expertise: "SAP Education & Certification",
      experience: "13+ Years",
      image: "bg-gradient-to-br from-orange-500 to-orange-600",
      certifications: ["SAP Certified Instructor", "Training Methodology Expert", "Curriculum Developer", "Adult Learning Specialist", "SAP Education Partner"],
      description: "Develops comprehensive training programs and mentors the next generation of SAP professionals. James has trained over 5,000 professionals and maintains a 95% certification success rate.",
      education: "Master's in Education Technology, Harvard University",
      specializations: ["Training Program Development", "Certification Preparation", "E-Learning Platforms", "Corporate Training"],
      achievements: ["Trained 5,000+ professionals", "95% certification success rate", "Excellence in Education Award"],
      email: "james.parker@ai4s.com",
      linkedin: "linkedin.com/in/jamesparker"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Navbar 
        onNavigateToServices={onNavigateToServices} 
        onNavigateToHome={onNavigateToHome} 
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToSAPTraining={onNavigateToSAPTraining}
        onNavigateToFAQ={onNavigateToFAQ}
        onNavigateToExperts={onNavigateToExperts}
        currentPage="experts" 
      />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-white via-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 tracking-tight leading-tight">
              Our Expert Team
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light max-w-4xl mx-auto leading-relaxed">
              Meet our certified professionals who bring decades of combined experience in SAP, AI, and digital transformation to drive your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50">
                Schedule Team Consultation
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                Download Team Profiles
              </button>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden ring-1 ring-white/50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Member Photo/Avatar */}
                    <div className={`${member.image} relative overflow-hidden md:rounded-l-3xl`}>
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-white/30">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="text-white text-center">
                            <div className="text-lg font-bold mb-1">{member.experience}</div>
                            <div className="text-sm opacity-90">Experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{member.name}</h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">{member.role}</p>
                      <p className="text-md text-gray-600 font-medium mb-4">{member.expertise}</p>
                      
                      <p className="text-gray-600 leading-relaxed font-light mb-6">
                        {member.description}
                      </p>
                      
                      {/* Education */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Education:</h4>
                        <p className="text-sm text-gray-600">{member.education}</p>
                      </div>
                      
                      {/* Specializations */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Core Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specializations.map((spec, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-200"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-xs text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-sm transform hover:scale-105 shadow-lg">
                          Connect via Email
                        </button>
                        <button className="flex-1 border-2 border-blue-300 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-sm">
                          LinkedIn Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Certifications Section */}
                  <div className="border-t border-gray-200/50 p-6 bg-gray-50/50">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">Professional Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold rounded-full border border-blue-200"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Stats Section */}
        <section className="py-20 bg-gradient-to-r from-white via-orange-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">Collective Excellence</h3>
                <p className="text-xl opacity-90 font-light max-w-3xl mx-auto">
                  Our team's combined expertise delivers exceptional results and drives innovation across industries
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl lg:text-6xl font-black mb-2">200+</div>
                  <div className="text-lg font-medium opacity-90">Projects Completed</div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl lg:text-6xl font-black mb-2">85+</div>
                  <div className="text-lg font-medium opacity-90">Years Combined Experience</div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl lg:text-6xl font-black mb-2">30+</div>
                  <div className="text-lg font-medium opacity-90">Professional Certifications</div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl lg:text-6xl font-black mb-2">98%</div>
                  <div className="text-lg font-medium opacity-90">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">Ready to Work with Our Experts?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
              Connect with our certified professionals to discuss your project requirements and get personalized guidance from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50 tracking-wide">
                Schedule Expert Consultation
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-10 py-5 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-bold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                Request Team Proposal
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
