export default function ExpertTeam() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Technology Officer",
      expertise: "SAP S/4HANA & Digital Transformation",
      experience: "15+ Years",
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      certifications: ["SAP S/4HANA Certified", "Cloud Architecture Expert", "Digital Innovation Leader"],
      description: "Leading digital transformation initiatives with expertise in SAP S/4HANA implementation and cloud migration strategies."
    },
    {
      name: "Michael Chen",
      role: "Senior SAP Consultant",
      expertise: "ABAP Development & System Integration",
      experience: "12+ Years",
      image: "bg-gradient-to-br from-purple-600 to-blue-600",
      certifications: ["SAP ABAP Certified", "Integration Specialist", "Performance Optimization Expert"],
      description: "Specializes in custom ABAP development and complex system integrations for enterprise-level implementations."
    },
    {
      name: "Emily Rodriguez",
      role: "AI Solutions Architect",
      expertise: "Machine Learning & Data Analytics",
      experience: "10+ Years",
      image: "bg-gradient-to-br from-orange-500 to-orange-600",
      certifications: ["AWS ML Certified", "Google AI Professional", "Microsoft Azure AI Expert"],
      description: "Designs and implements cutting-edge AI solutions that drive business intelligence and operational efficiency."
    },
    {
      name: "David Thompson",
      role: "SAP Basis Administrator",
      expertise: "System Administration & Security",
      experience: "14+ Years",
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      certifications: ["SAP Basis Certified", "Security Specialist", "Cloud Infrastructure Expert"],
      description: "Ensures robust system performance and security with extensive experience in SAP Basis administration and monitoring."
    },
    {
      name: "Lisa Wang",
      role: "Functional Consultant",
      expertise: "FICO & Business Process Optimization",
      experience: "11+ Years",
      image: "bg-gradient-to-br from-purple-600 to-blue-600",
      certifications: ["SAP FICO Certified", "Business Process Expert", "Financial Analytics Specialist"],
      description: "Optimizes financial processes and implements best practices for accounting and controlling modules."
    },
    {
      name: "James Parker",
      role: "Training Director",
      expertise: "SAP Education & Certification",
      experience: "13+ Years",
      image: "bg-gradient-to-br from-orange-500 to-orange-600",
      certifications: ["SAP Certified Instructor", "Training Methodology Expert", "Curriculum Developer"],
      description: "Develops comprehensive training programs and mentors the next generation of SAP professionals."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 tracking-tight">
            Our Expert Team
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Meet our certified professionals who bring decades of experience in SAP, AI, and digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden ring-1 ring-white/50"
            >
              {/* Member Photo/Avatar */}
              <div className={`h-48 ${member.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-white/30">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-white text-center">
                      <div className="text-sm font-semibold opacity-90">{member.experience}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Member Info */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{member.name}</h3>
                <p className="text-lg font-semibold text-blue-600 mb-2">{member.role}</p>
                <p className="text-md text-gray-600 font-medium mb-4">{member.expertise}</p>
                
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {member.description}
                </p>
                
                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Key Certifications:</h4>
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
                
                {/* Contact Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-blue-500/30">
                  Connect with {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight">Team Excellence</h3>
            <p className="text-xl opacity-90 font-light max-w-3xl mx-auto">
              Our collective expertise drives innovation and delivers exceptional results for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black mb-2">150+</div>
              <div className="text-lg font-medium opacity-90">Projects Completed</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black mb-2">80+</div>
              <div className="text-lg font-medium opacity-90">Years Combined Experience</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black mb-2">25+</div>
              <div className="text-lg font-medium opacity-90">Industry Certifications</div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black mb-2">98%</div>
              <div className="text-lg font-medium opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 tracking-tight">
            Ready to Work with Our Experts?
          </h3>
          <p className="text-xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            Connect with our certified professionals to discuss your project requirements and get expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 ring-2 ring-blue-200/50">
              Schedule Consultation
            </button>
            <button className="border-2 border-orange-500 text-orange-600 px-10 py-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-transparent transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-xl backdrop-blur-sm">
              View All Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
