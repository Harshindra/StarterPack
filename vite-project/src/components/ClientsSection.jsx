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
    <section id="clients" className="py-20 bg-gradient-to-r from-gray-800 via-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Clients</h2>
          <p className="text-xl text-gray-300">Powering AI success for companies worldwide</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className={`bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg ${client.hoverBorderColor} transition-all duration-300 flex items-center justify-center transform hover:scale-105`}
            >
              <span className="text-white font-bold text-sm">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
