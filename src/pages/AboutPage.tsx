import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, Star, Lightbulb, Gamepad, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CollegesSection from '../components/about/CollegesSection';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  
  const cards = [
    {
      title: "Welcome to Alkemy",
      content: "Welcome to Alkemy Fest, the hallmark event of Bharati Vidyapeeth Deemed University (BVDU), Navi Mumbai! Organized by the Department of Engineering and Technology & Department of Management Studies, Alkemy is a vibrant celebration of talent, creativity, and community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROotoDFyDyMhzARqshHGE30jDp7PmsPb0rbA&s",
      icon: Target
    },
    {
      title: "Our Legacy",
      content: "This annual fest has become a beacon of student life, offering a perfect blend of cultural expression, technical innovation, and competitive sportsmanship. Designed to inspire and entertain, Alkemy is more than just an event—it's a movement that celebrates the energy and spirit of youth.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnbhwmnPujhI1JEqIy6qSkUM5CHa8RXVVnQ&s",
      icon: Star
      
    },
    {
      title: "What We Stand For",
      content: "At Alkemy, we aim to create a platform where students can showcase their talents, push boundaries, and foster connections. Whether you're a performer, innovator, athlete, or spectator, Alkemy offers something unique for everyone.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
      icon: Lightbulb
    }
  ];

  const experiences = [
    {
      icon: Star,
      title: "Cultural Performances",
      description: "Dive into electrifying cultural performances that showcase diverse talents"
    },
    {
      icon: Gamepad,
      title: "Esports Tournaments",
      description: "Compete in epic gaming battles and prove your digital prowess"
    },
    {
      icon: Lightbulb,
      title: "Technical Challenges",
      description: "Experience cutting-edge technical challenges that push boundaries"
    },
    {
      icon: Trophy,
      title: "Sports Events",
      description: "Participate in thrilling sports competitions for every skill level"
    },
    
  ];

  return (
    <div className="min-h-screen bg-[#2F2F2F] pt-20 pb-20 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Welcome Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/assets/ALKEMY WEB Logo.jpg"
            alt="Alkemy Logo"
            className="w-72 h-48 mx-auto mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-5xl md:text-6xl font-medieval text-[#F3CC9F] mb-6">
            About Alkemy
          </h1>
        </motion.div>

        {/* Three Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl border-2 border-[#6A8D73] hover:border-[#BF5745] 
                  transition-all duration-300 group h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${card.image}')`,
                      filter: "brightness(0.2)"
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="relative bg-[#1E3231]/15 backdrop-blur-[2px] p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-[#BF5745] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#F3CC9F]" />
                    </div>
                    <h2 className="text-2xl font-medieval text-[#F3CC9F]">{card.title}</h2>
                  </div>
                  <p className="text-[#F3CC9F]/90 leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Alkemy */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medieval text-[#F3CC9F] mb-8 text-center">Why Choose Alkemy?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#1E3231] p-6 rounded-xl border-2 border-[#6A8D73] hover:border-[#BF5745] 
                    transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex p-3 rounded-full bg-[#2F2F2F] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-[#BF5745]" />
                  </div>
                  <h3 className="text-xl font-medieval text-[#F3CC9F] mb-2">{item.title}</h3>
                  <p className="text-[#F3CC9F]/70">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Colleges Section */}
        <CollegesSection />

        {/* Join Now Section */}
        <motion.div
          className="text-center bg-[#1E3231] p-8 rounded-xl border-2 border-[#6A8D73] hover:border-[#BF5745] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medieval text-[#F3CC9F] mb-6">Join the Journey</h2>
          <p className="text-[#F3CC9F]/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're here to perform, compete, or simply immerse yourself in the electrifying energy, 
            Alkemy Fest is where memories are made, and dreams come alive.
          </p>
          <button 
            onClick={() => navigate('/events')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#BF5745] text-[#F3CC9F] rounded-lg
              hover:bg-[#F3CC9F] hover:text-[#2F2F2F] transition-all duration-300 group"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;