import React from 'react';
import { NavLink } from '../types';
import { FOOTER_CONTACT_INFO, FOOTER_USEFUL_LINKS, FOOTER_WHAT_WE_DO_LINKS, NEWSLETTER_SUBMIT_ICON } from '../constants';
import { FacebookIcon, XTwitterIcon, LinkedInIcon } from './icons'; // Using XTwitterIcon

const Footer: React.FC = () => {
  return (
    <footer className="bg-exergy-dark-bg text-exergy-text-medium pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Company */}
          <div>
            <a href="/" className="inline-block mb-4"> {/* Logo link to homepage */}
              <span className="text-2xl font-extrabold font-heading text-white">ExergyTech</span>
              <span className="block text-sm font-semibold font-heading text-exergy-green">Solutions</span>
            </a>
            <p className="text-sm mb-6 leading-relaxed">
              Centric aplications productize before front end vortals visualize front end is results and value added.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-exergy-text-medium hover:text-exergy-green transition-colors"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="X (Twitter)" className="text-exergy-text-medium hover:text-exergy-green transition-colors"><XTwitterIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-exergy-text-medium hover:text-exergy-green transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-5">Useful Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_USEFUL_LINKS.map((link: NavLink) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-exergy-green transition-colors text-sm flex items-center group">
                    <span className="mr-2 text-exergy-green group-hover:translate-x-1 transition-transform duration-200">&rarr;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-5">What We Do</h4>
            <ul className="space-y-2.5">
              {FOOTER_WHAT_WE_DO_LINKS.map((link: NavLink) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-exergy-green transition-colors text-sm flex items-center group">
                   <span className="mr-2 text-exergy-green group-hover:translate-x-1 transition-transform duration-200">&rarr;</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Subscribe Newsletter & Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-5">Subscribe Our Newslater</h4> {/* Typo from image: Newslater */}
            <p className="text-sm mb-4">Get Our Latest Update & New Offers Sales Discount.</p>
            <form className="flex mb-6">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                aria-label="Enter Your Email for Newsletter"
                className="w-full px-4 py-2.5 bg-exergy-dark-input text-exergy-text-light border border-gray-700 rounded-l-md focus:ring-1 focus:ring-exergy-green focus:border-exergy-green text-sm placeholder-gray-500"
              />
              <button 
                type="submit" 
                aria-label="Subscribe to newsletter"
                className="bg-exergy-green text-white px-4 py-2.5 rounded-r-md hover:bg-exergy-green-dark transition-colors font-semibold text-sm flex items-center justify-center"
              >
                {NEWSLETTER_SUBMIT_ICON}
              </button>
            </form>
             <div className="mt-2 space-y-2">
                {FOOTER_CONTACT_INFO.map(info => (
                    <a key={info.text} href={info.href || '#'} className="flex items-center text-sm hover:text-exergy-green transition-colors group">
                        {React.cloneElement(info.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 mr-2.5 text-exergy-green"})} 
                        {info.text}
                    </a>
                ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; Copyright {new Date().getFullYear()} ExergyTech Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;