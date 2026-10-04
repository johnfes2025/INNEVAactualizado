import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { Sparkles, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'muebles', label: 'Salas & Sofás' },
    { id: 'colchones', label: 'Colchones' },
    { id: 'vehiculos', label: 'Vehículos & Motos' },
    { id: 'especiales', label: 'Tapetes & Persianas' },
  ];

  const filteredItems = activeFilter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter || (activeFilter === 'especiales' && (item.category === 'alfombras' || item.category === 'cuero' || item.category === 'especiales')));

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAF9] text-[#082B30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#0B6E75] mb-3">
              NUESTRO TRABAJO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082B30] tracking-tight">
              Espacios que vuelven a sentirse limpios.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-[#0B6E75] text-white shadow-md'
                    : 'bg-[#EEF4F3] text-[#082B30]/75 hover:bg-[#0B6E75]/15 hover:text-[#082B30]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-[#0B6E75]/15 aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B30]/90 via-[#082B30]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#72D6C8] mb-1">
                  {item.tag}
                </span>
                <h4 className="text-sm font-bold leading-snug">{item.title}</h4>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#8FE300] font-semibold">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Ver detalle</span>
                </div>
              </div>

              {/* Always visible category badge */}
              <div className="absolute top-3 left-3 bg-[#082B30]/80 backdrop-blur-sm text-[#EEF4F3] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10 group-hover:opacity-0 transition-opacity">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Zoom View */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#082B30] border border-[#0B6E75] rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl text-white"
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-black/60 rounded-full text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-[#72D6C8] uppercase tracking-wider">
                {selectedItem.tag}
              </span>
              <h3 className="text-xl font-bold mt-1 text-white">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#EEF4F3]/75 mt-2">
                Trabajo realizado a domicilio en el Quindío con maquinaria de inyección-extracción y productos 100% biodegradables.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
