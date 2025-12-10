"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'pro'>('client');

  return (
    <section className="py-24 bg-white bg-grid border-b-2 border-trena-dark">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho Técnico */}
        <div className="text-center mb-16">
          <div className="inline-block bg-trena-yellow border-2 border-trena-dark px-3 py-1 font-mono text-xs font-bold mb-4 shadow-hard-sm">
            SELECIONE O PERFIL
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-trena-dark uppercase tracking-tight mb-8">
            Soluções Sob <br className="md:hidden" /> Medida.
          </h2>
          
          {/* BOTÕES DE ABAS INDUSTRIAIS */}
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setActiveTab('client')}
              className={`px-8 py-4 border-2 border-trena-dark font-black uppercase tracking-wider text-sm transition-all duration-200 ${
                activeTab === 'client' 
                  ? 'bg-trena-dark text-white shadow-hard translate-x-[-2px] translate-y-[-2px]' 
                  : 'bg-white text-trena-dark hover:bg-trena-yellow hover:shadow-hard'
              }`}
            >
              Para quem Contrata
            </button>
            <button 
              onClick={() => setActiveTab('pro')}
              className={`px-8 py-4 border-2 border-trena-dark font-black uppercase tracking-wider text-sm transition-all duration-200 ${
                activeTab === 'pro' 
                  ? 'bg-trena-dark text-white shadow-hard translate-x-[-2px] translate-y-[-2px]' 
                  : 'bg-white text-trena-dark hover:bg-trena-yellow hover:shadow-hard'
              }`}
            >
              Para Profissionais
            </button>
          </div>
        </div>

        {/* CONTAINER DO PAINEL (Borda Grossa e Sombra Dura) */}
        <div className="relative border-2 border-trena-dark bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
          
          {/* Parafusos Decorativos nos Cantos */}
          <div className="absolute top-2 left-2 w-2 h-2 border border-trena-dark bg-gray-300 rounded-full"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border border-trena-dark bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border border-trena-dark bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border border-trena-dark bg-gray-300 rounded-full"></div>

          {/* CONTEÚDO CLIENTE */}
          <div className={`${activeTab === 'client' ? 'block animate-slide-up' : 'hidden'}`}>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Lista Técnica */}
                <div className="space-y-6">
                   <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 border-2 border-trena-dark bg-trena-yellow flex items-center justify-center font-bold text-xl shadow-hard-sm group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        🛡️
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-trena-dark uppercase mb-1">Escrow Seguro</h3>
                        <p className="text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-4">
                          O dinheiro fica travado no sistema. O profissional só recebe após sua aprovação técnica.
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 border-2 border-trena-dark bg-white flex items-center justify-center font-bold text-xl shadow-hard-sm group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        📋
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-trena-dark uppercase mb-1">Histórico Verificado</h3>
                        <p className="text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-4">
                          Acesse avaliações reais e portfólios auditados pela plataforma. Sem perfis falsos.
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 border-2 border-trena-dark bg-white flex items-center justify-center font-bold text-xl shadow-hard-sm group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        ⚡
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-trena-dark uppercase mb-1">Orçamento Padronizado</h3>
                        <p className="text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-4">
                          Compare preços laranja com laranjas. Receba propostas detalhadas no mesmo formato.
                        </p>
                      </div>
                   </div>
                </div>

                {/* Card Ilustrativo Industrial */}
                <div className="bg-gray-50 border-2 border-trena-dark p-6 relative">
                   <div className="absolute -top-3 -right-3 bg-trena-dark text-white text-xs font-mono px-2 py-1">SYS.CLIENT_VIEW</div>
                   
                   {/* Simulação de Interface Brutalista */}
                   <div className="bg-white border-2 border-trena-dark p-4 mb-4 shadow-hard-sm">
                      <div className="flex justify-between items-center mb-4 border-b-2 border-gray-100 pb-2">
                         <span className="font-bold text-sm uppercase">Proposta #892</span>
                         <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 border border-green-700">APROVADA</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-gray-200 border-2 border-trena-dark"></div>
                         <div>
                            <p className="font-bold text-sm">Mestre João</p>
                            <p className="text-xs font-mono text-gray-500">Alvenaria Estrutural</p>
                         </div>
                      </div>
                      <button className="w-full mt-4 bg-trena-yellow border-2 border-trena-dark font-bold text-xs py-2 uppercase hover:bg-yellow-400">
                        Liberar Pagamento
                      </button>
                   </div>
                </div>

             </div>
          </div>

          {/* CONTEÚDO PROFISSIONAL */}
          <div className={`${activeTab === 'pro' ? 'block animate-slide-up' : 'hidden'}`}>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Visual Profissional Invertido */}
                <div className="bg-trena-dark border-2 border-trena-dark p-6 relative text-white order-2 md:order-1">
                   <div className="absolute -top-3 -left-3 bg-trena-yellow text-trena-dark text-xs font-mono px-2 py-1 border-2 border-trena-dark">SYS.PRO_DASHBOARD</div>
                   
                   <div className="text-center py-8">
                      <p className="font-mono text-gray-400 text-sm mb-2">FATURAMENTO MÊS ATUAL</p>
                      <h3 className="text-5xl font-black text-trena-yellow mb-2">R$ 5.2k</h3>
                      <div className="inline-block bg-white/10 px-3 py-1 rounded text-xs font-mono">+15% vs mês anterior</div>
                   </div>

                   <div className="mt-8 border-t border-gray-700 pt-4">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                         <p className="font-bold text-sm uppercase">Nova Oportunidade</p>
                      </div>
                      
                      {/* --- AQUI ESTAVA O ERRO --- */}
                      <div className="bg-gray-800 p-3 border border-gray-600 text-xs font-mono">
                         &gt; CLIENTE: REFORMA LOJA<br/>
                         &gt; DISTÂNCIA: 2.4KM<br/>
                         &gt; STATUS: AGUARDANDO ORÇAMENTO
                      </div>
                      {/* ------------------------- */}
                      
                   </div>
                </div>

                {/* Lista Técnica Profissional */}
                <div className="space-y-6 order-1 md:order-2">
                   <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 border-2 border-trena-dark bg-white flex items-center justify-center font-bold text-xl shadow-hard-sm group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-trena-dark uppercase mb-1">Agenda Otimizada</h3>
                        <p className="text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-4">
                          Receba demandas reais na sua região. Preencha os dias ociosos com serviços rápidos.
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 border-2 border-trena-dark bg-white flex items-center justify-center font-bold text-xl shadow-hard-sm group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-trena-dark uppercase mb-1">Recebimento Garantido</h3>
                        <p className="text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-4">
                          O cliente paga antes. Você trabalha sabendo que o dinheiro já está na plataforma.
                        </p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start group">
                      <div className="w-12 h-12 border-2 border-trena-dark bg-white flex items-center justify-center font-bold text-xl shadow-hard-sm group-hover:translate-y-1 group-hover:shadow-none transition-all">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-trena-dark uppercase mb-1">Reputação Digital</h3>
                        <p className="text-gray-600 font-medium leading-relaxed border-l-2 border-gray-200 pl-4">
                          Transforme seu bom trabalho em nota 5 estrelas. Cobre mais caro pela sua qualidade comprovada.
                        </p>
                      </div>
                   </div>
                </div>

             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;