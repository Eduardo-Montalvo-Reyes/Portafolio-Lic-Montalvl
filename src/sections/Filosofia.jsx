import React from 'react';

export default function Filosofia() {
  return (
    <div className="animate-fade-in space-y-12 max-w-5xl mx-auto">
      <div className="bg-[#1e293b] p-8 md:p-16 rounded-[3rem] border border-[#d4a017]/20 shadow-2xl overflow-hidden">
        
        {/* Título Principal */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-16 tracking-tight" style={{ color: '#d4a017' }}>
          Mi Filosofía
        </h2>

        {/* Bloque Superior: Video y Frase Insignia */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16 pb-12 border-b border-white/10">
          <div className="w-48 md:w-64 flex-shrink-0">
            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden border-2 border-[#d4a017] shadow-[0_0_20px_rgba(212,160,23,0.2)]">
              <iframe 
                className="absolute inset-0 w-full h-full" 
                src="https://www.youtube.com/embed/8vK125i-ctk" 
                title="Filosofía Lic. Montalvo"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-2xl md:text-4xl font-serif italic font-light leading-snug text-center md:text-left tracking-wide" style={{ color: '#d4a017' }}>
              “La enseñanza y la tecnología deben ir de la mano, complementándose; mas nunca, evitarse.”
            </p>
          </div>
        </div>

        {/* Cuerpo de Texto: Trayectoria y Metodología */}
        <div className="space-y-10 text-gray-100 text-lg md:text-xl font-light leading-relaxed text-justify">
          <p>
            Soy Licenciado en Derecho por la UNAM y maestrante en Derecho Laboral, ejerciendo activamente como abogado litigante independiente. Esta dualidad me permite trasladar la realidad de los juzgados y la praxis jurídica directamente al aula, fomentando en los estudiantes un pensamiento crítico, ético y, sobre todo, práctico.
          </p>
          
          <p>
            A lo largo de mi trayectoria, me he especializado en el diseño de planes de estudio personalizados mediante herramientas de mi autoría. Estos instrumentos garantizan un control riguroso de los contenidos, una administración del tiempo optimizada y una dinámica grupal de excelencia. Asimismo, soy un convencido de que la Inteligencia Artificial debe integrarse a la educación como un auxiliar estratégico bajo principios de ética profesional.
          </p>
          
          <p>
            Mi objetivo es aportar la <span className="text-[#d4a017] font-normal">"nueva inercia"</span> que la docencia exige: profesionalismo técnico-teórico con un enfoque humano. Mi metodología es pragmática; implemento proyectos de unidad donde el alumno someta la teoría a la prueba de la realidad, culminando en un Proyecto Integrador Final que asegura la comprensión total del programa aplicado al entorno diario.
          </p>

          {/* Manifiesto Final (Destacado) */}
          <div className="py-10 my-12 border-y border-[#d4a017]/30 bg-white/5 px-6 md:px-12 rounded-xl">
            <p className="font-serif italic text-xl md:text-2xl font-light text-gray-200 text-justify leading-relaxed">
              "No concibo la docencia como un acto de mera transmisión de datos, sino como un ejercicio de responsabilidad humana y jurídica. Mi compromiso nace en las planeaciones académicas buscando la perfección y se materializa en el aula, donde busco romper el esquema de la educación fría para mostrar la realidad tal cual es: cruel y compleja, pero transformable. Mi metodología es el pragmatismo absoluto; diseño estructuras que obligan al alumno a enfrentarse a la práctica real, porque el error en el aula es una lección, pero el error en la vida tiene un peso que marca. Enseño desde mis aciertos y desde las cicatrices de mis errores, con la esperanza de que mis estudiantes no carguen con mis mismos pesos. Decido darlo todo por ellos, porque la bondad y la exigencia técnica son la única vía para formar expertos en la ley, pero sobre todo, íntegros en su humanidad."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
