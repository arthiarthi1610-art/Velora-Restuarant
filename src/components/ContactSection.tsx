import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Check, Copy } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F4EFEB]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3327]/8 text-[#0F3327] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <span>Find Us</span>
          </div>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3327] tracking-tight mb-4"
          >
            Visit VELORA
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-[#526059] text-base sm:text-lg">
            We are nestled in the city's premier cultural promenade. Complimentary valet parking is
            available for all dinner guests.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Interactive Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E0D5] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0F3327]/8 text-[#0F3327] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[#75827C] font-semibold mb-1">
                  Restaurant Address
                </div>
                <div className="text-sm sm:text-base font-bold text-[#1A2420] mb-2">
                  {RESTAURANT_INFO.address}
                </div>
                <button
                  id="copy-address-button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F3327] hover:text-[#C59B27] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E0D5] shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0F3327]/8 text-[#0F3327] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#75827C] font-semibold mb-0.5">
                    Phone Inquiries
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-sm font-bold text-[#0F3327] hover:text-[#C59B27] transition-colors block"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-[#75827C]">Lines open 10am - 11pm</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0F3327]/8 text-[#0F3327] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#75827C] font-semibold mb-0.5">
                    Email Concierge
                  </div>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-[#0F3327] hover:text-[#C59B27] transition-colors break-all block"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                  <span className="text-[11px] text-[#75827C]">Event & private booking</span>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E0D5] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#0F3327]/8 text-[#0F3327] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#75827C] font-semibold">
                  Opening Hours
                </div>
                <div className="flex justify-between items-center text-sm pb-1.5 border-b border-[#F4EFEB]">
                  <span className="text-[#526059]">Mon – Thu</span>
                  <span className="font-semibold text-[#1A2420]">12:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-sm pb-1.5 border-b border-[#F4EFEB]">
                  <span className="text-[#526059]">Fri – Sun</span>
                  <span className="font-semibold text-[#0F3327]">12:00 PM – Midnight</span>
                </div>
                <div className="flex justify-between items-center text-xs text-[#75827C] pt-1">
                  <span>Kitchen Last Call:</span>
                  <span>45 mins prior to closing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder with Rich Stylized Representation */}
          <div className="lg:col-span-7">
            <div
              id="map-placeholder"
              className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#E8E0D5] shadow-md bg-[#E5E0D8] flex flex-col justify-between p-6 sm:p-8"
            >
              {/* Map Texture & Stylized Vector Roads Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#0F3327_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Abstract Map Grid Lines */}
              <svg
                className="absolute inset-0 w-full h-full text-[#D4AF37]/20 pointer-events-none stroke-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M-50,120 Q200,80 500,240 T1000,180" strokeWidth="6" />
                <path d="M120,-30 Q180,300 400,600" strokeWidth="4" />
                <path d="M300,-50 Q450,220 800,450" strokeWidth="8" strokeOpacity="0.4" />
                <path d="M-20,380 L800,100" strokeWidth="3" strokeDasharray="6 6" />
              </svg>

              {/* Map Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E0D5] text-xs font-semibold text-[#0F3327] flex items-center gap-1.5 shadow-sm">
                  <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Interactive Map Preview</span>
                </div>
                <span className="text-[11px] font-medium bg-[#0F3327] text-[#FAF8F5] px-2.5 py-1 rounded-full shadow-xs">
                  Valet Available
                </span>
              </div>

              {/* Central Pin Marker */}
              <div className="relative z-10 my-auto text-center flex flex-col items-center">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-[#0F3327] border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shadow-2xl animate-bounce">
                    <MapPin className="w-7 h-7 fill-[#D4AF37]/20" />
                  </div>
                  <div className="w-12 h-3 bg-black/30 rounded-full blur-xs mx-auto mt-1" />
                </div>
                <div className="mt-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E8E0D5] shadow-lg">
                  <div className="font-serif font-bold text-sm text-[#0F3327]">VELORA Restaurant</div>
                  <div className="text-[11px] text-[#526059]">42 Heritage Boulevard</div>
                </div>
              </div>

              {/* Map Bottom Information Bar */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E8E0D5] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div className="text-xs text-[#526059]">
                  <span className="font-bold text-[#1A2420]">Transit:</span> 3 mins from Central Station • Valet entrance on Heritage Way
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('VELORA Indian Restaurant')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F3327] text-white text-xs font-semibold hover:bg-[#164835] transition-colors shrink-0"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
