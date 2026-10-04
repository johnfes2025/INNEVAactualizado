import React, { useState, useEffect } from 'react';
import { InnevaLogo } from './InnevaLogo';
import { WHATSAPP_LINK } from '../data/content';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { StarButton } from './StarButton';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero', active: true },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Preguntas frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#072B30]/95 backdrop-blur-md shadow-lg border-b border-[#0B6E75]/30 py-3'
          : 'bg-[#072B30] lg:bg-transparent py-3.5 sm:py-4 lg:py-6 border-b border-[#0B6E75]/20 lg:border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center group transition-transform duration-200 hover:scale-[1.02]">
          <InnevaLogo size="sm" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] lg:text-[15px] tracking-wide transition-colors duration-200 ${
                link.active
                  ? 'text-white font-semibold relative pb-1 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#168B99] after:rounded-full'
                  : 'text-[#E2E8F0]/90 hover:text-white font-medium'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <StarButton
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="text-xs lg:text-sm !py-2.5 !px-5"
          >
            <span className="flex items-center gap-1.5">
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Cotiza por WhatsApp</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </StarButton>
        </div>

        {/* Mobile menu button & direct call action */}
        <div className="flex items-center gap-2.5 md:hidden">
          <a
            href="tel:+573105356080"
            className="p-2.5 bg-[#8FE300] hover:bg-[#9ef50f] text-[#082B30] rounded-full font-bold shadow-md transition-transform active:scale-95 flex items-center justify-center"
            aria-label="Llamar a INNEVA SOLUCIONES (310 535 6080)"
            title="Llamar ahora"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-white hover:text-[#72D6C8] focus:outline-none transition-colors"
            aria-label="Alternar menú"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#072B30] border-b border-[#0B6E75] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                link.active ? 'text-[#72D6C8] bg-white/5 font-bold' : 'text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <StarButton
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full !py-3 text-sm"
            >
              <span>Cotiza por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </StarButton>
          </div>
        </div>
      )}
    </header>
  );
};
