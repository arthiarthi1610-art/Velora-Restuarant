import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Phone, User, MessageSquare, Sparkles, Check, Info } from 'lucide-react';
import { ReservationFormData } from '../types';

export const ReservationSection: React.FC = () => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: today,
    time: '19:30',
    guests: '2 Guests',
    seatingPreference: 'Main Dining Hall',
    specialRequest: '',
  });

  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    data: ReservationFormData;
  } | null>(null);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      setErrorMsg('Please provide your name, phone number, date, and preferred time.');
      return;
    }

    setErrorMsg(null);
    const bookingId = 'VEL-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedBooking({
      id: bookingId,
      data: { ...formData },
    });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: today,
      time: '19:30',
      guests: '2 Guests',
      seatingPreference: 'Main Dining Hall',
      specialRequest: '',
    });
  };

  return (
    <section id="reservation" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3327]/8 text-[#0F3327] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <span>Table Bookings</span>
            </div>
            <h2
              id="reservation-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3327] tracking-tight mb-4"
            >
              Reserve Your Table
            </h2>
            <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-[#526059] text-base sm:text-lg max-w-xl mx-auto">
              Join us for an evening of handcrafted flavours. We recommend reserving at least 24
              hours in advance for evening dining.
            </p>
          </div>

          {/* Form Card Container */}
          <div className="bg-white rounded-3xl border border-[#E8E0D5] p-6 sm:p-10 md:p-12 shadow-xl relative">
            {submittedBooking ? (
              /* Success State */
              <div
                id="reservation-confirmation-box"
                className="text-center py-8 px-4 space-y-6 animate-fadeIn"
              >
                <div className="w-16 h-16 rounded-full bg-[#0F3327] text-[#D4AF37] mx-auto flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27]">
                    Table Reserved
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F3327] mt-1 mb-2">
                    We Look Forward to Welcoming You
                  </h3>
                  <p className="text-sm text-[#526059] max-w-md mx-auto">
                    A confirmation SMS & email have been prepared for your booking.
                  </p>
                </div>

                {/* Booking Summary Ticket */}
                <div className="bg-[#F4EFEB] rounded-2xl p-6 max-w-lg mx-auto text-left border border-[#E8E0D5] space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-[#E8E0D5]">
                    <span className="text-xs uppercase text-[#526059] font-medium">Reservation Code</span>
                    <span className="font-mono font-bold text-[#0F3327] text-sm tracking-wider">
                      {submittedBooking.id}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-xs text-[#75827C] block">Guest Name</span>
                      <span className="font-semibold text-[#1A2420]">{submittedBooking.data.name}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#75827C] block">Contact</span>
                      <span className="font-semibold text-[#1A2420]">{submittedBooking.data.phone}</span>
                    </div>
                    <div>
                      <span className="text-xs text-[#75827C] block">Date & Time</span>
                      <span className="font-semibold text-[#1A2420]">
                        {submittedBooking.data.date} at {submittedBooking.data.time}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-[#75827C] block">Party Size</span>
                      <span className="font-semibold text-[#1A2420]">{submittedBooking.data.guests}</span>
                    </div>
                  </div>

                  {submittedBooking.data.specialRequest && (
                    <div className="pt-2 border-t border-[#E8E0D5] text-xs">
                      <span className="text-[#75827C] block">Special Request:</span>
                      <span className="text-[#1A2420] italic">
                        “{submittedBooking.data.specialRequest}”
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    id="reservation-new-booking-button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#0F3327] text-[#FAF8F5] text-xs sm:text-sm font-semibold hover:bg-[#164835] transition-colors cursor-pointer"
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            ) : (
              /* Reservation Form */
              <form id="reservation-form" onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                    <Info className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                    >
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#75827C]">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="res-name"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#75827C]">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="res-phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                    >
                      Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#75827C]">
                        <CalendarIcon className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        id="res-date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                    >
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#75827C]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="res-time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors appearance-none cursor-pointer"
                      >
                        <optgroup label="Lunch Service">
                          <option value="12:00">12:00 PM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="13:30">1:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                        </optgroup>
                        <optgroup label="Dinner Service">
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                          <option value="21:30">9:30 PM</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                    >
                      Number of Guests *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#75827C]">
                        <Users className="w-4 h-4" />
                      </div>
                      <select
                        id="res-guests"
                        required
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest (Solo Dining)</option>
                        <option value="2 Guests">2 Guests (Table for Two)</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests (Family/Friends)</option>
                        <option value="5-6 Guests">5 to 6 Guests</option>
                        <option value="7+ Guests (Large Party)">7+ Guests (Large Celebration)</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label
                      htmlFor="res-seating"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                    >
                      Seating Preference
                    </label>
                    <select
                      id="res-seating"
                      value={formData.seatingPreference}
                      onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors cursor-pointer"
                    >
                      <option value="Main Dining Hall">Main Dining Hall (Velvet Booths)</option>
                      <option value="Candlelit Window">Window View (Romantic)</option>
                      <option value="Private Dining Alcove">Private Dining Alcove</option>
                      <option value="Outdoor Terrace">Covered Garden Terrace</option>
                    </select>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label
                    htmlFor="res-special"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#1A2420] mb-2"
                  >
                    Special Request (Allergies, Anniversary, Dietary)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#75827C]">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="res-special"
                      rows={3}
                      placeholder="Let us know if you have specific dietary requirements, celebratory requests (anniversary/birthday), or wheelchair accessibility needs..."
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E8E0D5] focus:outline-none focus:border-[#0F3327] focus:ring-1 focus:ring-[#0F3327] text-sm text-[#1A2420] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    id="reserve-my-table-button"
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#0F3327] hover:bg-[#164835] text-[#FAF8F5] border border-[#D4AF37]/50 hover:border-[#D4AF37] font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    Reserve My Table
                  </button>
                  <p className="text-[11px] text-[#75827C] mt-3">
                    Instant static reservation confirmation • No reservation fee required
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
