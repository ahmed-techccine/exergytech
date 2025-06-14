
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { TESTIMONIALS_DATA } from '../constants';

const TestimonialsSection: React.FC = () => {
  // Display only the first testimonial as per the design's single prominent card.
  const testimonialToDisplay = TESTIMONIALS_DATA[0];

  return (
    <section id="clients" className="py-16 lg:py-24 bg-exergy-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          overline="Client Feedbacks" 
          title="What Our Customers Feel About Our Services!" 
          textColor="text-white" 
          overlineColor="text-exergy-green"
          center={true} 
        />
        {testimonialToDisplay ? (
          <TestimonialCard testimonial={testimonialToDisplay} />
        ) : (
          <p className="text-center text-exergy-text-medium mt-8 font-sans">No testimonials yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
