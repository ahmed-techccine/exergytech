
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-[url('/image3.png')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pr-8">
            <SectionTitle 
              overline="Contact Us" 
              title="Triple Nexus Focus"
              textColor="text-exergy-text-dark"
            />
            <h3 className="text-xl font-bold font-heading text-exergy-green mb-4">Energy/Exergy | Environment | Education</h3>
            <p className="text-exergy-text-dark mb-6 leading-relaxed font-sans text-md">
              Ready to turn Insight into Impact? Contact us today to build a sustainable, efficient, and empowered future.
            </p>
            <p className="text-exergy-text-dark mb-10 leading-relaxed font-sans text-md">
              Together, let's optimize every joule and build a sustainable future.
            </p>
            <img 
              src="/contact.png" 
              alt="Professional consultation discussion" 
              className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[380px] aspect-[5/3.5]"
            />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
