import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CustomSliderProps {
  children: React.ReactNode;
}

const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick?: () => void }) => {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 
                 w-10 h-10 flex items-center justify-center
                 text-[#BF5745] hover:text-[#a94b3b]
                 transition-colors duration-200
                 ${direction === 'prev' ? '-left-12' : '-right-12'}`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

const SliderProgress = ({ currentSlide, totalSlides }: { currentSlide: number; totalSlides: number }) => {
  // Always show 3 steps for 3 or more slides
  const stepsToShow = totalSlides > 3 ? 3 : totalSlides;
  
  // Calculate which step should be active based on the current slide
  const getStepState = (step: number) => {
    if (totalSlides <= 3) {
      return currentSlide === step ? 'active' : 'inactive';
    }

    // For more than 3 slides, calculate the progress range for each step
    const rangeSize = totalSlides / 3;
    const currentRange = Math.floor(currentSlide / rangeSize);
    
    // Ensure the last step is active for the final slides
    if (currentSlide >= totalSlides - rangeSize) {
      return step === 2 ? 'active' : step < 2 ? 'completed' : 'inactive';
    }
    
    // Normal progression
    if (currentRange === step) return 'active';
    if (currentRange > step) return 'completed';
    return 'inactive';
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      {Array.from({ length: stepsToShow }).map((_, step) => (
        <div
          key={step}
          className={`h-1 w-16 rounded-full transition-all duration-500 ease-out
            ${getStepState(step) === 'active' 
              ? 'bg-[#BF5745] scale-110' 
              : getStepState(step) === 'completed'
                ? 'bg-[#BF5745]/60'
                : 'bg-[#BF5745]/20'
            }`}
        />
      ))}
    </div>
  );
};

export default function CustomSlider({ children }: CustomSliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const childrenCount = React.Children.count(children);

  const getSlideCount = () => {
    if (childrenCount === 1) return 1;
    if (childrenCount === 2) return 2;
    return 3;
  };

  const settings = {
    dots: false,
    infinite: childrenCount > 1,
    speed: 500,
    slidesToShow: getSlideCount(),
    slidesToScroll: 1,
    autoplay: childrenCount > 1,
    autoplaySpeed: 4000,
    arrows: childrenCount > 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(2, childrenCount),
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ]
  };

  if (childrenCount === 1) {
    return (
      <div className="relative max-w-[95%] xl:max-w-[85%] mx-auto px-8">
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-[95%] xl:max-w-[85%] mx-auto px-8">
      <Slider {...settings}>{children}</Slider>
      {childrenCount > 1 && (
        <SliderProgress currentSlide={currentSlide} totalSlides={childrenCount} />
      )}
    </div>
  );
}