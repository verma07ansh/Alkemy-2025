import React from 'react';
import { SubEvent } from '../../types/timeline';
import { MapPin, Clock } from 'lucide-react';

interface SubEventListProps {
  events: SubEvent[];
}

export function SubEventList({ events }: SubEventListProps) {
  return (
    <div className="mt-6 space-y-4">
      {events.map((event, index) => (
        <div 
          key={index} 
          className="border-l-2 border-[#6A8D73] pl-4 py-3 hover:bg-[#2F2F2F]/30 rounded-r-lg transition-colors"
        >
          <div className="flex items-center gap-2 text-[#F3CC9F] font-semibold mb-1">
            <Clock className="w-5 h-5" />
            <span className="text-base md:text-lg">{event.time}</span>
          </div>
          <div className="text-[#F3CC9F] text-xl md:text-2xl font-medieval mb-1">{event.title}</div>
          <div className="text-[#6A8D73] text-base md:text-lg mb-2">{event.description}</div>
          <div className="flex items-center gap-2 text-[#BF5745] text-base">
            <MapPin className="w-5 h-5" />
            <span>{event.venue}</span>
          </div>
        </div>
      ))}
    </div>
  );
}