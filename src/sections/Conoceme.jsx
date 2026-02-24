import React from 'react';
import { FileText, GraduationCap, Briefcase } from 'lucide-react';

export default function Conoceme() {
  const gradients = {
    // Blanco en los extremos, Verde en el centro (Horizontal)
    textTitle: 'linear-gradient(to right, #FFFFFF, #5F7906, #FFFFFF)',
    buttonBg: 'linear-gradient(to right, #FFFFFF, #5F7906, #5F7906, #FFFFFF)'
  };

  // Enlace de visualización directa con su ID de Drive
  const fotoUrl = "https://drive.google.com/uc?export=view&id=1JGAhxqVSK5YmaVsyaQAXS6Y1E8RTldsG";

  return (
    <div className="animate-fade-in space-y-16 pb-20 w-full px-4 md:px-10">
      {/* TÍTULO PRINCIPAL ¿Quién soy YO? */}
      <h2 
        className="text-6xl md:text-8xl font-serif font-bold text-center uppercase tracking-[0.2em] mb-20"
        style={{ 
          background: gradients.textTitle,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        ¿Quién soy YO?
      </h2>

      <div className="flex flex-col lg:flex-row gap-20 items-start justify-between w-full">
        
        {/* COLUMNA IZQUIERDA: FOTO IMPACTANTE Y BOTÓN CV */}
        <div className="w-full lg:w-[45%] flex flex-col items-center space-y-10">
          {/* Tamaño aumentado a 600px para que domine el espacio izquierdo */}
          <div className="relative w-full max-w-[600px] aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white shadow-[0_0_50px_rgba(95,121,6,0.3)]">
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
            className="group flex items-center gap-6 px-12 py-6 border-2 border-white rounded-2xl transition-all duration-500 hover:scale-105 shadow-2xl w-full max-w-[600px] justify-center"
            style={{ background: gradients.buttonBg }}
          >
            <FileText size={30} className="text-white" />
            <span className="text-lg font-black uppercase tracking-[0.3em] text-white">
              VER CURRICULUM VITAE
            </span>
          </a>
        </div>

        {/* COLUMNA DERECHA: SU TEXTO ÍNTEGRO SIN CAMBIOS */}
        <div className="w-full lg:w-[50%] space-y-12 text-white">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold uppercase tracking-tighter" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              YO SOY EDUARDO MONTALVO REYES
            </h3>
            <p className="text-xl font-bold leading-relaxed text-justify" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Abogado Litigante | Catedrático Especialista en Derecho y Ciencias Sociales, <br />
              Licenciado en Derecho por la UNAM y Maestrante en Derecho Laboral.
            </p>
            <p className="text-xl font-light leading-relaxed text-justify text-white">
              Me considero, un especialista en la formación de pensamiento crítico en niveles Bachillerato y Licenciatura, mediante una metodología propia basada en el aprendizaje práctico. Experto en diseño curricular y gestión de grupos, con una visión moderna que integra la Inteligencia Artificial y herramientas digitales como auxiliares estratégicos de la enseñanza.
            </p>
          </div>

          {/* SECCIÓN DOCENTE */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 border-b-2 border-[#5F7906] pb-4">
              <GraduationCap size={35} className="text-[#5F7906]" />
              <h4 className="text-2xl font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                EXPERIENCIA DOCENTE DESTACADA
              </h4>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-xl" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Catedrático de Licenciatura en Derecho y Transversal
                </p>
                <p className="text-lg font-light text-white">
                  Especialidades: Amparo, Derecho Constitucional, Derecho Mercantil (Sustantivo y Procesal), Derecho Civil, cualquier rama del Derecho Social. | Materias Transversales: Epistemología y Ciencias de la Comunicación.
                </p>
              </div>
              <div>
                <p className="font-bold text-xl" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Docente de Bachillerato (Área de Humanidades)
                </p>
                <p className="text-lg font-light text-white">
                  Materias: Ética I y II, Historia de México e Historia Universal, Taller de Lectura y Redacción.
                </p>
              </div>
            </div>
          </div>

          {/* SECCIÓN JURÍDICA */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 border-b-2 border-[#5F7906] pb-4">
              <Briefcase size={35} className="text-[#5F7906]" />
              <h4 className="text-2xl font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                EXPERIENCIA PROFESIONAL JURÍDICA
              </h4>
            </div>
            <div>
              <p className="text-xl font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Abogado Litigante Independiente 2021 – Presente
              </p>
              <p className="text-white font-light text-xl text-justify">
                Especialista en materias Laboral, Familiar, Civil. <br />
                Representación legal integral, desde la etapa postulatoria hasta la ejecución de sentencia, con un enfoque en la resolución ética y eficiente de conflictos.
              </p>
            </div>
          </div>

          {/* EXTRA INTEGRADO */}
          <div className="space-y-4 pt-8 border-t border-white/20">
            <h4 className="text-xl font-bold uppercase" style={{ background: gradients.textTitle, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              EXTRA: Asistente de Dirección / Administración Estudiantil
            </h4>
            <p className="text-white font-light text-lg leading-relaxed text-justify">
              Gestión de procesos administrativos internos y vinculación académica, desarrollando habilidades de liderazgo y control organizacional dentro de instituciones educativas. Innovación de retención y encargado del área de rostro principal (enlace / admisiones) para los estudiantes.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
