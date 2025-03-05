import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Gamepad, Music, Trophy, Swords } from 'lucide-react';
import EventCard from '../components/events/EventCard';
import { events } from '../data/eventsData';
import { useSearchParams } from 'react-router-dom';

type EventCategory = 'all' | 'tech' | 'esports' | 'cultural' | 'sports';

const EventsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<EventCategory>('all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['tech', 'esports', 'cultural', 'sports'].includes(category)) {
      setActiveCategory(category as EventCategory);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: EventCategory) => {
    setActiveCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const filteredEvents = events.filter(event => {
    const searchText = searchQuery.toLowerCase();
    const matchesSearch = 
      event.title.toLowerCase().includes(searchText) ||
      event.description.toLowerCase().includes(searchText);
    const matchesCategory = activeCategory === 'all' || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#2F2F2F] py-20 px-4 relative">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-20 h-20 bg-[#BF5745] rounded-full mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Swords className="w-10 h-10 text-[#F3CC9F]" />
          </motion.div>
          <h1 className="text-5xl font-medieval text-[#F3CC9F] mb-4">Royal Events</h1>
          <p className="text-xl text-[#F3CC9F]/80 max-w-2xl mx-auto">
            Choose thy challenge wisely, brave warrior. Glory awaits those who dare to compete!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A8D73] w-4 h-4" />
            <input
              type="text"
              placeholder="Search events by title or description..."
              className="w-full bg-[#1E3231] border-2 border-[#6A8D73] rounded-lg py-1.5 px-9
                       text-[#F3CC9F] placeholder-[#6A8D73] text-sm
                       focus:outline-none focus:border-[#BF5745] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-2 min-w-min pb-2">
              {[
                { id: 'all', label: 'All', icon: Trophy },
                { id: 'tech', label: 'Tech', icon: Code },
                { id: 'esports', label: 'E-Sports', icon: Gamepad },
                { id: 'cultural', label: 'Cultural', icon: Music },
                { id: 'sports', label: 'Sports', icon: Trophy },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleCategoryChange(id as EventCategory)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medieval text-base transition-all shrink-0
                    ${activeCategory === id 
                      ? 'bg-[#BF5745] text-[#F3CC9F]' 
                      : 'bg-[#1E3231] text-[#6A8D73] hover:bg-[#BF5745]/20'}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;