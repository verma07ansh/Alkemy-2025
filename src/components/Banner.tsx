import React from 'react';
import BannerItem from './banner/BannerItem';

const Banner: React.FC = () => {
  const items = ['HONOR', 'QUESTS', 'CLAN', 'BATTLES', 'ORDER'];
  
  return (
    <div className="bg-[#2F2F2F] h-[156px] border-y-2 border-[#6A8D73] relative overflow-hidden flex items-center">
      <div className="banner-scroll">
        <div className="flex text-[#F3CC9F] whitespace-nowrap space-x-10">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <BannerItem key={`item-${index}`} text={item} />
          ))}
        </div>
        <div className="flex text-[#F3CC9F] whitespace-nowrap space-x-10">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <BannerItem key={`duplicate-${index}`} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;