import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Inicio({ setActiveTab }) {
  // Definición de los degradados según su diseño de Canva
  const gradients = {
    textTitle: 'linear-gradient(to right, #5F7906, #FFFFFF, #5F7906)',
    buttonBg: 'linear-gradient(to right, #FFFFFF, #5F7906, #5F7906, #FFFFFF)'
  };

  return (
    <div className="animate-fade-in flex flex-col space-y-16">
      
      {/* Contenedor Principal: Video y Texto */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">
        
        {/* LADO IZQUIERDO: Video Short (Marco Blanco) */}
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
          <p className="mt-6 text-center italic font-light tracking-[0.2em] text-[#5F7906] text-[18px] md:text-[22px] uppercase">
            ⚖️ Forjando hoy a los ciudadanos del mañana ⚖️
          </p>
        </div>

        {/* LADO DERECHO: Su Identidad (Título con Degradado) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-6">
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
            {/* Separador Verde */}
            <div className="h-1 w-full bg-[#5F7906] mt-6 mx-auto lg:mx-0"></div>
          </div>
          
          <p className="text-lg md:text-xl font-serif italic leading-relaxed text-white text-justify font-light">
            "Entiendo la docencia como una extensión de la justicia: formar ciudadanos que no solo posean el saber técnico, sino el criterio para aplicarlo con ética. Mi compromiso es con la excelencia académica y la formación integral, utilizando la tecnología como un puente y nunca como un reemplazo del juicio humano."
          </p>
        </div>
      </div>

      {/* BOTÓN DE FILOSOFÍA: Estructura Blanco-Verde-Verde-Blanco */}
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
          
          {/* Overlay sutil para interacción */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}
