export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  bgColor, 
  hoverBorderColor 
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:border-blue-300/70 transition-all duration-500 transform hover:scale-105 group ring-1 ring-white/50">
      <div className={`w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:animate-pulse shadow-xl ring-4 ring-white/30 transition-all duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed font-light text-lg">
        {description}
      </p>
    </div>
  )
}
