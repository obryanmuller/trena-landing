import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-trena-dark transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO - AUMENTADA */}
        {/* Ajuste: w-48 (mobile) e md:w-64 (desktop) para ficar bem visível */}
        <div className="relative w-48 h-12 md:w-64 md:h-16 cursor-pointer hover:opacity-80 transition-opacity">
           <Image 
             src="/TrenaLogo.png" /* Ou /logo2.png se você renomeou o arquivo */
             alt="Trena" 
             fill
             className="object-contain object-left"
             priority
           />
        </div>

        {/* MENU E BOTÕES */}
        <div className="flex items-center gap-8">
          
          {/* Links (Escondidos no mobile) */}
          <div className="hidden md:flex gap-6 font-medium text-sm">
            <a href="#" className="text-gray-600 hover:text-trena-dark hover:underline decoration-2 underline-offset-4 transition-all">
              Para Profissionais
            </a>
            <a href="#" className="text-gray-600 hover:text-trena-dark hover:underline decoration-2 underline-offset-4 transition-all">
              Para Clientes
            </a>
          </div>

          {/* Botão de Ação "Industrial" */}
          <button className="bg-trena-yellow text-trena-dark font-black text-sm px-6 py-2.5 
                             border-2 border-trena-dark rounded-lg
                             shadow-hard hover:shadow-hard-hover 
                             active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                             transition-all duration-200 uppercase tracking-wide">
            Acessar
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;