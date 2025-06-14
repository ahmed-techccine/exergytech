
import React from 'react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-exergy-dark-card rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full group">
      <div className="relative overflow-hidden h-52">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-heading text-white mb-1">{service.title}</h3>
        <p className="text-sm text-exergy-green font-semibold mb-3 font-sans">{service.subtitle}</p>
        <p className="text-exergy-text-medium text-sm leading-relaxed mb-4 flex-grow font-sans">{service.description}</p>
        {service.readMoreLink && (
          <a 
            href={service.readMoreLink} 
            className="text-exergy-green hover:text-white font-semibold text-sm self-start mt-auto font-sans group-hover:underline"
          >
            Read More &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
