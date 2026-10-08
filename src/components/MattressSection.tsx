import React from 'react';
import { IMAGES, WHATSAPP_NUMBER } from '../data/content';
import { ArrowRight } from 'lucide-react';
import { StarButton } from './StarButton';
import { Link } from '../navigation';

export const MattressSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola INNEVA SOLUCIONES, me gustaría cotizar la limpieza profesional de colchones a domicilio en Armenia.')}`;

  const pills = [
    'Limpieza profunda',
    'Extracción de suciedad',
    'Eliminación de malos olores',
    'Cuidado profesional',
  ];

  return (
    <section className="hidden md:block relative py-16 sm:py-20 lg:py-28 overflow-hidden space-stars-section text-white">
      {/* Dynamic Parallax Starfield from Uiverse.io by jaykdoe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Full Mattress Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl shadow-black/70 border border-white/15 bg-[#082B30] group">
              <img
                src={IMAGES.mattress}
                alt="Limpieza profesional de colchones a domicilio en Armenia | INNEVA"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/limpieza-de-colchones.avif';
                }}
              />
            </div>
          </div>

          {/* Right Column: Information & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tag */}
            <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#72D6C8] mb-3.5">
              DESCANSO MÁS LIMPIO
            </span>

            {/* Title */}
            <div
              className="font-inter text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-5"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              Tu colchón también <br />
              necesita una limpieza <br />
              profesional.
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-[17px] text-[#EEF4F3]/85 leading-relaxed mb-8 max-w-xl">
              La limpieza profesional ayuda a recuperar la frescura del colchón y a mantener un espacio de descanso más limpio.
            </p>

            {/* 4 Feature Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-9">
              {pills.map((pill, index) => (
                <span
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-[#EEF4F3] text-xs sm:text-[13px] font-medium px-4 py-2 rounded-full shadow-sm hover:border-[#72D6C8]/60 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Lime Green Button with Star Effect */}
            <StarButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onLightBg={false}
              className="!py-3 sm:!py-3.5 !px-7 sm:!px-8 text-sm sm:text-base font-bold rounded-full"
            >
              <span>Cotizar limpieza de colchón</span>
              <ArrowRight className="w-4 h-4" />
            </StarButton>

            {/* Natural Internal Link to Service Page */}
            <div className="mt-4">
              <Link
                href="/lavado-colchones-armenia/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#72D6C8] hover:text-white transition-colors"
              >
                <span>Ver detalles del servicio de lavado de colchones en Armenia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

