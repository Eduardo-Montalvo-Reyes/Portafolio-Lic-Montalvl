import React from 'react';
import { 
  ChevronLeft, Gavel, ShieldCheck, Scale, 
  FolderKanban, Youtube, FileSignature, ExternalLink 
} from 'lucide-react';

// --- COMPONENTES HIJOS (DEFINIDOS INTERNAMENTE PARA ESTA SECCIÓN) ---

const CodigoNormativo = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Código Normativo Estudiantil</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">Cimentando la Soberanía Jurídica</h2>
      <p>Este cuerpo normativo de autoría propia es la constitución de un Estado de Derecho dentro del aula. Al establecer procesos reales como la caducidad y la prescripción, transformo el salón en un juzgado vivo donde la jerarquía del "porque yo lo digo" se rompe.</p>
      <p>Es una herramienta de soberanía intelectual que exige el uso de tecnicismos y fundamentación bajo la legislación vigente, elevando lo académico a un nivel de ejercicio profesional constante.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/file/d/1zi3g0AD_Drhk1E8sOt2ys5tQXveAz8um/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR CÓDIGO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const ControlConvencionalidad = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">El Amparo como Defensa de la Libertad</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">Una Escalera de Resistencia Judicial</h2>
      <p>El Juicio de Amparo aquí se vive como una auténtica lección de supervivencia. Mi método lanza al alumno al océano del control de convencionalidad, obligándolo a entender que el Derecho es una escalera de resistencia.</p>
      <p>Sustituimos la nota numérica por una sentencia que se gana o se pierde con argumentos. No busco formar empleados, sino estrategas de la Constitución que sepan cuándo la autoridad vulnera un derecho.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/drive/folders/1twihlQCNkitTvsT22E1112yHrnw_lccR?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR AMPARO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const GestionExpedientes = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">La Gestión de Expedientes</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">El Formalismo que Sostiene la Justicia</h2>
      <p>La figura del Secretario en este Tribunal enseña que la forma es fondo. Mi metodología utiliza instrumentos reales como Acuerdos de Admisión para que el estudiante comprenda que no basta con ganar el debate; debe saber gestionar el proceso.</p>
      <p>Cada sentencia que redacto es un acto de resistencia para que mis alumnos no sean simples gestores, sino formadores de derecho con disciplina documental.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/drive/folders/19zugOindVccwY2B8-OVvZrxPWF0Du-OT?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR EXPEDIENTES <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const MaterialVisual = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Mapa del Litigio Estratégico</h1>
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-[#d4a017] shadow-2xl">
      <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/urVwHm8WZuc" title="Demanda" frameBorder="0" allowFullScreen></iframe>
    </div>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">Estructura Universal de la Demanda</h2>
      <p>La demanda es un instrumento técnico de precisión. Mi método integra una Guía Procesal Interactiva que enseña a construir la arquitectura de un juicio desde el Rubro hasta los Puntos Petitorios.</p>
      <p>Este es el antídoto contra la improvisación. El alumno adquiere la capacidad de presentar promociones inatacables, transformando un papel en una herramienta de poder jurídico.</p>
    </div>
  </div>
);

const PracticaJuridica = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Insurgencia Académica</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify">
      <h2 className="text-2xl font-serif font-bold text-[#d4a017]">Ontología del Hacer para Ser</h2>
      <p>Este método es una simulación de alto riesgo controlado donde el alumno deja de leer la ley para convertirse en su operador. Es formación técnica que protege al futuro abogado contra la negligencia.</p>
      <p>Mi compromiso es formar soberanos y no llenar vacantes en un mercado saturado de obediencia. La firma de un abogado tiene peso, honor y la fuerza necesaria para sostener el Estado de Derecho.</p>
    </div>
    <div className="text-center pt-10">
      <a href="https://drive.google.com/drive/folders/1Q8yO5anTtLpOnVL4JDhsyUDo4I7VSz4E?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-12 py-5 bg-[#d4a017] text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg">
        CONSULTAR REPOSITORIO <ExternalLink size={18}/>
      </a>
    </div>
  </div>
);

