
import React from 'react';

interface ServiceDetailCardProps {
  icon: React.ReactElement; // Changed from React.ReactNode
  text: string;
  className?: string;
}

const ServiceDetailCard: React.FC<ServiceDetailCardProps> = ({ icon, text, className = '' }) => {
  return (
    <div 
      className={`bg-exergy-dark-card p-6 rounded-xl shadow-lg flex flex-col items-start h-full 
                  transform hover:scale-105 hover:shadow-exergy-green/30 transition-all duration-300 ease-in-out 
                  border border-gray-700 hover:border-exergy-green group ${className}`}
    >
      <div 
        className="flex-shrink-0 w-12 h-12 text-exergy-green mb-5 flex items-center justify-center 
                   rounded-full bg-exergy-dark-input transition-colors duration-300 group-hover:bg-exergy-green group-hover:text-white"
      >
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
      </div>
      <p className="font-sans text-exergy-text-light text-sm leading-relaxed flex-grow">{text}</p>
    </div>
  );
};

export default ServiceDetailCard;
