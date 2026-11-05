import React from 'react';
import logoIcon from '../assets/images/inneva_icon_emblem_1789491801265.jpg';

interface InnevaLogoProps {
  variant?: 'horizontal' | 'mark' | 'full-badge';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  badgeClassName?: string;
}

export const InnevaLogo: React.FC<InnevaLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  badgeClassName = '',
}) => {
  const badgeSizes = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12 lg:w-[54px] lg:h-[54px]',
    md: 'w-13 h-13 lg:w-[60px] lg:h-[60px]',
    lg: 'w-18 h-18 lg:w-22 lg:h-22',
  };

  const Emblem = (
    <div
      className={`relative flex-shrink-0 rounded-full overflow-hidden bg-black p-0.5 shadow-md border border-[#72D6C8]/40 transition-transform duration-200 group-hover:scale-105 ${badgeSizes[size]} ${badgeClassName}`}
    >
      <img
        src={logoIcon}
        alt="INNEVA Soluciones - Logo oficial"
        className="w-full h-full object-cover rounded-full"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback to public asset if needed
          const target = e.target as HTMLImageElement;
          if (target.src !== '/assets/inneva-icon.jpg') {
            target.src = '/assets/inneva-icon.jpg';
          }
        }}
      />
    </div>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{Emblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 ${className}`}>
      {Emblem}
      <div className="flex flex-col justify-center leading-none select-none">
        {/* Línea 1: INNEVA -SOLUCIONES- */}
        <div className="flex items-baseline gap-1 sm:gap-1.5 whitespace-nowrap">
          <span
            className="font-bold text-white text-[16px] xs:text-[18px] sm:text-[20px] tracking-[0.1em] sm:tracking-[0.14em] leading-none"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            INNEVA
          </span>
          <span
            className="text-[9px] xs:text-[10px] sm:text-[11px] tracking-[0.12em] sm:tracking-[0.18em] text-[#72D6C8] font-semibold uppercase leading-none"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            -SOLUCIONES-
          </span>
        </div>

        {/* Línea 2: BIENESTAR PARA TI Y EL PLANETA */}
        <p
          className="text-[6.5px] xs:text-[7.5px] sm:text-[8.5px] lg:text-[9px] text-[#A7F3D0] tracking-[0.14em] sm:tracking-[0.18em] uppercase font-medium mt-1 leading-none whitespace-nowrap m-0 p-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          BIENESTAR PARA TI Y EL PLANETA
        </p>
      </div>
    </div>
  );
};

