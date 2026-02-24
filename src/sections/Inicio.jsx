import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Inicio({ setActiveTab }) {
  const gradients = {
    textTitle: 'linear-gradient(to right, #5F7906, #FFFFFF, #5F7906)',
    buttonBg: 'linear-gradient(to right, #FFFFFF, #5F7906, #5F7906, #FFFFFF)'
  };

  return (
    <div className="animate-fade-in flex flex-col space-y-16">
      
      {/* Contenedor Principal: Video y Texto */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">
        
        {/* Lado Izquierdo: Video Short */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-[3rem] overflow-hidden border-2 border-white shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/MH13zjcQKC4" 
              title="Lic. Eduardo Montalvo Reyes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          {/* FRASE MÁS GRANDE: He cambiado text-[18px] a text-[26px] y ajustado el tracking */}
          <p className="mt-8 text-center italic font-bold tracking-[0.1em] text-[#5F7906] text-[24px] md:text-[30px] uppercase leading-tight">
            ⚖️ Forjando hoy a los ciudadanos del mañana ⚖️
          </p>
        </div>

        {/* Lado Derecho: Su Identidad CENTRADA */}
        {/* Cambié lg:text-left por text-center para unificar con el párrafo */}
        <div className="w-full lg:w-1/2 text-center pt-6">
          <div className="space-y-2 mb-8">
            <h2 
              className="text-5xl md:text-7xl font-serif font-bold leading-none uppercase"
              style={{ 
                background: gradients.textTitle,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              EDUARDO MONTALVO REYES
            </h2>
            {/* SEPARADOR CENTRADO: mx-auto garantiza el centro en la línea */}
            <div className="h-1 w-full bg-[#5F7906] mt-6 mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl font-serif italic leading-relaxed text-white text-justify font-light">
            "Entiendo la docencia como una extensión de la justicia: formar ciudadanos que no solo posean el saber técnico, sino el criterio para aplicarlo con ética. Mi compromiso es con la excelencia académica y la formación integral, utilizando la tecnología como un puente y nunca como un reemplazo del juicio humano."
          </p>
        </div>
      </div>

      {/* Botón de Filosofía */}
      <div className="flex justify-center pt-10">
        <button 
          onClick={() => setActiveTab('filosofia')}
          className="group relative px-8 md:px-16 py-6 md:py-8 border-2 border-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl"
          style={{ background: gradients.buttonBg }}
        >
          <span className="relative z-10 flex items-center gap-4 md:gap-6 text-lg md:text-2xl font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-white drop-shadow-md">
            <Sparkles className="shrink-0" size={24} /> 
            MI FILOSOFÍA 
            <ShieldCheck className="shrink-0" size={24} />
          </span>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}
