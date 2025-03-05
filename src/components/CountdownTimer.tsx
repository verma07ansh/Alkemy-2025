import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  targetTime: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, targetTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const [year, month, day] = targetDate.split('-').map(num => parseInt(num));
      const [hours, minutes] = targetTime.split(':').map(num => parseInt(num));
      
      // Create target date with specific time
      const target = new Date(year, month - 1, day, hours, minutes).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, targetTime]);

  return (
    <div className="inline-flex gap-3 p-2 bg-[#2F2F2F] rounded-lg">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center px-3 py-2">
          <div className="text-3xl font-bold text-[#F3CC9F] min-w-[40px]">{value.toString().padStart(2, '0')}</div>
          <div className="text-xs uppercase text-[#6A8D73] font-medium tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;