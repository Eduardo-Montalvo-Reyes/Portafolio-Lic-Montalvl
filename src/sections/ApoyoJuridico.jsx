import React, { useState } from 'react';
import { 
  Gavel, Users, Briefcase, Building2, 
  ShieldAlert, ExternalLink, ArrowRight, Clock 
} from 'lucide-react';

export default function ApoyoJuridico() {
  const [showProximamente, setShowProximamente] = useState(false);

  // Pantalla de Redirección (Apoyo Personalizado)
  if (showProximamente) {
    return (
      <div className="animate-fade-in max-w-5xl mx-auto py-10">
        <button 
          onClick={() => setShowProximamente(false)}
          className="text-[#d4a017] uppercase text-xs font-black tracking-widest mb-8 hover:text-white transition-colors flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={16} /> Volver a Asesoría
        </button>
        <div className="bg-[#1e293b] rounded-[3rem] p-8 md:p-16 border border-[#d4a017]/30 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#d4a017] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://drive.google.com/thumbnail?id=1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG&sz=w800" 
                alt="Lic. Eduardo Montalvo" 
                className="relative rounded-2xl border-2 border-[#d4a017] shadow-lg w-full max-w-[300px] object-cover aspect-[3/4]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#d4a017] uppercase tracking-tighter">
              Próximamente
            </h2>
            <p className="text-xl font-light text-gray-300 italic leading-relaxed">
              "Estamos perfeccionando el canal de atención directa para brindarle la seguridad jurídica que su situación demanda."
            </p>
            <div className="flex justify-center md:justify-start pt-4">
              <Clock className="text-[#d4a017] animate-pulse" size={48} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-16 max-w-7xl mx-auto">
      {/* SECCIÓN DE TÍTULOS E IDENTIDAD */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#d4a017] uppercase tracking-tighter">
          Abogado Litigante Independiente
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-[0.3em] opacity-90">
          Asesoría & Representación Legal
        </h2>
        <div className="h-1 w-24 bg-[#d4a017] mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LADO IZQUIERDO: VIDEO EN VERTICAL (Shorts Format) */}
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 border-[#d4a017] shadow-[0_0_50px_rgba(212,160,23,0.2)]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/F_DhqRJEqqA" 
              title="Presentación Jurídica"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* LADO DERECHO: ESPECIALISTA Y TARJETAS */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#d4a017] uppercase tracking-tight">
              Especialista en Procedimiento Jurídico
            </h3>
            <p className="text-gray-400 font-light text-lg italic">
              Estrategia jurídica de vanguardia en:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Laboral', icon: <Briefcase size={22}/> },
              { label: 'Civil', icon: <Building2 size={22}/> },
              { label: 'Familiar', icon: <Users size={22}/> },
              { label: 'Mercantil', icon: <Gavel size={22}/> },
              { label: 'Constitucional / Amparo', icon: <ShieldAlert size={22}/>, full: true }
            ].map((materia, idx) => (
              <div 
                key={idx} 
                className={`p-6 bg-[#1e293b] border-l-4 border-[#d4a017] rounded-r-2xl flex items-center gap-4 hover:bg-[#d4a017] hover:text-black transition-all duration-300 group cursor-default shadow-lg ${materia.full ? 'sm:col-span-2' : ''}`}
              >
                <div className="text-[#d4a017] group-hover:text-black transition-colors">{materia.icon}</div>
                <span className="font-bold uppercase tracking-widest text-sm">{materia.label}</span>
              </div>
            ))}
          </div>

          {/* BOTÓN DE REDIRECCIÓN */}
          <button 
            onClick={() => setShowProximamente(true)}
            className="w-full mt-6 group flex items-center justify-between px-8 py-7 bg-transparent border-2 border-[#d4a017] text-[#d4a017] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#d4a017] hover:text-black transition-all duration-500 shadow-xl"
          >
            <span>Redireccionarme para Apoyo Personalizado</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </button>
        </div>
      </div>

      {/* MARGEN INFERIOR / LÍNEA DIVISORIA */}
      <div className="pt-10 border-b border-[#d4a017]/10"></div>
    </div>
  );
}
