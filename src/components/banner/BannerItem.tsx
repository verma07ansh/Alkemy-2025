import React from 'react';
import { PiCastleTurretFill } from "react-icons/pi";

interface BannerItemProps {
  text: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-10">
      <span className="font-bold text-[80px] leading-[124px] whitespace-nowrap tracking-[0.2em]">{text}</span>
      <PiCastleTurretFill className="w-[80px] h-[80px]" />
    </div>
  );
};

export default BannerItem;