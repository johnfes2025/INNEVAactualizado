import React, { useState, useEffect } from 'react';

// Normalizes path ensuring trailing slash (e.g. '/lavado-muebles-armenia/' and '/')
export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const clean = path.split('?')[0].split('#')[0].replace(/\/+$/, '');
  return clean ? `${clean}/` : '/';
}

export function usePath(): [string, (to: string) => void] {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('app-navigation', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('app-navigation', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    if (typeof window === 'undefined') return;

    if (to.startsWith('/#') || to.startsWith('#')) {
      const hash = to.startsWith('/#') ? to.substring(1) : to;
      const targetId = hash.replace('#', '');
      
      if (normalizePath(window.location.pathname) !== '/') {
        window.history.pushState({}, '', '/' + hash);
        window.dispatchEvent(new Event('app-navigation'));
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState({}, '', hash);
        }
      }
      return;
    }

    if (normalizePath(window.location.pathname) !== normalizePath(to)) {
      const targetUrl = to.startsWith('/') && !to.includes('#') && !to.includes('?') && !to.endsWith('/') ? `${to}/` : to;
      window.history.pushState({}, '', targetUrl);
      window.dispatchEvent(new Event('app-navigation'));
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return [path, navigate];
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, onClick, children, ...rest }) => {
  const [, navigate] = usePath();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Allow middle click / new tab modifiers
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    // Only intercept local internal paths
    if (href.startsWith('/') || href.startsWith('#')) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
