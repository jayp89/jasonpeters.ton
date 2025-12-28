
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`
        relative w-full max-w-5xl group
        transform transition-all duration-1000 ease-cubic-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}
        ${className}
      `}
    >
        {/* Glow behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Main Card Content */}
        <div className="relative h-full w-full bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden">
            {/* Top border gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
            
            {/* Subtle noise/texture overlay inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
        </div>
    </div>
  );
};

export default AnimatedCard;
