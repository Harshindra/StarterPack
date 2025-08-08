export default function ServiceCard({
  title,
  description,
  features,
  imageBgColor,
  imageIcon,
  iconBgColor,
  checkmarkColor,
  isReversed = false
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 group">
      {/* Image Section */}
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'} transform transition-all duration-500 group-hover:scale-105`}>
        <div className={`w-full h-80 ${imageBgColor} rounded-2xl shadow-lg flex items-center justify-center hover:shadow-${checkmarkColor}-500/50 transition-all duration-300`}>
          <div className="text-white text-center">
            <div className={`w-24 h-24 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse`}>
              {imageIcon}
            </div>
            <span className="text-lg font-semibold">{title}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">{title}</h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <div className={`w-5 h-5 bg-gradient-to-r from-${checkmarkColor}-400 to-${checkmarkColor}-600 rounded-full mr-3 flex items-center justify-center`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
