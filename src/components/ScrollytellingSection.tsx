import React, { useState, useEffect, useRef } from 'react';
import { WHATSAPP_LINK, IMAGES } from '../data/content';
import { ArrowRight } from 'lucide-react';
import { StarButton } from './StarButton';

export const ScrollytellingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.2); // 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When top reaches 80% of window until bottom reaches 20%
      const start = windowHeight * 0.75;
      const end = -rect.height * 0.25;
      const totalDistance = start - end;
      const currentPos = start - rect.top;

      const progress = Math.min(Math.max(currentPos / totalDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const percentage = Math.round(scrollProgress * 100);

  return (
    <section
      ref={containerRef}
      id="tecnologia-scrolly"
      className="py-24 bg-[#082B30] text-white relative overflow-hidden border-t border-[#0B6E75]/30"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#0B6E75]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#72D6C8] mb-3">
            RESULTADOS REALES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            La diferencia se ve.
          </h2>
        </div>

        {/* Scrollytelling Stage Box */}
        <div className="relative bg-[#073F46]/50 border border-[#0B6E75]/60 rounded-3xl p-4 sm:p-8 shadow-2xl backdrop-blur-md mb-8">
          
          {/* Surface Viewport */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-inner border border-white/10 select-none bg-[#1a1c1e]">
            
            {/* Base layer: CLEAN SURFACE (Underneath) */}
            <img
              src={IMAGES.sofaSlider}
              alt="Superficie limpia y renovada"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105"
              referrerPolicy="no-referrer"
            />

            {/* Top clipped layer: DIRTY SURFACE */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 0 0 ${percentage}%)`,
                transition: 'clip-path 0.15s ease-out',
              }}
            >
              <img
                src={IMAGES.sofaSlider}
                alt="Superficie antes de la limpieza"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover filter brightness-65 contrast-135 sepia-[0.4] saturate-150"
                referrerPolicy="no-referrer"
              />
              {/* Dirt / stain texture overlay */}
              <div className="absolute inset-0 bg-[#3d2716]/40 mix-blend-multiply" />
            </div>

            {/* THE CLEANING NOZZLE / CABEZOTE */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none flex flex-col items-center"
              style={{
                left: `${percentage}%`,
                transform: 'translateX(-50%)',
                transition: 'left 0.15s ease-out',
              }}
            >
              {/* Vertical line laser indicator */}
              <div className="absolute inset-0 w-[2px] bg-[#72D6C8] shadow-[0_0_12px_#72D6C8] opacity-75" />

              {/* Extraction Nozzle / Tool Head Representation */}
              <div className="relative my-auto flex flex-col items-center">
                {/* Vacuum Hose connection going up */}
                <div className="w-5 h-16 bg-gradient-to-b from-[#0B6E75] to-[#72D6C8]/80 rounded-t-lg shadow-lg border border-white/20" />

                {/* Main Transparent Extractor Head */}
                <div className="w-14 sm:w-16 h-20 sm:h-24 bg-gradient-to-b from-[#72D6C8]/40 to-[#72D6C8]/90 rounded-b-xl border-2 border-white/80 shadow-2xl backdrop-blur-md flex flex-col items-center justify-between py-2 px-1 relative">
                  {/* Water suction droplets animation */}
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  </div>

                  <span className="text-[8px] sm:text-[9px] font-black text-[#082B30] tracking-tighter uppercase text-center bg-white/70 px-1 rounded">
                    INNEVA
                  </span>

                  {/* High power suction head edge */}
                  <div className="w-full h-2 bg-[#8FE300] rounded-sm shadow-[0_0_10px_#8FE300]" />
                </div>

                {/* Ground Spray & Mist Glow */}
                <div className="w-24 h-6 bg-[#72D6C8]/40 rounded-full blur-md -mt-2 animate-pulse" />
              </div>

            </div>

          </div>

        </div>

        {/* Final CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#073F46] to-[#0B6E75] border border-[#72D6C8]/30 rounded-2xl p-6 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              ¿Quieres este resultado en tus muebles o colchones?
            </h4>
            <p className="text-sm text-[#72D6C8] mt-0.5">
              Resultados reales con tecnología profesional y productos ecoamigables en Armenia.
            </p>
          </div>
          <StarButton
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 !py-3 !px-6 text-sm"
          >
            <span>Quiero este resultado</span>
            <ArrowRight className="w-4 h-4" />
          </StarButton>
        </div>

      </div>
    </section>
  );
};
