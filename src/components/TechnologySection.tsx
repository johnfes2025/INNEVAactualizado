import React from 'react';
import { Cpu, Leaf, ShieldAlert } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const cards = [
    {
      icon: <Cpu className="w-8 h-8 text-[#0B6E75]" />,
      title: 'Tecnología especializada',
      description: 'Equipos profesionales para realizar procesos de limpieza mediante inyección y extracción, ayudando a retirar suciedad, manchas y humedad utilizada durante el proceso.',
      tag: 'Equipos Profesionales',
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#0B6E75]" />,
      title: 'Productos ecoamigables',
      description: 'Una apuesta por productos biodegradables certificados y un enfoque más responsable con el entorno, seguros para niños, mascotas y personas con alergias.',
      tag: '100% Biodegradables',
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-[#0B6E75]" />,
      title: 'Procesos seguros',
      description: 'Evaluación técnica del tipo de tejido y cuero para regular la temperatura, PH y presión, protegiendo las fibras y colores originales de cada pieza.',
      tag: 'Cuidado Certificado',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAF9] text-[#082B30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#0B6E75] mb-3">
            NUESTRO COMPROMISO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082B30] tracking-tight">
            Tecnología especializada. <br className="hidden sm:inline" />
            Cuidado responsable.
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#0B6E75]/15 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF4F3] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#0B6E75] bg-[#EEF4F3] px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#082B30] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#082B30]/75 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0B6E75]/10">
                <span className="text-xs font-semibold text-[#0B6E75] flex items-center gap-1.5">
                  ✓ Garantía de servicio INNEVA
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
