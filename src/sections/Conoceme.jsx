import React from 'react';
import { FileText, GraduationCap, Briefcase } from 'lucide-react';

export default function Conoceme() {
  const gradients = {
    // Blanco en los extremos, Verde en el centro (Horizontal)
    textTitle: 'linear-gradient(to right, #FFFFFF, #5F7906, #FFFFFF)',
    buttonBg: 'linear-gradient(to right, #FFFFFF, #5F7906, #5F7906, #FFFFFF)'
  };

  // Link directo de su foto en Drive
  const fotoUrl = "https://lh3.googleusercontent.com/u/0/d/1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG";

  return (
    <div className="animate-fade-in space-y-12 pb-20">
      {/* TÍTULO PRINCIPAL ¿Quién soy YO? */}
      <h2 
        className="text-5xl md:text-7xl font-serif font-bold text-center uppercase tracking-widest"
        style={{ 
          background: gradients.textTitle,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        ¿Quién soy YO?
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* COLUMNA IZQUIERDA: FOTO Y BOTÓN CV */}
        <div className="w-full lg:w-1/3 flex flex-col items-center space-y-8">
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src={fotoUrl} 
              alt="Lic. Eduardo Montalvo Reyes" 
              className="w-full h-full object-cover" 
            />
          </div>

          <a 
            href="https://drive.google.com/file/d/1rSL8lA0cLCl-4kSgOnBS4zGMoVAJwtyS/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 border-2 border-white rounded-xl transition-all duration-500 hover:scale-105 shadow-xl"
            style={{ background: gradients.buttonBg }}
          >
            <FileText size={24} className="text-white" />
            <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
              VER CURRICULUM VITAE
            </span>
          </a>
        </div>

        {/* COLUMNA DERECHA: TRAYECTORIA */}
        <div className="w-full lg:w-2/3 space-y-10 text-white">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold uppercase tracking-tighter" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              YO SOY EDUARDO MONTALVO REYES
            </h3>
            <p className="text-lg font-light leading-relaxed text-justify" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Abogado Litigante | Catedrático Especialista en Derecho y Ciencias Sociales, Licenciado en Derecho por la UNAM y Maestrante en Derecho Laboral.
            </p>
            <p className="text-lg font-light leading-relaxed text-justify text-white">
              Me considero un especialista en la formación de pensamiento crítico mediante una metodología propia...
            </p>
          </div>

          {/* SECCIÓN DOCENTE */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-[#5F7906] pb-2">
              <GraduationCap size={28} className="text-[#5F7906]" />
              <h4 className="text-xl font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                EXPERIENCIA DOCENTE DESTACADA
              </h4>
            </div>
            <ul className="space-y-4 text-sm md:text-base font-light">
              <li>
                <span className="font-bold" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>• Catedrático de Licenciatura en Derecho y Transversal</span>
              </li>
              <li>
                <span className="font-bold" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>• Docente de Bachillerato (Área de Humanidades)</span>
              </li>
            </ul>
          </div>

          {/* SECCIÓN JURÍDICA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b-2 border-[#5F7906] pb-2">
              <Briefcase size={28} className="text-[#5F7906]" />
              <h4 className="text-xl font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                EXPERIENCIA PROFESIONAL JURÍDICA
              </h4>
            </div>
            <p className="text-lg font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Abogado Litigante Independiente
            </p>
            <p className="text-white font-light">Especialista en materias Laboral, Familiar y Civil.</p>
          </div>

          {/* EXTRA INTEGRADO */}
          <div className="space-y-2 pt-4">
            <h4 className="text-lg font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              EXTRA: ASISTENTE DE DIRECCIÓN / ADMINISTRACIÓN ESTUDIANTIL
            </h4>
            <p className="text-white font-light leading-relaxed">
              Gestión de procesos administrativos internos y vinculación académica, desarrollando habilidades de liderazgo...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
