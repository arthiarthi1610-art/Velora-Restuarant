import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F4EFEB]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3327]/8 text-[#0F3327] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            <span>Guest Impressions</span>
          </div>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F3327] tracking-tight mb-4"
          >
            Words From Our Diners
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
          <p className="text-[#526059] text-base sm:text-lg">
            Every memorable evening is forged in the warmth of shared tables and genuine delight.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E0D5] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#0F3327]/15" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#1A2420] font-normal italic leading-relaxed mb-6">
                  “{review.comment}”
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-[#F4EFEB]">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-serif text-sm font-bold text-[#0F3327]">
                        {review.name}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <span className="text-[11px] text-[#526059] block">{review.role}</span>
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-[#75827C] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E0D5]">
                  <span className="font-medium text-[#0F3327]">Favorite:</span> {review.favoriteDish}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-[#E8E0D5] flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="font-serif text-2xl font-bold text-[#0F3327]">4.9 / 5.0</div>
            <div className="text-xs text-[#526059]">Google Reviews</div>
          </div>
          <div className="h-8 w-px bg-[#E8E0D5] hidden sm:block" />
          <div>
            <div className="font-serif text-2xl font-bold text-[#0F3327]">Certificate of Excellence</div>
            <div className="text-xs text-[#526059]">TripAdvisor 2024 & 2025</div>
          </div>
          <div className="h-8 w-px bg-[#E8E0D5] hidden sm:block" />
          <div>
            <div className="font-serif text-2xl font-bold text-[#0F3327]">Top 10 Contemporary</div>
            <div className="text-xs text-[#526059]">Gourmet Dining Guide</div>
          </div>
        </div>
      </div>
    </section>
  );
};
