
import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import OEMCapabilities from '../components/OEMCapabilities';
import ProductPortfolio from '../components/ProductPortfolio';
import ComplianceSection from '../components/ComplianceSection';
import AboutSection from '../components/AboutSection';
import ContactModal from '../components/ContactModal';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactClose = () => {
    setIsContactModalOpen(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <OEMCapabilities />
      <ProductPortfolio />
      <ComplianceSection />
      <AboutSection />
      <Footer onContactClick={handleContactClick} />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleContactClose} 
      />
    </div>
  );
};

export default Index;
