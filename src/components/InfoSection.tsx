import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe, Scroll } from 'lucide-react';

const InfoSection: React.FC = () => {
  const sections = [
    {
      icon: Scroll,
      title: "Our Events",
      content: "From dance and music performances to hackathons, robotics contests, and sports championships, Alkemy celebrates the multi-faceted talents of its participants. Each event is meticulously designed to challenge, entertain, and inspire."
    },
    {
      icon: Calendar,
      title: "When and Where?",
      content: "Alkemy Fest is held annually at the Navi Mumbai campus of BVDU, attracting participants and visitors from across the region. Past editions have been hosted from February 27th to March 4th, and this year promises to be even bigger and better."
    },
    {
      icon: Globe,
      title: "Follow Us",
      content: "Follow us on our official website and social media channels for the latest updates on dates, schedules, and registrations."
    }
  ];

  return (
    <div className="py-16 px-4 bg-[#FFF5EB] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-medieval text-[#2F2F2F] mb-6">
            Join the Celebration
          </h2>
          <p className="text-lg text-[#2F2F2F]/80 max-w-2xl mx-auto">
            Whether you're here to perform, compete, or simply immerse yourself in the electrifying energy, 
            Alkemy Fest is where memories are made, and dreams come alive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#6A8D73] hover:border-[#BF5745] 
                  transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#BF5745]/10 group-hover:bg-[#BF5745] transition-colors">
                    <Icon className="w-6 h-6 text-[#BF5745] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-medieval text-[#2F2F2F]">{section.title}</h3>
                </div>
                <p className="text-[#2F2F2F]/70 leading-relaxed">{section.content}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center bg-[#2F2F2F] p-8 rounded-xl border-2 border-[#6A8D73] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin className="w-12 h-12 text-[#BF5745] mx-auto mb-4" />
          <p className="text-[#F3CC9F] text-lg mb-6">
            So, come and be part of the magic—let's create, innovate, and celebrate together at Alkemy Fest!
          </p>
          <button className="px-8 py-3 bg-[#BF5745] text-[#F3CC9F] rounded-lg
            hover:bg-[#F3CC9F] hover:text-[#2F2F2F] transition-all duration-300
            font-medieval tracking-wide border-2 border-transparent hover:border-[#BF5745]">
            Register Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;