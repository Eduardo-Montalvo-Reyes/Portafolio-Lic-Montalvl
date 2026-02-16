import React from 'react';
import { 
  ChevronLeft, RefreshCw, Book, ClipboardList, 
  Brain, FileText, Target, ExternalLink 
} from 'lucide-react';

// --- COMPONENTES HIJOS (DEFINIDOS INTERNAMENTE PARA ESTA SECCIÓN) ---

const ActualizacionTemario = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Actualización de Temario</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">Porque la Innovación y la actualización siempre van de la mano</h2>
      <p>La enseñanza del nivel licenciatura en el siglo XXI no puede limitarse a la simple exégesis o memorización de conceptos. Este temario ha sido diseñado bajo una premisa fundamental: la formación de juristas críticos, capaces de operar en un entorno globalizado y bajo el paradigma de los Derechos Humanos.</p>
      <p>La estructura busca romper con el tradicionalismo estático. Mientras la doctrina clásica nos hereda la base conceptual, la realidad judicial contemporánea exige integrar herramientas de vanguardia. Este contenido trasciende el aula para conectarse con la trinchera del litigio.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/1d-XhmVynucr2qjXkn0i0EM1Ifm0tzbLH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR DOCUMENTO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const TemarioTematico = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Temario Temático</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">La Garantía de la Enseñanza</h2>
      <p>Comprendo el desglose semanal como la garantía técnica de mi ejercicio docente. Al definir semana a semana los puntos clave, aseguro que el contenido se cubra con la profundidad que la materia exige, evitando lagunas en el desempeño futuro del estudiante.</p>
      <p>Mi criterio nace de la necesidad de conectar la teoría con la realidad que vivo como litigante. No enseño la materia como un concepto estático; la presento como una herramienta viva y actualizada.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/1UOK-4JUSffSn8iMfIhvHKTHcIEymb3Ne/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR DOCUMENTO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const GuionCatedra = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Guión de Cátedra</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">La Práctica de la Garantía</h2>
      <p>Concibo cada sesión no como un monólogo, sino como una obra escénica donde el aula es el escenario. Un jurista que no domina su lenguaje corporal o el ritmo de la argumentación es un profesional incompleto. La inteligencia artística dota a la jurisprudencia de humanidad.</p>
      <p>Este formato permite un ritmo narrativo: Prólogo (captura de atención), Acto Central (clímax del aprendizaje técnico) y Resolución (donde el alumno protagoniza su formación).</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/1yxFtyz5fQuNST_ZacoBeRbEyUgDYL9so/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR DOCUMENTO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const ImplementacionEpistemologica = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Implementación Epistemológica</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">La importancia de la planificación</h2>
      <p>Este modelo de intervención rescata la formación de estudiantes desorientados ante la abstracción teórica. Partiendo de mi praxis jurídica, donde la detección de falacias es vital, desarrollé los "4 Pilares Epistemológicos": Naturaleza, Origen, Validez y Límites.</p>
      <p>El resultado es una comunidad de profesionistas que aprendieron a cuestionar los cimientos de su propio saber, convirtiendo la filosofía en una ventaja competitiva real.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/16n39rBGGcYogA-Bi0wT-Ko18RUrXJHRN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR DOCUMENTO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const GuiaPractica = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Guía de Práctica (Ejemplo)</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">Apoyo para la perfección de Temas</h2>
      <p>Este material nació observando la necesidad de conectar la teoría con la realidad. Diseñé este instrumento para derribar la barrera de la terminología árida, convirtiendo al alumno en un "detective del conocimiento" a través de casos reales.</p>
      <p>Un profesional que no sabe cuestionar cómo aprendió lo que sabe está condenado a repetir errores ajenos. Esta guía es un compromiso con la formación de mentes críticas.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/1_DK-o6WDRdsw30R_QfmJXHKJu28CRrhZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR DOCUMENTO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const ProyectoFinal = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Proyecto Final del Curso (Ejemplo)</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">La Proyección del Temario a la Práctica</h2>
      <p>Buscamos la "Soberanía Intelectual". Mis proyectos obligan al estudiante a adoptar un "Modo Formal" de comunicación, reconociendo que su palabra tiene consecuencias legales y sociales. Es un estándar de excelencia que el mundo profesional demandará fuera del aula.</p>
      <p>Aunque represente un esfuerzo extra de diseño y evaluación, es un compromiso ineludible con la calidad. Busco que cada joven egrese con una columna vertebral ética y mental sólida.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/1gsMeGRcHXzWjRGahmQu15dWzqDzzRsQs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR DOCUMENTO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL INNOVACION ---

