import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-grid pt-32 pb-20 min-h-[90vh] flex items-center border-b-2 border-trena-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* LADO ESQUERDO: Texto Forte */}
          <div className="lg:w-1/2 relative z-10">
            
            <div className="inline-block bg-trena-dark text-white font-mono text-xs px-3 py-1 mb-6 shadow-hard-sm">
              v1.0 • PLATAFORMA DE GESTÃO
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-trena-dark leading-[0.9] mb-6 tracking-tighter uppercase">
              Obra <br/>
              sob <br/>
              <span className="bg-trena-yellow px-2">Controle.</span>
            </h1>
            
            <p className="text-xl font-medium text-gray-600 mb-10 max-w-lg leading-relaxed border-l-4 border-trena-dark pl-6">
              A ferramenta definitiva para conectar clientes exigentes a profissionais de elite. Sem amadorismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-trena-dark text-white text-lg font-bold py-4 px-8 border-2 border-trena-dark shadow-hard hover:shadow-hard-hover transition-all rounded-lg">
                Quero Contratar
              </button>
              <button className="bg-white text-trena-dark text-lg font-bold py-4 px-8 border-2 border-trena-dark shadow-hard hover:shadow-hard-hover transition-all rounded-lg">
                Sou Profissional
              </button>
            </div>

            <div className="mt-12 flex items-center gap-3 font-mono text-sm text-gray-500">
               <span className="w-3 h-3 bg-green-500 rounded-full border border-trena-dark"></span>
               Sistema Operante: +2.500 profissionais ativos
            </div>
          </div>

          {/* LADO DIREITO: Card "Blueprint" */}
          <div className="lg:w-1/2 w-full flex justify-center perspective-1000">
             
             {/* Card Principal */}
             <div className="relative w-full max-w-md bg-white border-2 border-trena-dark p-6 shadow-[12px_12px_0px_0px_#1A1A1A] rotate-2 hover:rotate-0 transition-all duration-300">
                
                {/* Header do Card */}
                <div className="flex justify-between items-center border-b-2 border-trena-dark pb-4 mb-6 bg-gray-50 -mx-6 -mt-6 px-6 pt-6 rounded-t-sm">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full border border-trena-dark bg-white"></div>
                      <div className="w-3 h-3 rounded-full border border-trena-dark bg-white"></div>
                   </div>
                   <div className="font-mono text-xs font-bold uppercase tracking-widest">Painel de Controle</div>
                </div>

                {/* Conteúdo: Lista de Obras */}
                <div className="space-y-4 font-mono">
                   
                   {/* Item 1 - Ativo */}
                   <div className="flex items-center gap-4 bg-trena-yellow/10 p-4 border-2 border-trena-dark hover:bg-trena-yellow transition cursor-pointer group">
                      <div className="p-2 bg-white border-2 border-trena-dark text-trena-dark group-hover:scale-110 transition">
                         <Image src="/window.svg" alt="Icon" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                         <h3 className="font-bold text-sm uppercase">Reforma Sala</h3>
                         <div className="w-full bg-white border border-trena-dark h-2 mt-2 rounded-full overflow-hidden">
                            <div className="bg-trena-dark h-full w-[80%]"></div>
                         </div>
                      </div>
                      <span className="font-bold">80%</span>
                   </div>

                   {/* Item 2 */}
                   <div className="flex items-center gap-4 p-4 border-2 border-gray-200 text-gray-400">
                      <div className="p-2 border-2 border-gray-200 grayscale opacity-50">
                         <Image src="/file.svg" alt="Icon" width={24} height={24} />
                      </div>
                      <div className="flex-1">
                         <h3 className="font-bold text-sm uppercase line-through">Pintura Externa</h3>
                         <p className="text-xs">Aguardando Início</p>
                      </div>
                   </div>

                </div>

                {/* Carimbo de "Aprovado" */}
                <div className="absolute -bottom-6 -right-6 bg-trena-yellow border-2 border-trena-dark px-4 py-2 rotate-[-5deg] shadow-hard-sm">
                   <span className="font-black text-sm uppercase">Verificado ✓</span>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;