import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-trena-dark mb-4">Tudo conectado.</h2>
          <p className="text-gray-500">
            Simplificamos a jornada da construção civil com tecnologia de ponta e design intuitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Grande (Ocupa 2 colunas) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-trena-dark mb-3">Gestão Completa</h3>
              <p className="text-gray-500 max-w-sm text-lg">
                Do orçamento à entrega das chaves. Acompanhe o cronograma sem sair de casa.
              </p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-5 group-hover:opacity-10 transition transform group-hover:scale-110 duration-500 rotate-12">
              <Image src="/window.svg" alt="Window" width={250} height={250} />
            </div>
          </div>

          {/* Card 2: Escuro (Destaque) */}
          <div className="bg-trena-dark rounded-[2rem] p-8 text-white flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-xl">
            <div className="w-14 h-14 bg-gray-700/50 rounded-2xl flex items-center justify-center mb-4 border border-gray-600">
              <Image src="/file.svg" alt="File" width={28} height={28} className="invert" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-trena-yellow mb-2">Contratos Digitais</h3>
              <p className="text-gray-400 text-sm">Segurança jurídica automática para cada serviço.</p>
            </div>
          </div>

          {/* Card 3: Amarelo (Vertical) */}
          <div className="bg-trena-yellow rounded-[2rem] p-8 flex flex-col justify-center items-center text-center hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 transform rotate-45 scale-150 translate-y-1/2"></div>
            <h3 className="text-5xl font-bold text-trena-dark mb-2 relative z-10">100%</h3>
            <p className="text-trena-dark/80 font-bold relative z-10 uppercase tracking-wider text-sm">Profissionais Verificados</p>
          </div>

          {/* Card 4: Mapa (Ocupa 2 colunas) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between group">
            <div>
              <h3 className="text-2xl font-bold text-trena-dark mb-2">Em todo lugar</h3>
              <p className="text-gray-500 text-lg">Conecte-se com profissionais da sua região.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-full group-hover:scale-110 transition duration-500">
              <Image src="/globe.svg" alt="Globe" width={50} height={50} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;