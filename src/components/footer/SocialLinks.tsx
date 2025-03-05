import React from 'react';
import { MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: MapPin, href: 'https://maps.app.goo.gl/bJvdVBUcpZ6qVXvNA', label: 'Location' },
  { icon: Instagram, href: 'https://www.instagram.com/alkemy.bvdu/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100074368292907', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/bvdu-det/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@BharatiVidyapeethDET-NM', label: 'YouTube' },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-full border border-[#6A8D73]/30 flex items-center justify-center
            text-[#F3CC9F] hover:text-[#BF5745] hover:border-[#BF5745] transition-colors
            hover:scale-110 transform duration-300"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;