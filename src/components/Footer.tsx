import React from 'react';
import { InnevaLogo } from './InnevaLogo';
import { DISPLAY_PHONE, WHATSAPP_LINK } from '../data/content';
import { MapPin, Phone, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { Link } from '../navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#052126] text-[#EEF4F3] pt-16 pb-12 border-t border-[#0B6E75]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <InnevaLogo size="md" className="mb-4" />
            <p className="text-sm text-[#EEF4F3]/75 leading-relaxed max-w-sm mb-6">
              Empresa líder en servicios de limpieza profesional de muebles, colchones, tapicerías y vehículos en Armenia y Quindío. Cuidamos de tu hogar y del medio ambiente con tecnología de inyección-extracción y fórmulas biodegradables.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#72D6C8] font-semibold bg-[#082B30] px-3.5 py-1.5 rounded-full border border-[#0B6E75]/40">
              <ShieldCheck className="w-4 h-4 text-[#8FE300]" />
              <span>Servicio profesional en el Quindío</span>
            </div>
          </div>

          {/* Col 2: Servicios Principales (3 cols) */}
          <div className="hidden md:block lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#72D6C8]">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EEF4F3]/80">
              <li>
                <Link href="/lavado-muebles-armenia/" className="hover:text-white transition-colors">
                  Lavado de muebles
                </Link>
              </li>
              <li>
                <Link href="/lavado-colchones-armenia/" className="hover:text-white transition-colors">
                  Lavado de colchones
                </Link>
              </li>
              <li>
                <Link href="/lavado-alfombras-armenia/" className="hover:text-white transition-colors">
                  Lavado de alfombras y tapetes
                </Link>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Detallado automotriz</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Cuidado de cuero</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">Persianas & Paneles</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto directo (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 text-[#72D6C8]">
              Contacto
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#EEF4F3]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#72D6C8] flex-shrink-0 mt-0.5" />
                <span>Cl. 30 # CRA 30, San Diego, 630007, Armenia, Quindío, Colombia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#72D6C8] flex-shrink-0" />
                <a href="tel:+573105356080" className="hover:text-white transition-colors font-semibold">
                  +57 {DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#72D6C8] flex-shrink-0" />
                <a
                  href="https://instagram.com/innevasoluciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @innevasoluciones
                </a>
              </li>
            </ul>

            <div className="mt-10 sm:mt-12 pb-6 sm:pb-8 flex justify-center w-full">
              <a
                href="tel:+573105356080"
                className="uiverse-shrinil-btn"
                aria-label="Llamar a Inneva Soluciones ahora"
              >
                <Phone className="w-5 h-5 animate-[phoneShake_3s_ease-in-out_infinite] relative z-10" />
                <span className="relative z-10">¡Llama ya!</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EEF4F3]/60">
          <div>
            © 2026 INNEVA SOLUCIONES. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Armenia, Quindío · Colombia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
