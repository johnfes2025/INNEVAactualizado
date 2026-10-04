import React, { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  schema?: object;
}

export const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = 'https://innevasoluciones.online/og-image.webp',
  schema,
}) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute: string, value: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 3. Meta description
    setMetaTag('name', 'description', description);

    // 4. OpenGraph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Twitter
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 7. Inject Schema JSON-LD if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      const scriptId = 'page-specific-schema';
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }

      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    return () => {
      // Clean up injected script if leaving
      const el = document.getElementById('page-specific-schema');
      if (el) el.remove();
    };
  }, [title, description, canonicalUrl, ogImage, schema]);

  return null;
};
