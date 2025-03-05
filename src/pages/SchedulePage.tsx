import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '../components/schedule/TimelineEvent';
import { timelineEvents } from '../data/timelineData';
import { Header } from '../components/schedule/Header';
import { TimelineDivider } from '../components/schedule/TimelineDivider';

const SchedulePage: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const handleToggle = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#2F2F2F] py-8 px-2 md:py-12 md:px-4 overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <motion.div 
        className="max-w-6xl mx-auto relative"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        
        <div className="relative">
          <TimelineDivider />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TimelineEvent
                {...event}
                index={index}
                isExpanded={expandedDay === event.day}
                onToggle={() => handleToggle(event.day)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
export default SchedulePage;