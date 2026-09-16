import { useEffect, useRef, useState } from 'react';

export const InteractiveCat = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isWaving, setIsWaving] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerWave = () => {
    if (isWaving) return;
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 3000);
  };

  // Calculate eye pupil translation
  let pupilX = 0;
  let pupilY = 0;
  if (catRef.current) {
    const rect = catRef.current.getBoundingClientRect();
    const catCenterX = rect.left + rect.width / 2;
    const catCenterY = rect.top + rect.height / 2;
    
    const angle = Math.atan2(mousePos.y - catCenterY, mousePos.x - catCenterX);
    const distance = Math.min(6, Math.hypot(mousePos.x - catCenterX, mousePos.y - catCenterY) / 50);
    
    pupilX = Math.cos(angle) * distance;
    pupilY = Math.sin(angle) * distance;
  }

  return (
    <div 
      ref={catRef}
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
      onMouseEnter={triggerWave}
      onClick={triggerWave}
    >
      {/* Speech Bubble */}
      <div 
        className={`absolute top-0 right-1/2 -translate-y-full mr-4 bg-amber-400 text-neutral-900 font-bold px-4 py-2 rounded-2xl rounded-br-none shadow-lg transform transition-all duration-300 ${isWaving ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'}`}
      >
        Hello 👋
      </div>

      {/* Cat SVG */}
      <svg width="250" height="300" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse-slow">
        
        {/* Tail (Wagging) */}
        <g className="origin-bottom-left animate-wag">
          <path d="M140 200 C180 200, 190 140, 170 120 C160 110, 140 120, 150 140 C160 160, 150 180, 140 180" stroke="#1c1f26" strokeWidth="16" strokeLinecap="round" fill="none" />
        </g>

        {/* Body */}
        <path d="M50 240 C50 130, 150 130, 150 240 Z" fill="#1c1f26" />
        
        {/* Head */}
        <ellipse cx="100" cy="110" rx="60" ry="50" fill="#1c1f26" />
        
        {/* Left Ear */}
        <path d="M50 80 L35 25 L85 65 Z" fill="#1c1f26" />
        <path d="M53 75 L43 38 L77 64 Z" fill="#2a2e38" />
        
        {/* Right Ear */}
        <path d="M150 80 L165 25 L115 65 Z" fill="#1c1f26" />
        <path d="M147 75 L157 38 L123 64 Z" fill="#2a2e38" />

        {/* Left Eye */}
        <ellipse cx="75" cy="110" rx="14" ry="18" fill="#ffffff" />
        {/* Right Eye */}
        <ellipse cx="125" cy="110" rx="14" ry="18" fill="#ffffff" />

        {/* Pupils (Interactive) */}
        <g style={{ transform: `translate(${pupilX}px, ${pupilY}px)` }}>
          <ellipse cx="75" cy="110" rx="6" ry="10" fill="#0B0C10" />
          <ellipse cx="125" cy="110" rx="6" ry="10" fill="#0B0C10" />
        </g>

        {/* Nose */}
        <path d="M95 125 L105 125 L100 132 Z" fill="#ffffff" opacity="0.8" />
        
        {/* Mouth */}
        <path d="M90 135 Q100 145 110 135" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        
        {/* Waving Paw (Conditional) */}
        <g className={`origin-bottom-right transition-transform duration-300 ${isWaving ? 'animate-wave opacity-100' : 'opacity-0 scale-75'}`}>
          <path d="M40 180 C20 180, 10 140, 20 120 C30 100, 50 110, 45 130 C40 150, 40 170, 50 170" fill="#2a2e38" stroke="#1c1f26" strokeWidth="12" strokeLinecap="round" />
        </g>
      </svg>
      
      <style>{`
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.02) translateY(-2px); }
        }
        .animate-wag {
          animation: wag 3s ease-in-out infinite;
          transform-origin: 140px 180px;
        }
        @keyframes wag {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
          transform-origin: 50px 180px;
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-25deg); }
        }
      `}</style>
    </div>
  );
};
