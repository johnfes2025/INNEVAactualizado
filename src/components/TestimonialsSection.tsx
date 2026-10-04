import React from 'react';
import { TESTIMONIALS, GOOGLE_BUSINESS_LINK } from '../data/content';
import { Star, Quote, ExternalLink } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#082B30] text-[#EEF4F3] relative overflow-hidden border-t border-[#0B6E75]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#72D6C8] mb-2">
            LO QUE DICEN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Lo que dicen nuestros clientes
          </h2>

          {/* Google 5.0 Rating Badge */}
          <a
            href={GOOGLE_BUSINESS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#073F46] hover:bg-[#084b54] border border-[#72D6C8]/40 hover:border-[#72D6C8] px-3.5 py-1.5 rounded-full shadow-md transition-all group cursor-pointer"
            title="Ver ficha de INNEVA en Google"
          >
            <span className="text-sm font-black text-white">5.0</span>
            <div className="flex text-[#FBBF24]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#EEF4F3]/90 font-medium group-hover:text-white transition-colors">
              · Reseñas verificadas en Google
            </span>
            <ExternalLink className="w-3 h-3 text-[#72D6C8] opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#073F46]/50 border border-[#0B6E75]/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg relative hover:border-[#72D6C8]/50 transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex text-[#FBBF24] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm text-[#EEF4F3]/90 italic leading-relaxed mb-4">
                  "{item.quote}"
                </p>
              </div>

              {/* Review source info */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  {item.author && (
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                      {item.author}
                    </h4>
                  )}
                  <a
                    href={GOOGLE_BUSINESS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#72D6C8] hover:text-[#8FE300] hover:underline font-medium transition-colors cursor-pointer group/link"
                    title="Ver reseña de Google de INNEVA"
                  >
                    <span>{item.source || 'Ver reseña de Google'}</span>
                    <ExternalLink className="w-3 h-3 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
                <Quote className="w-5 h-5 text-[#72D6C8]/30" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
