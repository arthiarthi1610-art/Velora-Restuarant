import React from 'react';
import { Sparkles, Flame, Clock, Award, ShoppingBag, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface ChefSpecialProps {
  biryaniItem: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  isOrdered: boolean;
}

export const ChefSpecial: React.FC<ChefSpecialProps> = ({
  biryaniItem,
  onAddToCart,
  isOrdered,
}) => {
  return (
    <section id="chef-special" className="py-20 sm:py-28 bg-[#0F3327] text-white relative overflow-hidden">
      {/* Background Gold Dust & Gradient Shimmer */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Traditional Border Motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#123E30] to-[#0A261D] rounded-3xl border border-[#D4AF37]/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Watermark Crest */}
          <div className="absolute top-4 right-6 text-[#D4AF37]/5 font-serif text-8xl font-bold select-none pointer-events-none hidden md:block">
            ROYAL DUM
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Story & Special Features */}
            <div className="lg:col-span-7 space-y-6">
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#E5C365] text-xs uppercase font-bold tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Chef's Signature Masterpiece</span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2
                  id="chef-special-title"
                  className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5] mb-3"
                >
                  Velora Special Biryani
                </h2>
                <div className="flex items-center gap-3 text-[#E5C365]">
                  <div className="w-12 h-0.5 bg-[#D4AF37]" />
                  <span className="font-serif italic text-lg sm:text-xl text-white/90">
                    The Royal Heritage Feast
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                id="chef-special-description"
                className="text-base sm:text-lg text-white/80 leading-relaxed font-sans"
              >
                Prepared in limited batches each dusk: two-year aged Dehradun basmati rice is
                steeped in pure saffron milk, layered with slow-marinated prime cuts, caramelized
                crisp shallots, mint chiffonade, and whole aromatic spices. Each handi is sealed
                with wheat dough and slow-simmered for six hours over live coals to trap every drop
                of royal perfume.
              </p>

              {/* Culinary Accents */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <Flame className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <div className="text-xs uppercase tracking-wider text-white/60 font-medium">Technique</div>
                  <div className="text-sm sm:text-base font-serif font-bold text-white">Dum-Pukht Clay</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <Award className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <div className="text-xs uppercase tracking-wider text-white/60 font-medium">Saffron</div>
                  <div className="text-sm sm:text-base font-serif font-bold text-white">Grade-1 Kashmiri</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <Clock className="w-5 h-5 text-[#D4AF37] mb-2" />
                  <div className="text-xs uppercase tracking-wider text-white/60 font-medium">Aging</div>
                  <div className="text-sm sm:text-base font-serif font-bold text-white">24-Month Grain</div>
                </div>
              </div>

              {/* Price & Order Now CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#E5C365]">Signature Price</div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    ${biryaniItem.price.toFixed(2)}
                  </div>
                </div>

                <button
                  id="chef-special-order-button"
                  onClick={() => onAddToCart(biryaniItem)}
                  className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#C29D2A] text-[#082118] font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                >
                  {isOrdered ? (
                    <>
                      <Check className="w-5 h-5 text-[#082118]" />
                      <span>Added to Order</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 text-[#082118]" />
                      <span>Order Now</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Large Food Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-2xl transform scale-90" />

                {/* Main Large Image */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85"
                    alt="Velora Special Biryani"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Stamp */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-[#E5C365] font-semibold uppercase tracking-wider">
                        Accompaniment Included
                      </div>
                      <div className="text-xs text-white">Burani Garlic Raita & Mirchi Salan</div>
                    </div>
                    <span className="text-xs text-[#D4AF37] font-serif font-bold">100% Dum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
