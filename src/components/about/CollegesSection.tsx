import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: "BVDU DET",
    logo: "/assets/DET-Logo.jpg",
    size: "w-52 h-52",
    url: "https://www.bvuniversity.edu.in/doemumbai/"
  },
  {
    name: "BVDU DMS",
    logo: "/assets/DMS-Logo.jpg",
    size: "w-36 h-36",
    url: "https://www.bvuniversity.edu.in/dommumbai/"
  },
  {
    name: "BVDU",
    logo: "/assets/BVDU-Logo.jpg",
    size: "w-32 h-32",
    url: "https://www.bvuniversity.edu.in/"
  }
];

const CollegesSection: React.FC = () => {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-medieval text-[#F3CC9F] mb-12 text-center">Our Colleges</h2>
      <div className="flex justify-center items-center gap-16 flex-wrap">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <a 
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
              title={`Visit ${logo.name}`}
            >
              <img
                src={logo.logo}
                alt={logo.name}
                className={`${logo.size} object-contain opacity-90 hover:opacity-100 transition-all duration-300`}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CollegesSection;