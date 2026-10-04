import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { MessageSquare, CalendarCheck, Sparkles, Smile } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Automatically trigger the animation on mobile when cards enter the viewport during scroll
  useEffect(() => {
    const isMobile = () => window.innerWidth < 1024;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!isMobile()) {
          setActiveCards([]);
          return;
        }

        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-step-index'));
          if (entry.isIntersecting) {
            setActiveCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
          } else {
            setActiveCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-8% 0px -12% 0px',
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const handleResize = () => {
      if (!isMobile()) {
        setActiveCards([]);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const icons = [
    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#139AA8] group-hover:scale-110 transition-transform duration-300" />,
    <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#139AA8] group-hover:scale-110 transition-transform duration-300" />,
    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#139AA8] group-hover:scale-110 transition-transform duration-300" />,
    <Smile className="w-5 h-5 sm:w-6 sm:h-6 text-[#139AA8] group-hover:scale-110 transition-transform duration-300" />,
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-28 text-[#EEF4F3] relative overflow-hidden border-t border-[#0B6E75]/30 space-stars-sinful"
      style={{
        background: 'radial-gradient(ellipse at bottom, #321b35 0%, #090a0f 100%)',
      }}
    >
      {/* Dynamic Parallax Starfield from Uiverse.io by sinful_9361 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#139AA8] mb-2 sm:mb-3">
            ASÍ TRABAJAMOS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Así trabajamos: limpieza profesional a domicilio
          </h2>
        </div>

        {/* 4 Steps Grid with connecting lines */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0B6E75] via-[#139AA8]/40 to-[#0B6E75] -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeCards.includes(idx);

              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  data-step-index={idx}
                  className={`uiverse-card-smit rounded-2xl sm:rounded-3xl flex flex-col items-center text-center group p-4 sm:p-7 shadow-xl cursor-default transition-all duration-500 ${
                    isActive ? 'is-active' : ''
                  }`}
                >
                  {/* Uiverse Rotating Decorative Border */}
                  <div className="smit-border" />

                  {/* Uiverse Bottom Text with letter-spacing transition */}
                  <div className="smit-bottom-text">
                    PASO {step.number}
                  </div>

                  {/* Uiverse Trail glow overlay */}
                  <div className="smit-trail" />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Number & Icon circle */}
                    <div className="relative mb-3.5 sm:mb-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#1b2428] border-2 flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive
                            ? 'border-[#139AA8] scale-105'
                            : 'border-[#139AA8]/40 group-hover:border-[#139AA8]'
                        }`}
                      >
                        {icons[idx]}
                      </div>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2.5 transition-colors duration-300 ${
                        isActive ? 'text-[#139AA8]' : 'group-hover:text-[#139AA8]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EEF4F3]/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
