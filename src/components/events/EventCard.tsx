import React, { useState } from 'react';
import type { Event } from '../../data/eventsData';
import { Calendar, Clock, MapPin, Globe, Coins, ScrollText, Code, Gamepad, Music, Trophy } from 'lucide-react';
import EventModal from './EventModal';

const categoryConfig = {
  tech: { icon: Code, color: 'bg-blue-500', label: 'Technical' },
  esports: { icon: Gamepad, color: 'bg-purple-500', label: 'E-Sports' },
  cultural: { icon: Music, color: 'bg-pink-500', label: 'Cultural' },
  sports: { icon: Trophy, color: 'bg-green-500', label: 'Sports' }
};

const EventCard: React.FC<Event> = (event) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, date, time, venue, image, fees, mode, category } = event;
  const categoryInfo = categoryConfig[category];

  return (
    <>
      <div className="bg-[#1E3231] rounded-xl overflow-hidden border-2 border-[#6A8D73] group hover:border-[#BF5745] transition-all duration-300 h-[500px] flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E3231] to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full 
            bg-[#1E3231]/90 border border-[#6A8D73] backdrop-blur-sm">
            <categoryInfo.icon className="w-4 h-4 text-[#F3CC9F]" />
            <span className="text-sm font-medieval text-[#F3CC9F]">
              {categoryInfo.label}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-4">
          <h3 className="text-xl font-medieval text-[#F3CC9F] group-hover:text-[#BF5745] transition-colors mb-2">
            {title}
          </h3>
          <p className="text-[#F3CC9F]/70 mb-4 line-clamp-2">{description}</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#6A8D73]">
                <Calendar className="w-4 h-4" />
                <span className="text-[#F3CC9F]">{date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-[#6A8D73]">
                <Clock className="w-4 h-4" />
                <span className="text-[#F3CC9F]">{time}</span>
              </div>
              
              <div className="flex items-center gap-2 text-[#6A8D73]">
                <MapPin className="w-4 h-4" />
                <span className="text-[#F3CC9F]">{venue}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#6A8D73]">
                <Coins className="w-4 h-4" />
                <span className="text-[#F3CC9F]">{fees}</span>
              </div>

              <div className="flex items-center gap-2 text-[#6A8D73]">
                <Globe className="w-4 h-4" />
                <span className="text-[#F3CC9F]">{mode}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-[#BF5745] text-[#F3CC9F] rounded-lg
              hover:bg-[#F3CC9F] hover:text-[#2F2F2F] transition-colors duration-300
              font-medieval tracking-wide"
          >
            <ScrollText className="w-5 h-5" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <EventModal event={event} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default EventCard;