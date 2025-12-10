import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="relative w-32 h-10 md:w-40 md:h-12 cursor-pointer">
           <Image 
             src="/TrenaLogo.png" 
             alt="Trena" 
             fill
             className="object-contain object-left"
             priority
           />
        </div>

        {/* MENU */}
        <div className="flex items-center gap-6">
          <a href="#" className="hidden md:block text-sm font-medium text-gray-600 hover:text-trena-dark transition">
            Para Profissionais
          </a>
          <button className="bg-trena-dark text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-black transition">
            Entrar
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Header;