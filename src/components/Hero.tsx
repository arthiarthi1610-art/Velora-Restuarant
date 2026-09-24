import React from 'react';
import { ChevronDown, Calendar, Utensils, Star, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with Atmospheric Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85"
          alt="VELORA Elegant Dining Ambience"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered cinematic gradient: deep green tint + dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082118]/95 via-[#082118]/80 to-[#0F3327]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/70" />
      </div>

      {/* Decorative Subtle Gold Frame Corners */}
      <div className="absolute inset-6 sm:inset-10 border border-[#D4AF37]/25 pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Subtle Crown / Subheading Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#E5C365] text-xs uppercase tracking-[0.2em] font-semibold mb-6 backdrop-blur-sm shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Modern Dining • Rich Indian Flavours</span>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-main-heading"
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-md"
        >
          Taste. Crafted.{' '}
          <span className="italic font-normal text-[#E5C365] block sm:inline">
            Remembered.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl md:text-2xl text-[#FAF8F5]/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          Experience beautifully crafted dishes, fresh ingredients and unforgettable
          flavours at VELORA.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-menu-button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#C29D2A] text-[#082118] font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </button>

          <button
            id="hero-reserve-table-button"
            onClick={onReserveTable}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-[#FAF8F5] border border-white/60 hover:border-white font-semibold text-base transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Accolades & Highlights Bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-12 text-white/80 w-full max-w-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-[#E5C365] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <div className="text-xs sm:text-sm font-medium text-white/90">4.9 / 5 Star Rating</div>
            <div className="text-[11px] text-white/60">Over 1,200+ Diners</div>
          </div>

          <div className="text-center border-x border-white/10 px-2">
            <div className="font-serif text-lg sm:text-xl font-bold text-[#FAF8F5]">Authentic Dum</div>
            <div className="text-xs sm:text-sm text-white/90">Slow-Cooked Daily</div>
            <div className="text-[11px] text-white/60">Heritage Spices</div>
          </div>

          <div className="text-center">
            <div className="font-serif text-lg sm:text-xl font-bold text-[#FAF8F5]">Fine Dining</div>
            <div className="text-xs sm:text-sm text-white/90">Table Service</div>
            <div className="text-[11px] text-white/60">Curated Pairing</div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={onExploreMenu}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 flex flex-col items-center gap-1 z-20 cursor-pointer"
        aria-label="Scroll to discover VELORA"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
