export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-blue-100 border-t border-gray-300 text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                <span className="text-white font-bold text-xl">AI4S</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Transforming businesses through innovative SAP & AI technology solutions for the future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>1234 AI Street</li>
              <li>Innovation City, IC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@ai4s.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 AI4S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
