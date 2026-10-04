import React from 'react';
import { IMAGES, WHATSAPP_LINK, LOCAL_HERO_VIDEO, HERO_POSTER_URL } from '../data/content';
import { ArrowRight, MapPin, Sparkles, Leaf, Users, Home } from 'lucide-react';
import { StarButton } from './StarButton';
import { FlipLink } from './ui/flip-links';
import { ShimmeringText } from './ui/shimmering-text';

export const Hero: React.FC = () => {

  const benefits = [
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-[#1CB3C2]" />,
      title: 'Tecnología especializada',
      desc: 'Equipos profesionales para limpieza y extracción',
    },
    {
      icon: <Leaf className="w-3.5 h-3.5 text-[#1CB3C2]" />,
      title: 'Productos ecoamigables',
      desc: 'Fórmulas seguras para tu familia',
    },
    {
      icon: <Users className="w-3.5 h-3.5 text-[#1CB3C2]" />,
      title: 'Servicio profesional',
      desc: 'Personal capacitado y de confianza',
    },
    {
      icon: <Home className="w-3.5 h-3.5 text-[#1CB3C2]" />,
      title: 'Atención a domicilio',
      desc: 'Llegamos hasta ti, cuando lo necesitas',
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col justify-between overflow-hidden bg-[#072B30] pt-[58px] sm:pt-[66px] lg:pt-0 min-h-[580px] lg:min-h-[630px] lg:h-[660px] xl:h-[700px]"
    >
      {/* 1. Mobile Format Only: Location Tag ABOVE the reproduction video */}
      <div className="lg:hidden w-full bg-[#072B30] px-5 sm:px-8 pt-3.5 pb-2.5">
        <div className="flex items-center gap-1.5 text-xs text-[#CBD5E1] font-normal">
          <MapPin className="w-3.5 h-3.5 text-[#1CB3C2]" />
          <span>Armenia, Quindío · Servicio profesional</span>
        </div>
      </div>

      {/* Video reproduction in Mobile with Animated Title OVERLAID on the left */}
      <div className="lg:hidden w-full relative bg-[#062428]">
        <div className="w-full aspect-[16/10] sm:aspect-video relative overflow-hidden shadow-inner">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={HERO_POSTER_URL}
            preload="metadata"
            className="w-full h-full object-cover object-[70%_center]"
          >
            <source src={LOCAL_HERO_VIDEO} type="video/webm" media="(max-width: 1023px)" />
          </video>

          {/* Smooth contrast gradient overlay for mobile video readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#072B30]/95 via-[#072B30]/65 to-transparent w-full sm:w-[75%] pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#072B30]/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#072B30] to-transparent pointer-events-none" />

          {/* Overlaid Title on the left of the video */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 sm:px-8 max-w-[290px] sm:max-w-[340px]">
            <div
              className="relative text-[19px] sm:text-[21px] font-bold font-inter tracking-[-0.03em] leading-[1.38] sm:leading-[1.34] drop-shadow-md"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              <span
                className="block text-[#CBD5E1] font-inter font-bold tracking-[-0.03em]"
                style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
              >
                <ShimmeringText
                  text="Limpieza profesional"
                  color="#CBD5E1"
                  shimmerColor="#E2E8F0"
                  duration={2.5}
                /> <br />
                <ShimmeringText
                  text="que"
                  color="#CBD5E1"
                  shimmerColor="#E2E8F0"
                  duration={2.5}
                />{' '}
                <FlipLink className="text-[#139AA8] font-bold">
                  devuelve la vida
                </FlipLink>{' '}
                <br />
                <ShimmeringText
                  text="a tus espacios."
                  color="#CBD5E1"
                  shimmerColor="#E2E8F0"
                  duration={2.5}
                />
              </span>
            </div>
            <div className="w-8 h-[2px] bg-[#18A2B0] mt-2 rounded-full" />
          </div>
        </div>
      </div>

      {/* 2. Desktop Format: Full horizontal video background matching reference */}
      <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER_URL}
          preload="metadata"
          className="w-full h-full object-cover object-[75%_center] xl:object-[78%_center]"
        >
          <source src={LOCAL_HERO_VIDEO} type="video/webm" media="(min-width: 1024px)" />
        </video>
        {/* Controlled Gradient Overlays for desktop that blend seamlessly into #072B30 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072B30] via-[#072B30]/85 via-42% to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#072B30]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#072B30]/70 to-transparent pointer-events-none" />
      </div>

      {/* 3. Text Content & Actions */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 w-full pt-4 sm:pt-6 lg:pt-28 xl:pt-32 pb-4 sm:pb-6 relative z-10">
        <div className="max-w-[520px]">
          
          {/* Desktop Kicker Location Tag */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#CBD5E1] font-normal mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#1CB3C2]" />
            <span>Armenia, Quindío · Servicio a domicilio</span>
          </div>

          {/* Single Unique Semantic H1 in the entire DOM with adequate visual prominence */}
          <h1
            className="text-xl sm:text-2xl lg:text-[38px] xl:text-[42px] font-bold font-inter text-white tracking-[-0.03em] leading-[1.24] lg:leading-[1.14] mb-3 text-center lg:text-left"
            style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
          >
            Lavado de muebles y colchones a domicilio en Armenia
          </h1>

          {/* Desktop Complementary Commercial Titular with Sparkles */}
          <div className="hidden lg:block mb-4">
            <div
              className="relative text-xl lg:text-[24px] font-bold font-inter tracking-[-0.02em] leading-snug text-[#72D6C8]"
              style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
            >
              <ShimmeringText
                text="Limpieza profesional que "
                color="#CBD5E1"
                shimmerColor="#E2E8F0"
                duration={2.5}
                className="text-[#CBD5E1]"
              />{' '}
              <FlipLink className="text-[#139AA8] font-bold">
                devuelve la vida
              </FlipLink>{' '}
              <ShimmeringText
                text="a tus espacios."
                color="#CBD5E1"
                shimmerColor="#E2E8F0"
                duration={2.5}
                className="text-[#CBD5E1]"
              />
            </div>

            {/* Short decorative accent line */}
            <div className="w-10 h-[2.5px] bg-[#18A2B0] mt-3 rounded-full" />
          </div>

          {/* Subtitle Paragraph (positioned below video in mobile) */}
          <p className="text-[15px] font-normal text-center lg:text-left text-[#E2E8F0]/85 max-w-[480px] leading-relaxed mb-5 sm:mb-6 mx-auto lg:mx-0">
            Lavamos y desinfectamos muebles, colchones, alfombras, tapicería y vehículos con tecnología especializada y productos ecoamigables en Armenia, Quindío.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-3">
            <StarButton
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 min-h-[44px] sm:min-h-[48px] rounded-full"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Cotiza por WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </StarButton>

            <a
              href="#servicios"
              id="hero-services-btn"
              className="uiverse-satyam-btn inline-flex items-center justify-center gap-2 bg-[#09353B]/50 hover:bg-[#09353B]/80 text-[#EEF4F3] text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] sm:min-h-[48px] rounded-full border border-white/20 transition-all duration-200"
            >
              <span className="satyam-text-wrapper">
                <span className="satyam-base-text">Descubre nuestros servicios</span>
                <span
                  className="satyam-hover-text"
                  data-text="Descubre nuestros servicios"
                  aria-hidden="true"
                >
                  Descubre nuestros servicios
                </span>
              </span>
            </a>
          </div>

          {/* Location Tag (Hidden in desktop as requested) */}
          <div className="hidden items-center gap-1.5 text-xs text-[#CBD5E1] font-normal">
            <MapPin className="w-3.5 h-3.5 text-[#1CB3C2]" />
            <span>Armenia, Quindío · Servicio profesional</span>
          </div>

        </div>
      </div>

      {/* 4. Translucent Bottom Benefits Bar (Desktop Only) */}
      <div className="hidden lg:block w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-6 lg:pb-7 pt-3 lg:pt-2 relative z-20">
        <div className="jaykdoe-stars-bg border border-white/15 rounded-2xl lg:rounded-full py-3 px-4 sm:px-7 shadow-2xl relative overflow-hidden">
          {/* Animated Starfield Background (From Uiverse.io by jaykdoe) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="stars-layer-1" />
            <div className="stars-layer-2" />
            <div className="stars-layer-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-2 relative z-10">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 px-2 py-0.5">
                <div className="w-8 h-8 rounded-full border border-[#1CB3C2]/40 flex items-center justify-center text-[#1CB3C2] flex-shrink-0 bg-white/5">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[12px] lg:text-[12.5px] font-bold text-white tracking-tight leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10.5px] text-[#CBD5E1]/80 truncate mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
