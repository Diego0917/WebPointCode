import React from 'react';
import { X } from 'lucide-react';

export default function ModalQuote({ planName, onClose }) {
  if (!planName) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#14162d] border border-[#24b3a9] rounded-2xl p-6 sm:p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold mb-2 text-[#24b3a9]">¡Excelente Elección!</h3>
        <p className="text-gray-300 text-sm mb-6">
          Has seleccionado el <strong className="text-white">{planName}</strong>. Déjanos tu correo para ponernos en contacto contigo.
        </p>
        <form onSubmit={(e) => { e.preventDefault(); onClose(); alert('¡Gracias! Te contactaremos pronto.'); }} className="space-y-4">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            required 
            className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#24b3a9]"
          />
          <button 
            type="submit" 
            className="w-full bg-[#24b3a9] text-[#14162d] font-bold py-3 rounded-lg"
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}