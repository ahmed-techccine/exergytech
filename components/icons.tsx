import React from 'react';

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export const CrossIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet">
        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
    </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-user ${className}`}></i>);
export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-arrow-right ${className}`}></i>);


// Font Awesome icons require the CDN link in index.html
export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fab fa-facebook-f ${className}`}></i>);
export const XTwitterIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fab fa-xing ${className}`}></i>); // Using fa-xing as a placeholder for X, or use fa-twitter if X is not available in FA5
export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fab fa-linkedin-in ${className}`}></i>);
export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fab fa-instagram ${className}`}></i>);


export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-phone-alt ${className}`}></i>);
export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-envelope ${className}`}></i>);
export const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-globe ${className}`}></i>);

// Icons for Services Page
export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-lightbulb ${className}`}></i>);
export const RecycleIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-recycle ${className}`}></i>);
export const SeedlingIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-seedling ${className}`}></i>);
export const EarthIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-globe-africa ${className}`}></i>);
export const BarChartIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-chart-bar ${className}`}></i>);
export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-briefcase ${className}`}></i>);
export const TestTubeIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-flask ${className}`}></i>);
export const GraduationCapIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-graduation-cap ${className}`}></i>);
export const ToolsIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-tools ${className}`}></i>);
export const ReceiptIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-receipt ${className}`}></i>);
export const ComputerIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-laptop-code ${className}`}></i>);
export const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-book-open ${className}`}></i>);
export const ChildIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-child ${className}`}></i>);

// Icons for Clients Page
export const FactoryIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-industry ${className}`}></i>);
export const TrashAltIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-trash-alt ${className}`}></i>);
export const CityIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-city ${className}`}></i>);
export const BuildingIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-building ${className}`}></i>); // For private sector or can use BriefcaseIcon
export const SchoolIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-school ${className}`}></i>);
export const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-handshake ${className}`}></i>); // For NGOs/Development Agencies
export const BullseyeIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-bullseye ${className}`}></i>); // For Mission-Driven
export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-users ${className}`}></i>); // For Team Credibility
export const PuzzlePieceIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-puzzle-piece ${className}`}></i>); // For Triple Nexus Integration
export const FeatherAltIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-feather-alt ${className}`}></i>); // For Lean & Agile
export const ShieldAltIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-shield-alt ${className}`}></i>); // For Pure Service Focus (objectivity)

// Icons for About Us Page Values (can reuse some from above)
export const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-bullseye ${className}`}></i>); // For Vision/Mission or Integrity
export const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-eye ${className}`}></i>); // For Vision or Objectivity
export const HandshakeSimpleIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-handshake-simple ${className}`}></i>); // For Collaboration/Empowerment, fa-handshake might be too formal
export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-sparkles ${className}`}></i>); // For Innovation/Excellence
export const BalanceScaleIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-balance-scale ${className}`}></i>); // For Integrity / Objectivity
export const PeopleCarryBoxIcon: React.FC<{ className?: string }> = ({ className }) => (<i className={`fas fa-people-carry-box ${className}`}></i>); // For Empowerment/Collaboration
