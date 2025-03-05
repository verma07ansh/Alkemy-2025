import React from 'react';
import { TimelineEvent as TimelineEventType } from '../../types/timeline';
import { SubEventList } from './SubEventList';
import { EventCard } from './EventCard';

interface TimelineEventProps extends TimelineEventType {
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export function TimelineEvent({ 
  day, 
  date, 
  title, 
  description, 
  icon: Icon, 
  events,
  dayName,
  index,
  isExpanded,
  onToggle 
}: TimelineEventProps) {
  return (
    <div 
      className={`relative flex items-center mb-8 md:mb-16 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-[#BF5745] to-[#8B3D31] flex items-center justify-center shadow-lg z-10 hover:scale-110 transition-transform">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#F3CC9F]" />
      </div>
      
      <div className={`ml-14 md:ml-0 ${
        index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
      } w-full md:w-[calc(50%-24px)] timeline-card`}>
        <EventCard
          day={day}
          date={date}
          title={title}
          description={description}
          isExpanded={isExpanded}
          onToggle={onToggle}
          dayName={dayName}
        >
          <SubEventList events={events} />
        </EventCard>
      </div>
    </div>
  );
}