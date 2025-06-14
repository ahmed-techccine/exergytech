
import React from 'react';
import { Testimonial } from '../types';
import { QuoteIcon } from './icons';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative bg-exergy-dark-card p-8 md:p-12 rounded-xl shadow-2xl max-w-3xl mx-auto my-8">
      <QuoteIcon className="w-16 h-16 md:w-20 md:h-20 text-exergy-green opacity-20 absolute top-6 left-6 md:top-8 md:left-8 transform -translate-x-1/3 -translate-y-1/3" />
      
      <p className="text-lg md:text-xl italic text-exergy-text-light leading-relaxed mb-8 font-sans relative z-10 text-center md:text-left">
        "{testimonial.quote}"
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-auto pt-6 border-t border-gray-700 relative z-10">
        <img 
            src={testimonial.image} 
            alt={testimonial.author.split(',')[0]} 
            className="w-16 h-16 rounded-full mr-0 md:mr-5 mb-4 md:mb-0 border-2 border-exergy-green object-cover"
        />
        <div className="text-center md:text-left">
          <h4 className="text-md font-bold font-heading text-white">{testimonial.author.split(',')[0]}</h4>
          {testimonial.author.split(',')[1] && 
            <p className="text-exergy-green text-sm font-semibold font-sans">{testimonial.author.split(',')[1].trim()}</p>
          }
        </div>
      </div>
      <QuoteIcon className="w-16 h-16 md:w-20 md:h-20 text-exergy-green opacity-20 absolute bottom-6 right-6 md:bottom-8 md:right-8 transform rotate-180 translate-x-1/3 translate-y-1/3" />
    </div>
  );
};

export default TestimonialCard;
