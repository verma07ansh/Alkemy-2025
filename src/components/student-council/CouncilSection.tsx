import React from 'react';
import { motion } from 'framer-motion';
import StudentCouncilCard from './StudentCouncilCard';
import { DivideIcon as LucideIcon } from 'lucide-react';
import CustomSlider from '../shared/CustomSlider';

interface TeamMember {
  name: string;
  role: string;
  class: string;
  image: string;
}

interface CouncilSectionProps {
  title: string;
  description: string;
  members: TeamMember[];
  icon: LucideIcon;
}

const CouncilSection: React.FC<CouncilSectionProps> = ({ 
  title, 
  description, 
  members, 
  icon: Icon 
}) => {
  return (
    <div className="mb-12">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-4 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 bg-[#BF5745]/10 rounded-xl flex items-center justify-center group-hover:bg-[#BF5745] transition-colors">
            <Icon className="w-8 h-8 text-[#BF5745]" />
          </div>
          <h2 className="text-4xl font-bold text-[#F3CC9F]">{title}</h2>
        </motion.div>
        <p className="text-lg text-[#F3CC9F] opacity-90 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div>
        <CustomSlider>
          {members.map((member, index) => (
            <div key={index} className="px-2">
              <StudentCouncilCard {...member} />
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
}

export default CouncilSection;