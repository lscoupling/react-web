import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  'https://picsum.photos/id/1/1920/480',
  'https://picsum.photos/id/2/1920/480',
  'https://picsum.photos/id/3/1920/480'
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[420px] md:h-[480px] overflow-hidden group mt-[120px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Control Arrows */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,0.3)] text-white hover:bg-[rgba(0,0,0,0.5)] transition-all rounded-sm z-10"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,0.3)] text-white hover:bg-[rgba(0,0,0,0.5)] transition-all rounded-sm z-10"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`w-3 h-3 rounded-full border border-white cursor-pointer ${index === current ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};
