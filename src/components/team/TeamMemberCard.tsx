import React from 'react';

interface StudentCouncilCardProps {
  name: string;
  role: string;
  class: string;
  image: string;
}

const StudentCouncilCard: React.FC<StudentCouncilCardProps> = ({ 
  name, 
  role, 
  class: memberClass, 
  image
}) => {
  return (
    <div className="flex flex-col items-center text-center group max-w-[280px] mx-auto">
      <div className="relative mb-4">
        <div className="w-full h-full bg-[#BF5745] rounded-2xl border-2 border-[#6A8D73]/30 group-hover:border-[#BF5745] transition-all duration-300">
          <div className="w-full h-full overflow-hidden bg-[#F3CC9F] p-1 rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl aspect-square"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-medieval text-[#F3CC9F] mb-1">{name}</h3>
        <p className="text-[#BF5745] font-medieval text-lg mb-1">{role}</p>
        <p className="text-[#6A8D73] font-medieval text-sm">{memberClass}</p>
      </div>
    </div>
  );
}

export default StudentCouncilCard;