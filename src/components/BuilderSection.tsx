import React from 'react';
import { builders } from '../data/builderData';
import BuilderCard from './builders/BuilderCard';
import BuilderHeader from './builders/BuilderHeader';
import CustomSlider from './shared/CustomSlider';

const BuilderSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#FFF5EB]">
      <div className="max-w-7xl mx-auto">
        <BuilderHeader />
        <CustomSlider>
          {builders.map((builder, index) => (
            <div key={index} className="px-2">
              <BuilderCard {...builder} />
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};
export default BuilderSection;