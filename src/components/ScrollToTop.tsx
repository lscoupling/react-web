import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0, make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-[30px] right-[30px] z-[100] transition-opacity duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="w-[50px] h-[50px] rounded-full bg-[#D4A73C] text-white flex items-center justify-center hover:bg-[#B8932F] transition-all duration-300 group border-none outline-none focus:outline-none"
        aria-label="回到頂端"
      >
        <ChevronUp size={28} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};
