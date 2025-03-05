import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

const sponsors = [
  {
    name: "Redbull",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png",
    size: "w-24 h-16"
  },
  {
    name: "Redbull",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png",
    size: "w-32 h-20"
  },
  {
    name: "Redbull",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png",
    size: "w-28 h-16"
  },
  {
    name: "Redbull",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png",
    size: "w-36 h-24"
  },
  {
    name: "Redbull",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/RedBullEnergyDrink.svg/1200px-RedBullEnergyDrink.svg.png",
    size: "w-32 h-20"
  },
];

const SponsorSection: React.FC = () => {
  return (
    <div className="py-8 px-4 bg-[#2F2F2F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-8"
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
            <Gem className="w-8 h-8 text-[#F3CC9F]" />
          </motion.div>
          <h2 className="text-4xl font-medieval text-[#F3CC9F] mb-4">Our Esteemed Sponsors</h2>
          <p className="text-[#F3CC9F]/80 max-w-2xl mx-auto">
            Join hands with industry leaders who support our vision of fostering talent and innovation
          </p>
        </motion.div>

        <div className="bg-[#2F2F2F] h-[156px] border-2 border-[#6A8D73] relative overflow-hidden flex items-center rounded-2xl">
          <div className="sponsor-scroll absolute flex">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-20 min-w-max">
                {sponsors.map((sponsor, index) => (
                  <div key={`${i}-${index}`} className="flex flex-col items-center justify-center group px-6">
                    <div className={`flex items-center justify-center ${sponsor.size}`}>
                      <img 
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="object-contain transition-transform duration-300 group-hover:scale-110 max-w-full max-h-full"
                      />
                    </div>
                    <span className="font-bold text-2xl whitespace-nowrap tracking-wider mt-2 text-[#F3CC9F] group-hover:text-[#BF5745] transition-colors">
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSection;