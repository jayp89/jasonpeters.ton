
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 });

  return (
    <div
      ref={cardRef}
      className={`
        w-full max-w-4xl bg-black/30 backdrop-blur-xl border border-amber-400/20 rounded-2xl 
        shadow-lg shadow-amber-500/5 p-8 md:p-12 
        transform transition-all duration-1000 ease-out
        hover:border-amber-400/50 hover:shadow-amber-500/20
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
