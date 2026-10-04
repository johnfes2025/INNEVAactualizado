import React from 'react';
import limpiezaProfesionalImg from '../assets/images/limpieza_profesional_inneva.webp';

export const IntroSection: React.FC = () => {
  return (
    <section id="nosotros" className="relative py-10 sm:py-20 lg:py-24 uiverse-dots-bg text-[#082B30] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="relative lg:col-span-6 flex flex-col items-start max-w-xl">
            {/* Soft backdrop in pattern color (#b8becb) that clears dots behind text for clean readability */}
            <div
              className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-[#b8becb] rounded-[28px] -z-10 shadow-[0_0_45px_30px_#b8becb] pointer-events-none"
              aria-hidden="true"
            />

            {/* Tag */}
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#065057] mb-2.5 sm:mb-5">
              LIMPIEZA PROFESIONAL
            </span>

            {/* Title */}
            <div
              className="nawsome-heading-shimmer font-inter text-[22px] sm:text-4xl lg:text-[44px] xl:text-[48px] font-semibold text-[#082B30] tracking-[-0.025em] leading-[1.2] sm:leading-[1.14] py-0.5 sm:py-1 mb-4 sm:mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="sm:hidden">
                No solo limpiamos.<br />
                Recuperamos la <span className="text-[#0E7079]">sensación</span><br />
                de un espacio realmente limpio.
              </span>
              <span className="hidden sm:inline">
                No solo limpiamos.<br />
                Recuperamos la<br />
                <span className="text-[#0E7079]">sensación</span> de un espacio<br />
                realmente limpio.
              </span>
            </div>

            {/* Descriptive Text */}
            <p className="text-[15px] text-[#1D353A] leading-relaxed font-medium mb-5 sm:mb-9">
              INNEVA SOLUCIONES combina tecnología especializada, productos ecoamigables y personal capacitado para ayudar a eliminar suciedad, manchas, malos olores y elementos que afectan la frescura de muebles, colchones, tapicerías y otras superficies.
            </p>

            {/* Bottom Decorative Teal Line */}
            <div className="w-20 sm:w-28 h-1 bg-[#16A3AD] rounded-full" />
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="ticket-wrapper max-w-[290px] sm:max-w-[420px] lg:max-w-[540px]">
              <div className="ticket rounded-[24px] sm:rounded-[40px] overflow-hidden aspect-square w-full bg-[#F7FAF9] cursor-pointer">
                <img
                  src={limpiezaProfesionalImg}
                  alt="Limpieza profesional de muebles y tapicería INNEVA en Armenia, Quindío"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
