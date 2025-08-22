import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import PartnersSection from './components/PartnersSection'
import ClientsSection from './components/ClientsSection'
import Footer from './components/Footer'
import ServicesPage from './components/ServicesPage'
import AboutPage from './components/AboutPage'
import SAPTrainingPage from './components/SAPTrainingPage'
import FAQPage from './components/FAQPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleViewAllServices = () => {
    setCurrentPage('services')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
  }

  const handleNavigateToAbout = () => {
    setCurrentPage('about')
  }

  const handleNavigateToSAPTraining = () => {
    setCurrentPage('sap-training')
  }

  const handleNavigateToFAQ = () => {
    setCurrentPage('faq')
  }

  if (currentPage === 'services') {
    return (
      <ServicesPage
        onBackToHome={handleBackToHome}
        onNavigateToServices={handleViewAllServices}
        onNavigateToHome={handleBackToHome}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToSAPTraining={handleNavigateToSAPTraining}
      />
    )
  }

  if (currentPage === 'about') {
    return (
      <AboutPage
        onNavigateToServices={handleViewAllServices}
        onNavigateToHome={handleBackToHome}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToSAPTraining={handleNavigateToSAPTraining}
      />
    )
  }

  if (currentPage === 'sap-training') {
    return (
      <SAPTrainingPage
        onNavigateToServices={handleViewAllServices}
        onNavigateToHome={handleBackToHome}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToSAPTraining={handleNavigateToSAPTraining}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <Navbar
        onNavigateToServices={handleViewAllServices}
        onNavigateToHome={handleBackToHome}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToSAPTraining={handleNavigateToSAPTraining}
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
