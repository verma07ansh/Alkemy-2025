import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroButtons: React.FC = () => {
  const navigate = useNavigate();

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mb-12">
      <motion.button 
        variants={buttonVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        onClick={() => navigate('/events')}
        className="px-8 py-4 bg-gradient-to-r from-[#BF5745] to-[#a94b3b] text-[#F3CC9F] rounded-lg 
          hover:from-[#a94b3b] hover:to-[#BF5745] transition-all duration-300 
          font-medium text-lg shadow-lg shadow-[#BF5745]/20"
      >
        Quest Awaits
      </motion.button>

      <motion.button 
        variants={buttonVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
        onClick={() => navigate('/schedule')}
        className="group px-8 py-4 bg-gradient-to-r from-transparent to-transparent 
          border-2 border-[#2F2F2F] text-[#2F2F2F] rounded-lg 
          hover:from-[#2F2F2F] hover:to-[#1E3231] hover:text-[#F3CC9F] 
          transition-all duration-300 font-medium text-lg
          relative overflow-hidden shadow-lg"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2F2F2F] to-[#1E3231] 
          transition-transform duration-300 transform translate-x-full group-hover:translate-x-0" />
        <span className="relative z-10 flex items-center gap-2">
          <Clock className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" />
          Mark Time
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" />
        </span>
      </motion.button>
    </div>
  );
}

export default HeroButtons;