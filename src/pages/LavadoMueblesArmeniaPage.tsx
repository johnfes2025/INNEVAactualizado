import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { PageSEO } from '../components/PageSEO';
import { Link } from '../navigation';
import { StarButton } from '../components/StarButton';
import {
  MapPin,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Droplets,
  Layers,
  HeartHandshake
} from 'lucide-react';

export const LavadoMueblesArmeniaPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola INNEVA SOLUCIONES, me gustaría cotizar el servicio de lavado de muebles a domicilio en Armenia.'
  );
  const whatsappUrl = `https://wa.me/573105356080?text=${whatsappMessage}`;

  const faqs = [
    {
      q: '¿Cómo funciona el servicio de lavado de muebles a domicilio en Armenia?',
      a: 'Nos desplazamos directamente a tu casa, apartamento o empresa en Armenia o municipios cercanos del Quindío con equipos para el proceso de inyección y extracción y productos ecoamigables. El proceso se realiza en el mismo sitio sin necesidad de trasladar tus muebles.',
    },
    {
      q: '¿Cuánto tiempo tarda el secado de los muebles y sofás?',
      a: 'Realizamos extracción de la humedad utilizada durante el proceso. El tiempo de secado puede variar según el material, las condiciones del espacio, la ventilación y la humedad presente después del proceso.',
    },
    {
      q: '¿Qué tipo de manchas se pueden retirar de la tapicería?',
      a: 'El proceso ayuda a retirar manchas comunes provocadas por derrame de bebidas, alimentos, grasa corporal, polvo acumulado y marcas dejadas por mascotas. Si bien muchas manchas se retiran por completo, el resultado depende del tiempo que lleve la mancha y de si fue tratada previamente con químicos corrosivos.',
    },
    {
      q: '¿Qué tipos de muebles y salas pueden lavarse?',
      a: 'Atendemos sofás de 2 y 3 puestos, esquineros modulares, salas completas, poltronas, sofás cama, sillas de comedor y butacas en telas como lino, microfibra, terciopelo, lona y chenille.',
    },
    {
      q: '¿Los productos que utilizan dañan los colores o los tejidos?',
      a: 'No. Empleamos productos profesionales ecoamigables que cuidan la integridad de las fibras y ayudan a revitalizar el aspecto y frescura del mueble.',
    },
    {
      q: '¿Cómo puedo solicitar una cotización por WhatsApp?',
      a: 'Solo debes enviarnos una foto o video corto de tu mueble o sala al 310 535 6080 indicando tu ubicación en Armenia. Te responderemos en minutos con una cotización clara y sin compromiso.',
    },
  ];

  const furnitureTypes = [
    {
      title: 'Sofás y esquineros modulares',
      desc: 'Limpieza minuciosa en asientos, espaldares, brazos y cojines desmontables para retirar suciedad acumulada por uso diario.',
    },
    {
      title: 'Salas completas y sofás cama',
      desc: 'Atención integral a estructuras fijas y mecanismos extensibles, cuidando las costuras y los puntos de mayor roce.',
    },
    {
      title: 'Sillas de comedor y oficina',
      desc: 'Eliminación de manchas frecuentes por comidas y roces constantes, devolviendo un aspecto prolijo a tu comedor o espacio de trabajo.',
    },
    {
      title: 'Poltronas, butacas y sillones',
      desc: 'Tratamiento delicado para piezas individuales de descanso, sillones reclinables y muebles decorativos.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Inspección de la tapicería',
      desc: 'Identificamos el tipo de fibra textil, puntos de mayor desgaste y manchas específicas para determinar el tratamiento adecuado.',
    },
    {
      step: '02',
      title: 'Aspirado previo de la superficie',
      desc: 'Retiramos partículas sueltas, polvo superficial y restos sólidos alojados entre las comisuras de los cojines.',
    },
    {
      step: '03',
      title: 'Aplicación de fórmula ecoamigable',
      desc: 'Pulverizamos un producto profesional suave que emulsiona la suciedad incrustada sin maltratar el tejido ni decolorarlo.',
    },
    {
      step: '04',
      title: 'Cepillado técnico controlado',
      desc: 'Frotamos suavemente con cepillos de cerdas adecuadas según la sensibilidad de la tela para desprender impurezas.',
    },
    {
      step: '05',
      title: 'Inyección y extracción controlada',
      desc: 'Aplicamos el proceso de inyección y extracción para retirar la suciedad disuelta y la humedad utilizada durante el proceso.',
    },
    {
      step: '06',
      title: 'Acabado y revisión final',
      desc: 'Peinamos las fibras para dejarlas uniformes y te entregamos el mueble listo para su fase de secado natural.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://innevasoluciones.online/lavado-muebles-armenia/#service',
        name: 'Lavado de muebles a domicilio en Armenia',
        description:
          'Servicio profesional de lavado y limpieza de muebles, sofás, salas, sillas y poltronas a domicilio en Armenia, Quindío para retirar suciedad, manchas y malos olores.',
        provider: {
          '@id': 'https://innevasoluciones.online/#business',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Armenia',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Quindío',
          },
        ],
        url: 'https://innevasoluciones.online/lavado-muebles-armenia/',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://innevasoluciones.online/lavado-muebles-armenia/#faq',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#082B30] text-[#EEF4F3] flex flex-col font-sans selection:bg-[#72D6C8] selection:text-[#082B30]">
      <PageSEO
        title="Lavado de Muebles a Domicilio en Armenia | INNEVA"
        description="Lavado de muebles, sofás y tapicería a domicilio en Armenia, Quindío. Limpieza profesional para retirar suciedad, manchas y malos olores. Cotiza por WhatsApp."
        canonicalUrl="https://innevasoluciones.online/lavado-muebles-armenia/"
        schema={schemaData}
      />

      <Header />

      <main className="flex-grow pt-24 sm:pt-28 lg:pt-32">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav aria-label="Breadcrumb" className="text-xs text-[#EEF4F3]/60 flex items-center gap-2">
            <Link href="/" className="hover:text-[#72D6C8] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-[#72D6C8] font-medium">Lavado de muebles en Armenia</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#72D6C8] bg-[#073F46] border border-[#0B6E75]/60 px-3 py-1.5 rounded-full mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Armenia, Quindío · Servicio a domicilio</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-5">
                  Lavado de muebles a domicilio en Armenia
                </h1>

                <p className="text-base sm:text-lg text-[#EEF4F3]/85 leading-relaxed mb-6 max-w-2xl">
                  En <strong>INNEVA SOLUCIONES</strong> realizamos la limpieza profesional de sofás, salas, poltronas y sillas mediante el proceso de inyección y extracción. Ayudamos a retirar suciedad acumulada, manchas comunes y malos olores cuidando la textura y el color de tus tapicerías.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EEF4F3]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0" />
                    <span>Limpieza mediante inyección y extracción</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EEF4F3]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0" />
                    <span>Productos profesionales ecoamigables</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EEF4F3]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0" />
                    <span>Extracción de la humedad utilizada</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EEF4F3]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0" />
                    <span>Servicio a domicilio en Armenia</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <StarButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Cotiza por WhatsApp
                  </StarButton>
                  <a
                    href="#proceso"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#0B6E75] hover:border-[#72D6C8] text-sm font-semibold text-white bg-[#073F46]/40 hover:bg-[#073F46] transition-all text-center"
                  >
                    <span>Conoce el proceso</span>
                    <ArrowRight className="w-4 h-4 text-[#72D6C8]" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-[#0B6E75]/50 bg-[#073F46] group">
                  <img
                    src="/lavado-de-muebles-2.webp"
                    alt="Lavado de muebles y sofás a domicilio en Armenia | INNEVA"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={600}
                    height={450}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B30]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#082B30]/80 backdrop-blur-md border border-white/10 text-xs text-[#EEF4F3]">
                    <span className="font-bold text-[#72D6C8] block mb-0.5">Servicio a domicilio en Armenia y Quindío</span>
                    <span>Cuidamos cada fibra mediante el proceso de inyección y extracción.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tipos de muebles */}
        <section className="py-14 sm:py-18 bg-[#072428] border-t border-[#0B6E75]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72D6C8] block mb-2">
                COBERTURA DE TAPICERÍAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Muebles y piezas que lavamos a domicilio
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEF4F3]/80">
                Cada tejido requiere una atención diferenciada. Evaluamos las características de la tela para aplicar la combinación correcta de cepillado suave y extracción.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {furnitureTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#073F46]/60 border border-[#0B6E75]/40 rounded-2xl p-6 flex flex-col justify-between hover:border-[#72D6C8]/60 transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0B6E75]/40 flex items-center justify-center text-[#72D6C8] mb-4">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#EEF4F3]/75 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso técnico */}
        <section id="proceso" className="py-16 sm:py-20 bg-[#082B30]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72D6C8] block mb-2">
                MÉTODO PASO A PASO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                ¿Cómo realizamos el lavado de muebles?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEF4F3]/80">
                Nuestro proceso combina aspirado técnico, productos ecoamigables y extracción por inyección-succión para lograr una limpieza visible sin deteriorar la tapicería.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative bg-[#073F46]/50 border border-[#0B6E75]/40 rounded-2xl p-6 hover:border-[#72D6C8]/50 transition-colors"
                >
                  <div className="text-2xl font-black text-[#72D6C8]/40 mb-3">{step.step}</div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#EEF4F3]/75 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manchas, suciedad y malos olores */}
        <section className="py-14 sm:py-18 bg-[#062024] border-t border-b border-[#0B6E75]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#72D6C8] block mb-2">
                  TRATAMIENTO ESPECIALIZADO
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Retiramos suciedad incrustada, manchas y malos olores
                </h2>
                <p className="text-sm sm:text-base text-[#EEF4F3]/80 leading-relaxed mb-5">
                  Con el paso del tiempo, el roce diario y los derrames accidentales, la tapicería de sofás y sillas acumula partículas que una aspiradora casera no logra desprender.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#EEF4F3]/85 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Manchas de comida y bebidas:</strong> Emulsión y extracción de restos de café, jugos, té y salsas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Marcas y olores de mascotas:</strong> Limpieza profesional que ayuda a neutralizar malos olores cuidando la tela.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Oscurecimiento por sudor y roce:</strong> Recuperación del aspecto prolijo en brazos y cabeceros.</span>
                  </li>
                </ul>
                <div className="p-4 rounded-xl bg-[#082B30] border border-[#0B6E75]/40 text-xs text-[#EEF4F3]/75">
                  <em>Nota importante:</em> Actuar a tiempo ante una mancha reciente mejora notablemente la probabilidad de retirarla por completo sin necesidad de frotar en exceso.
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-[#0B6E75]/50 shadow-xl bg-[#073F46]">
                  <img
                    src="/lavado-de-muebles-clean.webp"
                    alt="Resultado del proceso de lavado de muebles en Armenia"
                    className="w-full h-auto object-cover"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-[#082B30]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72D6C8] block mb-2">
                RESOLVEMOS TUS DUDAS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Preguntas frecuentes sobre lavado de muebles
              </h2>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#073F46]/50 border border-[#0B6E75]/40 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base hover:text-[#72D6C8] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#72D6C8] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-[#EEF4F3]/80 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enlaces cruzados naturales */}
        <section className="py-12 bg-[#061F22] border-t border-[#0B6E75]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#72D6C8] mb-6 text-center">
              Otros servicios profesionales de limpieza en Armenia
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <Link
                href="/lavado-colchones-armenia/"
                className="p-5 rounded-2xl bg-[#073F46]/50 hover:bg-[#073F46] border border-[#0B6E75]/40 hover:border-[#72D6C8] transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#72D6C8] transition-colors">
                    Lavado de colchones a domicilio en Armenia
                  </h3>
                  <p className="text-xs text-[#EEF4F3]/75 mt-1">
                    Limpieza profesional para recuperar frescura y retirar manchas en colchones de todos los tamaños.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#72D6C8] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
              </Link>

              <Link
                href="/lavado-alfombras-armenia/"
                className="p-5 rounded-2xl bg-[#073F46]/50 hover:bg-[#073F46] border border-[#0B6E75]/40 hover:border-[#72D6C8] transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#72D6C8] transition-colors">
                    Lavado de alfombras y tapetes en Armenia
                  </h3>
                  <p className="text-xs text-[#EEF4F3]/75 mt-1">
                    Cuidado especializado de tapetes decorativos y alfombras con procesos adaptados a cada fibra.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#72D6C8] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner Final */}
        <section className="py-14 sm:py-18 bg-gradient-to-b from-[#073F46] to-[#082B30] border-t border-[#0B6E75]/40 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              ¿Quieres renovar la limpieza de tus muebles en Armenia?
            </h2>
            <p className="text-sm sm:text-base text-[#EEF4F3]/85 mb-8 max-w-xl mx-auto">
              Escríbenos por WhatsApp con una foto de tu sofá o sala. Te entregamos una cotización exacta y agendamos tu servicio a domicilio.
            </p>
            <div className="flex justify-center">
              <StarButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar lavado de muebles por WhatsApp
              </StarButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
