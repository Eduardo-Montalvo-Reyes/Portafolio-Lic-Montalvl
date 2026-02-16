import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos para lic.montalvo.legal@gmail.com:", formData);
    alert("Mensaje enviado con éxito, Licenciado.");
  };

  return (
    <div className="animate-fade-in space-y-12">
      <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#d4a017] text-center uppercase tracking-widest">
        Contacto
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Video Short */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-[2.5rem] overflow-hidden border-2 border-[#d4a017] shadow-xl">
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/yrJO5XAs3T4" allowFullScreen></iframe>
          </div>
        </div>

        {/* Info y Formulario */}
        <div className="w-full lg:w-2/3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-[#d4a017]" size={24} />
                <p className="text-sm">lic.montalvo.legal@gmail.com</p>
              </div>
              <button 
                onClick={() => window.open('https://wa.me/525534676149', '_blank')}
                className="w-full py-3 bg-[#25d366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <MessageSquare size={18} /> WHATSAPP
              </button>
            </div>
            <div className="flex items-center justify-center italic text-[#d4a017] text-xl font-serif p-4">
              "Juntos generemos el cambio del mañana"
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#1e293b] p-8 rounded-2xl border border-[#d4a017]/10 space-y-4">
            <input type="text" placeholder="NOMBRE" required className="w-full bg-[#374151] border border-white/10 p-4 rounded-xl focus:border-[#d4a017] outline-none" onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
            <input type="email" placeholder="CORREO" required className="w-full bg-[#374151] border border-white/10 p-4 rounded-xl focus:border-[#d4a017] outline-none" onChange={(e) => setFormData({...formData, correo: e.target.value})} />
            <textarea placeholder="MENSAJE" rows={4} required className="w-full bg-[#374151] border border-white/10 p-4 rounded-xl focus:border-[#d4a017] outline-none resize-none" onChange={(e) => setFormData({...formData, mensaje: e.target.value})}></textarea>
            <button type="submit" className="px-10 py-4 bg-[#d4a017] text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all">
              ACEPTAR <Send size={18} className="inline ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
