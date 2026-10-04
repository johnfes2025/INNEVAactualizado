import React, { useEffect, useState } from "react";

export interface FlipLinkProps {
  children: string;
  href?: string;
  className?: string;
  autoFlip?: boolean;
  interval?: number;
}

export const FlipLink: React.FC<FlipLinkProps> = ({
  children,
  href,
  className = "",
  autoFlip = true,
  interval = 3000,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoFlip) return;
    const timer = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, interval);
    return () => clearInterval(timer);
  }, [autoFlip, interval]);

  const active = isHovered || isFlipped;

  const content = (
    <span
      className={`group relative inline-block overflow-hidden whitespace-nowrap align-bottom ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsFlipped((prev) => !prev)}
      style={{
        lineHeight: "1.25",
      }}
    >
      {/* First layer of letters */}
      <span className="inline-flex" aria-hidden={active}>
        {children.split("").map((letter, i) => (
          <span
            key={`top-${i}`}
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
            style={{
              transform: active ? "translateY(-115%)" : "translateY(0%)",
              transitionDelay: `${i * 30}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>

      {/* Second layer of letters (flipping from below) */}
      <span className="absolute inset-0 inline-flex" aria-hidden={!active}>
        {children.split("").map((letter, i) => (
          <span
            key={`bot-${i}`}
            className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform"
            style={{
              transform: active ? "translateY(0%)" : "translateY(115%)",
              transitionDelay: `${i * 30}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export const Component = () => {
  return (
    <section className="grid place-content-center gap-2 bg-background w-full h-screen text-black">
      <FlipLink href="https://x.com/thisis_vaib">Twitter</FlipLink>
      <FlipLink href="https://linkedin.com/in/vaib215">Linkedin</FlipLink>
      <FlipLink href="https://github.com/vaib215">Github</FlipLink>
      <FlipLink href="https://instagram.com/thisis_vaib">Instagram</FlipLink>
    </section>
  );
};
