import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Importación de Secciones
import Inicio from './sections/Inicio';
import Filosofia from './sections/Filosofia';
import Conoceme from './sections/Conoceme';
import Innovacion from './sections/Innovacion';
import Tribunal from './sections/Tribunal';
import Bachillerato from './sections/Bachillerato';
import ApoyoJuridico from './sections/ApoyoJuridico';
import Contacto from './sections/Contacto';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [subTab, setSubTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, subTab]);

  // Paleta de Colores Institucional
  const colors = {
    bg: '#000000',      // Fondo Negro Sólido
    accent: '#5F7906',  // Verde Base
    text: '#FFFFFF',    // Texto Blanco
    podium: 'linear-gradient(to right, #7B7474, #000000, #7B7474)',
    textGradient: 'linear-gradient(to right, #5F7906, #FFFFFF, #5F7906)'
  };

  const menuItems = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'conoceme', label: 'CONÓCEME' },
    { id: 'innovacion', label: 'INNOVACIÓN' },
    { id: 'tribunal', label: 'VISIÓN PRÁCTICA' },
    { id: 'bachillerato', label: 'BACHILLERATO' },
    { id: 'apoyo-juridico', label: 'APOYO JURÍDICO' },
    { id: 'contacto', label: 'CONTACTO' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio': return <Inicio setActiveTab={setActiveTab} />;
      case 'filosofia': return <Filosofia />;
      case 'conoceme': return <Conoceme />;
      case 'innovacion': return <Innovacion subTab={subTab} setSubTab={setSubTab} />;
      case 'tribunal': return <Tribunal subTab={subTab} setSubTab={setSubTab} />;
      case 'bachillerato': return <Bachillerato subTab={subTab} setSubTab={setSubTab} />;
      case 'apoyo-juridico': return <ApoyoJuridico />;
      case 'contacto': return <Contacto />;
      default: return <Inicio setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#5F7906] selection:text-white" style={{ backgroundColor: colors.bg, color: colors.text }}>
      
      {/* NAVEGACIÓN: EL PODIUM DIFUMINADO */}
      <nav className="sticky top-0 z-50 border-b-2 border-[#5F7906]" style={{ background: colors.podium }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Identidad en el Podium */}
          <div className="flex flex-col cursor-pointer" onClick={() => { setActiveTab('inicio'); setSubTab(null); }}>
            <h1 
              className="text-xl md:text-3xl font-serif font-bold tracking-tight uppercase leading-none"
              style={{ 
                background: colors.textGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              LIC. MONTALVO REYES
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white opacity-90 mt-1">
              Abogado & Catedrático
            </span>
          </div>

          {/* Menú Desktop con Marco Blanco al Activar */}
          <div className="hidden lg:flex space-x-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSubTab(null); setMenuOpen(false); }}
                className={`uppercase text-[11px] tracking-widest font-bold px-4 py-2 rounded-lg transition-all duration-300 border ${activeTab === item.id ? 'border-white bg-[#5F7906] text-white shadow-lg' : 'border-transparent text-gray-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botón Hamburguesa Móvil */}
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {menuOpen && (
          <div className="lg:hidden bg-black border-b border-[#5F7906] p-6 flex flex-col space-y-4 shadow-2xl animate-fade-in">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSubTab(null); setMenuOpen(false); }}
                className={`text-left text-sm font-bold tracking-widest uppercase py-2 ${activeTab === item.id ? 'text-[#5F7906]' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div key={activeTab} className="animate-fade-in">
          {renderContent()}
        </div>
      </main>

      {/* FOOTER CON LÍNEA VERDE DIVISORIA */}
      <footer className="mt-20 border-t border-[#5F7906] py-12 px-6 text-center bg-black">
        <p className="text-[10px] tracking-[0.3em] uppercase opacity-80 text-white">
          Licenciado en Derecho, Maestrante en Derecho Laboral y Profesor | Todos los derechos reservados ©2026
        </p>
      </footer>
    </div>
  );
}
