import React from 'react';
import type { Builder } from './builderData';

const BuilderCard: React.FC<Builder> = ({ name, role, class: builderClass, image, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center text-center group max-w-[280px] mx-auto">
      <div className="relative mb-4">
        <div className="w-full h-full bg-[#2F2F2F] rounded-2xl border-2 border-[#6A8D73]">
          <div className="w-full h-full overflow-hidden bg-[#FFF5EB] p-1 rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl aspect-square"
            />
          </div>
        </div>
        
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#6A8D73] p-1 transform transition-transform group-hover:rotate-12 rounded-xl">
          <div className="w-full h-full bg-[#FFF5EB] flex items-center justify-center rounded-lg">
            <Icon className="w-6 h-6 text-[#6A8D73]" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-medieval text-[#2F2F2F] mb-1">{name}</h3>
        <p className="text-[#BF5745] font-medieval text-lg mb-1">{role}</p>
        <p className="text-[#6A8D73] font-medieval text-sm">{builderClass}</p>
      </div>
    </div>
  );
}
export default BuilderCard;