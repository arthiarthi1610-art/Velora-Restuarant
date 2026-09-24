import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, UtensilsCrossed, Calendar } from 'lucide-react';

interface NavbarProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  orderCount,
  onOpenOrderDrawer,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'menu', 'gallery', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E0D5]/80 py-3.5'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* VELORA Brand Logo */}
        <button
          id="navbar-brand-button"
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          aria-label="VELORA Home"
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
              isScrolled
                ? 'bg-[#0F3327] border-[#D4AF37]/50 text-[#D4AF37] shadow-sm'
                : 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] backdrop-blur-sm'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <div>
            <span
              className={`font-serif text-2xl sm:text-3xl font-bold tracking-wider transition-colors ${
                isScrolled ? 'text-[#0F3327]' : 'text-white'
              }`}
            >
              VELORA
            </span>
            <span
              className={`block text-[10px] tracking-[0.25em] font-medium uppercase transition-colors ${
                isScrolled ? 'text-[#C59B27]' : 'text-[#E5C365]'
              }`}
            >
              Taste. Crafted. Remembered.
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? isActive
                      ? 'text-[#0F3327] bg-[#0F3327]/8 font-semibold'
                      : 'text-[#526059] hover:text-[#0F3327] hover:bg-[#0F3327]/5'
                    : isActive
                    ? 'text-[#D4AF37] bg-white/10 font-semibold'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Order Drawer & Reservation CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Order Bag Button */}
          <button
            id="order-drawer-toggle-button"
            onClick={onOpenOrderDrawer}
            className={`relative p-2.5 rounded-full transition-all duration-200 flex items-center justify-center ${
              isScrolled
                ? 'bg-[#F4EFEB] text-[#0F3327] hover:bg-[#EAE2D8]'
                : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
            }`}
            title="View Selected Dishes"
            aria-label="View Selected Dishes"
          >
            <ShoppingBag className="w-4 h-4" />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#082118] text-[10px] font-bold rounded-full h-4 min-w-4 px-1 flex items-center justify-center shadow-sm animate-pulse">
                {orderCount}
              </span>
            )}
          </button>

          {/* Reserve a Table CTA Button */}
          <button
            id="navbar-reserve-button"
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-sm bg-[#0F3327] hover:bg-[#164836] text-[#FAF8F5] border border-[#D4AF37]/40 hover:border-[#D4AF37] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-order-drawer-button"
            onClick={onOpenOrderDrawer}
            className={`relative p-2 rounded-full ${
              isScrolled ? 'text-[#0F3327] bg-[#F4EFEB]' : 'text-white bg-white/15'
            }`}
            aria-label="Order Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-[#082118] text-[10px] font-bold rounded-full h-3.5 min-w-3.5 px-0.5 flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>

          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#0F3327] hover:bg-black/5' : 'text-white hover:bg-white/15'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-[#FAF8F5] text-[#1A2420] border-b border-[#E8E0D5] px-6 py-5 space-y-3 shadow-xl transition-all"
        >
          <div className="flex flex-col space-y-1 pb-3 border-b border-[#E8E0D5]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#0F3327] text-white font-semibold'
                    : 'text-[#526059] hover:bg-[#0F3327]/5 hover:text-[#0F3327]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              id="mobile-menu-reserve-button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F3327] text-white font-semibold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
