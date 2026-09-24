import React, { useState } from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter, ArrowUp, Send, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#082118] text-white/80 pt-16 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Story (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF8F5]">
                  VELORA
                </span>
                <span className="block text-[9px] tracking-[0.25em] font-medium uppercase text-[#E5C365]">
                  Taste. Crafted. Remembered.
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-sans">
              An elegant ode to India’s imperial and coastal culinary traditions, curated with
              contemporary finesse, exceptional hospitality, and soul-stirring aromatics.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#082118] text-white/80 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#D4AF37]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#082118] text-white/80 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#D4AF37]"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#082118] text-white/80 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#D4AF37]"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E5C365]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('chef-special')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Chef's Special
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Guest Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Reserve a Table
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E5C365]">
              Dining Hours
            </h4>
            <div className="text-sm space-y-2.5 text-white/70">
              <div>
                <span className="text-white block font-medium">Monday – Thursday</span>
                <span className="text-xs">12:00 PM – 11:00 PM</span>
              </div>
              <div>
                <span className="text-white block font-medium">Friday – Sunday</span>
                <span className="text-xs text-[#E5C365]">12:00 PM – Midnight</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs">
                <span className="text-white/50 block">Afternoon Tea & Aperitifs:</span>
                <span>3:30 PM – 6:30 PM Daily</span>
              </div>
            </div>
          </div>

          {/* Col 4: Exclusive Newsletter (3.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E5C365]">
              Privilege Club
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Subscribe to receive private tasting invitations, seasonal tasting menu announcements,
              and priority holiday table bookings.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-white/10 border border-[#D4AF37]/50 text-xs text-[#E5C365] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                <span>Thank you for joining our private circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#D4AF37] text-[#082118] flex items-center justify-center hover:bg-[#C29D2A] transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-white/50 block">No spam. Only gastronomic updates.</span>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} VELORA Restaurant. All rights reserved. Taste. Crafted. Remembered.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
