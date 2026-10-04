import React from 'react';

interface StarButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
  className?: string;
  onLightBg?: boolean;
}

const StarSvg: React.FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    aria-hidden="true"
  >
    <path
      className="fil0"
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

const Stars: React.FC = () => (
  <>
    <StarSvg className="star-1" />
    <StarSvg className="star-2" />
    <StarSvg className="star-3" />
    <StarSvg className="star-4" />
    <StarSvg className="star-5" />
    <StarSvg className="star-6" />
  </>
);

export const StarButton: React.FC<StarButtonProps> = ({
  children,
  href,
  target,
  rel,
  type = 'button',
  onClick,
  id,
  className = '',
  onLightBg = false,
}) => {
  const combinedClasses = `star-btn ${onLightBg ? 'star-btn-on-light' : ''} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        id={id}
        onClick={onClick}
        className={combinedClasses}
      >
        <Stars />
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={combinedClasses}
    >
      <Stars />
      {children}
    </button>
  );
};
