import React, { useEffect, useState } from 'react';

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300"
    >
      <div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#24b3a9]/15 to-[#58b03b]/15 blur-3xl transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
        }}
      />
    </div>
  );
}