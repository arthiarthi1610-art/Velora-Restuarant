import React from 'react';
import { X, Utensils, Sparkles, Check, Download, Printer } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const starters = MENU_ITEMS.filter((i) => i.category === 'Starters');
  const mains = MENU_ITEMS.filter((i) => i.category === 'Main Course');
  const desserts = MENU_ITEMS.filter((i) => i.category === 'Desserts');

  const accompaniments = [
    { name: 'Garlic Butter Naan', price: '$5.00', desc: 'Clay oven flatbread brushed with crushed roasted garlic & churned butter' },
    { name: 'Laccha Paratha', price: '$5.50', desc: 'Flaky multi-layered whole wheat bread crisped over live tandoor' },
    { name: 'Burani Garlic Raita', price: '$4.50', desc: 'Slow-whipped cultured yogurt tempered with roasted garlic crisps' },
    { name: 'Saffron Steamed Basmati', price: '$6.00', desc: 'Aged long-grain rice infused with royal saffron threads' },
  ];

  const beverages = [
    { name: 'Alphonso Mango Lassi', price: '$8.00', desc: 'Ratnagiri mango pulp churned with thick Greek curd and green cardamom' },
    { name: 'Kashmiri Kahwa', price: '$7.00', desc: 'Delicate green tea brewed with saffron strands, cinnamon, and slivered almonds' },
    { name: 'Royal Rose Sherbet', price: '$7.50', desc: 'Persian damask rose cordial with sabja seeds and fresh lime press' },
    { name: 'Masala Chai Artisan Pot', price: '$6.50', desc: 'Slow-simmered Assam black leaves with fresh ginger, cloves and whole milk' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl border border-[#D4AF37]/50 shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="bg-[#0F3327] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#D4AF37]/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#FAF8F5]">
                VELORA
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#E5C365]">
                Complete Tasting Carte
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
              title="Print Menu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Menu Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12 divide-y divide-[#E8E0D5]">
          {/* Starters Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-[#0F3327]">Starters</span>
              <div className="flex-1 h-px bg-[#D4AF37]/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {starters.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border border-[#E8E0D5] flex gap-3.5 items-start justify-between hover:border-[#D4AF37]/50 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E8E0D5]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif font-bold text-sm text-[#1A2420]">{item.name}</h4>
                      <span className="font-serif font-bold text-sm text-[#0F3327]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-[#526059] line-clamp-2 mt-1">{item.description}</p>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="mt-2 text-[11px] font-semibold text-[#0F3327] hover:text-[#C59B27] flex items-center gap-1"
                    >
                      <span>+ Add to order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div className="pt-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-[#0F3327]">Main Courses</span>
              <div className="flex-1 h-px bg-[#D4AF37]/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mains.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border border-[#E8E0D5] flex gap-3.5 items-start justify-between hover:border-[#D4AF37]/50 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E8E0D5]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif font-bold text-sm text-[#1A2420]">{item.name}</h4>
                      <span className="font-serif font-bold text-sm text-[#0F3327]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-[#526059] line-clamp-2 mt-1">{item.description}</p>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="mt-2 text-[11px] font-semibold text-[#0F3327] hover:text-[#C59B27] flex items-center gap-1"
                    >
                      <span>+ Add to order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Earthen Breads & Accompaniments */}
          <div className="pt-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-[#0F3327]">Tandoori Breads & Sides</span>
              <div className="flex-1 h-px bg-[#D4AF37]/40" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accompaniments.map((acc, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E8E0D5]">
                  <div className="flex justify-between text-sm font-bold text-[#1A2420]">
                    <span>{acc.name}</span>
                    <span className="text-[#0F3327]">{acc.price}</span>
                  </div>
                  <p className="text-xs text-[#526059] mt-0.5">{acc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="pt-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-[#0F3327]">Desserts</span>
              <div className="flex-1 h-px bg-[#D4AF37]/40" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {desserts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl border border-[#E8E0D5] flex gap-3.5 items-start justify-between hover:border-[#D4AF37]/50 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E8E0D5]"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif font-bold text-sm text-[#1A2420]">{item.name}</h4>
                      <span className="font-serif font-bold text-sm text-[#0F3327]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-[#526059] line-clamp-2 mt-1">{item.description}</p>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="mt-2 text-[11px] font-semibold text-[#0F3327] hover:text-[#C59B27] flex items-center gap-1"
                    >
                      <span>+ Add to order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Beverages & Botanical Elixirs */}
          <div className="pt-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-[#0F3327]">Botanical Elixirs & Teas</span>
              <div className="flex-1 h-px bg-[#D4AF37]/40" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {beverages.map((bev, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E8E0D5]">
                  <div className="flex justify-between text-sm font-bold text-[#1A2420]">
                    <span>{bev.name}</span>
                    <span className="text-[#0F3327]">{bev.price}</span>
                  </div>
                  <p className="text-xs text-[#526059] mt-0.5">{bev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info in modal */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8E0D5] flex items-center justify-between text-xs text-[#526059]">
          <div>A 10% discretionary gratuity will be added for parties of 6 or more.</div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0F3327] text-white text-xs font-semibold hover:bg-[#164835]"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};
