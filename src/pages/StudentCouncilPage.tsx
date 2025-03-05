import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import CouncilSection from '../components/student-council/CouncilSection';
import { councilSections } from '../data/studentCouncilData';

const StudentCouncilPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2F2F2F] pt-20 pb-16 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-20 h-20 bg-[#BF5745] rounded-full mx-auto mb-4 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-10 h-10 text-[#F3CC9F]" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-medieval text-[#F3CC9F] mb-2">
            Student Council
          </h1>
          <h1 className="text-5xl md:text-5xl font-medieval text-[#F3CC9F] mb-2">
            DET + DMS
          </h1>
          <p className="text-xl text-[#F3CC9F]/80 max-w-3xl mx-auto">
            Meet the dedicated team of student leaders who work tirelessly to make our events extraordinary
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {councilSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CouncilSection
                title={section.title}
                description={section.description}
                members={section.members}
                icon={section.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StudentCouncilPage;