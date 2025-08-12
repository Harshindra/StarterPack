export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  bgColor, 
  hoverBorderColor 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105 group">
      <div className={`w-16 h-16 ${bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:animate-bounce`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