export default function Innovacion({ subTab, setSubTab }) {
  const renderSubContent = () => {
    switch (subTab) {
      case 'actualizacion-temario': return <ActualizacionTemario />;
      case 'temario-tematico': return <TemarioTematico />;
      case 'guion-catedra': return <GuionCatedra />;
      case 'implementacion-epistemologica': return <ImplementacionEpistemologica />;
      case 'guia-practica': return <GuiaPractica />;
      case 'proyecto-final': return <ProyectoFinal />;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in">
      {!subTab ? (
        <div className="space-y-12">
          {/* Cabecera Principal */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight" style={{ color: '#d4a017' }}>
              Innovando la Enseñanza
            </h2>
            <span className="block text-sm tracking-[0.3em] opacity-60">(Material Pedagógico)</span>
            
            <div className="flex justify-center py-6">
              <div className="w-full max-w-[280px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-[#d4a017] shadow-2xl">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/IAq_sFBFboY" title="Innovación" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed text-gray-200">
              Experto en el diseño e implementación de metodologías pedagógicas de alto impacto que vinculan la praxis jurídica real con la formación académica... 
              <span className="block mt-6 italic text-[#d4a017] font-serif border-l-2 border-[#d4a017] pl-6">
                "Entiendo la docencia como una extensión de la justicia: formar ciudadanos que no solo posean el saber técnico, sino el criterio para aplicarlo con ética."
              </span>
            </p>
          </div>

          {/* Grid de las 6 secciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {[
              { id: 'actualizacion-temario', label: 'Actualización de Temario', icon: <RefreshCw />, desc: 'Robustecimiento de programas oficiales con doctrina contemporánea y casos de vanguardia.' },
              { id: 'temario-tematico', label: 'Temario Temático', icon: <Book />, desc: 'Estructura conceptual detallada por sesión: objetivos, lecturas y actividades específicas.' },
              { id: 'guion-catedra', label: 'Guión de Cátedra', icon: <ClipboardList />, desc: 'Diseño de ejecución pedagógica minuto a minuto y técnica de abordaje práctico.' },
              { id: 'implementacion-epistemologica', label: 'Implementación Epistemológica', icon: <Brain />, desc: 'Dominio de los 4 Pilares: Naturaleza, Origen, Validez y Límites del saber.' },
              { id: 'guia-practica', label: 'Guía de Práctica', icon: <FileText />, desc: 'Instrumento de autoría propia que entrena al alumno en la detección de falacias.' },
              { id: 'proyecto-final', label: 'Proyecto Final', icon: <Target />, desc: 'Culminación del proceso de maduración intelectual y criterio crítico del estudiante.' },
            ].map((item) => (
              <div key={item.id} className="bg-[#1e293b] p-8 rounded-2xl border border-white/5 flex flex-col hover:border-[#d4a017]/40 transition-all group">
                <div className="text-[#d4a017] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-4 uppercase tracking-tighter">{item.label}</h3>
                <p className="text-sm font-light text-justify text-gray-400 mb-8 leading-relaxed">{item.desc}</p>
                <button onClick={() => setSubTab(item.id)} className="w-full py-4 mt-auto bg-transparent border border-[#d4a017] text-[#d4a017] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#d4a017] hover:text-black transition-all">
                  CONOCER MÁS
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <button onClick={() => setSubTab(null)} className="flex items-center gap-2 text-[#d4a017] uppercase text-xs font-black tracking-widest hover:text-white transition-colors">
            <ChevronLeft size={20} /> Volver a Innovación
          </button>
          <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
            {renderSubContent()}
          </div>
        </div>
      )}
    </div>
  );
}
