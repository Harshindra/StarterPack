import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import PartnersSection from './components/PartnersSection'
import ClientsSection from './components/ClientsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <ClientsSection />
      <Footer />
    </div>
  )
}
