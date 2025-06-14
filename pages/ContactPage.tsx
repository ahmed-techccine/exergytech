
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { PhoneIcon, EmailIcon, GlobeIcon } from '../components/icons'; // Reusing icons
import { FOOTER_CONTACT_INFO } from '../constants'; // Reusing contact info for consistency

interface ContactDetailProps {
  icon: React.ReactElement<{ className?: string }>; // Changed from React.ReactElement
  label: string;
  value: string;
  href?: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, label, value, href }) => (
  <div className="flex items-start p-4 bg-exergy-dark-input rounded-lg shadow-md hover:shadow-exergy-green/20 transition-shadow duration-300">
    <div className="flex-shrink-0 w-10 h-10 text-exergy-green flex items-center justify-center rounded-full bg-exergy-dark-bg mr-4">
      {React.cloneElement(icon, { className: "w-5 h-5" })}
    </div>
    <div>
      <h4 className="text-md font-semibold text-exergy-text-light font-sans">{label}</h4>
      {href ? (
        <a href={href} className="text-exergy-green hover:underline font-sans text-sm">{value}</a>
      ) : (
        <p className="text-exergy-text-medium font-sans text-sm">{value}</p>
      )}
    </div>
  </div>
);


const ContactPage: React.FC = () => {
  return (
    // Main container div (bg-exergy-dark-bg text-exergy-text-light) is handled by App.tsx Layout
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <SectionTitle
        overline="Get In Touch"
        title="Contact ExergyTech Solutions"
        textColor="text-white"
        overlineColor="text-exergy-green"
        center={true}
      />
      <p className="text-center text-exergy-text-medium max-w-2xl mx-auto mb-16 text-lg leading-relaxed font-sans">
        We're here to help you achieve your energy efficiency and sustainability goals. Reach out to us with your inquiries, or to request a consultation.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Information Section */}
        <div className="space-y-6 lg:mt-2"> {/* Added lg:mt-2 to align better with form title */}
          <h3 className="text-2xl font-bold font-heading text-white mb-2">Our Contact Details</h3>
           <p className="text-exergy-text-medium mb-6 font-sans text-sm">
             Find us at our main office or connect with us through phone or email. We look forward to hearing from you.
            </p>
          <ContactDetail 
            icon={<PhoneIcon />} 
            label="Phone Number" 
            value={FOOTER_CONTACT_INFO.find(c => c.text.includes('(+202)'))?.text || '(+202)-2156-2145'}
            href={FOOTER_CONTACT_INFO.find(c => c.text.includes('(+202)'))?.href}
          />
          <ContactDetail 
            icon={<EmailIcon />} 
            label="Email Address" 
            value={FOOTER_CONTACT_INFO.find(c => c.text.includes('@'))?.text || 'info@exergytechsolutions.com'}
            href={FOOTER_CONTACT_INFO.find(c => c.text.includes('@'))?.href}
          />
          <ContactDetail 
            icon={<GlobeIcon />} 
            label="Website" 
            value={FOOTER_CONTACT_INFO.find(c => c.text.includes('www'))?.text || 'www.exergytechsolutions.com'}
            href={FOOTER_CONTACT_INFO.find(c => c.text.includes('www'))?.href}
          />
          <div className="bg-exergy-dark-input p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-white mb-3 font-heading">Office Address (Conceptual)</h4>
            <p className="text-exergy-text-medium font-sans text-sm">
                123 Sustainable Drive,<br />
                Innovation City, ST 98765,<br />
                Planet Earth
            </p>
            <p className="text-exergy-text-medium font-sans text-xs mt-3">
                (Please schedule an appointment before visiting)
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <ContactForm />
        </div>
      </div>

       {/* Placeholder for a Map - could be an image or an actual embed */}
      <div className="mt-16 md:mt-24">
        <SectionTitle
            overline="Find Us"
            title="Our Location"
            textColor="text-white"
            overlineColor="text-exergy-green"
            center={true}
        />
        <div className="bg-exergy-dark-card p-4 rounded-xl shadow-2xl">
            <img 
                src="https://picsum.photos/seed/map-placeholder-city/1200/400?grayscale" 
                alt="Map placeholder showing office location" 
                className="w-full h-auto object-cover rounded-lg"
            />
            <p className="text-center text-xs text-exergy-text-medium mt-2">Conceptual map view. For actual directions, please contact us.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
