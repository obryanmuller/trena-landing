import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white bg-grid border-b-2 border-trena-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho Técnico */}
        <div className="text-center mb-20">
          <div className="inline-block border-2 border-trena-dark bg-white px-3 py-1 font-mono text-xs font-bold mb-4 shadow-hard-sm">
            PROTOCOLO DE EXECUÇÃO
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-trena-dark uppercase tracking-tight">
            Fluxo de <br className="md:hidden" /> Trabalho.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* LINHA DE CONEXÃO (Apenas Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] w-[68%] h-2 bg-trena-dark -z-10 border-t-2 border-b-2 border-trena-dark" 
               style={{ backgroundImage: 'repeating-linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%, #1A1A1A), repeating-linear-gradient(45deg, #1A1A1A 25%, #FFFFFF 25%, #FFFFFF 75%, #1A1A1A 75%, #1A1A1A)', backgroundSize: '10px 10px' }}>
          </div>

          {/* PASSO 01 */}
          <div className="relative flex flex-col items-center text-center group">
            {/* Círculo do Número */}
            <div className="w-24 h-24 bg-white border-2 border-trena-dark rounded-full flex items-center justify-center shadow-hard mb-8 z-10 group-hover:bg-trena-yellow transition-colors duration-300">
              <span className="text-4xl font-black text-trena-dark">01</span>
            </div>
            
            {/* Card de Conteúdo */}
            <div className="bg-white border-2 border-trena-dark p-8 w-full shadow-hard-sm group-hover:translate-y-[-4px] group-hover:shadow-hard transition-all duration-300 relative">
               {/* Detalhe Parafuso */}
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-trena-dark rounded-full"></div>
               
               <h3 className="text-xl font-black uppercase mb-3 mt-2">Requisitar</h3>
               <p className="text-gray-600 font-medium text-sm leading-relaxed">
                 O cliente descreve a demanda técnica. O sistema dispara alertas para profissionais qualificados no raio de ação.
               </p>
            </div>
            {/* Seta indicativa (Mobile) */}
            <div className="md:hidden text-3xl mt-4">↓</div>
          </div>

          {/* PASSO 02 (Amarelo de Destaque) */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-trena-dark border-2 border-trena-dark rounded-full flex items-center justify-center shadow-hard mb-8 z-10">
              <span className="text-4xl font-black text-white">02</span>
            </div>
            
            <div className="bg-trena-yellow border-2 border-trena-dark p-8 w-full shadow-hard-sm group-hover:translate-y-[-4px] group-hover:shadow-hard transition-all duration-300 relative">
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-trena-dark rounded-full"></div>
               
               <h3 className="text-xl font-black uppercase mb-3 mt-2">Validar</h3>
               <p className="text-trena-dark font-bold text-sm leading-relaxed">
                 O orçamento é gerado. O valor é depositado em garantia (Escrow). O contrato jurídico é emitido automaticamente.
               </p>
            </div>
            <div className="md:hidden text-3xl mt-4">↓</div>
          </div>

          {/* PASSO 03 */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-trena-dark rounded-full flex items-center justify-center shadow-hard mb-8 z-10 group-hover:bg-green-400 transition-colors duration-300">
              <span className="text-4xl font-black text-trena-dark">03</span>
            </div>
            
            <div className="bg-white border-2 border-trena-dark p-8 w-full shadow-hard-sm group-hover:translate-y-[-4px] group-hover:shadow-hard transition-all duration-300 relative">
               <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-trena-dark rounded-full"></div>
               
               <h3 className="text-xl font-black uppercase mb-3 mt-2">Executar</h3>
               <p className="text-gray-600 font-medium text-sm leading-relaxed">
                 Serviço realizado. O cliente aprova a entrega técnica. O pagamento é liberado instantaneamente.
               </p>
            </div>
          </div>

        </div>

        {/* Rodapé da Seção (Status do Sistema) */}
        <div className="mt-20 border-t-2 border-trena-dark pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500">
           <div className="uppercase tracking-widest mb-2 md:mb-0">
             System Status: <span className="text-green-600 font-bold">OPERACIONAL</span>
           </div>
           <div className="flex gap-4">
              <span>LATÊNCIA: 24ms</span>
              <span>UPTIME: 99.9%</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;