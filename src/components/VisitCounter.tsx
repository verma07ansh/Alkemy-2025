import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const VisitCounter: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#FFF5EB]">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-16 h-16 mx-auto mb-4 bg-[#BF5745] rounded-full flex items-center justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Users className="w-8 h-8 text-[#F3CC9F]" />
        </motion.div>
        
        <h2 className="text-4xl font-medieval text-[#2F2F2F] mb-4">Total Visits</h2>
        <div className="flex justify-center items-center mb-4">
            <img 
              src="https://hitwebcounter.com/counter/counter.php?page=19069794&style=0001&nbdigits=7&type=page&initCount=155" 
              title="Counter Widget" 
              alt="Visit counter For Websites"   
              className="rounded"
            />
        </div>
        <p className="text-[#2F2F2F]/80 max-w-2xl mx-auto">
          Brave souls who have ventured into our realm
        </p>
      </motion.div>
    </div>
  );
};

export default VisitCounter;