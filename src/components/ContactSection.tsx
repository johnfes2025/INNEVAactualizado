import React, { useState } from 'react';
import { DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/content';
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle } from 'lucide-react';
import { StarButton } from './StarButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Lavado de muebles y tapicería',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp message
    const text = `*Nueva solicitud de cotización desde la web INNEVA:*\n\n` +
      `*Nombre:* ${formData.nombre}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Servicio:* ${formData.servicio}\n` +
      (formData.mensaje ? `*Detalle:* ${formData.mensaje}` : '');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="hidden md:block py-20 lg:py-28 bg-[#073F46] text-[#EEF4F3] relative overflow-hidden border-t border-[#0B6E75]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#72D6C8] mb-3">
              CONTÁCTANOS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-6">
              Cotiza tu servicio de limpieza en Armenia
            </h2>
            <p className="text-base text-[#EEF4F3]/80 leading-relaxed mb-8">
              Estamos listos para transformar tus muebles, colchones o vehículo. Escríbenos o llena el formulario y te responderemos a la mayor brevedad.
            </p>

            {/* Info items list */}
            <div className="space-y-5 w-full">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#082B30] border border-[#72D6C8]/30 flex items-center justify-center flex-shrink-0 text-[#72D6C8]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ubicación y cobertura</h4>
                  <p className="text-xs sm:text-sm text-[#EEF4F3]/75 mt-0.5">
                    Cl. 30 # CRA 30, San Diego, 630007, Armenia, Quindío, Colombia
                  </p>
                  <p className="text-xs text-[#72D6C8] mt-0.5 font-medium">
                    Servicio a domicilio en todo el Quindío
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#082B30] border border-[#72D6C8]/30 flex items-center justify-center flex-shrink-0 text-[#72D6C8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Teléfono & WhatsApp</h4>
                  <a
                    href="tel:+573105356080"
                    className="text-xs sm:text-sm text-[#EEF4F3] hover:text-[#72D6C8] transition-colors mt-0.5 block font-semibold"
                  >
                    +57 {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#082B30] border border-[#72D6C8]/30 flex items-center justify-center flex-shrink-0 text-[#72D6C8]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horario de atención</h4>
                  <p className="text-xs sm:text-sm text-[#EEF4F3]/75 mt-0.5">
                    Lunes a sábado: 8:00 a.m. – 6:00 p.m.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#082B30] border border-[#72D6C8]/30 flex items-center justify-center flex-shrink-0 text-[#72D6C8]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Instagram oficial</h4>
                  <a
                    href="https://instagram.com/innevasoluciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#72D6C8] hover:underline mt-0.5 block"
                  >
                    @innevasoluciones
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="hidden md:block lg:col-span-7">
            <div className="uiverse-spacious-outer">
              {/* Luminous orbiting dot */}
              <div className="uiverse-spacious-dot" />

              {/* Inner card with radial gradient and optical layers */}
              <div className="uiverse-spacious-card p-6 sm:p-8">
                {/* Diagonal light ray */}
                <div className="uiverse-spacious-ray" />

                {/* Technical hairline border grid */}
                <div className="uiverse-spacious-line uiverse-spacious-topl" />
                <div className="uiverse-spacious-line uiverse-spacious-bottoml" />
                <div className="uiverse-spacious-line uiverse-spacious-leftl" />
                <div className="uiverse-spacious-line uiverse-spacious-rightl" />

                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Solicita tu cotización
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EEF4F3]/75 mb-6">
                    Completa tus datos para enviarte una propuesta personalizada de inmediato.
                  </p>

              {submitted ? (
                <div className="bg-[#073F46] border border-[#8FE300]/40 rounded-2xl p-6 text-center animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#8FE300] text-[#082B30] flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    ¡Solicitud enviada con éxito!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#EEF4F3]/80 mt-1 mb-4">
                    Se ha abierto WhatsApp con tu mensaje. Si no se abrió automáticamente, haz clic en el botón debajo:
                  </p>
                  <StarButton
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!py-2.5 !px-5 text-xs sm:text-sm"
                  >
                    <span>Abrir chat de WhatsApp</span>
                  </StarButton>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="block text-xs text-[#72D6C8] hover:underline mx-auto mt-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#EEF4F3] mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full bg-[#073F46]/60 border border-[#0B6E75] focus:border-[#72D6C8] focus:outline-none text-white text-sm rounded-xl px-4 py-3 placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#EEF4F3] mb-1.5">
                      Teléfono o WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 310 000 0000"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full bg-[#073F46]/60 border border-[#0B6E75] focus:border-[#72D6C8] focus:outline-none text-white text-sm rounded-xl px-4 py-3 placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  {/* Service select */}
                  <div>
                    <label className="block text-xs font-semibold text-[#EEF4F3] mb-1.5">
                      Servicio de interés *
                    </label>
                    <select
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full bg-[#073F46] border border-[#0B6E75] focus:border-[#72D6C8] focus:outline-none text-white text-sm rounded-xl px-4 py-3 transition-colors cursor-pointer"
                    >
                      <option value="Lavado de muebles y tapicería">Lavado de muebles y tapicería</option>
                      <option value="Limpieza de colchones">Limpieza de colchones</option>
                      <option value="Lavado de alfombras y tapetes">Lavado de alfombras y tapetes</option>
                      <option value="Detallado de vehículos">Detallado de vehículos</option>
                      <option value="Limpieza de cuero">Limpieza de cuero</option>
                      <option value="Limpieza de persianas y paneles japoneses">Limpieza de persianas y paneles japoneses</option>
                      <option value="Limpieza de cortinas">Limpieza de cortinas</option>
                      <option value="Limpieza de pisos y superficies">Limpieza de pisos y superficies</option>
                      <option value="Limpieza de motos y cascos">Limpieza de motos y cascos</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#EEF4F3] mb-1.5">
                      Detalles del servicio (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos qué necesitas limpiar, medidas o si tiene manchas específicas..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full bg-[#073F46]/60 border border-[#0B6E75] focus:border-[#72D6C8] focus:outline-none text-white text-sm rounded-xl px-4 py-3 placeholder:text-white/30 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <StarButton
                    type="submit"
                    id="contact-form-submit"
                    className="w-full !py-3.5 !px-6 text-base mt-2"
                  >
                    <span>Solicitar cotización</span>
                    <Send className="w-4 h-4" />
                  </StarButton>
                </form>
              )}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
