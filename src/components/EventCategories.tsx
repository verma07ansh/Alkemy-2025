import React from 'react';
import { motion } from 'framer-motion';
import EventCategory from './EventCategory';
import { categories } from '../data/eventCategoriesData';

const EventCategories: React.FC = () => {
  return (
    <div className="py-12 px-4 bg-[#2F2F2F]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-5xl font-bold text-center text-[#F3CC9F] mb-3">Event Categories</h2>
          <p className="text-center text-[#F3CC9F] mb-8 max-w-3xl mx-auto">
            Discover a realm of innovation, creativity, and competition across our diverse magical categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <EventCategory {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventCategories;