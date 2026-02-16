import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Inicio({ setActiveTab }) {
  return (
    <div className="animate-fade-in flex flex-col space-y-16">
      
      {/* Contenedor Principal: Video y Texto */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">
        
        {/* Lado Izquierdo: Video Short (Vertical) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-[3rem] overflow-hidden border-2 border-[#d4a017] shadow-[0_0_40px_rgba(212,160,23,0.15)]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/MH13zjcQKC4" 
              title="Lic. Eduardo Montalvo Reyes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-6 text-center italic font-light tracking-[0.2em] text-[#d4a017] text-[10px] md:text-xs uppercase">
            ⚖️ Forjando hoy a los ciudadanos del mañana ⚖️
          </p>
        </div>

        {/* Lado Derecho: Su Identidad */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-6">
          <div className="space-y-2 mb-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none">
              EDUARDO
            </h2>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none text-[#d4a017]">
              MONTALVO REYES
            </h2>
            <div className="h-1 w-20 bg-[#d4a017] mt-6 mx-auto lg:mx-0"></div>
          </div>
          
          <p className="text-lg md:text-xl font-serif italic leading-relaxed text-gray-200 text-justify font-light">
            "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
          </p>
        </div>
      </div>

      {/* Botón Sagrado de Filosofía (Centrado Abajo) */}
      <div className="flex justify-center pt-10">
        <button 
          onClick={() => setActiveTab('filosofia')}
          className="group relative px-8 md:px-16 py-6 md:py-8 bg-transparent border-2 border-[#d4a017] rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,160,23,0.4)] hover:scale-105"
        >
          {/* Efecto de Brillo Interno */}
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
