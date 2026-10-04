import React, { useState } from 'react';
import { WHATSAPP_NUMBER, VEHICULOS_IMAGE_URL, MOTOS_IMAGE_URL } from '../data/content';
import { ArrowRight, Car, Bike, Sparkles } from 'lucide-react';
import { StarButton } from './StarButton';

export const VehiclesSection: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola INNEVA SOLUCIONES, me gustaría cotizar el servicio de detallado de vehículos / motos / cascos.')}`;

  const tags = ['Carros', 'Motos', 'Cascos', 'Interiores', 'Tapicería automotriz'];

  return (
    <section className="hidden md:block py-20 lg:py-28 bg-[#082B30] text-[#EEF4F3] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0B6E75]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Details & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Tag */}
            <div className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#72D6C8] mb-3">
              DETALLADO AUTOMOTRIZ
            </div>

            {/* Title */}
            <div
              className="font-inter text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-6"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              Tu vehículo también <br className="hidden sm:inline" />
              merece verse y <br className="hidden sm:inline" />
              sentirse impecable.
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#EEF4F3]/80 leading-relaxed mb-8">
              Trabajamos interiores, tapicería, superficies y detalles con procesos de limpieza profesional para carros, motos y cascos en Armenia y todo el Quindío.
            </p>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-[#073F46] border border-[#72D6C8]/30 text-xs font-medium text-[#72D6C8] tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Lime Green Button */}
            <StarButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="!py-2.5 sm:!py-3 !px-6 sm:!px-7 text-sm sm:text-base min-h-[44px] sm:min-h-[48px] rounded-full"
            >
              <span>Cotizar detallado</span>
              <ArrowRight className="w-5 h-5" />
            </StarButton>

          </div>

          {/* Right Column: Single Card with Uiverse Hover Reveal Effect */}
          <div className="lg:col-span-7 flex justify-center items-center w-full">
            <div
              className={`uiverse-vehicle-card group relative ${isRevealed ? 'is-active' : ''}`}
              onClick={() => setIsRevealed(!isRevealed)}
              role="region"
              aria-label="Tarjeta interactiva de vehículos: pasa el cursor para alternar entre carros y motos"
            >
              {/* 1st Image (Base): Carros & Camionetas */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={VEHICULOS_IMAGE_URL}
                  alt="Detallado y limpieza de interiores de carros y camionetas en Armenia | INNEVA"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/detailing-de-autos.avif';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B30]/90 via-[#082B30]/20 to-transparent pointer-events-none" />

                {/* Base Card Label & Hover Hint */}
                <div className={`absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 flex items-center justify-between transition-opacity duration-300 ${isRevealed ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                  <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-bold bg-[#082B30]/85 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10">
                    <Car className="w-4 h-4 text-[#72D6C8]" />
                    <span>Carros & Camionetas</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#72D6C8] text-[11px] font-semibold bg-[#082B30]/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#72D6C8]/30">
                    <span>Pasa el mouse</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#8FE300]" />
                  </div>
                </div>
              </div>

              {/* Corner Flap Top-Right (::before effect from Uiverse) */}
              <div className="flap-before" title="Ver Motos & Cascos">
                <Sparkles className="w-5 h-5 text-[#082B30]" />
              </div>

              {/* Corner Flap Bottom-Left (::after effect from Uiverse revealing 2nd Image: Motos) */}
              <div className="flap-after">
                {/* 2nd Image inside expanding layer */}
                <img
                  src={MOTOS_IMAGE_URL}
                  alt="Limpieza profunda y detallado de motos y cascos en Armenia | INNEVA"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-left"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/lavado-de-motos-2.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B30]/90 via-[#082B30]/15 to-transparent pointer-events-none" />

                {/* 2nd Image Label (Reveals smoothly when hovered) */}
                <div className={`absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 flex items-center justify-between transition-opacity duration-300 delay-100 ${isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-bold bg-[#082B30]/85 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-white/10">
                    <Bike className="w-4 h-4 text-[#8FE300]" />
                    <span>Motos & Cascos</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8FE300] text-[11px] font-semibold bg-[#082B30]/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#8FE300]/30">
                    <span>Detallado y limpieza de interiores</span>
                  </div>
                </div>

                {/* Corner teaser icon visible before hover in bottom-left */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${isRevealed ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                  <Bike className="w-5 h-5 text-[#72D6C8]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


