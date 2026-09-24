import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { ChefSpecial } from './components/ChefSpecial';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { FullMenuModal } from './components/FullMenuModal';
import { LightboxModal } from './components/LightboxModal';
import { MENU_ITEMS } from './data/restaurantData';
import { MenuItem, GalleryItem, OrderItem } from './types';
import { ShoppingBag, Check, X } from 'lucide-react';

export default function App() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Find the signature biryani item for the Chef's Special
  const biryaniItem = MENU_ITEMS.find((item) => item.name.includes('Biryani')) || MENU_ITEMS[4];

  // Helper map for item quantities in cart
  const cartItemIds = orderItems.reduce((acc, curr) => {
    acc[curr.item.id] = curr.quantity;
    return acc;
  }, {} as Record<string, number>);

  const totalOrderCount = orderItems.reduce((sum, i) => sum + i.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const handleAddToCart = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`Added ${item.name} to your selection`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) => {
      return prev
        .map((i) => {
          if (i.item.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as OrderItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setOrderItems((prev) => prev.filter((i) => i.item.id !== id));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A2420] selection:bg-[#D4AF37]/30 selection:text-[#0F3327]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        orderCount={totalOrderCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        onOpenReservation={scrollToReservation}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onReserveTable={scrollToReservation}
        />

        {/* 3. About VELORA Section (with 4 Highlights) */}
        <About />

        {/* 4. Menu Section (Starters, Main Course, Desserts + View Full Menu) */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenFullMenu={() => setIsFullMenuOpen(true)}
          cartItemIds={cartItemIds}
        />

        {/* 5. Chef's Special (Velora Special Biryani Showcase) */}
        <ChefSpecial
          biryaniItem={biryaniItem}
          onAddToCart={handleAddToCart}
          isOrdered={(cartItemIds[biryaniItem.id] || 0) > 0}
        />

        {/* 6. Gallery Section (Interior, Signature Dishes, Biryani, Desserts, Chef, Diners) */}
        <GallerySection onSelectImage={(img) => setLightboxImage(img)} />

        {/* 7. Reviews Section (Customer Reviews with 5 Stars) */}
        <ReviewsSection />

        {/* 8. Reservation Section (Table Booking Form) */}
        <ReservationSection />

        {/* 9. Contact Section (Address, Phone, Email, Hours, Map Placeholder) */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Action Button for Selected Dishes (appears if items exist) */}
      {totalOrderCount > 0 && !isOrderDrawerOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            id="floating-order-bubble"
            onClick={() => setIsOrderDrawerOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#0F3327] hover:bg-[#164835] text-white shadow-2xl border-2 border-[#D4AF37] hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#082118] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalOrderCount}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              Review Selection
            </span>
          </button>
        </div>
      )}

      {/* Interactive Order Side Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
        onProceedToReserve={scrollToReservation}
      />

      {/* Full Menu Modal */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Image Lightbox Modal */}
      <LightboxModal
        item={lightboxImage}
        onClose={() => setLightboxImage(null)}
        onNavigate={(newImg) => setLightboxImage(newImg)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0F3327] text-white px-5 py-3 rounded-full shadow-2xl border border-[#D4AF37]/60 flex items-center gap-3 text-xs sm:text-sm font-medium animate-bounce"
        >
          <div className="w-5 h-5 rounded-full bg-[#D4AF37] text-[#082118] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
