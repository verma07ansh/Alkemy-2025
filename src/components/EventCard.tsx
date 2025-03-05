import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-[#1E3231] rounded-xl overflow-hidden border-2 border-[#6A8D73] group hover:border-[#BF5745] transition-all duration-300">
        {/* Rest of the card content remains the same */}
      </div>
      {isModalOpen && (
        <EventModal event={event} onClose={() => setIsModalOpen(false)} />
      )}
    </motion.div>
  );
};

export default EventCard;