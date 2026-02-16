import React from 'react';
import { 
  ChevronLeft, Map, Smile, BookOpen, 
  Activity, Target, ExternalLink 
} from 'lucide-react';

// --- COMPONENTES HIJOS INTEGRADOS ---

const Historia = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-[#d4a017] uppercase text-center">Historia de México</h2>
    <div className="flex justify-center">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-[#d4a017]/30 shadow-2xl">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/QmW6HvyawqU" allowFullScreen title="Historia"></iframe>
      </div>
    </div>
    <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line text-gray-100">
      La enseñanza de la Historia de México representa un desafío pedagógico que va más allá de la cronología; constituye el fundamento de la identidad. Mi propuesta surge de la necesidad de romper con la enseñanza tradicional para proponer un modelo comparativo donde el devenir nacional se entienda como parte integral de la narrativa universal.
      {"\n\n"}
      Al compartir este descubrimiento con mis alumnos, logramos transformar el aula en un espacio de análisis crítico. La mayor evidencia de éxito fue ver cómo los estudiantes se apropiaban de su pasado con orgullo y rigor, entregando proyectos donde la empatía histórica sustituyó al desinterés inicial.
    </p>
  </div>
);

const Etica = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-[#d4a017] uppercase text-center">Ética y Valores</h2>
    <div className="flex justify-center">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-[#d4a017]/30 shadow-2xl">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/771JHpIriUY" allowFullScreen title="Etica"></iframe>
      </div>
    </div>
    <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line text-gray-100">
      El presente diseño curricular de autor nace de la convicción de que esta materia es la columna vertebral de la formación ciudadana. Integramos la Teoría de la Calificación del Acto y la Phronesis aristotélica para que el alumno comprenda que la libertad es una facultad que se ejerce con conocimiento de causa.
      {"\n\n"}
      Este curso permitió que los estudiantes lograran una maduración intelectual genuina. El éxito no se mide solo en la calidad de los proyectos, sino en el impacto humano generado en los jóvenes, quienes encontraron en la Ética una herramienta para analizar su realidad con objetividad y justicia.
    </p>
  </div>
);

const Taller = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-[#d4a017] uppercase text-center">Taller de Lectura y Redacción</h2>
    <div className="flex justify-center">
      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-[#d4a017]/30 shadow-2xl">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/ToCn4t3cghY" allowFullScreen title="Taller"></iframe>
      </div>
    </div>
    <p className="font-light text-justify text-lg leading-relaxed whitespace-pre-line text-gray-100">
      Propongo una metodología de Ingeniería del Pensamiento, donde el alumno comprende que la claridad al escribir es el reflejo directo de la claridad al pensar. Dotamos al estudiante de herramientas como la gradación de objetividad y la pirámide invertida.
      {"\n\n"}
      Haber logrado que los estudiantes amen la estructura del lenguaje es mi mayor orgullo. Les he entregado la llave maestra para su futuro desempeño en cualquier disciplina: la capacidad de comunicar la verdad con orden y contundencia.
    </p>
  </div>
);

const Actividades = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-[#d4a017] uppercase text-center">Actividades de Refuerzo</h2>
    <div className="bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-[#d4a017]/20 shadow-2xl">
      <p className="text-xl font-serif italic text-[#d4a017] mb-8 text-center">La Formación del Criterio y la Responsabilidad Intelectual</p>
      <div className="space-y-6 text-lg font-light text-justify leading-relaxed">
        <p>Parto de la convicción de que la teoría sin ejecución es letra muerta. Mis proyectos son filtros diseñados para transformar el "yo creo" en una responsabilidad fundamentada que otorgue honor a la firma del estudiante.</p>
        <p>Al exigir justificaciones profundas, devuelvo al estudiante la propiedad de su pensamiento y garantizo la honestidad académica. Busco formar ciudadanos críticos, no manipulables.</p>
      </div>
      <div className="text-center mt-10">
        <a href="https://drive.google.com/file/d/1g-hOJNUSJBIxP_ieqh0cL3ex_EpzmpDu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
          MUESTRA DE ACTIVIDADES <ExternalLink size={18}/>
        </a>
      </div>
    </div>
  </div>
);

const Proyectos = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h2 className="text-4xl font-serif font-bold text-[#d4a017] uppercase text-center">Proyecto Final</h2>
    <div className="bg-[#1e293b] p-8 md:p-12 rounded-3xl border border-[#d4a017]/20 shadow-2xl">
      <p className="text-xl font-serif italic text-[#d4a017] mb-8 text-center">La Necesidad del Proyecto Integral</p>
      <div className="space-y-6 text-lg font-light text-justify leading-relaxed">
        <p>Busco una "Soberanía Intelectual" donde el alumno aplique la teoría en escenarios de realidad compleja, obligándolo a adoptar un "Modo Formal" que le otorgue autoridad y precisión.</p>
        <p>Mi intención es que el alumno experimente el orgullo del esfuerzo con sentido, transformando el aprendizaje en una habilidad de vida. Cada joven egresa con una columna vertebral ética y mental sólida.</p>
      </div>
      <div className="text-center mt-10">
        <a href="https://drive.google.com/file/d/1NiR6q8QP0oupL_0_53l6_OvlwPzZuIOr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-4 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
          MUESTRA DE PROYECTO <ExternalLink size={18}/>
        </a>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---

export default function Bachillerato({ subTab, setSubTab }) {
  const renderSubContent = () => {
    switch (subTab) {
      case 'historia': return <Historia />;
      case 'etica': return <Etica />;
      case 'taller': return <Taller />;
      case 'actividades': return <Actividades />;
      case 'proyectos': return <Proyectos />;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in">
      {!subTab ? (
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase">Docencia Bachillerato</h2>
            <div className="flex justify-center py-6">
              <div className="w-full max-w-[300px] aspect-[9/16] rounded-3xl overflow-hidden border-4 border-[#d4a017]/30 shadow-2xl">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/_3VZPyppNW8" allowFullScreen title="Presentacion Bachillerato"></iframe>
              </div>
            </div>
            <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed text-gray-200">
              Mi labor trasciende la simple instrucción; se enfoca en la formación integral de ciudadanos con criterio. He rediseñado los programas para dotarlos de un rigor profesional que prepare al alumno para la vida universitaria. Mi más alta carta de recomendación es el testimonio de mis estudiantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {[
              { id: 'historia', label: 'HISTORIA', icon: <Map />, desc: 'Diseño técnico-pedagógico de corte comparativo nacional y universal.' },
              { id: 'etica', label: 'ÉTICA', icon: <Smile />, desc: 'Centrado en la Teoría de la Calificación del Acto y la Phronesis aristotélica.' },
              { id: 'taller', label: 'TALLER DE REDACCIÓN', icon: <BookOpen />, desc: 'Basado en la Ingeniería del Pensamiento y gradación de objetividad.' },
              { id: 'actividades', label: 'ACTIVIDADES', icon: <Activity />, desc: 'Dilemas reales diseñados para aplicar el conocimiento día con día.' },
              { id: 'proyectos', label: 'PROYECTO FINAL', icon: <Target />, desc: 'Certificación del proceso de aprendizaje con coherencia y linealidad absoluta.' },
            ].map((item) => (
              <div key={item.id} className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 flex flex-col h-full hover:border-[#d4a017]/50 transition-all group">
                <div className="text-[#d4a017] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-3 tracking-widest">{item.label}</h3>
                <p className="text-xs font-light text-justify text-gray-400 mb-6">{item.desc}</p>
                <button onClick={() => setSubTab(item.id)} className="w-full py-3 mt-auto bg-[#d4a017] text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-colors">
                  EXPLORAR MATERIA
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <button onClick={() => setSubTab(null)} className="flex items-center gap-2 text-[#d4a017] uppercase text-xs font-black tracking-widest hover:text-white transition-colors">
            <ChevronLeft size={20} /> Volver a Bachillerato
          </button>
          <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
            {renderSubContent()}
          </div>
        </div>
      )}
    </div>
  );
}
