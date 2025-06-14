
import React from 'react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat h-screen min-h-[700px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24"> {/* Added pt-24 for header */}
        <span className="block text-sm font-semibold text-exergy-green uppercase tracking-widest mb-3 font-sans">Service-Only Feasibility And Consulting</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 font-heading leading-tight">
          Customized Energy Audit<br className="hidden sm:block" /> And Exergy Optimization<br className="hidden sm:block" /> Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-exergy-text-light mb-10 font-sans leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, moduis quis nostrud exercitation.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <Button variant="primary" className="w-full sm:w-auto text-base px-8 py-3.5">Request A Consultation</Button>
          <Button variant="outline" className="w-full sm:w-auto text-base px-8 py-3.5">Download Our Company Profile</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
