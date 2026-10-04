import React from 'react';
import { Cpu, Leaf, ShieldCheck, Truck } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: <Cpu className="w-5 h-5 text-[#72D6C8]" />,
      title: 'Tecnología especializada',
      desc: 'Equipos profesionales para limpieza y extracción',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#72D6C8]" />,
      title: 'Productos ecoamigables',
      desc: 'Fórmulas seguras para tu familia',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#72D6C8]" />,
      title: 'Servicio profesional',
      desc: 'Personal capacitado y de confianza',
    },
    {
      icon: <Truck className="w-5 h-5 text-[#72D6C8]" />,
      title: 'Atención a domicilio',
      desc: 'Llegamos hasta ti, cuando lo necesitas',
    },
  ];

  return (
    <div className="w-full bg-[#073F46]/80 border-y border-[#0B6E75]/40 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 px-3 py-1.5 rounded-xl transition-colors hover:bg-white/5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#082B30] border border-[#72D6C8]/30 flex items-center justify-center flex-shrink-0 shadow-sm">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#EEF4F3]/70 truncate mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
