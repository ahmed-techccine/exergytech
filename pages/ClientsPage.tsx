import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { 
    FactoryIcon, TrashAltIcon, CityIcon, GraduationCapIcon, HandshakeIcon, 
    BuildingIcon, SchoolIcon, SeedlingIcon, ShieldAltIcon, UsersIcon,
    PuzzlePieceIcon, FeatherAltIcon, BullseyeIcon
} from '../components/icons';

interface ClientTypeCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ClientTypeCard: React.FC<ClientTypeCardProps> = ({ icon, title, description }) => (
  <div className="bg-exergy-dark-card p-6 rounded-xl shadow-lg flex flex-col items-start h-full transform hover:scale-105 hover:shadow-exergy-green/30 transition-all duration-300 ease-in-out border border-gray-700 hover:border-exergy-green group">
    <div className="flex-shrink-0 w-12 h-12 text-exergy-green mb-5 flex items-center justify-center rounded-full bg-exergy-dark-input transition-colors duration-300 group-hover:bg-exergy-green group-hover:text-white">
      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
    </div>
    <h3 className="text-xl font-heading font-semibold text-white mb-2">{title}</h3>
    <p className="font-sans text-exergy-text-medium text-sm leading-relaxed flex-grow">{description}</p>
  </div>
);

const clientTypes = [
  { icon: <FactoryIcon />, title: "Industrial Manufacturers & Processing Plants", description: "Seeking energy and process optimization, efficiency gains, and cost reduction." },
  { icon: <TrashAltIcon />, title: "Waste Management Companies", description: "Exploring waste valorization, resource recovery, and circular economy pathways." },
  { icon: <CityIcon />, title: "Municipalities & Local Governments", description: "Planning sustainable infrastructure, community energy systems, and resilience." },
  { icon: <GraduationCapIcon />, title: "Universities & Training Institutions", description: "Integrating cutting-edge energy, exergy, and sustainability education and research." },
  { icon: <HandshakeIcon />, title: "NGOs & Development Agencies", description: "Supporting clean energy capacity building, policy development, and community projects." },
  { icon: <BuildingIcon />, title: "Private Sector Enterprises", description: "Committed to ESG goals, carbon neutrality, net-zero targets, and sustainable operations." },
  { icon: <SchoolIcon />, title: "High Schools & Youth Programs", description: "Introducing foundational clean energy concepts and sustainability education for future leaders." },
  { icon: <SeedlingIcon />, title: "Bioenergy/Biofuel Startups", description: "Seeking consulting on feasibility, value chain strategy, technology scale-up, and funding." },
];

const differentiators = [
  { icon: <ShieldAltIcon />, title: "Pure Service Focus", description: "Objective advice without product bias, ensuring solutions truly fit your needs." },
  { icon: <UsersIcon />, title: "Team Credibility", description: "Expertise from certified engineers, academics, data analysts, and project managers." },
  { icon: <PuzzlePieceIcon />, title: "Unique Triple Nexus Integration", description: "Holistic solutions combining energy/exergy, environment, and education." },
  { icon: <FeatherAltIcon />, title: "Lean & Agile", description: "Responsive, flexible consulting without the overhead of large bureaucratic firms." },
  { icon: <BullseyeIcon />, title: "Mission-Driven", description: "Empowering you to meet net-zero goals, circular economy models, and workforce transformation." },
];

const ClientsPage: React.FC = () => {
  return (
    // Removed Header and Footer as they are now in Layout component from App.tsx
    // Main container div moved to App.tsx Layout
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> {/* Adjusted padding now that Header/Footer are outside */}
        <SectionTitle
          overline="Our Partners in Sustainability"
          title="Who We Serve"
          textColor="text-white"
          overlineColor="text-exergy-green"
          center={true}
        />
        <p className="text-center text-exergy-text-medium max-w-3xl mx-auto mb-16 md:mb-20 text-lg leading-relaxed font-sans">
          We collaborate with a diverse range of organizations, helping them unlock energy potential, achieve sustainability goals, and build capacity for a cleaner future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16 md:mb-20">
          {clientTypes.map((client, index) => (
            <ClientTypeCard key={`client-${index}`} icon={client.icon} title={client.title} description={client.description} />
          ))}
        </div>
        
        <div className="bg-exergy-dark-card rounded-xl shadow-2xl p-6 md:p-10 mb-16 md:mb-20">
            <SectionTitle
            overline="Our Commitment"
            title="Why Clients Choose ExergyTech"
            textColor="text-white"
            overlineColor="text-exergy-green"
            center={true}
            />
            <p className="text-center text-exergy-text-medium max-w-3xl mx-auto mb-12 text-md leading-relaxed font-sans">
                We offer personalized, flexible solutions without conflict of interest, specifically serving clients and sectors not currently prioritized by major commercial energy service providers.
            </p>
            <div className="space-y-8">
                {differentiators.map((item, index) => (
                <div key={`diff-${index}`} className="flex flex-col sm:flex-row items-center bg-exergy-dark-input p-6 rounded-lg shadow-md hover:shadow-exergy-green/20 transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 text-exergy-green mb-4 sm:mb-0 sm:mr-6 flex items-center justify-center rounded-full bg-exergy-dark-bg">
                         {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
                    </div>
                    <div>
                    <h4 className="text-xl font-heading font-semibold text-white mb-1">{item.title}</h4>
                    <p className="font-sans text-exergy-text-medium text-sm leading-relaxed">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>


        <section className="text-center py-10">
          <SectionTitle
            overline="Join Us"
            title="Partner with ExergyTech"
            textColor="text-white"
            overlineColor="text-exergy-green"
            center={true}
          />
          <p className="text-exergy-text-medium max-w-xl mx-auto mb-8 text-lg font-sans">
            Ready to transform your energy use and sustainability practices? Let's discuss how our expertise can benefit your organization.
          </p>
          <Button variant="primary" className="text-base px-8 py-3.5" onClick={() => window.location.href='/contact'}> {/* Updated to /contact */}
            Contact Us Today
          </Button>
        </section>
    </div>
  );
};

export default ClientsPage;