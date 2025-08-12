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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 group">
      {/* Image Section */}
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'} transform transition-all duration-700 group-hover:scale-105`}>
        <div className={`w-full h-80 ${imageBgColor} rounded-3xl shadow-2xl flex items-center justify-center hover:shadow-blue-500/20 transition-all duration-500 ring-1 ring-white/20`}>
          <div className="text-gray-800 text-center px-6">
            <div className={`w-28 h-28 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-xl ring-4 ring-white/30`}>
              {imageIcon}
            </div>
            <span className="text-xl font-bold tracking-tight">{title}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 tracking-tight leading-tight">{title}</h3>
        <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed font-light">
          {description}
        </p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
