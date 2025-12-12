import React from 'react';
import { Music, BookOpen, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

const PersonalView: React.FC = () => {
  // Prepare mixed content for the masonry grid
  const mixedGridContent = [
    { type: 'WIDGET_MUSIC', id: 'widget-music' },
    { type: 'WIDGET_BOOK', id: 'widget-book' },
    ...GALLERY_ITEMS,
    // Add a few more duplicates to ensure high density
    ...GALLERY_ITEMS.slice(0, 6).map(item => ({ ...item, id: item.id + '-dup' }))
  ];

  return (
    <div className="text-plant-green animate-fade-in relative z-10">
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative z-20">
        {/* Main Content Area (Left) - Mixed Grid */}
        <div className="xl:col-span-9 flex flex-col gap-8">
            
            {/* Header Title Section */}
            <section id="personal-header" className="pt-24 pb-6 text-center">
                <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-plant-green drop-shadow-sm mix-blend-multiply tracking-tight bg-paper-cream/60 backdrop-blur-sm inline-block px-12 py-6 rounded-full border border-plant-green/10">
                The 5 to 9
                </h1>
            </section>

            {/* Unified Masonry Grid - Increased columns for smaller tiles */}
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 px-2">
                {mixedGridContent.map((item, index) => {
                    // Render Music Widget
                    if (item.type === 'WIDGET_MUSIC') {
                        return (
                             <div key={item.id} className="break-inside-avoid bg-[#1DB954]/10 p-4 rounded-xl border border-[#1DB954]/30 backdrop-blur-md bg-white/80 shadow-md mb-4 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-gray-300 rounded shadow-sm relative overflow-hidden mb-2">
                                    <img src="https://picsum.photos/200?random=10" alt="Album" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-[10px] font-bold text-plant-green uppercase tracking-widest mb-1">On Rotation</h4>
                                <p className="text-xs font-serif font-bold text-gray-800">Blue in Green</p>
                                <p className="text-[10px] text-gray-600 font-sans">Miles Davis</p>
                             </div>
                        );
                    }
                    // Render Book Widget
                    if (item.type === 'WIDGET_BOOK') {
                        return (
                             <div key={item.id} className="break-inside-avoid bg-[#f4ecd8] p-4 rounded-xl border border-amber-900/10 backdrop-blur-md bg-white/80 shadow-md mb-4 flex flex-col items-center text-center">
                                <div className="w-14 h-20 bg-gray-300 rounded shadow-sm overflow-hidden mb-2">
                                    <img src="https://picsum.photos/200/300?random=11" alt="Book" className="w-full h-full object-cover" />
                                </div>
                                <h4 className="text-[10px] font-bold text-amber-900 uppercase tracking-widest mb-1">Current Read</h4>
                                <p className="text-xs font-serif font-bold text-gray-800">Kafka on the Shore</p>
                                <p className="text-[10px] text-gray-600 font-sans">Murakami</p>
                             </div>
                        );
                    }

                    // Render Standard Gallery Item
                    const galleryItem = item as any;
                    return (
                        <div 
                        key={`${galleryItem.id}-${index}`} 
                        className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white/90 border border-plant-green/10 mb-4"
                        >
                        <div className="relative overflow-hidden">
                            <img 
                            src={galleryItem.imageUrl} 
                            alt={galleryItem.title} 
                            className="w-full object-cover"
                            />
                            
                            {/* Compact Overlay on Hover */}
                            <div className="absolute inset-0 bg-plant-green/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2 text-center text-paper-cream">
                                {galleryItem.type === 'MUSIC' && <Music className="w-5 h-5 mb-1 text-gold-accent" />}
                                {galleryItem.type === 'BOOK' && <BookOpen className="w-5 h-5 mb-1 text-gold-accent" />}
                                {galleryItem.type === 'PHOTO' && <Camera className="w-5 h-5 mb-1 text-gold-accent" />}
                                
                                <h4 className="font-serif text-sm leading-tight mb-1">{galleryItem.title}</h4>
                            </div>
                        </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Right Column - Vertical YouTube Playlist (Static) */}
        <div className="hidden xl:block xl:col-span-3 pt-48">
             <div className="space-y-4">
                <div className="text-center mb-4">
                     <span className="inline-block px-3 py-1 bg-plant-green/90 backdrop-blur-sm text-paper-cream text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                        Vibe Check
                     </span>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-plant-green/20 bg-black">
                    <iframe 
                        width="100%" 
                        height="600" 
                        src="https://www.youtube.com/embed/videoseries?list=PLofht4PTcKYnaH8w5olJCI-wUVxuoK0YV" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-[600px] object-cover opacity-90 hover:opacity-100 transition-opacity"
                    ></iframe>
                </div>
                <div className="p-4 bg-white/60 backdrop-blur-md rounded-xl text-xs text-center font-serif italic text-plant-green border border-plant-green/10">
                    "Music is the silence between the notes."
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalView;
