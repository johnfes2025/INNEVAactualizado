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
    <div className={`inline-flex items-center gap-2.5 lg:gap-3 ${className}`}>
      {Emblem}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-[0.14em] text-white text-[20px]">
          <span
            className="text-left font-bold mt-0 ml-[5px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            INNEVA
          </span>
        </div>
        <div className="flex items-center justify-between text-[10px] tracking-[0.22em] text-[#72D6C8] font-semibold mt-0.5 uppercase">
          <span className="h-[1px] w-2 lg:w-2.5 bg-[#72D6C8]/60 inline-block mr-1"></span>
          <span className="text-[10px]">SOLUCIONES</span>
          <span className="h-[1px] w-2 lg:w-2.5 bg-[#72D6C8]/60 inline-block ml-1"></span>
        </div>
        {variant === 'full-badge' && (
          <span className="text-[7px] lg:text-[8px] text-[#A7F3D0] tracking-wide mt-0.5 italic">
            Bienestar para ti y el planeta
          </span>
        )}
      </div>
    </div>
  );
};

