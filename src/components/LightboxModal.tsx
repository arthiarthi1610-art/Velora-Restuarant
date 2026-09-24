import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;

      const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
        onNavigate(GALLERY_ITEMS[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    onNavigate(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onNavigate(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Content Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between text-white/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#E5C365] bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              {item.category}
            </span>
            <span className="text-xs text-white/50">
              {currentIndex + 1} of {GALLERY_ITEMS.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image with Nav Arrows */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="w-full mt-4 text-center text-white">
          <h4 className="font-serif text-xl font-bold text-white">{item.title}</h4>
          <p className="text-sm text-white/70 max-w-xl mx-auto mt-1 font-sans">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
