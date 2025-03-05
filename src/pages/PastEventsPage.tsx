import React from 'react';
import { motion } from 'framer-motion';
import { pastEvents } from '../data/pastEventsData';
import { History } from 'lucide-react';

const PastEventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2F2F2F] py-20 px-4 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-20 h-20 bg-[#BF5745] rounded-full mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <History className="w-10 h-10 text-[#F3CC9F]" />
          </motion.div>
          <h1 className="text-5xl font-medieval text-[#F3CC9F] mb-4">Past Glories</h1>
          <p className="text-xl text-[#F3CC9F]/80 max-w-2xl mx-auto">
            Relive the magical moments of our previous gatherings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="bg-[#1E3231] rounded-xl overflow-hidden border-2 border-[#6A8D73] group-hover:border-[#BF5745] transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3231] to-transparent opacity-80" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-medieval text-[#F3CC9F] group-hover:text-[#BF5745] transition-colors mb-3">
                    {event.title}
                  </h3>
                  <p className="text-[#F3CC9F]/70 flex-1">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEventsPage;