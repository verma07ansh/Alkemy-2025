import React from 'react';

export function TimelineDivider() {
  return (
    <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full">
      <div className="w-1 h-full bg-gradient-to-b from-[#BF5745] via-[#6A8D73] to-[#BF5745]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#BF5745]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#BF5745]" />
    </div>
  );
}