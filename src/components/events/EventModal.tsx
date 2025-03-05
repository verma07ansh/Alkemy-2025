import React, { useEffect, useRef } from 'react';
import { X, Trophy, Users, Coins, Phone } from 'lucide-react';
import type { Event } from '../../data/eventsData';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 touch-none">
      <div ref={modalRef} className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1E3231] rounded-xl shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center bg-[#BF5745] rounded-full text-[#F3CC9F] hover:bg-[#F3CC9F] hover:text-[#BF5745] transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-medieval text-[#F3CC9F] mb-4">{event.title}</h2>

          <div className="flex flex-wrap gap-4 mb-6">
            {event.prizePool && (
              <div className="flex items-center gap-2 bg-[#2F2F2F] px-4 py-2 rounded-lg">
                <Trophy className="w-5 h-5 text-[#BF5745]" />
                <span className="text-[#F3CC9F]">Prize: {event.prizePool}</span>
              </div>
            )}
            {event.teamSize && (
              <div className="flex items-center gap-2 bg-[#2F2F2F] px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-[#BF5745]" />
                <span className="text-[#F3CC9F]">Category: {event.teamSize}</span>
              </div>
            )}
            <div className="flex items-center gap-2 bg-[#2F2F2F] px-4 py-2 rounded-lg">
              <Coins className="w-5 h-5 text-[#BF5745]" />
              <span className="text-[#F3CC9F]">Fee: {event.fees}</span>
            </div>
            {event.coordinator && (
              <div className="flex items-center gap-2 bg-[#2F2F2F] px-4 py-2 rounded-lg">
                <Phone className="w-5 h-5 text-[#BF5745]" />
                <span className="text-[#F3CC9F]">
                  Coordinator: {event.coordinator.name} ({event.coordinator.phone})
                </span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medieval text-[#BF5745] mb-3">Rules & Regulations</h3>
            <ul className="space-y-2">
              {event.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2 text-[#F3CC9F]/90">
                  <span className="text-[#BF5745] mt-1">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={event.formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-[#BF5745] text-[#F3CC9F] rounded-lg
              hover:bg-[#F3CC9F] hover:text-[#2F2F2F] transition-colors duration-300
              font-medieval tracking-wide text-center"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventModal;