import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Inicio({ setActiveTab }) {
  return (
    <div className="animate-fade-in flex flex-col space-y-12">
      
      {/* SECCIÓN SUPERIOR: NOMBRE Y LÍNEA DIVISORIA */}
      <div className="w-full text-center">
        {/* Nombre completo en una sola línea, justificado de margen a margen */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-none tracking-tighter uppercase mb-4" 
            style={{ textAlign: 'justify', textAlignLast: 'justify' }}>
          EDUARDO MONTALVO REYES
        </h2>
        
        {/* Línea divisoria más larga entre el nombre y el video */}
        <div className="h-1 w-full bg-[#d4a017] mt-4 mb-12"></div>
      </div>

      {/* CONTENEDOR DE VIDEO Y FRASE */}
      <div className="flex flex-col items-center justify-center">
        {/* Video Short (Vertical) */}
        <div className="relative aspect-[9/16] w-full max-w-[320px] rounded-[3rem] overflow-hidden border-2 border-[#d4a017] shadow-[0_0_40px_rgba(212,160,23,0.15)]">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/MH13zjcQKC4" 
            title="Lic. Eduardo Montalvo Reyes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Frase: Forjando hoy a los ciudadanos del mañana (Más grande) */}
        <p className="mt-8 text-center italic font-light tracking-[0.2em] text-[#d4a017] text-lg md:text-2xl uppercase">
          ⚖️ Forjando hoy a los ciudadanos del mañana ⚖️
        </p>
      </div>

      {/* FILOSOFÍA: Texto oficial en cursiva original */}
      <div className="max-w-5xl mx-auto pt-6 text-center">
        <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-gray-200 font-light">
          "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
        </p>
      </div>

      {/* Botón Sagrado de Filosofía */}
      <div className="flex justify-center pt-6">
        <button 
          onClick={() => setActiveTab('filosofia')}
          className="group relative px-8 md:px-16 py-6 md:py-8 bg-transparent border-2 border-[#d4a017] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,160,23,0.4)] hover:scale-105"
        >
          <div className="absolute inset-0 bg-[#d4a017] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <span className="relative z-10 flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#d4a017] group-hover:text-black transition-colors duration-500">
            <Sparkles className="animate-pulse shrink-0" size={24} /> 
            MI FILOSOFÍA 
            <ShieldCheck className="animate-pulse shrink-0" size={24} />
          </span>
        </button>
      </div>
    </div>
  );
}
