import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface StatProps {
  value: string;
  label: string;
}

interface EventCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  stats: StatProps[];
  categoryId: string;
}

const EventCategory: React.FC<EventCategoryProps> = ({ title, description, icon: Icon, image, stats, categoryId }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/events?category=${categoryId}`);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 h-[500px]">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3231] via-[#1E3231]/90 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
      </div>
      
      <div className="relative p-8 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#BF5745] rounded-xl group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-[#F3CC9F]" />
          </div>
          <h3 className="text-2xl font-bold text-[#F3CC9F] group-hover:text-white transition-colors">{title}</h3>
        </div>
        
        <p className="text-[#F3CC9F]/90 mb-8 leading-relaxed group-hover:text-white/90 transition-colors line-clamp-2">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-auto mb-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#2F2F2F]/50 backdrop-blur-sm p-4 rounded-xl border border-[#F3CC9F]/10 group-hover:border-[#BF5745]/30 transition-all"
            >
              <div className="text-2xl font-bold text-[#BF5745] group-hover:text-[#F3CC9F] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-[#F3CC9F]/80 group-hover:text-white/80 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleExplore}
          className="w-full py-4 px-6 bg-[#BF5745] text-[#F3CC9F] rounded-xl 
            group-hover:bg-[#F3CC9F] group-hover:text-[#2F2F2F]
            transition-all duration-300 transform
            border border-transparent group-hover:border-[#BF5745]
            flex items-center justify-center gap-2"
        >
          <span>Explore Events</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </div>
  );
};

export default EventCategory;