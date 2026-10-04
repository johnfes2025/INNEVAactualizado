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
  AlertCircle
} from 'lucide-react';

export const LavadoColchonesArmeniaPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    'Hola INNEVA SOLUCIONES, me gustaría cotizar el servicio de lavado de colchones a domicilio en Armenia.'
  );
  const whatsappUrl = `https://wa.me/573105356080?text=${whatsappMessage}`;

  const faqs = [
    {
      q: '¿Cómo se realiza el lavado de colchones a domicilio en Armenia?',
      a: 'Nos trasladamos hasta tu hogar para realizar el servicio directamente en tu habitación. Realizamos un proceso de limpieza mediante inyección y extracción con productos profesionales ecoamigables para disolver y succionar la suciedad retenida en la tela de la superficie.',
    },
    {
      q: '¿Cuánto tiempo tarda en secarse el colchón tras el lavado?',
      a: 'Realizamos extracción de la humedad utilizada durante el proceso. El tiempo de secado puede variar según el material, las condiciones del espacio, la ventilación y la humedad presente después del proceso.',
    },
    {
      q: '¿El servicio ayuda a retirar manchas de sudor y orina en el colchón?',
      a: 'Sí. El proceso está diseñado para tratar y ayudar a diluir manchas comunes de transpiración, derrames de líquidos y marcas de mascotas. La efectividad sobre la tonalidad final depende de la antigüedad de la mancha y de los tratamientos caseros previos.',
    },
    {
      q: '¿Qué tamaños de colchones atienden en Armenia y Quindío?',
      a: 'Lavamos colchones individuales (sencillos o de 1 plaza), semi-dobles, matrimoniales (dobles), Queen size y King size, así como colchonetas y protectores acolchados.',
    },
    {
      q: '¿Se lavan ambos lados del colchón?',
      a: 'Podemos realizar el servicio en una o ambas caras del colchón, según tu requerimiento y el estado de la pieza. Cotizamos con claridad cada opción para adaptarnos a tu necesidad.',
    },
    {
      q: '¿Cómo puedo cotizar el lavado de mi colchón por WhatsApp?',
      a: 'Envíanos una foto del colchón indicando su tamaño (sencillo, doble, Queen, King) y tu ubicación en Armenia al 310 535 6080. Te responderemos en cuestión de minutos con la tarifa y disponibilidad.',
    },
  ];

  const mattressSizes = [
    {
      title: 'Individuales y sencillos',
      desc: 'Ideales para habitaciones infantiles o camas auxiliares. Retiro de polvo acumulado y manchas accidentales.',
    },
    {
      title: 'Matrimoniales y dobles',
      desc: 'Tratamiento completo en las zonas de mayor apoyo y fricción corporal para renovar la frescura del tejido.',
    },
    {
      title: 'Camas Queen Size',
      desc: 'Limpieza minuciosa en toda la superficie de descanso y laterales, cuidando el acolchado capitoné.',
    },
    {
      title: 'Camas King Size',
      desc: 'Proceso de inyección y extracción adaptado para grandes dimensiones de cama matrimonial y familiar.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Inspección de tela y manchas',
      desc: 'Revisamos el tipo de tejido exterior (jacquard, algodón, poliéster) y ubicamos zonas con manchas o desgaste para determinar el tratamiento.',
    },
    {
      step: '02',
      title: 'Aspirado previo de la superficie',
      desc: 'Eliminamos restos superficiales de polvo, pelusas y partículas sueltas acumuladas entre las costuras del colchón.',
    },
    {
      step: '03',
      title: 'Pulverización de fórmula ecoamigable',
      desc: 'Aplicamos soluciones profesionales especializadas que ablandan la suciedad y ayudan a neutralizar malos olores sin agredir las fibras.',
    },
    {
      step: '04',
      title: 'Cepillado delicado de la superficie',
      desc: 'Trabajamos suavemente las áreas de mayor compromiso para desprender la mugre sin desgastar ni deshilachar el tejido.',
    },
    {
      step: '05',
      title: 'Inyección y extracción controlada',
      desc: 'Aplicamos el proceso de inyección y extracción para retirar la suciedad disuelta y la humedad utilizada durante el proceso.',
    },
    {
      step: '06',
      title: 'Verificación y fase de secado',
      desc: 'Comprobamos el acabado homogéneo de la tela y dejamos el colchón listo para un secado natural ágil y sin complicaciones.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://innevasoluciones.online/lavado-colchones-armenia#service',
        name: 'Lavado de colchones a domicilio en Armenia',
        description:
          'Servicio profesional de lavado y limpieza de colchones a domicilio en Armenia, Quindío para ayudar a retirar suciedad, manchas y malos olores.',
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
        url: 'https://innevasoluciones.online/lavado-colchones-armenia',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://innevasoluciones.online/lavado-colchones-armenia#faq',
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
        title="Lavado de Colchones a Domicilio en Armenia | INNEVA"
        description="Lavado de colchones a domicilio en Armenia, Quindío. Limpieza profesional para ayudar a retirar suciedad, manchas y malos olores. Cotiza por WhatsApp."
        canonicalUrl="https://innevasoluciones.online/lavado-colchones-armenia"
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
            <span className="text-[#72D6C8] font-medium">Lavado de colchones en Armenia</span>
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
                  Lavado de colchones a domicilio en Armenia
                </h1>

                <p className="text-base sm:text-lg text-[#EEF4F3]/85 leading-relaxed mb-6 max-w-2xl">
                  En <strong>INNEVA SOLUCIONES</strong> brindamos limpieza profesional de colchones individuales, matrimoniales, Queen y King size directamente en tu domicilio. Nuestro método de inyección y extracción ayuda a retirar suciedad acumulada, manchas de sudor y malos olores, renovando la frescura de tu lugar de descanso.
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
                    <span>Servicio directo en tu habitación</span>
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
                    src="/lavado-de-colchones-2.webp"
                    alt="Lavado de colchones a domicilio en Armenia | INNEVA"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    width={600}
                    height={450}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B30]/90 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#082B30]/80 backdrop-blur-md border border-white/10 text-xs text-[#EEF4F3]">
                    <span className="font-bold text-[#72D6C8] block mb-0.5">Atención en Armenia y todo el Quindío</span>
                    <span>Cuidado de la superficie mediante inyección y extracción.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Tamaños y medidas */}
        <section className="py-14 sm:py-18 bg-[#072428] border-t border-[#0B6E75]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72D6C8] block mb-2">
                MEDIDAS Y COBERTURA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Limpieza para cualquier tamaño de colchón
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEF4F3]/80">
                Atendemos colchones ortopédicos, semiortopédicos, de espuma y resortes. Adaptamos la presión de inyección y el cepillado según la delicadeza de la tela superior.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mattressSizes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#073F46]/60 border border-[#0B6E75]/40 rounded-2xl p-6 flex flex-col justify-between hover:border-[#72D6C8]/60 transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0B6E75]/40 flex items-center justify-center text-[#72D6C8] mb-4">
                      <Layers className="w-5 h-5" />
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
                METODOLOGÍA PROFESIONAL
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                ¿Cómo realizamos el lavado de colchones?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#EEF4F3]/80">
                Utilizamos maquinaria industrial de inyección-extracción que disuelve y succiona la suciedad en una sola pasada controlada.
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
                  TRATAMIENTO DE FIBRAS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  Ayudamos a retirar manchas de sudor, suciedad y malos olores
                </h2>
                <p className="text-sm sm:text-base text-[#EEF4F3]/80 leading-relaxed mb-5">
                  Durante la noche el cuerpo genera humedad y transpiración que penetran gradualmente en la cubierta del colchón. Una limpieza profesional periódica mantiene las telas en óptimo estado.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-[#EEF4F3]/85 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Manchas de transpiración:</strong> Tratamiento focalizado para atenuar cercos amarillentos en la zona de descanso.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Control de olores:</strong> Productos profesionales que neutralizan olores retenidos en el tejido sin enmascararlos con perfumes invasivos.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8FE300] flex-shrink-0 mt-0.5" />
                    <span><strong>Limpieza de derrames y marcas:</strong> Succión controlada de líquidos vertidos accidentalmente.</span>
                  </li>
                </ul>
                <div className="p-4 rounded-xl bg-[#082B30] border border-[#0B6E75]/40 text-xs text-[#EEF4F3]/75">
                  <em>Recomendación:</em> Se sugiere ventilar la habitación durante y después del servicio para favorecer una evaporación uniforme de la humedad remanente.
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full rounded-2xl overflow-hidden border border-[#0B6E75]/50 shadow-xl bg-[#073F46]">
                  <img
                    src="/limpieza-de-colchones.avif"
                    alt="Proceso de limpieza y aspirado de colchón en Armenia"
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
                DUDAS HABITUALES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Preguntas frecuentes sobre lavado de colchones
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
                    Limpieza profesional de sofás, salas modulares, sillas de comedor y poltronas con extracción.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#72D6C8] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
              </Link>

              <Link
                href="/lavado-alfombras-armenia"
                className="p-5 rounded-2xl bg-[#073F46]/50 hover:bg-[#073F46] border border-[#0B6E75]/40 hover:border-[#72D6C8] transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#72D6C8] transition-colors">
                    Lavado de alfombras y tapetes en Armenia
                  </h3>
                  <p className="text-xs text-[#EEF4F3]/75 mt-1">
                    Tratamiento delicado de tapetes de sala y alfombras para retirar suciedad cuidando las fibras.
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
              ¿Listo para renovar la limpieza de tu colchón?
            </h2>
            <p className="text-sm sm:text-base text-[#EEF4F3]/85 mb-8 max-w-xl mx-auto">
              Escríbenos por WhatsApp con el tamaño de tu colchón y te daremos una cotización exacta para programar la visita en tu domicilio en Armenia.
            </p>
            <div className="flex justify-center">
              <StarButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar lavado de colchón por WhatsApp
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
