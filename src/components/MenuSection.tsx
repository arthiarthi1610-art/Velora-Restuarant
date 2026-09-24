import React, { useState } from 'react';
import { Plus, Check, Utensils, BookOpen, Sparkles, Filter } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenFullMenu: () => void;
  cartItemIds: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenFullMenu,
  cartItemIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [vegOnly, setVegOnly] = useState(false);

  const categories: (MenuCategory | 'All')[] = ['All', 'Starters', 'Main Course', 'Desserts'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesVeg = !vegOnly || item.isVeg;
    return matchesCategory && matchesVeg;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#F4EFEB]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3327]/8 text-[#0F3327] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <span>Culinary Selections</span>
          </div>
          <h2
            id="menu-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3327] tracking-tight mb-4"
          >
            The VELORA Menu
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-[#526059] text-base sm:text-lg">
            Each creation is an ode to authentic Indian flavor profiles, meticulously plated with
            modern gastronomy techniques and prime seasonal ingredients.
          </p>
        </div>

        {/* Categories & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-1.5 rounded-full border border-[#E8E0D5] shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`menu-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0F3327] text-[#FAF8F5] shadow-sm'
                    : 'text-[#526059] hover:text-[#0F3327] hover:bg-[#F4EFEB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Vegetarian Toggle */}
          <div className="flex items-center gap-2">
            <button
              id="menu-vegetarian-toggle-button"
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                vegOnly
                  ? 'bg-[#166534] text-white border-[#166534]'
                  : 'bg-white text-[#526059] border-[#E8E0D5] hover:border-[#166534]'
              }`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center ${
                  vegOnly ? 'border-white' : 'border-[#166534]'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    vegOnly ? 'bg-white' : 'bg-[#166534]'
                  }`}
                />
              </div>
              <span>Pure Vegetarian</span>
            </button>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((dish) => {
            const quantityInCart = cartItemIds[dish.id] || 0;
            return (
              <div
                key={dish.id}
                id={`menu-card-${dish.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E0D5] hover:border-[#D4AF37]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Dietary Indicator (Green Dot for Veg / Red Dot for Non-Veg) */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs border border-white/40">
                    <div
                      className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center ${
                        dish.isVeg ? 'border-emerald-700' : 'border-rose-700'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          dish.isVeg ? 'bg-emerald-700' : 'bg-rose-700'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        dish.isVeg ? 'text-emerald-800' : 'text-rose-800'
                      }`}
                    >
                      {dish.isVeg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {/* Tag Badge */}
                  {dish.tag && (
                    <div className="absolute top-3 right-3 bg-[#0F3327]/90 text-[#D4AF37] border border-[#D4AF37]/50 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md shadow-xs">
                      {dish.tag}
                    </div>
                  )}

                  {/* Category Pill at bottom of image */}
                  <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    {dish.category}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl font-bold text-[#1A2420] group-hover:text-[#0F3327] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#0F3327] shrink-0">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-sm text-[#526059] line-clamp-3 leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Footer of Card with Details & Order Action */}
                  <div className="pt-4 border-t border-[#F4EFEB] flex items-center justify-between">
                    <div className="text-[11px] text-[#75827C] font-medium">
                      {dish.prepTime && <span>Prep: {dish.prepTime}</span>}
                    </div>

                    <button
                      id={`order-btn-${dish.id}`}
                      onClick={() => onAddToCart(dish)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        quantityInCart > 0
                          ? 'bg-[#0F3327] text-[#D4AF37] shadow-sm'
                          : 'bg-[#F4EFEB] hover:bg-[#0F3327] text-[#0F3327] hover:text-[#FAF8F5]'
                      }`}
                    >
                      {quantityInCart > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added ({quantityInCart})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu CTA Button */}
        <div className="mt-14 text-center">
          <button
            id="view-full-menu-button"
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-[#0F3327] text-[#0F3327] hover:text-[#FAF8F5] border-2 border-[#0F3327] font-semibold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>View Full Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
};
