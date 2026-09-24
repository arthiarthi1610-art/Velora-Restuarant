import React, { useState } from 'react';
import { Maximize2, Sparkles, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'Interior',
    'Signature Dishes',
    'Biryani',
    'Desserts',
    'Chef Craft',
    'Dining',
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3327]/8 text-[#0F3327] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <span>Visual Journey</span>
          </div>
          <h2
            id="gallery-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3327] tracking-tight mb-4"
          >
            Moments at VELORA
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-[#526059] text-base sm:text-lg">
            Glimpses into our dining sanctuary, precision artisanal kitchen, and the smiling guests
            who make VELORA truly alive.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((filter) => (
            <button
              key={filter}
              id={`gallery-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#0F3327] text-[#FAF8F5] shadow-sm'
                  : 'bg-white text-[#526059] border border-[#E8E0D5] hover:text-[#0F3327] hover:border-[#0F3327]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Modern Masonry/Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#E8E0D5] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8E0D5]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle hover gradient and info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082118]/90 via-[#082118]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#E5C365] bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-white/80 line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hint */}
        <div className="mt-8 text-center text-xs text-[#75827C] flex items-center justify-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Click any image to expand full view</span>
        </div>
      </div>
    </section>
  );
};
