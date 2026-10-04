import React from 'react';
import { WHATSAPP_LINK, DISPLAY_PHONE } from '../data/content';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { StarButton } from './StarButton';

export const CtaPrincipalSection: React.FC = () => {
  return (
    <section className="py-20 radar-pattern text-white relative overflow-hidden border-y border-[#0B6E75]/40">
      {/* Glowing Center Dot */}
      <div className="radar-center" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Glow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082B30] border border-[#72D6C8]/40 text-xs font-bold tracking-widest text-[#72D6C8] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#8FE300]" />
          <span>AGENDA HOY TU SERVICIO EN ARMENIA</span>
        </div>

        {/* Title */}
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 max-w-3xl mx-auto">
          ¿Tu sofá, colchón o vehículo necesita una limpieza profesional?
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#EEF4F3]/80 max-w-2xl mx-auto mb-9">
          Cuéntanos qué necesitas y recibe atención personalizada directamente por WhatsApp en minutos. Cotización inmediata sin compromiso.
        </p>

        {/* CTA Button & Phone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-6">
          <StarButton
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="principal-cta-whatsapp"
            className="w-full sm:w-auto !py-3.5 sm:!py-4 !px-8 sm:!px-9 text-base sm:text-lg"
          >
            <span>Hablar con INNEVA</span>
            <ArrowRight className="w-5 h-5" />
          </StarButton>

          <a
            href="tel:+573105356080"
            className="shrinil-effect-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#082B30]/80 text-[#EEF4F3] text-base font-semibold px-7 py-4 rounded-full border border-[#72D6C8]/30"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Llamar: {DISPLAY_PHONE}</span>
          </a>
        </div>

      </div>
    </section>
  );
};


