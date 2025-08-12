export default function PartnersSection() {
  const partners = [
    { name: "Microsoft", bgColor: "bg-gradient-to-r from-blue-600 to-purple-600", hoverColor: "hover:from-blue-700 hover:to-purple-700" },
    { name: "AWS", bgColor: "bg-gradient-to-r from-purple-600 to-blue-600", hoverColor: "hover:from-purple-700 hover:to-blue-700" },
    { name: "SAP", bgColor: "bg-gradient-to-r from-orange-500 to-orange-600", hoverColor: "hover:from-orange-600 hover:to-orange-700" },
    { name: "Oracle", bgColor: "bg-gradient-to-r from-blue-600 to-purple-600", hoverColor: "hover:from-blue-700 hover:to-purple-700" },
    { name: "Google", bgColor: "bg-gradient-to-r from-purple-600 to-blue-600", hoverColor: "hover:from-purple-700 hover:to-blue-700" },
    { name: "Salesforce", bgColor: "bg-gradient-to-r from-orange-500 to-orange-600", hoverColor: "hover:from-orange-600 hover:to-orange-700" }
  ]

  return (
    <section id="partners" className="py-20 bg-gradient-to-r from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Associate Partners</h2>
          <p className="text-xl text-gray-600">Trusted by SAP & AI technology leaders worldwide</p>
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
