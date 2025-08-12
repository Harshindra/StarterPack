export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-blue-100 border-t border-gray-300/60 text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fffe704f5409f4984866d8f787feaf679%2Fcc82fb24863a4b328c93e2088148343d?format=webp&width=800"
                alt="AI4S Logo"
                className="h-12 w-auto transform transition-all duration-500 hover:scale-110 hover:drop-shadow-xl"
              />
            </div>
            <p className="text-gray-600 mb-6 font-light text-lg leading-relaxed">
              Transforming businesses through innovative SAP & AI technology solutions for the future.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-black mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-black mb-6 tracking-tight">Contact Info</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li>1234 AI Street</li>
              <li>Innovation City, IC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@ai4s.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300/60 mt-12 pt-8 text-center text-gray-600">
          <p className="font-medium">&copy; 2024 AI4S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
