import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import PartnersSection from './components/PartnersSection'
import ClientsSection from './components/ClientsSection'
import Footer from './components/Footer'
import ServicesPage from './components/ServicesPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleViewAllServices = () => {
    setCurrentPage('services')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  if (currentPage === 'services') {
    return (
      <ServicesPage
        onBackToHome={handleBackToHome}
        onNavigateToServices={handleViewAllServices}
        onNavigateToHome={handleBackToHome}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar
        onNavigateToServices={handleViewAllServices}
        onNavigateToHome={handleBackToHome}
        currentPage="home"
      />
      <HeroSection />
      <ServicesSection onViewAllServices={handleViewAllServices} />
      <AboutSection />
      <PartnersSection />
      <ClientsSection />
      <Footer />
    </div>
  )
}
