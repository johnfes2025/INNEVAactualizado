/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePath } from './navigation';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { MattressSection } from './components/MattressSection';
import { VehiclesSection } from './components/VehiclesSection';
import { RealResultsSection } from './components/RealResultsSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaPrincipalSection } from './components/CtaPrincipalSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
const LavadoMueblesArmeniaPage = React.lazy(() =>
  import('./pages/LavadoMueblesArmeniaPage').then((m) => ({ default: m.LavadoMueblesArmeniaPage }))
);
const LavadoColchonesArmeniaPage = React.lazy(() =>
  import('./pages/LavadoColchonesArmeniaPage').then((m) => ({ default: m.LavadoColchonesArmeniaPage }))
);
const LavadoAlfombrasArmeniaPage = React.lazy(() =>
  import('./pages/LavadoAlfombrasArmeniaPage').then((m) => ({ default: m.LavadoAlfombrasArmeniaPage }))
);

export default function App() {
  const [currentPath] = usePath();

  if (currentPath === '/lavado-muebles-armenia/' || currentPath === '/lavado-muebles-armenia') {
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#082B30]" />}>
        <LavadoMueblesArmeniaPage />
      </React.Suspense>
    );
  }

  if (currentPath === '/lavado-colchones-armenia/' || currentPath === '/lavado-colchones-armenia') {
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#082B30]" />}>
        <LavadoColchonesArmeniaPage />
      </React.Suspense>
    );
  }

  if (currentPath === '/lavado-alfombras-armenia/' || currentPath === '/lavado-alfombras-armenia') {
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#082B30]" />}>
        <LavadoAlfombrasArmeniaPage />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-[#082B30] text-[#EEF4F3] flex flex-col font-sans selection:bg-[#72D6C8] selection:text-[#082B30]">
      {/* 1. Sticky Navigation Header (Transparent over Hero) */}
      <Header />

      {/* Main Content Sections in exact reference order */}
      <main className="flex-grow">
        {/* 2. Hero Section (With integrated background animation & translucent benefits bar) */}
        <Hero />

        {/* 3. Intro Section: "No solo limpiamos..." */}
        <IntroSection />

        {/* 4. Services Grid: 01 to 08 */}
        <ServicesSection />

        {/* 5. Mattress Section: "DESCANSO MÁS LIMPIO" */}
        <MattressSection />

        {/* 6. Vehicles Section: "DETALLADO AUTOMOTRIZ" */}
        <VehiclesSection />

        {/* 7. Real Results: Interactive Before/After comparison slider */}
        <RealResultsSection />

        {/* 8. Process Steps: "ASÍ TRABAJAMOS" */}
        <ProcessSection />

        {/* 9. Testimonials & Google Rating: "LO QUE DICEN" */}
        <TestimonialsSection />

        {/* 13. Primary CTA Banner: "¿Tu sofá, colchón o vehículo necesita una limpieza profesional?" */}
        <CtaPrincipalSection />

        {/* 14. FAQs: "PREGUNTAS FRECUENTES" */}
        <FaqSection />

        {/* 15. Contact & Quote Form: "Hablemos de tu próximo servicio de limpieza." */}
        <ContactSection />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* 17. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
