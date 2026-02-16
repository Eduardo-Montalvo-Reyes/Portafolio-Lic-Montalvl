import React from 'react';
import { Scale, FileText, ShieldAlert, ExternalLink } from 'lucide-react';

export default function ApoyoJuridico() {
  return (
    <div className="animate-fade-in space-y-12 max-w-5xl mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase">
          Apoyo Jurídico Institucional
        </h2>
        <p className="text-lg font-light leading-relaxed text-justify text-gray-200 italic">
          "La certeza jurídica es el pilar que sostiene la libertad académica y la excelencia institucional."
        </p>
        <p className="text-lg font-light leading-relaxed text-justify text-gray-200">
          Como Licenciado en Derecho y docente, entiendo que la labor educativa debe estar blindada por una estructura normativa sólida. En esta sección, pongo a disposición de la institución y mis colegas, materiales de soporte técnico-jurídico diseñados para fortalecer los procesos administrativos y académicos, garantizando siempre el respeto al debido proceso y la integridad institucional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
        {/* Card 1: Soporte Normativo */}
        <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all shadow-xl group">
          <Scale className="text-[#d4a017] mb-4 group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-2xl font-serif font-bold mb-4">Soporte Normativo</h3>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed text-justify">
            Análisis y guías sobre la aplicación de reglamentos internos y leyes educativas vigentes para la resolución de conflictos en el ámbito escolar.
          </p>
          <a 
            href="https://drive.google.com/file/d/1vC39Uf09v-t6rTjV-qC6r3o7E2D_xRj7/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d4a017] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            CONSULTAR RECURSO <ExternalLink size={16}/>
          </a>
        </div>

        {/* Card 2: Formatos y Protocolos */}
        <div className="bg-[#1e293b] p-8 rounded-2xl border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all shadow-xl group">
          <FileText className="text-[#d4a017] mb-4 group-hover:scale-110 transition-transform" size={40} />
          <h3 className="text-2xl font-serif font-bold mb-4">Protocolos de Actuación</h3>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed text-justify">
            Modelos de actas, informes y documentos técnicos para asegurar la legalidad en la evaluación de los alumnos y la disciplina escolar.
          </p>
          <a 
            href="https://drive.google.com/file/d/1X-uV_tYqL_n9oH5_v3p_f-U5_r4m1B_x/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#d4a017] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            DESCARGAR FORMATOS <ExternalLink size={16}/>
          </a>
        </div>
      </div>

      <div className="mt-12 p-8 bg-black/30 rounded-3xl border-l-4 border-[#d4a017]">
        <div className="flex items-start gap-4">
          <ShieldAlert className="text-[#d4a017] shrink-0" size={24} />
          <p className="text-sm font-light text-gray-300 italic text-justify">
            Nota: Estos materiales son de carácter orientativo y han sido elaborados bajo los principios de legalidad y ética profesional que rigen mi ejercicio como abogado litigante y docente. Su uso debe ajustarse siempre a las políticas vigentes de la institución.
          </p>
        </div>
      </div>
    </div>
  );
}
