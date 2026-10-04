import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { Plus, Minus, HelpCircle, ChevronDown } from 'lucide-react';
import { StarButton } from './StarButton';

export const FaqSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open when expanded

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#F7FAF9] text-[#082B30] border-y border-[#0B6E75]/10 transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B30] tracking-tight mb-5 sm:mb-6 lg:mt-8">
            Preguntas frecuentes sobre nuestros servicios
          </h2>

          {/* Collapsible Trigger Button with signature StarButton effect */}
          <div className="flex justify-center">
            <StarButton
              onLightBg
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="faq-accordion-list"
              className="shadow-md"
            >
              <span>{isExpanded ? 'Ocultar preguntas frecuentes' : 'Ver preguntas frecuentes'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </StarButton>
          </div>
        </div>

        {/* Collapsible Accordion Content */}
        <div
          id="faq-accordion-list"
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded
              ? 'max-h-[3000px] opacity-100 mt-10 sm:mt-12'
              : 'max-h-0 opacity-0 mt-0 pointer-events-none'
          }`}
        >
          {/* Accordion List */}
          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#0B6E75]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#EEF4F3]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#082B30] tracking-tight">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'bg-[#0B6E75] text-white rotate-180' : 'bg-[#EEF4F3] text-[#0B6E75]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#0B6E75]/10 animate-in fade-in duration-200">
                      <p className="text-sm sm:text-base text-[#082B30]/80 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Extra contact helper */}
          <div className="mt-8 text-center text-sm text-[#082B30]/70 flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>¿Tienes otra pregunta específica?</span>
            <a
              href="#contacto"
              className="text-[#0B6E75] font-bold hover:underline inline-flex items-center gap-1"
            >
              Escríbenos y te asesoramos de inmediato
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
