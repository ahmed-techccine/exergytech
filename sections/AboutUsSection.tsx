import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[url('/bg2.png')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionTitle 
              overline="About Company" 
              title="Who We Are" 
              textColor="text-exergy-text-dark"
            />
            <p className="text-md text-exergy-text-dark mb-5 leading-relaxed font-sans">
              Exergy Tech Solutions Group is an independent cleantech service consultancy driving transformative outcomes through the Triple Nexus of:
            </p>
            <ul className="list-disc list-inside text-exergy-text-dark mb-6 space-y-2 pl-4 font-sans text-md">
              <li>Energy/Exergy Efficiency</li>
              <li>Environmental Sustainability</li>
              <li>Education and Capacity Building</li>
            </ul>
            <p className="text-md text-exergy-text-dark mb-8 leading-relaxed font-sans">
              We merge technical excellence with strategic insight to help our clients achieve energy transition, energy efficiency, circular economy goals, and sustainable workforce development. <a href="/about" className="text-exergy-green hover:underline font-semibold">Read more</a>
            </p>
            
            <h3 className="text-2xl font-bold font-heading text-exergy-text-dark mb-3 mt-10">Our Mission</h3>
            <p className="text-md text-exergy-text-dark mb-8 leading-relaxed font-sans">
              To help industries, cities, and communities unlock hidden energy potential and waste-to-energy pathways using our triple nexus approach coupled with advanced thermodynamic and data intelligence tools.
            </p>
            <Button variant="primary" className="bg-exergy-green hover:bg-exergy-green-dark" onClick={() => window.location.href='/about'}>Learn More</Button>
          </div>
          <div className="relative">
            <img
              src="/image2.png"
              alt="ExergyTech team discussion"
              className=" object-cover w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;