import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { LucideIcon } from 'lucide-react';
import CustomSlider from '../shared/CustomSlider';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  class: string;
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
          className="flex items-center justify-center gap-3 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8 text-[#BF5745]" />
          <h2 className="text-4xl font-bold text-[#F3CC9F]">{title}</h2>
        </motion.div>
        <p className="text-lg text-[#F3CC9F] opacity-90 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div>
        <CustomSlider>
          {members.map((member, index) => (
            <div key={index} className="px-2">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
}

export default CouncilSection;