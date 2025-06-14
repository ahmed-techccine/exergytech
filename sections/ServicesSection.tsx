
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../constants';
import { ServiceItem } from '../types';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-exergy-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          overline="Our Services" 
          title="(E3) Triple Nexus of Services" 
          textColor="text-white" 
          overlineColor="text-exergy-green"
          center={true} 
        />
        <p className="text-center text-exergy-text-medium max-w-3xl mx-auto mb-16 text-md leading-relaxed font-sans">
          ExergyTech Solutions Group is an independent cleantech service consultancy driving transformative outcomes through the Triple Nexus of:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
