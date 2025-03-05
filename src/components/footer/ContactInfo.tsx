import React from 'react';
import { Mail, Phone } from 'lucide-react';
import ContactBorder from './ContactBorder';

const ContactInfo: React.FC = () => {
  return (
    <ContactBorder>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
        <a href="mailto:alkemy@gmail.com" className="flex items-center gap-2 text-[#F3CC9F] hover:text-[#BF5745] transition-colors group">
          <Mail className="group-hover:scale-110 transition-transform" size={18} />
          <span>alkemy@gmail.com</span>
        </a>
        <a href="tel:111222333" className="flex items-center gap-2 text-[#F3CC9F] hover:text-[#BF5745] transition-colors group">
          <Phone className="group-hover:scale-110 transition-transform" size={18} />
          <span>111 222 333</span>
        </a>
      </div>
    </ContactBorder>
  );
};

export default ContactInfo;