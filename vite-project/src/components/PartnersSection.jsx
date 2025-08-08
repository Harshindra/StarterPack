export default function PartnersSection() {
  const partners = [
    { name: "Microsoft", bgColor: "bg-gradient-to-r from-blue-500 to-blue-700", hoverColor: "hover:from-blue-600 hover:to-blue-800" },
    { name: "AWS", bgColor: "bg-gradient-to-r from-green-500 to-green-700", hoverColor: "hover:from-green-600 hover:to-green-800" },
    { name: "SAP", bgColor: "bg-gradient-to-r from-purple-500 to-purple-700", hoverColor: "hover:from-purple-600 hover:to-purple-800" },
    { name: "Oracle", bgColor: "bg-gradient-to-r from-red-500 to-red-700", hoverColor: "hover:from-red-600 hover:to-red-800" },
    { name: "Google", bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700", hoverColor: "hover:from-yellow-600 hover:to-yellow-800" },
    { name: "Salesforce", bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-700", hoverColor: "hover:from-indigo-600 hover:to-indigo-800" }
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Associate Partners</h2>
          <p className="text-xl text-gray-300">Trusted by AI and technology leaders worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`${partner.bgColor} ${partner.hoverColor} rounded-lg p-6 flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer`}
            >
              <span className="text-white font-bold text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
