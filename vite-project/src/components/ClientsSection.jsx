export default function ClientsSection() {
  const clients = [
    { name: "ACME", hoverBorderColor: "hover:border-blue-500" },
    { name: "TECH", hoverBorderColor: "hover:border-green-500" },
    { name: "GLOBAL", hoverBorderColor: "hover:border-purple-500" },
    { name: "NOVA", hoverBorderColor: "hover:border-orange-500" },
    { name: "METRO", hoverBorderColor: "hover:border-cyan-500" },
    { name: "PEAK", hoverBorderColor: "hover:border-pink-500" },
    { name: "ALPHA", hoverBorderColor: "hover:border-yellow-500" },
    { name: "BETA", hoverBorderColor: "hover:border-red-500" },
    { name: "OMEGA", hoverBorderColor: "hover:border-indigo-500" },
    { name: "DELTA", hoverBorderColor: "hover:border-teal-500" },
    { name: "SIGMA", hoverBorderColor: "hover:border-emerald-500" },
    { name: "ZETA", hoverBorderColor: "hover:border-violet-500" }
  ]

  return (
    <section id="clients" className="py-24 bg-gradient-to-r from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">Our Clients</h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">Powering SAP & AI success for companies worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-blue-500/70 transition-all duration-500 flex items-center justify-center transform hover:scale-105 ring-1 ring-white/50">
            >
              <span className="text-gray-800 font-black text-lg tracking-tight">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
