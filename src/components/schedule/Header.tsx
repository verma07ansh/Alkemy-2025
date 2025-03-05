import React from 'react';
import { Scroll } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-16 animate-fadeIn relative mt-16 md:mt-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BF5745] to-transparent" />
      <div className="inline-block p-3 rounded-full bg-gradient-to-br from-[#BF5745] to-[#8B3D31] mb-6 mt-8 shadow-xl">
        <Scroll className="w-10 h-10 text-[#F3CC9F]" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold text-[#F3CC9F] mb-6 font-medieval">
        Alkemy 2K25 Timeline
      </h1>
      <p className="text-[#6A8D73] text-xl font-medieval max-w-2xl mx-auto leading-relaxed">
        Journey through nine days of medieval splendor, where ancient traditions meet modern celebrations
      </p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#BF5745] to-transparent" />
    </div>
  );
}