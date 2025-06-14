import React from 'react';
// import Header from '../components/Header'; // Handled by Layout
// import Footer from '../components/Footer'; // Handled by Layout
import SectionTitle from '../components/SectionTitle';
import ServiceDetailCard from '../components/ServiceDetailCard';
import { 
    CheckIcon, LightbulbIcon, RecycleIcon, SeedlingIcon, EarthIcon, GlobeIcon,
    BarChartIcon, BriefcaseIcon, TestTubeIcon, GraduationCapIcon, ToolsIcon, 
    ReceiptIcon, ComputerIcon, BookOpenIcon, ChildIcon 
} from '../components/icons';

const energyServices = [
    { icon: <CheckIcon />, text: "Energy Audits & Process Assessments (ASHRAE Level 1–3): Pinpoint inefficiencies in building systems, industrial equipment, and utilities." },
    { icon: <CheckIcon />, text: "Exergy Analysis: Diagnose where energy quality is lost in your system and uncover high-impact upgrade opportunities." },
    { icon: <CheckIcon />, text: "On-Site Generation Strategy: Assess feasibility for solar PV, cogeneration, or waste-to-energy integration to reduce grid dependency." },
    { icon: <CheckIcon />, text: "Process & Equipment Upgrade Guidance: Recommend optimal improvements in HVAC, motors, pumps, compressed air, and thermal systems." },
    { icon: <CheckIcon />, text: "Incentive Navigation: Assist clients in applying for and securing federal, state, and utility incentive programs for energy upgrades, including tax credits and rebates." },
    { icon: <CheckIcon />, text: "Energy Transition Roadmaps: Develop phased plans aligned with ESG goals, net-zero targets, and future regulatory compliance." },
];

const environmentServices = [
    { icon: <RecycleIcon />, text: "Waste Valorization Strategy: Design custom strategies for converting waste (MSW, poultry waste, biomass) into valuable resources or energy." },
    { icon: <SeedlingIcon />, text: "Circular Economy Planning: Integrate zero-waste and closed-loop systems for long-term environmental impact." },
    { icon: <EarthIcon />, text: "Carbon Footprint Reduction & Net-Zero Planning: Develop customized roadmaps to reduce GHG emissions." },
    { icon: <BarChartIcon />, text: "ESG Compliance Reporting: Provide data-driven reports to support investor, regulatory, and stakeholder ESG requirements." },
    { icon: <BriefcaseIcon />, text: "Carbon Credit & Offset Advisory: Assist with eligibility, certification, and participation in carbon credit markets." },
    { icon: <TestTubeIcon />, text: "Feasibility Studies: Evaluate and design low-carbon energy systems and waste-to-energy infrastructure." },
    { icon: <TestTubeIcon />, text: "Consulting Services to Bioenergy/Biofuel Startups: Provide strategic and technical guidance on feedstock sourcing, process optimization, techno-economic analysis, and scaling sustainable fuel innovations." },
];

const educationServices = [
    { icon: <GraduationCapIcon />, text: "Executive & Corporate Training: In clean energy, sustainability, and energy efficiency." },
    { icon: <ToolsIcon />, text: "Workshops on Energy Audits, Exergy, LCA/TEA: Hands-on and industry-specific." },
    { icon: <ReceiptIcon />, text: "Certification-Ready Training: Support for obtaining LEED, PMP, CEM, and other industry-recognized credentials." },
    { icon: <ComputerIcon />, text: "Webinars & E-Learning Modules: Flexible formats to reach diverse learners." },
    { icon: <BookOpenIcon />, text: "Academic & Industry Curriculum Development: Custom educational content for colleges, workforce programs, and technical schools." },
    { icon: <GlobeIcon />, text: "Community Outreach & Youth Programs: Promote energy literacy and environmental stewardship." },
    { icon: <ChildIcon />, text: "Introductory Energy & Sustainability Education for High School Students: Beginner-friendly workshops and courses to build future clean energy leaders." },
    { icon: <TestTubeIcon />, text: "Consulting Services to Bioenergy/Biofuel Startups: Educational modules and advisory for entrepreneurial training and lab-to-market knowledge." },
];

const ServicesPage: React.FC = () => {
  return (
    // Removed Header and Footer as they are now in Layout component from App.tsx
    // Main container div (bg-exergy-dark-bg text-exergy-text-light) moved to App.tsx Layout
    // py-28 md:py-32 adjusted to py-12 md:py-16 for main content area now that Header/Footer are outside
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"> 
        <SectionTitle
          overline="Our Expertise"
          title="Our Triple Nexus of Services"
          textColor="text-white"
          overlineColor="text-exergy-green"
          center={true}
        />
        <p className="text-center text-exergy-text-medium max-w-3xl mx-auto mb-16 md:mb-20 text-lg leading-relaxed font-sans">
          Driving transformative outcomes through technical excellence, sustainability impact, and capacity empowerment.
        </p>

        {/* Section 1: Energy & Exergy */}
        <section id="energy-exergy" className="mb-16 md:mb-20 py-10 scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
              1. Energy & Exergy
            </h2>
            <p className="text-xl text-exergy-green font-semibold font-sans">(Technical Excellence)</p>
          </div>
          <p className="mb-10 text-lg text-exergy-text-medium leading-relaxed font-sans text-center max-w-2xl mx-auto">
            We help clients identify energy-saving opportunities and reduce operational costs through a comprehensive suite of services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {energyServices.map((service, index) => (
              <ServiceDetailCard key={`energy-${index}`} icon={service.icon} text={service.text} />
            ))}
          </div>
          <div className="mt-12 bg-exergy-dark-card p-8 rounded-xl shadow-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 border-2 border-exergy-green/50 hover:border-exergy-green transition-colors duration-300">
            <LightbulbIcon className="w-16 h-16 text-exergy-green flex-shrink-0" />
            <div>
              <h3 className="text-xl font-heading font-semibold text-white mb-2">Our Unique Exergy-Informed Approach</h3>
              <p className="font-sans text-exergy-text-medium leading-relaxed">
                Goes beyond conventional efficiency by revealing where your system truly loses potential — unlocking deeper savings and smarter investments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Environment */}
        <section id="environment" className="mb-16 md:mb-20 py-10 scroll-mt-24 bg-exergy-dark-card rounded-xl shadow-2xl p-6 md:p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
              2. Environment
            </h2>
            <p className="text-xl text-exergy-green font-semibold font-sans">(Sustainability Impact)</p>
          </div>
          <p className="mb-10 text-lg text-exergy-text-medium leading-relaxed font-sans text-center max-w-2xl mx-auto">
            We help clients align with sustainable practices and circular economy goals by offering:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {environmentServices.map((service, index) => (
              <ServiceDetailCard key={`env-${index}`} icon={service.icon} text={service.text} className="bg-exergy-dark-input" />
            ))}
          </div>
        </section>

        {/* Section 3: Education */}
        <section id="education" className="mb-16 md:mb-20 py-10 scroll-mt-24">
           <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
              3. Education
            </h2>
            <p className="text-xl text-exergy-green font-semibold font-sans">(Capacity Building | ExergyTech Academy)</p>
          </div>
          <p className="mb-10 text-lg text-exergy-text-medium leading-relaxed font-sans text-center max-w-2xl mx-auto">
            We empower individuals and organizations through specialized learning initiatives:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {educationServices.map((service, index) => (
              <ServiceDetailCard key={`edu-${index}`} icon={service.icon} text={service.text} />
            ))}
          </div>
        </section>
    </div>
  );
};

export default ServicesPage;