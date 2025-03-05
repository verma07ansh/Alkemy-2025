import React from 'react';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F2F2F] text-[#F3CC9F] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[#BF5745] text-5xl font-medieval mb-4">
            Alkemy 2025
          </h2>
          <p className="text-[#F3CC9F] opacity-90 max-w-2xl mx-auto mb-8">
            A wonderful serenity has taken possession of my entire soul, like these sweet 
            mornings of spring which I enjoy with A wonderful serenity has taken 
            possession of my entire soul
          </p>
          
          <ContactInfo />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#6A8D73]/30 pt-4">
          <div className="text-sm text-[#F3CC9F]/80 font-medieval">
            <span>Copyright © Alkemy 2025.</span>
            <span className="ml-1">All rights reserved.</span>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;