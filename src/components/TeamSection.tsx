import React from 'react';
import { motion } from 'framer-motion';
import CouncilSection from './team/CouncilSection';
import { generalCouncil, deputyCouncil, jointCouncil } from '../data/teamData';
import { Sword, Shield, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { 
    duration: 0.3,
    staggerChildren: 0.2
  }
};

const iconAnimation = {
  initial: { opacity: 0, rotate: -180 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { once: true },
  transition: { 
    type: "spring",
    stiffness: 200,
    damping: 20
  }
};

const TeamSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 px-4 bg-[#2F2F2F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <motion.div 
        className="max-w-7xl mx-auto relative"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-8" variants={fadeInUp}>
          <motion.div 
            className="w-16 h-16 mx-auto mb-4 bg-[#BF5745] rounded-full flex items-center justify-center"
            variants={iconAnimation}
          >
            <Crown className="w-8 h-8 text-[#F3CC9F]" />
          </motion.div>
          <h2 className="text-5xl font-bold text-[#F3CC9F] mb-4">Council of Knights</h2>
          <p className="text-xl text-[#F3CC9F] opacity-80 max-w-2xl mx-auto">
            Noble warriors and wise counselors who guide our realm through glory and challenge
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <CouncilSection
            title="General Council"
            description="The noble leaders guiding our grand quest"
            members={generalCouncil}
            icon={Crown}
          />
        </motion.div>
        
        

        <motion.div 
          className="flex justify-center mt-8"
          variants={fadeInUp}
        >
          <motion.button 
            onClick={() => navigate('/student-council')}
            className="px-8 py-3 bg-[#BF5745] text-[#F3CC9F] rounded-lg
              hover:bg-[#F3CC9F] hover:text-[#2F2F2F] transition-all duration-300
              font-medieval text-lg tracking-wide shadow-lg
              border-2 border-transparent hover:border-[#BF5745]"
          >
            View Full Council
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamSection;