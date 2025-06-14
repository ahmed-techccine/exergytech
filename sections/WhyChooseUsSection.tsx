
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { FEATURES_DATA } from '../constants';
import { FeatureComparisonItem } from '../types';
import { PlayIcon } from '../components/icons';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-exergy-light-gray flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionTitle 
              overline="About Company" 
              title="Why Choose Us?" 
              textColor="text-exergy-text-dark"
            />
            <p className="text-exergy-text-dark mb-10 leading-relaxed font-sans text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ea eiusmod tempor incididunt ut labore et dolore magna quis aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco nisi ut laboris.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl">
              <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-4 pb-3 border-b border-gray-200">
                <h4 className="font-bold font-heading text-exergy-text-dark text-sm">Feature</h4>
                <h4 className="font-bold font-heading text-exergy-green text-center text-sm">ExergyTech</h4>
                <h4 className="font-bold font-heading text-gray-600 text-center text-sm">Others</h4>
              </div>
              {FEATURES_DATA.map((item: FeatureComparisonItem, index: number) => (
                <div key={index} className={`grid grid-cols-3 gap-x-4 items-center py-3.5 ${index !== FEATURES_DATA.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <span className="text-sm text-exergy-text-dark font-sans">{item.feature}</span>
                  <div className="flex justify-center">
                    {typeof item.exergyTech === 'string' ? <span className="text-sm text-exergy-green font-semibold font-sans">{item.exergyTech}</span> : item.exergyTech}
                  </div>
                  <div className="flex justify-center">
                     {typeof item.others === 'string' ? <span className="text-sm text-gray-500 font-sans">{item.others}</span> : item.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative  lg:mt-[250px] group">
            <img 
              src="https://picsum.photos/seed/team-meeting-video/600/450?grayscale" 
              alt="Sustainable solutions presentation" 
              className="rounded-xl shadow-2xl object-cover w-full h-auto aspect-video max-h-[480px]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl">
              <button aria-label="Play video" className="text-white bg-exergy-green p-4 rounded-full hover:bg-exergy-green-dark transition-colors transform group-hover:scale-110">
                <PlayIcon className="w-10 h-10 md:w-12 md:h-12" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
