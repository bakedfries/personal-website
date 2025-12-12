import React from 'react';

export const PlantDecoration: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-32 h-32 opacity-20 pointer-events-none ${className}`}
    fill="currentColor"
  >
    <path d="M50 100 Q 50 50 20 20 Q 50 50 80 30 Q 50 60 50 100" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M50 80 Q 30 70 10 50 Q 30 70 50 80" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M50 70 Q 70 60 90 40 Q 70 60 50 70" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="20" cy="20" r="5" fill="currentColor" />
    <circle cx="80" cy="30" r="5" fill="currentColor" />
    <circle cx="10" cy="50" r="4" fill="currentColor" />
    <circle cx="90" cy="40" r="4" fill="currentColor" />
  </svg>
);

export const Leaf: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      style={style}
      fill="currentColor"
    >
      {/* Generic Leaf Shape: Lanceolate/Ovate */}
      <path d="M50 100 C 20 65 0 35 0 20 C 0 5 15 0 50 0 C 85 0 100 5 100 20 C 100 35 80 65 50 100 Z" />
      
      {/* Central Vein */}
      <path d="M50 0 L 50 100" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" fill="none" />
      
      {/* Side Veins */}
      <path d="M50 20 L 10 10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <path d="M50 20 L 90 10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      
      <path d="M50 40 L 5 30" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <path d="M50 40 L 95 30" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      
      <path d="M50 60 L 15 50" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <path d="M50 60 L 85 50" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      
      <path d="M50 80 L 25 75" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <path d="M50 80 L 75 75" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" fill="none" />
    </svg>
  );
};

export const CatAnimation: React.FC<{ color: string }> = ({ color }) => (
  <div className="fixed bottom-0 left-0 w-full overflow-hidden pointer-events-none z-0 h-16">
    <div className="animate-walk absolute bottom-0">
      <svg width="60" height="40" viewBox="0 0 100 80" fill={color} className="opacity-80">
        {/* Abstract minimalistic cat shape */}
        <path d="M20 60 L20 40 L30 30 L40 40 L60 40 L70 30 L80 40 L80 60 L70 60 L70 50 L60 50 L60 60 Z" />
        <circle cx="30" cy="30" r="5" />
        <path d="M80 50 Q 90 20 95 10" stroke={color} strokeWidth="3" fill="none" className="animate-wiggle origin-bottom" />
      </svg>
    </div>
  </div>
);
