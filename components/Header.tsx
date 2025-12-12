import React from 'react';
import { ViewMode } from '../types';
import { Briefcase, Coffee } from 'lucide-react';

interface HeaderProps {
  viewMode: ViewMode;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ viewMode, onToggle }) => {
  const isPro = viewMode === ViewMode.PROFESSIONAL;
  const activeColor = isPro ? 'text-persian-red' : 'text-plant-green';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b shadow-sm overflow-hidden ${
        isPro 
          ? 'bg-paper-cream/95 backdrop-blur-sm border-gray-100' 
          : 'bg-white border-plant-green/10'
      }`}
    >
      {/* Floral Background Layer (Personal Mode Only) */}
      {!isPro && (
        <div 
          className="absolute inset-0 z-0 opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1558280417-3e284f18f343?q=80&w=2000&auto=format&fit=crop")',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        />
      )}

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center relative z-10">
        
        {/* Logo / Name */}
        <div className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 bg-white/80 px-4 py-1 rounded-full backdrop-blur-md shadow-sm ${activeColor}`}>
            ALEX.DEV
        </div>

        {/* Navigation - Only for Professional View */}
        <nav className="hidden md:flex space-x-8">
            {isPro && (
                <>
                    {['About', 'Projects', 'Papers'].map((item) => (
                        <button 
                            key={item} 
                            onClick={() => scrollTo(item.toLowerCase())}
                            className="text-sm font-sans uppercase tracking-widest hover:text-persian-red transition-colors text-gray-600"
                        >
                            {item}
                        </button>
                    ))}
                </>
            )}
        </nav>

        {/* Duality Toggle */}
        <div className="flex items-center space-x-3 bg-white/80 px-3 py-2 rounded-full backdrop-blur-md shadow-sm">
             <span className={`text-xs font-bold uppercase hidden sm:block ${isPro ? 'text-persian-red' : 'text-gray-400'}`}>9-5</span>
             
             <button 
                onClick={onToggle}
                className={`relative w-20 h-10 rounded-full border-2 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-accent ${isPro ? 'bg-paper-cream border-persian-red' : 'bg-paper-cream border-plant-green'}`}
                aria-label="Toggle View Mode"
             >
                {/* The Sliding Pill */}
                <div className={`absolute top-1 bottom-1 w-8 rounded-full shadow-md transition-all duration-500 flex items-center justify-center ${isPro ? 'left-1 bg-persian-red' : 'left-10 bg-plant-green'}`}>
                    {isPro ? <Briefcase size={14} className="text-white" /> : <Coffee size={14} className="text-white" />}
                </div>
             </button>

             <span className={`text-xs font-bold uppercase hidden sm:block ${!isPro ? 'text-plant-green' : 'text-gray-400'}`}>5-9</span>
        </div>
      </div>
    </header>
  );
};

export default Header;