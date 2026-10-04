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
  Droplets,
  Layers,
  Clock,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export const LavadoAlfombrasArmeniaPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola INNEVA SOLUCIONES, me gustaría cotizar el servicio de lavado de alfombras y tapetes a domicilio en Armenia.'
  );
  const whatsappUrl = `https://wa.me/573105356080?text=${whatsappMessage}`;

  const faqs = [
    {
      q: '¿Cómo se realiza el lavado de alfombras y tapetes a domicilio?',
      a: 'Realizamos una evaluación previa del material y del estado de la superficie. Si es apto para el servicio a domicilio, realizamos un proceso de limpieza mediante inyección y extracción con productos profesionales ecoamigables para retirar la suciedad y la humedad utilizada.',
    },
    {
      q: '¿Se puede lavar cualquier tipo de alfombra o tapete sin evaluación previa?',
      a: 'No. Es indispensable realizar una evaluación previa del material. Fibras sintéticas (polipropileno, poliéster, nylon) responden de forma diferente a fibras naturales (lana, yute, seda o viscosa). Evaluamos la estabilidad del tinte y la estructura para definir si el procedimiento es viable y seguro para la pieza.',
    },
    {
      q: '¿Cuánto tiempo tarda el secado de un tapete o alfombra?',
      a: 'Realizamos extracción de la humedad utilizada durante el proceso. El tiempo de secado puede variar según el material, las condiciones del espacio, la ventilación y la humedad presente después del proceso.',
    },
    {
      q: '¿El servicio ayuda a retirar manchas de café, vino o comida?',
      a: 'Ayuda a diluir y retirar manchas comunes recientes. En manchas antiguas o que han sido alteradas con cloro o detergentes corrosivos caseros, se evalúa el grado de penetración en la fibra para brindarte una expectativa real y honesta del resultado.',
    },
    {
      q: '¿Cómo controlan los malos olores en alfombras?',
      a: 'El proceso de inyección y extracción ayuda a retirar suciedad acumulada y malos olores en la superficie de la alfombra o tapete cuidando las fibras.',
    },
    {
      q: '¿Cómo puedo cotizar el lavado de mi tapete por WhatsApp?',
      a: 'Toma una foto completa de tu alfombra o tapete, indícanos sus medidas aproximadas (ej. 2x1.5 m) y tu barrio en Armenia o Quindío al 310 535 6080. Te enviaremos una cotización detallada.',
    },
  ];

  const rugTypes = [
    {
      title: 'Tapetes sintéticos de sala',
      desc: 'Polipropileno, poliéster y microfibra. Adaptamos el proceso de inyección y extracción según las características de la fibra.',
    },
    {
      title: 'Alfombras de pelo largo (Shaggy)',
      desc: 'Requieren aspirado previo cuidadoso y proceso de inyección y extracción adaptado a la densidad de la fibra.',
    },
    {
      title: 'Alfombras modulares y fijas',
      desc: 'Limpieza sobre áreas comerciales o residenciales de alto tránsito peatonal, retirando la suciedad de caminos y pasillos.',
    },
    {
      title: 'Tapetes decorativos de comedor',
      desc: 'Tratamiento focalizado para manchas por caídas de alimentos, grasas y derrames de bebidas.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Evaluación previa del material',
      desc: 'Comprobamos el tipo de fibra, firmeza de los tintes y tipo de reverso para confirmar el método de limpieza más seguro.',
    },
    {
      step: '02',
      title: 'Aspirado previo de la superficie',
      desc: 'Extraemos partículas secas, gravilla y polvillo acumulado en la base de la trama antes de humedecer la pieza.',
    },
    {
      step: '03',
      title: 'Aplicación de fórmula profesional',
      desc: 'Aplicamos productos profesionales ecoamigables para facilitar la disolución de la suciedad cuidando la superficie.',
    },
    {
      step: '04',
      title: 'Cepillado suave y controlado',
      desc: 'Friccionamos con cerdas específicas para soltar la mugre adherida a cada filamento sin desgastar el tejido.',
    },
    {
      step: '05',
      title: 'Inyección y extracción',
      desc: 'Realizamos el proceso de inyección y extracción para retirar la suciedad y la humedad utilizada durante el proceso.',
    },
    {
      step: '06',
      title: 'Peinado de fibras y ventilación',
      desc: 'Alineamos el sentido del pelo del tapete para un secado uniforme y una presentación impecable.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://innevasoluciones.online/lavado-alfombras-armenia#service',
        name: 'Lavado de alfombras y tapetes a domicilio en Armenia',
        description:
          'Servicio profesional de lavado de alfombras y tapetes a domicilio en Armenia, Quindío para retirar suciedad, manchas y malos olores cuidando la superficie.',
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
        url: 'https://innevasoluciones.online/lavado-alfombras-armenia',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://innevasoluciones.online/lavado-alfombras-armenia#faq',
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
        title="Lavado de Alfombras y Tapetes en Armenia | INNEVA"
        description="Lavado de alfombras y tapetes a domicilio en Armenia, Quindío. Limpieza profesional para retirar suciedad, manchas y malos olores cuidando la superficie. Cotiza por WhatsApp."
        canonicalUrl="https://innevasoluciones.online/lavado-alfombras-armenia"
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
            <span className="text-[#72D6C8] font-medium">Lavado de alfombras en Armenia</span>
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
                  Lavado de alfombras y tapetes a domicilio en Armenia
                </h1>

                <p className="text-base sm:text-lg text-[#EEF4F3]/85 leading-relaxed mb-6 max-w-2xl">
                  En <strong>INNEVA SOLUCIONES</strong> proporcionamos limpieza profesional de alfombras y tapetes a domicilio en Armenia, Quindío. Mediante evaluación previa de fibras y tecnología de inyección-extracción, retiramos suciedad, manchas y malos olores cuidando la textura, los tintes y la base de la pieza.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EEF4F3]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0" />
                    <span>Evaluación previa de fibras textiles</span>
                  </div>
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
                    src="/lavado-de-tapetes-2.webp"
                    alt="Lavado de alfombras y tapetes a domicilio en Armenia | INNEVA"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={600}
                    height={450}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B30]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#082B30]/80 backdrop-blur-md border border-white/10 text-xs text-[#EEF4F3]">
                    <span className="font-bold text-[#72D6C8] block mb-0.5">Atención en Armenia y el Eje Cafetero</span>
                    <span>Cuidado de superficies con evaluación previa de cada pieza.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Aviso de evaluación previa */}
        <section className="py-6 bg-[#062024] border-t border-b border-[#0B6E75]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start sm:items-center gap-3.5 p-4 rounded-2xl bg-[#073F46]/60 border border-[#0B6E75]/60 text-xs sm:text-sm text-[#EEF4F3]/90">
              <AlertTriangle className="w-5 h-5 text-[#72D6C8] flex-shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <strong>Criterio profesional de INNEVA:</strong> No todas las alfombras admiten el mismo tratamiento. Antes de lavar, revisamos la etiqueta del fabricante, el tipo de teñido y el material (lana, seda, polipropileno, yute) para aplicar el procedimiento adecuado o advertirte con total honestidad sobre las limitaciones técnicas.
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de alfombras */}
        <section className="py-14 sm:py-18 bg-[#072428]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72D6C8] block mb-2">
                VARIEDAD DE SUPERFICIES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Tipos de alfombras y tapetes que atendemos
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEF4F3]/80">
                Ajustamos la técnica, la humedad y el cepillo según el calibre y la densidad del tejido para asegurar resultados visibles y seguros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rugTypes.map((item, idx) => (
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
                ¿Cómo realizamos el lavado de alfombras y tapetes?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEF4F3]/80">
                Procedimiento metódico que combina aspirado previo, productos profesionales ecoamigables y proceso de inyección y extracción.
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
                  RECUPERACIÓN DE FIBRAS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Retiro de suciedad pisada, manchas y malos olores
                </h2>
                <p className="text-sm sm:text-base text-[#EEF4F3]/80 leading-relaxed mb-5">
                  Las alfombras actúan como filtros naturales del hogar, reteniendo polvo, arena y derrames accidentales. El proceso de inyección y extracción remueve la suciedad acumulada sin desgastar el pelo ni arruinar los ribetes.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#EEF4F3]/85 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Manchas de tránsito diario:</strong> Disolución y extracción de franjas oscuras en zonas de pisada frecuente.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Derrames comunes:</strong> Tratamiento especial para restos de café, gaseosas y salsas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Neutralización de olores:</strong> Productos desodorizantes formulados para textiles que dejan un aroma neutro y fresco.</span>
                  </li>
                </ul>
                <div className="p-4 rounded-xl bg-[#082B30] border border-[#0B6E75]/40 text-xs text-[#EEF4F3]/75">
                  <em>Cuidado del suelo:</em> Protegemos la zona de trabajo alrededor de la alfombra para evitar salpicaduras sobre pisos de madera o laminados.
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-[#0B6E75]/50 shadow-xl bg-[#073F46]">
                  <img
                    src="/lavado-de-tapetes-2.webp"
                    alt="Limpieza profesional de tapete en Armenia Quindío"
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
                PREGUNTAS FRECUENTES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Dudas sobre el lavado de alfombras y tapetes
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
              Otros servicios de limpieza profesional en Armenia
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <Link
                href="/lavado-muebles-armenia"
                className="p-5 rounded-2xl bg-[#073F46]/50 hover:bg-[#073F46] border border-[#0B6E75]/40 hover:border-[#72D6C8] transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#72D6C8] transition-colors">
                    Lavado de muebles a domicilio en Armenia
                  </h3>
                  <p className="text-xs text-[#EEF4F3]/75 mt-1">
                    Limpieza profesional para sofás, salas modulares, sillones y sillas de comedor mediante inyección y extracción.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#72D6C8] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
              </Link>

              <Link
                href="/lavado-colchones-armenia"
                className="p-5 rounded-2xl bg-[#073F46]/50 hover:bg-[#073F46] border border-[#0B6E75]/40 hover:border-[#72D6C8] transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#72D6C8] transition-colors">
                    Lavado de colchones a domicilio en Armenia
                  </h3>
                  <p className="text-xs text-[#EEF4F3]/75 mt-1">
                    Cuidado higiénico para colchones sencillos, dobles, Queen y King size directo en tu habitación.
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
              ¿Deseas cotizar la limpieza de tu alfombra o tapete?
            </h2>
            <p className="text-sm sm:text-base text-[#EEF4F3]/85 mb-8 max-w-xl mx-auto">
              Escríbenos por WhatsApp con una foto del tapete y sus medidas estimadas para brindarte asesoría y una cotización sin compromiso en Armenia.
            </p>
            <div className="flex justify-center">
              <StarButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar lavado de alfombra por WhatsApp
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
