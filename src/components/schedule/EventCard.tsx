import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventCardProps {
  day: number;
  date: string;
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  dayName: string;
}

export function EventCard({ day, date, title, description, isExpanded, onToggle, children, dayName }: EventCardProps) {
  return (
    <div 
      onClick={onToggle}
      className="bg-[#1E3231] p-4 md:p-8 rounded-xl shadow-2xl transition-all duration-300 border border-[#6A8D73]/20 
        hover:shadow-[0_0_15px_rgba(106,141,115,0.1)] hover:border-[#BF5745]/50 cursor-pointer
        group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex flex-col items-center">
            <span className="text-[#BF5745] font-bold text-3xl md:text-4xl font-medieval">Day {day}</span>
            <span className="text-[#F3CC9F] text-base md:text-xl font-medieval mt-1">{date}</span>
          </div>
          <div className="h-12 w-0.5 bg-[#6A8D73]/30" />
          <div className="flex flex-col">
            <span className="text-[#F3CC9F] text-sm md:text-lg">{dayName}</span>
            <span className="text-[#6A8D73] text-sm hidden md:block">{title}</span>
          </div>
        </div>
        <motion.div 
          className="text-[#F3CC9F] group-hover:text-[#BF5745] transition-colors p-2 rounded-full group-hover:bg-[#2F2F2F]"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} className="transform transition-transform group-hover:scale-110" />
        </motion.div>
      </div>
      
      <h3 className="text-[#F3CC9F] text-2xl md:text-3xl font-bold mb-3 font-medieval">{title}</h3>
      <p className="text-[#6A8D73] text-lg md:text-xl leading-relaxed">{description}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-6"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}