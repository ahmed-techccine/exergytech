import React from 'react';
// import Header from '../components/Header'; // Handled by Layout
// import Footer from '../components/Footer'; // Handled by Layout
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { 
    CheckIcon, LightbulbIcon, RecycleIcon, SeedlingIcon, ShieldAltIcon, UsersIcon, PuzzlePieceIcon, 
    FeatherAltIcon, BullseyeIcon, HandshakeSimpleIcon, SparklesIcon, BalanceScaleIcon, PeopleCarryBoxIcon, GlobeIcon
} from '../components/icons';

interface ValueCardProps {
  icon: React.ReactElement<{ className?: string }>; 
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-exergy-dark-card p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full transform hover:scale-105 hover:shadow-exergy-green/30 transition-all duration-300 ease-in-out border border-gray-700 hover:border-exergy-green group">
    <div className="flex-shrink-0 w-16 h-16 text-exergy-green mb-5 flex items-center justify-center rounded-full bg-exergy-dark-input transition-colors duration-300 group-hover:bg-exergy-green group-hover:text-white">
      {React.cloneElement(icon, { className: "w-8 h-8" })}
    </div>
    <h3 className="text-xl font-heading font-semibold text-white mb-2">{title}</h3>
    <p className="font-sans text-exergy-text-medium text-sm leading-relaxed flex-grow">{description}</p>
  </div>
);

const coreValues = [
  { icon: <BalanceScaleIcon />, title: "Integrity & Objectivity", description: "Providing unbiased, expert advice focused solely on client needs and optimal outcomes." },
  { icon: <SparklesIcon />, title: "Innovation & Excellence", description: "Continuously seeking and applying cutting-edge solutions and maintaining the highest standards in our work." },
  { icon: <SeedlingIcon />, title: "Sustainability & Impact", description: "Dedicated to creating lasting positive environmental and societal impact through our services." },
  { icon: <PeopleCarryBoxIcon />, title: "Empowerment & Collaboration", description: "Building capacity through education and working closely with clients to achieve shared goals." },
  { icon: <FeatherAltIcon />, title: "Agility & Client-Centricity", description: "Adapting to client needs with flexible, responsive, and personalized consulting services." },
];

const differentiators = [
  { icon: <ShieldAltIcon />, title: "Pure Service Focus", description: "We do not manufacture products or compete in hardware energy markets, ensuring objectivity and avoiding product-based bias." },
  { icon: <UsersIcon />, title: "Team Credibility", description: "Operated by certified energy engineers, academic scholars, industry experts, data analysts, and project managers with years of experience." },
  { icon: <PuzzlePieceIcon />, title: "Unique Triple Nexus Integration", description: "No other firm unifies energy/exergy, environmental systems, and education in a seamless consulting framework." },
  { icon: <FeatherAltIcon />, title: "Lean & Agile", description: "Delivering value efficiently without the burden of heavy infrastructure or bureaucracy." },
  { icon: <BullseyeIcon />, title: "Mission-Driven", description: "Our work empowers clients to meet net-zero goals, adopt circular economy models, and transform their clean energy workforce." },
];


