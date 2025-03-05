import React from 'react';
import heroKnight from '/assets/hero-knight.png';

const HeroImage: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BF5745] rounded-full opacity-10" />
      <div className="relative z-10 w-full max-w-[600px] mx-auto">
        <img 
          src={heroKnight}
          alt="Medieval Knight Character"
          className="w-full h-full object-contain"
          style={{ 
            filter: 'drop-shadow(0 0 30px rgba(191, 87, 69, 0.2))',
            transform: 'scale(1.1)',
            borderRadius: '50%',
            overflow: 'hidden'
          }}
        />
      </div>
    </div>
  );
};

export default HeroImage;