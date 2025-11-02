import React, { useRef, useEffect } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    const resizeCanvas = () => {
      // Use the parent's dimensions for sizing to work with absolute positioning
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    const init = () => {
      resizeCanvas();
      particles = [];
      // Generative & Responsive: The number of particles is calculated based on screen size
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particleColor = 'rgba(0, 152, 234, 0.7)';
      const glowColor = 'rgba(0, 152, 234, 0.5)';
      
      // Particle drawing with glow
      ctx.fillStyle = particleColor;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 8;

      particles.forEach(p => {
        // Subtle Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap particles around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Interconnected Network (Nexus) drawing
      const maxDistance = 120;
      ctx.lineWidth = 0.8; // Increased line width
      ctx.shadowBlur = 6; // Enhanced glow for lines

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Lines are more visible when particles are closer
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(0, 152, 234, ${opacity * 0.9})`; // Increased opacity
            ctx.shadowColor = `rgba(0, 152, 234, ${opacity * 0.7})`; // Increased glow opacity

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Reset shadow for next frame to avoid artifacts
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Background;