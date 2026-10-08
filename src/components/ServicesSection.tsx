import React, { useState } from 'react';
import { SERVICES, WHATSAPP_LINK, IMAGES } from '../data/content';
import { ArrowRight, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { Link } from '../navigation';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedSurfaces, setExpandedSurfaces] = useState<Record<string, boolean>>({});

  const toggleSurfaces = (id: string) => {
    setExpandedSurfaces((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getServiceWhatsAppUrl = (title: string) => {
    const text = `Hola INNEVA SOLUCIONES, me gustaría cotizar el servicio de *${title}*. ¿Me podrían brindar más información?`;
    return `https://wa.me/573105356080?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 jaykdoe-stars-bg text-[#EEF4F3] relative overflow-hidden">
      {/* Animated Starfield Background (From Uiverse.io by jaykdoe) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      {/* Background subtle ambient glow */}
      <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] bg-[#0B6E75]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-60 w-[500px] h-[500px] bg-[#72D6C8]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <div className="inline-block text-[15px] font-bold tracking-[0.18em] uppercase text-[#72D6C8] mb-3 text-left">
            NUESTROS SERVICIOS
          </div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Una limpieza profesional para cada superficie.
          </div>
          <p className="text-[17px] text-[#EEF4F3]/75 font-normal">
            Desde tu sofá hasta el interior de tu vehículo, cuidamos cada superficie con procesos especializados.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map((service) => {
            const isExpanded = !!expandedSurfaces[service.id];
            const isPriority = ['muebles', 'colchones', 'alfombras'].includes(service.id);
            const seoTitle =
              service.id === 'muebles'
                ? 'Lavado de muebles a domicilio en Armenia'
                : service.id === 'colchones'
                ? 'Limpieza profesional de colchones en Armenia'
                : service.id === 'alfombras'
                ? 'Lavado de alfombras y tapetes en Armenia'
                : undefined;

            const getServiceAlt = (id: string, title: string) => {
              switch (id) {
                case 'muebles':
                  return 'Lavado de muebles y tapicería a domicilio en Armenia | INNEVA';
                case 'colchones':
                  return 'Limpieza profesional de colchones a domicilio en Armenia | INNEVA';
                case 'alfombras':
                  return 'Lavado de alfombras y tapetes a domicilio en Armenia | INNEVA';
                case 'vehiculos':
                  return 'Detallado y limpieza de interiores de vehículos en Armenia | INNEVA';
                case 'cuero':
                  return 'Limpieza e hidratación de muebles de cuero en Armenia | INNEVA';
                case 'persianas':
                  return 'Limpieza de persianas y paneles japoneses en Armenia | INNEVA';
                case 'cortinas':
                  return 'Limpieza profesional de cortinas en Armenia | INNEVA';
                case 'pisos':
                  return 'Limpieza y tratamiento de pisos en Armenia | INNEVA';
                case 'motos':
                  return 'Limpieza y detallado de motos y cascos en Armenia | INNEVA';
                default:
                  return `${title} - INNEVA Armenia`;
              }
            };

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group flex flex-col justify-between bg-[#073F46]/75 hover:bg-[#073F46]/95 border border-[#0B6E75]/50 hover:border-[#72D6C8]/60 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1.5"
              >
                {/* Full-bleed Image Container */}
                <div className="relative w-full aspect-[4/3] bg-[#082B30] overflow-hidden">
                  <img
                    src={service.image}
                    alt={getServiceAlt(service.id, service.title)}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (service.id === 'muebles') {
                        (e.currentTarget as HTMLImageElement).src = '/lavado-de-muebles.avif';
                      } else if (service.id === 'colchones') {
                        (e.currentTarget as HTMLImageElement).src = '/lavado-de-colchones-2.webp';
                      } else if (service.id === 'alfombras') {
                        (e.currentTarget as HTMLImageElement).src = '/lavado-de-tapetes-2.webp';
                      } else if (service.id === 'vehiculos') {
                        (e.currentTarget as HTMLImageElement).src = '/detailing-de-autos.avif';
                      } else if (service.id === 'cuero') {
                        (e.currentTarget as HTMLImageElement).src = '/limpieza-de-cuero.avif';
                      } else if (service.id === 'persianas') {
                        (e.currentTarget as HTMLImageElement).src = '/limpieza-de-persianas.avif';
                      } else if (service.id === 'pisos') {
                        (e.currentTarget as HTMLImageElement).src = '/limpieza-de-pisos.avif';
                      } else if (service.id === 'motos') {
                        (e.currentTarget as HTMLImageElement).src = '/lavado-de-motos-2.webp';
                      } else if (service.id === 'cortinas') {
                        (e.currentTarget as HTMLImageElement).src = '/limpieza-de-cortinas.webp';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073F46]/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Small cyan accent bar */}
                    <div className="w-10 h-1 bg-[#139AA8] rounded-full mb-3.5" />

                    {/* Title with semantic hierarchy */}
                    {isPriority ? (
                      <h2
                        title={seoTitle}
                        aria-label={seoTitle}
                        className="text-xl sm:text-[22px] font-bold text-white mb-2.5 tracking-tight group-hover:text-[#72D6C8] transition-colors leading-snug"
                      >
                        <span className="sr-only">{seoTitle}: </span>
                        {service.title}
                      </h2>
                    ) : (
                      <h3 className="text-xl sm:text-[22px] font-bold text-white mb-2.5 tracking-tight group-hover:text-[#72D6C8] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    )}

                    {/* Description */}
                    <p className="text-sm text-[#EEF4F3]/80 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Expandable Surfaces Toggle */}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => toggleSurfaces(service.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#72D6C8] hover:text-white transition-colors cursor-pointer py-1 group/toggle"
                      >
                        <span>{isExpanded ? '- Ocultar superficies' : '+ Ver superficies'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? '-rotate-90' : 'group-hover/toggle:translate-x-0.5'}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 pt-2.5 border-t border-white/10 space-y-1.5 animate-in fade-in duration-200">
                          {service.surfaces.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-[#EEF4F3]/85">
                              <Check className="w-3.5 h-3.5 text-[#8FE300] flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    {service.id === 'muebles' && (
                      <div className="mb-3">
                        <Link
                          href="/lavado-muebles-armenia/"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#72D6C8] hover:text-white transition-colors"
                        >
                          <span>Ver servicio de lavado de muebles en Armenia</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                    {service.id === 'colchones' && (
                      <div className="mb-3">
                        <Link
                          href="/lavado-colchones-armenia/"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#72D6C8] hover:text-white transition-colors"
                        >
                          <span>Ver servicio de lavado de colchones en Armenia</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                    {service.id === 'alfombras' && (
                      <div className="mb-3">
                        <Link
                          href="/lavado-alfombras-armenia/"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#72D6C8] hover:text-white transition-colors"
                        >
                          <span>Ver servicio de lavado de alfombras en Armenia</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uiverse-adeladel-btn w-full"
                    >
                      <span className="relative z-10">{service.ctaText}</span>
                      <ArrowRight className="uiverse-adeladel-icon relative z-10" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
