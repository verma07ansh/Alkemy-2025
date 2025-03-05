import React from 'react';
import { Scroll } from 'lucide-react';

interface ContactBorderProps {
  children: React.ReactNode;
}

const ContactBorder: React.FC<ContactBorderProps> = ({ children }) => {
  return (
    <div className="relative py-6 px-8 border border-[#6A8D73]/30 rounded-lg
      before:absolute before:content-[''] before:top-0 before:left-4 before:right-4 before:h-[2px] before:bg-[#BF5745]
      after:absolute after:content-[''] after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#BF5745]">
      <Scroll className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#BF5745] w-8 h-8 bg-[#2F2F2F] px-1" />
      {children}
    </div>
  );
};

export default ContactBorder;