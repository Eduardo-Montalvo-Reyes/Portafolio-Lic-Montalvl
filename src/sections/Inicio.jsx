import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Inicio({ setActiveTab }) {
  return (
    <div className="animate-fade-in flex flex-col lg:flex-row gap-12 items-center lg:items-start">
      
      {/* Lado Izquierdo: Video Short (Vertical) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="relative aspect-[9/16] w-full max-w-[300px] rounded-[2.5rem] overflow-hidden border-2 border-[#d4a017] shadow-[0_0_30px_rgba(212,160,23,0.2)]">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/MH13zjcQKC4" 
            title="Lic. Eduardo Montalvo Reyes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-6 text-center italic font-light tracking-[0.1em] text-[#d4a017] text-sm uppercase">
          ⚖️ Forjando hoy a los ciudadanos del mañana ⚖️
        </p>
      </div>

      {/* Lado Derecho: Identidad y Filosofía */}
      <div className="w-full lg:w-1/2 text-center lg:text-left pt-4 space-y-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none">
            EDUARDO
          </h2>
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none text-[#d4a017]">
            MONTALVO REYES
          </h2>
          <p className="text-white text-lg md:text-xl tracking-[0.3em] uppercase mt-2 opacity-90">
            Abogado & Catedrático
          </p>
        </div>

        <div className="h-1 w-20 bg-[#d4a017] mx-auto lg:mx-0"></div>
        
        <p className="text-lg md:text-xl font-light italic leading-relaxed text-gray-200 text-justify">
          "Convencido de usar la tecnología y la Inteligencia Artificial de manera consciente y ética, enseño su uso como un apoyo extra para perfeccionar el trabajo humano, jamás como un reemplazo de nuestra esencia y sensibilidad."
        </p>

        {/* Botón Sagrado de Filosofía */}
        <div className="pt-6">
          <button 
            onClick={() => setActiveTab('filosofia')}
            className="group relative px-12 py-5 bg-transparent border-2 border-[#d4a017] rounded-xl overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,160,23,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-3 text-sm font-black tracking-[0.2em] uppercase text-[#d4a017] group-hover:text-black transition-colors">
              <Sparkles size={20} /> MI FILOSOFÍA <ShieldCheck size={20} />
            </span>
            <div className="absolute inset-0 bg-[#d4a017] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