const AboutPage: React.FC = () => {
  return (
    // Removed Header and Footer as they are now in Layout component from App.tsx
    // Main container div (bg-exergy-dark-bg text-exergy-text-light) moved to App.tsx Layout
    <>
        {/* Hero Section for About Page */}
        <section className="relative bg-about-hero-pattern bg-cover bg-center bg-no-repeat py-32 md:py-40 text-center text-white"> {/* Reduced py a bit */}
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 font-heading">
              About ExergyTech Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-exergy-text-light font-sans leading-relaxed">
              Pioneering a Sustainable Future. Beyond Energy. Beyond Efficiency. Driving transformative outcomes through our unique Triple Nexus approach.
            </p>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 lg:py-20 bg-exergy-dark-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <SectionTitle 
                  overline="Our Identity" 
                  title="Who We Are" 
                  textColor="text-white"
                  overlineColor="text-exergy-green"
                />
                <p className="text-md text-exergy-text-medium mb-5 leading-relaxed font-sans">
                  ExergyTech Solutions Group is an independent cleantech service consultancy driving transformative outcomes through the Triple Nexus of:
                </p>
                <ul className="list-none space-y-3 mb-6 pl-0 font-sans text-md">
                  <li className="flex items-start"><CheckIcon className="w-5 h-5 text-exergy-green mr-3 mt-1 flex-shrink-0" /> Energy/Exergy Efficiency</li>
                  <li className="flex items-start"><CheckIcon className="w-5 h-5 text-exergy-green mr-3 mt-1 flex-shrink-0" /> Environmental Sustainability</li>
                  <li className="flex items-start"><CheckIcon className="w-5 h-5 text-exergy-green mr-3 mt-1 flex-shrink-0" /> Education and Capacity Building</li>
                </ul>
                <p className="text-md text-exergy-text-medium leading-relaxed font-sans">
                  We merge technical excellence with strategic insight to help our clients achieve energy transition, circular economy goals, and sustainable workforce development—while maintaining full independence from product-based energy firms.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/sustainable-innovation-team/600/450?grayscale" 
                  alt="ExergyTech innovative team" 
                  className="rounded-lg shadow-2xl object-cover w-full h-auto aspect-[4/3]" 
                />
                 <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-exergy-green p-3 rounded-lg shadow-2xl hidden lg:flex items-center justify-center">
                    <GlobeIcon className="w-20 h-20 text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-16 lg:py-20 bg-exergy-dark-bg"> {/* Changed to dark-bg for contrast */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle 
                        overline="Our Purpose" 
                        title="Our Mission" 
                        textColor="text-white"
                        overlineColor="text-exergy-green"
                        />
                        <p className="text-exergy-text-medium text-lg leading-relaxed font-sans mb-8">
                        To help industries, cities, and communities unlock hidden energy potential and waste-to-energy pathways using our triple nexus approach coupled with advanced thermodynamic and data intelligence tools.
                        </p>
                    </div>
                    <div>
                        <SectionTitle 
                        overline="Our Aspiration" 
                        title="Our Vision" 
                        textColor="text-white"
                        overlineColor="text-exergy-green"
                        />
                        <p className="text-exergy-text-medium text-lg leading-relaxed font-sans">
                        To be a leading catalyst in the global transition to sustainable energy and circular economies, recognized for our innovative solutions, independent expertise, and commitment to empowering a knowledgeable workforce.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 lg:py-20 bg-exergy-dark-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    overline="Our Principles"
                    title="Our Core Values"
                    textColor="text-white"
                    overlineColor="text-exergy-green"
                    center={true}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {coreValues.map((value) => (
                        <ValueCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
                    ))}
                </div>
            </div>
        </section>
        
        {/* What Makes Us Different Section */}
        <section className="py-16 lg:py-20 bg-exergy-dark-bg"> {/* Changed to dark-bg for contrast */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              overline="Our Distinction"
              title="What Makes Us Different"
              textColor="text-white"
              overlineColor="text-exergy-green"
              center={true}
            />
            <p className="text-center text-2xl font-bold font-heading text-exergy-green mb-16 italic">
              "From Waste to Watts. From Energy to Exergy. From Insight to Impact."
            </p>
            <div className="space-y-10">
              {differentiators.map((item, index) => (
                <div key={`diff-${index}`} 
                     className={`flex flex-col items-center gap-6 p-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-exergy-green/30 border border-gray-700 hover:border-exergy-green 
                                 ${index % 2 === 0 ? 'md:flex-row bg-exergy-dark-card' : 'md:flex-row-reverse bg-exergy-dark-input'}`}>
                  <div className={`flex-shrink-0 w-20 h-20 text-exergy-green flex items-center justify-center rounded-full ${index % 2 === 0 ? 'bg-exergy-dark-input' : 'bg-exergy-dark-card'} transition-colors duration-300 group-hover:bg-exergy-green group-hover:text-white`}>
                    {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                  </div>
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h4 className="text-2xl font-heading font-semibold text-white mb-2">{item.title}</h4>
                    <p className="font-sans text-exergy-text-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section (Conceptual) */}
        <section className="py-16 lg:py-20 bg-exergy-dark-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <SectionTitle
                    overline="Our Driving Force"
                    title="Meet Our Experts"
                    textColor="text-white"
                    overlineColor="text-exergy-green"
                    center={true}
                />
                <p className="text-exergy-text-medium max-w-2xl mx-auto mb-8 text-lg leading-relaxed font-sans">
                    Our team comprises certified energy engineers, academic scholars, industry experts, data analysts, and certified project managers with extensive experience in clean energy, sustainability, and education. We are passionate about delivering practical solutions and measurable results.
                </p>
                <Button variant="primary" onClick={() => window.location.href='/contact'}> {/* Updated to /contact */}
                    Connect with Our Team
                </Button>
            </div>
        </section>
    </>
  );
};

export default AboutPage;