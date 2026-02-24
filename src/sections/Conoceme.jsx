import React from 'react';
import { FileText, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Conoceme() {
  const gradients = {
    textTitle: 'linear-gradient(to right, #5F7906, #FFFFFF, #5F7906)',
    buttonBg: 'linear-gradient(to right, #FFFFFF, #5F7906, #5F7906, #FFFFFF)'
  };

  return (
    <div className="animate-fade-in space-y-12 pb-20">
      {/* TÍTULO PRINCIPAL CENTRADO */}
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
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="./Perfil.jpeg" 
              alt="Lic. Eduardo Montalvo Reyes" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* BOTÓN VER CV (DEBAJO DE LA FOTO) */}
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

        {/* COLUMNA DERECHA: TRAYECTORIA COMPLETA */}
        <div className="w-full lg:w-2/3 space-y-10 text-white">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5F7906] uppercase tracking-tighter">
              YO SOY EDUARDO MONTALVO REYES
            </h3>
            <p className="text-lg font-light leading-relaxed text-justify">
              <strong>Abogado Litigante | Catedrático Especialista en Derecho y Ciencias Sociales</strong>, Licenciado en Derecho por la UNAM y Maestrante en Derecho Laboral.
              <br /><br />
              Me considero un especialista en la formación de pensamiento crítico en niveles Bachillerato y Licenciatura, mediante una metodología propia basada en el aprendizaje práctico. Experto en diseño curricular y gestión de grupos, con una visión moderna que integra la Inteligencia Artificial y herramientas digitales como auxiliares estratégicos de la enseñanza.
            </p>
          </div>

          {/* SECCIÓN DOCENTE */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#5F7906] pb-2 text-[#5F7906]">
              <GraduationCap size={28} />
              <h4 className="text-xl font-bold uppercase">EXPERIENCIA DOCENTE DESTACADA</h4>
            </div>
            <ul className="space-y-4 text-sm md:text-base font-light">
              <li>
                <span className="font-bold text-[#5F7906]">• Catedrático de Licenciatura en Derecho y Transversal:</span> Especialidades en Amparo, Derecho Constitucional, Mercantil, Civil y Social. Materias de Epistemología y Comunicación.
              </li>
              <li>
                <span className="font-bold text-[#5F7906]">• Docente de Bachillerato (Humanidades):</span> Ética I y II, Historia de México y Universal, Taller de Lectura y Redacción.
              </li>
            </ul>
          </div>

          {/* SECCIÓN JURÍDICA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[#5F7906] pb-2 text-[#5F7906]">
              <Briefcase size={28} />
              <h4 className="text-xl font-bold uppercase">EXPERIENCIA PROFESIONAL JURÍDICA</h4>
            </div>
            <ul className="space-y-4 text-sm md:text-base font-light">
              <li>
                <span className="font-bold text-[#5F7906]">• Abogado Litigante Independiente (2021 – Presente):</span> Especialista en materias Laboral, Familiar y Civil.
              </li>
              <li>
                <span className="font-bold text-[#5F7906]">• Representación legal integral:</span> Desde la etapa postulatoria hasta la ejecución de sentencia, con enfoque ético y eficiente.
              </li>
            </ul>
          </div>

          {/* SECCIÓN EXTRA */}
          <div className="space-y-4 bg-white/5 p-6 rounded-2xl border-l-4 border-[#5F7906]">
            <h4 className="text-sm font-bold text-[#5F7906] uppercase tracking-widest">EXTRA: ASISTENTE DE DIRECCIÓN / ADMINISTRACIÓN ESTUDIANTIL</h4>
            <p className="text-sm font-light leading-relaxed">
              Gestión de procesos administrativos, vinculación académica y liderazgo organizacional. Innovación en retención y rostro principal en admisiones.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
