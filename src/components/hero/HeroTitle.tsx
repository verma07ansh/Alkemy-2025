import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-[56px]"
    >
      <motion.p 
        variants={slideIn} 
        className="text-[#BF5745] mb-2 font-medium tracking-wide"
      >
        Alkemy 2k25
      </motion.p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-[#2F2F2F] mb-6 leading-tight">
        <motion.span 
          variants={slideIn}
          className="block"
        >
          Embark on an
        </motion.span>
        <motion.span 
          variants={slideIn}
          className="block"
        >
          <span className="text-4xl md:text-6xl">Unforgettable Journey</span>
        </motion.span>
        <motion.span 
          variants={slideIn}
          className="block"
        >
          with <span className="text-[#BF5745]">Alkemy</span>
        </motion.span>
      </h1>
      
      <motion.p 
        variants={slideIn}
        className="text-[#2F2F2F] text-lg mb-8 opacity-90"
      >
        Welcome, traveler! The event you seek is just ahead. <br />Come, let me guide you!
      </motion.p>
    </motion.div>
  );
};

export default HeroTitle;