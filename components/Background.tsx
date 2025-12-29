
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-[#050505] overflow-hidden">
      {/* 
        Background Strategy: "Deep Void"
        Extremely subtle, almost monochromatic dark atmosphere.
        Reduced opacity significantly to avoid "too colorful" look.
      */}

      {/* Subtle Shadow/Depth 1: Stone/Dark Grey */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#1c1917] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05] animate-blob"></div>
      
      {/* Subtle Shadow/Depth 2: Deep Neutral */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-[#0a0a0a] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] animate-blob animation-delay-4000"></div>
      
      {/* Faint Warmth: Desaturated Brown/Gold (Minimal) */}
      <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-[#451a03] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.03] animate-blob animation-delay-2000"></div>

      {/* Tech Grid Overlay - Very low opacity */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-[1]"
        style={{
            backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      ></div>
      
      {/* Global Noise Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-[1]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
};

export default Background;
