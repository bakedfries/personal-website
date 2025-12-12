import React, { useState } from 'react';
import Header from './components/Header';
import ProfessionalView from './components/ProfessionalView';
import PersonalView from './components/PersonalView';
import { CatAnimation } from './components/Decorations';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.PROFESSIONAL);
  
  // Toggle handler
  const toggleView = () => {
    setViewMode((prev) => 
      prev === ViewMode.PROFESSIONAL ? ViewMode.PERSONAL : ViewMode.PROFESSIONAL
    );
    // Reset scroll when switching "worlds"
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine theme color for decorations
  const themeColor = viewMode === ViewMode.PROFESSIONAL ? '#7c1d1d' : '#2e5c3e';

  return (
    <div className={`min-h-screen transition-colors duration-700 ${viewMode === ViewMode.PROFESSIONAL ? 'bg-paper-cream' : 'bg-[#f4f7f5]'}`}>
      
      <Header viewMode={viewMode} onToggle={toggleView} />

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-6 pt-12 pb-32 relative z-10 min-h-screen">
        {viewMode === ViewMode.PROFESSIONAL ? <ProfessionalView /> : <PersonalView />}
      </main>

      {/* Footer / Cat Area */}
      <footer className="w-full text-center py-6 text-xs font-sans text-gray-400 relative z-20">
        <p>© {new Date().getFullYear()} Alex. Crafted with React & Tailwind.</p>
      </footer>

      {/* Walking Cat Animation */}
      <CatAnimation color={themeColor} />
    </div>
  );
};

export default App;
