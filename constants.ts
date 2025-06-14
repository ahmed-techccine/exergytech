import { NavLink, ServiceItem, FeatureComparisonItem, Testimonial, ContactInfo } from './types';
import { CheckIcon, CrossIcon, PhoneIcon, EmailIcon, GlobeIcon, ArrowRightIcon } from './components/icons';
import React from 'react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },  // Assuming 'careers' is a section ID on HomePage
  { name: 'Contact', href: '/contact' }, // Changed to dedicated contact page
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: 'Energy and Exergy',
    subtitle: '(Technical Excellence)',
    description: 'We help clients identify energy-saving opportunities and reduce operational costs through comprehensive audits and advanced exergy analysis.',
    image: 'https://picsum.photos/seed/industrial-plant-sunset/400/300?grayscale',
    readMoreLink: '/services#energy-exergy',
  },
  {
    title: 'Environment',
    subtitle: '(Sustainability Impact)',
    description: 'Align with sustainable practices via waste valorization, circular economy planning, carbon footprint reduction, and ESG compliance.',
    image: 'https://picsum.photos/seed/green-energy-panels/400/300?grayscale',
    readMoreLink: '/services#environment',
  },
  {
    title: 'Education',
    subtitle: '(Capacity Building & Empowerment)',
    description: 'Empower individuals and organizations with specialized training in clean energy, sustainability, and energy efficiency programs.',
    image: 'https://picsum.photos/seed/modern-classroom-tech/400/300?grayscale',
    readMoreLink: '/services#education',
  },
];

export const FEATURES_DATA: FeatureComparisonItem[] = [
  { feature: 'Independent Analysis', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CrossIcon, { className: "w-5 h-5 text-exergy-red-accent" }) },
  { feature: 'Focus on Exergy', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CrossIcon, { className: "w-5 h-5 text-exergy-red-accent" }) },
  { feature: 'Waste-to-Energy', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CheckIcon, { className: "w-5 h-5 text-gray-500" }) },
  { feature: 'Feasibility', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CheckIcon, { className: "w-5 h-5 text-gray-500" }) },
  { feature: 'Integrated LCA + TEA', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CrossIcon, { className: "w-5 h-5 text-exergy-red-accent" }) },
  { feature: 'Custom, Agile Consulting', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CrossIcon, { className: "w-5 h-5 text-exergy-red-accent" }) },
  { feature: 'Deep Data Analytics', exergyTech: React.createElement(CheckIcon, { className: "w-5 h-5 text-exergy-green" }), others: React.createElement(CheckIcon, { className: "w-5 h-5 text-gray-500" }) },
  { feature: 'Corporate Size', exergyTech: 'Small & Agile', others: 'Large & Bureaucratic' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Nulla Pariatur.",
    author: "Client Name, CEO of Company", 
    image: 'https://picsum.photos/seed/client-ceo-portrait/100/100',
  },
];


export const FOOTER_CONTACT_INFO: ContactInfo[] = [
    { icon: React.createElement(PhoneIcon, { className: "w-4 h-4 mr-2 text-exergy-green" }), text: '(+202)-2156-2145', href: 'tel:+20221562145' },
    { icon: React.createElement(EmailIcon, { className: "w-4 h-4 mr-2 text-exergy-green" }), text: 'info@exergytechsolutions.com', href: 'mailto:info@exergytechsolutions.com' },
    { icon: React.createElement(GlobeIcon, { className: "w-4 h-4 mr-2 text-exergy-green" }), text: 'www.exergytechsolutions.com', href: 'https://www.exergytechsolutions.com' },
];

export const FOOTER_USEFUL_LINKS: NavLink[] = [
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/#faq' }, // Assuming 'faq' is a section ID on HomePage
    { name: 'Our Blog', href: '/#blog' }, // Assuming 'blog' is a section ID on HomePage
    { name: 'Contact Us', href: '/contact' },
    { name: 'Projects', href: '/#projects' }, // Assuming 'projects' is a section ID on HomePage
];

export const FOOTER_WHAT_WE_DO_LINKS: NavLink[] = [
    { name: 'Home', href: '/' }, 
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/#blog' }, // Assuming 'blog' is a section ID on HomePage
    { name: 'Appointment', href: '/#appointment' }, // Assuming 'appointment' is a section ID on HomePage
    { name: 'Solar Shop', href: '/#solar-shop' }, // Assuming 'solar-shop' is a section ID on HomePage
];

export const NEWSLETTER_SUBMIT_ICON = React.createElement(ArrowRightIcon, {className: "w-5 h-5"});