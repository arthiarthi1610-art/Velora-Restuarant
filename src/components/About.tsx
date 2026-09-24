import React from 'react';
import { Leaf, Flame, Sparkles, Award, Clock, Users, ChefHat } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/restaurantData';

export const About: React.FC = () => {
  const highlightIcons = {
    Leaf: Leaf,
    Flame: Flame,
    Sparkles: Sparkles,
    Award: Award,
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0F3327]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3327]/8 text-[#0F3327] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <span>Our Philosophy</span>
          </div>
          <h2
            id="about-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3327] tracking-tight mb-6"
          >
            Where Indian Culinary Heritage Meets Modern Artistry
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#526059] leading-relaxed">
            VELORA was born from an unwavering passion to celebrate the majestic tapestry of
            subcontinental spices, royal Awadhi dum techniques, and coastal aromas—reimagined
            through the refined lens of contemporary culinary design.
          </p>
        </div>

        {/* Narrative Grid: Story + Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Storytelling Content */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A2420]">
              A Dining Sanctuary Crafted for the Senses
            </h3>
            <p className="text-[#526059] leading-relaxed text-base">
              At VELORA, every recipe tells a story of heritage and patient dedication. We reject
              shortcuts in favor of slow-braised gravies, overnight marinations in earthen bowls,
              and stone-ground masalas prepared each morning.
            </p>
            <p className="text-[#526059] leading-relaxed text-base">
              Whether you are sharing our legendary sealed-pot Biryani, savoring the velvety depth
              of slow-simmered Butter Chicken, or discovering artisanal dessert creations, our
              culinary brigade ensures every visit is memorable.
            </p>

            {/* Quote / Highlight Box */}
            <div className="p-6 rounded-2xl bg-[#F4EFEB] border-l-4 border-[#D4AF37] text-[#1A2420] italic font-serif text-lg leading-relaxed shadow-sm">
              “Dining at VELORA is not merely having a meal; it is embarking on an aromatic journey
              where time pauses and memories are created around the table.”
              <div className="not-italic font-sans text-xs uppercase tracking-wider text-[#0F3327] font-semibold mt-3">
                — Chef Vikram Singhania, Executive Culinary Director
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8E0D5]">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3327]">100%</div>
                <div className="text-xs text-[#526059] font-medium">Fresh Daily Produce</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3327]">48+</div>
                <div className="text-xs text-[#526059] font-medium">Handcrafted Spices</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3327]">6-Hour</div>
                <div className="text-xs text-[#526059] font-medium">Slow Dum Cook</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Layered Image Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="VELORA Dining Hall & Atmosphere"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-[#E5C365] font-semibold">
                    The Ambiance
                  </div>
                  <div className="font-serif text-xl font-bold">
                    Designed for memorable conversations
                  </div>
                </div>
              </div>

              {/* Floating Chef Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#E8E0D5] flex items-center gap-3.5 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-[#0F3327] text-[#D4AF37] flex items-center justify-center shrink-0">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#526059] font-medium">
                    Master Culinary Brigade
                  </div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#0F3327]">
                    Traditional Dum Artisans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Highlights */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3327]">
              The Four Pillars of VELORA
            </h3>
            <p className="text-sm text-[#526059] mt-2">
              Every detail is calibrated to deliver an extraordinary dining encounter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ABOUT_HIGHLIGHTS.map((item, index) => {
              const IconComponent = highlightIcons[item.icon as keyof typeof highlightIcons] || Leaf;
              return (
                <div
                  key={index}
                  id={`about-highlight-card-${index}`}
                  className="group bg-white p-7 rounded-2xl border border-[#E8E0D5] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0F3327]/8 group-hover:bg-[#0F3327] text-[#0F3327] group-hover:text-[#D4AF37] flex items-center justify-center transition-all duration-300 mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#1A2420] mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#526059] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F4EFEB] flex items-center text-xs font-semibold text-[#0F3327] group-hover:text-[#C59B27] transition-colors">
                    <span>Guaranteed Excellence</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