const PraxisSecretarial = () => (
  <div className="animate-fade-in space-y-10 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#d4a017] uppercase tracking-widest text-center">Declaración de Propósito</h1>
    <div className="space-y-8 text-lg font-light leading-relaxed text-justify italic border-l-4 border-[#d4a017] pl-8">
      <p>"Este sistema es la respuesta a un entorno educativo conformado con lo mínimo; es una apuesta por el profesionalismo en un mundo que prefiere la comodidad."</p>
      <p>"Me asumo como un guía que ha transitado el camino del litigio. Mi intención es evitar que mis alumnos enfrenten la incertidumbre, entregándoles las herramientas para que su voz tenga peso ante cualquier autoridad."</p>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL TRIBUNAL ---

export default function Tribunal({ subTab, setSubTab }) {
  const renderSubContent = () => {
    switch (subTab) {
      case 'codigo-normativo': return <CodigoNormativo />;
      case 'control-convencionalidad': return <ControlConvencionalidad />;
      case 'gestion-expedientes': return <GestionExpedientes />;
      case 'material-visual': return <MaterialVisual />;
      case 'practica-juridica': return <PracticaJuridica />;
      case 'praxis-secretarial': return <PraxisSecretarial />;
      default: return null;
    }
  };

  return (
    <div className="animate-fade-in">
      {!subTab ? (
        <div className="space-y-12">
          {/* Cabecera Principal */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-[#d4a017]">
              Tribunal (Visión Práctica)
            </h2>
            <div className="flex justify-center py-6">
              <Gavel size={80} className="text-[#d4a017] opacity-50" />
            </div>
            <p className="max-w-4xl mx-auto font-light text-justify text-lg leading-relaxed text-gray-200">
              La formación técnica de excelencia requiere de un entorno que replique la severidad y el rigor del campo judicial. En este apartado, presento los pilares de mi metodología de simulación procesal, donde el aula se transmuta en un juzgado vivo.
            </p>
          </div>

          {/* Grid de las 6 secciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {[
              { id: 'codigo-normativo', label: 'Código Normativo', icon: <ShieldCheck />, desc: 'La constitución de un Estado de Derecho dentro del aula para fundamentar cada acto.' },
              { id: 'control-convencionalidad', label: 'Control Convencionalidad', icon: <Scale />, desc: 'El Amparo como escalera de resistencia judicial y defensa técnica de la libertad.' },
              { id: 'gestion-expedientes', label: 'Gestión de Expedientes', icon: <FolderKanban />, desc: 'El formalismo que sostiene la justicia mediante acuerdos y resoluciones reales.' },
              { id: 'material-visual', label: 'Material Visual', icon: <Youtube />, desc: 'Guía técnica sobre la estructura universal de la demanda y el litigio estratégico.' },
              { id: 'practica-juridica', label: 'Práctica Jurídica', icon: <Gavel />, desc: 'Ontología del hacer para ser: insurgencia académica contra la pasividad del sistema.' },
              { id: 'praxis-secretarial', label: 'Praxis Secretarial', icon: <FileSignature />, desc: 'Declaración de propósito y guía en el laberinto jurídico profesional.' },
            ].map((item) => (
              <div key={item.id} className="bg-[#1e293b] p-8 rounded-2xl border border-white/5 flex flex-col hover:border-[#d4a017]/40 transition-all group">
                <div className="text-[#d4a017] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-serif font-bold text-xl mb-4 uppercase tracking-tighter">{item.label}</h3>
                <p className="text-sm font-light text-justify text-gray-400 mb-8 leading-relaxed">{item.desc}</p>
                <button onClick={() => setSubTab(item.id)} className="w-full py-4 mt-auto bg-transparent border border-[#d4a017] text-[#d4a017] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#d4a017] hover:text-black transition-all">
                  ENTRAR AL TRIBUNAL
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <button onClick={() => setSubTab(null)} className="flex items-center gap-2 text-[#d4a017] uppercase text-xs font-black tracking-widest hover:text-white transition-colors">
            <ChevronLeft size={20} /> Volver a Tribunal
          </button>
          <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
            {renderSubContent()}
          </div>
        </div>
      )}
    </div>
  );
}
