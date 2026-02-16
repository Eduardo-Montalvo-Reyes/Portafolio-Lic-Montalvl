import React from 'react';
import { FileText, Award, GraduationCap, Star } from 'lucide-react';

export default function Conoceme() {
  return (
    <div className="animate-fade-in space-y-12">
      <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] text-center uppercase tracking-widest">
        Conóceme
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Espacio para su Fotografía */}
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-[#d4a017] shadow-2xl group">
            <img 
              src="/foto-perfil.jpg" 
              alt="Lic. Eduardo Montalvo" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] to-transparent opacity-40"></div>
          </div>
        </div>
        
        {/* Perfil y Logros */}
        <div className="w-full md:w-2/3 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-[#d4a017]">
              <GraduationCap /> Perfil Académico y Profesional
            </h3>
            <p className="text-gray-200 leading-relaxed text-justify font-light text-lg">
              Licenciado en Derecho por la Universidad Nacional Autónoma de México y Maestrante en Derecho Laboral. Mi trayectoria combina el rigor del litigio independiente con la vocación docente, creando un puente entre la teoría legal y la práctica judicial real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <Award className="text-[#d4a017] flex-shrink-0" />
              <p className="text-sm font-light italic text-gray-300">"Especialista en el diseño de planes de estudio con herramientas de autoría propia."</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <Star className="text-[#d4a017] flex-shrink-0" />
              <p className="text-sm font-light italic text-gray-300">"Litigante independiente con enfoque en soluciones jurídicas pragmáticas."</p>
            </div>
          </div>
          
          {/* El Botón del CV - Ajustado para apertura segura */}
          <a 
            href="/cv-eduardo-montalvo.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-10 py-5 border-2 border-[#d4a017] text-[#d4a017] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#d4a017] hover:text-black transition-all duration-500 shadow-lg"
          >
            <FileText size={24} /> VER CURRICULUM VITAE
          </a>
        </div>
      </div>
    </div>
  );
}
