
import React from 'react';

interface SectionTitleProps {
  overline: string;
  title: string;
  textColor?: string; 
  center?: boolean;
  overlineColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  overline, 
  title, 
  textColor = 'text-exergy-text-dark', // Default for light backgrounds
  center = false,
  overlineColor = 'text-exergy-green' 
}) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      <span className={`block text-sm font-semibold ${overlineColor} uppercase tracking-wider mb-2 font-sans`}>{overline}</span>
      <h2 className={`text-3xl md:text-4xl font-bold font-heading ${textColor}`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
