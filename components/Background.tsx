
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#030303] overflow-hidden">
      {/* 
        Background Strategy: 
        Replaced colorful orbs with subtle, deep atmospheric glows.
        Maintains the "Tech/Alchemist" vibe but much darker, utilizing deep slate and faint amber
        to create depth without being overly colorful.
      */}

      {/* Subtle Ambient Glow 1: Dark Amber (Warmth) - Top Left */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#451a03] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.2] animate-blob"></div>
      
      {/* Subtle Ambient Glow 2: Deep Slate/Blue (Cold/Tech) - Bottom Right */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#0f172a] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.25] animate-blob animation-delay-4000"></div>
      
      {/* Moving Highlight: Faint Gold (Focus) - Center/Floating */}
      <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-[#b45309] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.08] animate-blob animation-delay-2000"></div>

      {/* Tech Grid Overlay - Kept as it adds structure but refined opacity */}
      <div 
        className="absolute inset-0 opacity-[0.08] z-[1]"
        style={{
            backgroundImage: `radial-gradient(circle, #444 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)'
        }}
      ></div>
      
      {/* Global Noise Texture - Essential for the cinematic 'film' look */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-[1]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
};

export default Background;
