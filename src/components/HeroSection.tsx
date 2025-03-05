import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import HeroTitle from './hero/HeroTitle';
import HeroButtons from './hero/HeroButtons';
import HeroImage from './hero/HeroImage';
import heroKnight from '/assets/hero-knight.png';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FFF5EB] overflow-hidden pt-18">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage: `url(${heroKnight})`,
          backgroundSize: '350px 350px',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/4 hidden lg:block">
        <div className="relative">
          <div className="w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#BF5745]/60" />
          <div className="absolute -top-[10vw] -left-[10vw] w-[48vw] h-[48vw] max-w-[600px] max-h-[600px] rounded-full bg-[#F3CC9F]/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 min-h-screen py-20 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle />
            <HeroButtons />
            <CountdownTimer targetDate="2025-02-22" targetTime="13:00" />
          </motion.div>
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;