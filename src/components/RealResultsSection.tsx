import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WHATSAPP_LINK } from '../data/content';
import { ArrowRight, ChevronsLeftRight } from 'lucide-react';
import { StarButton } from './StarButton';

export const RealResultsSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const userInteractedRef = useRef(false);

  // Scroll-driven effect: as the user scrolls through the section (especially on mobile),
  // the comparison line dynamically reveals the clean result
  useEffect(() => {
    const handleScroll = () => {
      // If user is actively dragging, let manual control take precedence
      if (isDragging || userInteractedRef.current) return;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when image enters from bottom and complete as it scrolls past center
      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.15;

      const progress = (startY - rect.top) / (startY - endY + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));

      // Smooth progression from 15% to 85%
      const calculatedPos = 15 + clamped * 70;
      setSliderPosition(Math.round(calculatedPos));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    userInteractedRef.current = true;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-[#073F46]/50 text-[#EEF4F3] relative overflow-hidden border-t border-[#0B6E75]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#72D6C8] mb-3">
            RESULTADOS REALES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight mb-3 leading-[1.18]">
            Resultados reales de nuestros servicios de limpieza
          </h2>
          <p className="text-sm sm:text-base text-[#EEF4F3]/80">
            La diferencia se ve en cada fibra y superficie tratada a domicilio.
          </p>
        </div>

        {/* Real Results Image Container with Interactive Comparison Slider Effect */}
        <div className="max-w-4xl mx-auto mb-10">
          <div
            ref={containerRef}
            id="before-after-slider-container"
            onClick={handleContainerClick}
            onMouseDown={() => {
              setIsDragging(true);
              userInteractedRef.current = true;
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => {
              setIsDragging(true);
              userInteractedRef.current = true;
            }}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0B6E75]/50 hover:border-[#72D6C8]/60 bg-[#082B30] aspect-[16/9] select-none cursor-ew-resize group transition-colors duration-300"
          >
            {/* Background Image: Clean Restored Surface (Revealed as slider moves left) */}
            <img
              src="/lavado-de-muebles-clean.webp"
              alt="Resultado del servicio de lavado de muebles a domicilio en Armenia | INNEVA"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/lavado-de-muebles-2.webp';
              }}
            />

            {/* Foreground Clipped Image: Dirty Surface (Clipped from left to sliderPosition%) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                transition: isDragging ? 'none' : 'clip-path 0.12s ease-out',
              }}
            >
              <img
                src="/lavado-de-muebles-dirty.webp"
                alt="Superficie de mueble antes de la limpieza profesional en Armenia | INNEVA"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/lavado-de-muebles-2.webp';
                }}
              />
            </div>

            {/* Holographic Glossy Sheen Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
              style={{
                background: 'linear-gradient(115deg, transparent 0%, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%, transparent 100%)',
              }}
            />

            {/* Interactive Vertical Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{
                left: `${sliderPosition}%`,
                transition: isDragging ? 'none' : 'left 0.12s ease-out',
              }}
            >
              {/* Luminous Line */}
              <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-[#72D6C8] shadow-[0_0_14px_rgba(114,214,200,0.9)]" />

              {/* Circular Grip Handle */}
              <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full bg-[#082B30] border-2 border-[#72D6C8] text-[#72D6C8] shadow-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                <ChevronsLeftRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <StarButton
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="results-cta-btn"
            className="!py-2.5 sm:!py-3 !px-7 sm:!px-8 text-sm sm:text-base min-h-[44px] sm:min-h-[48px] rounded-full"
          >
            <span>Quiero un resultado así</span>
            <ArrowRight className="w-5 h-5" />
          </StarButton>
        </div>

      </div>
    </section>
  );
};
