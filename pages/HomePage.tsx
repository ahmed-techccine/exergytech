import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutUsSection from '../sections/AboutUsSection';
import ServicesSection from '../sections/ServicesSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;