import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-trena-dark text-white border-t-8 border-trena-yellow pt-20 pb-8 relative overflow-hidden">
      
      {/* Elemento Decorativo: Faixa de Atenção no Topo */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#1A1A1A,#1A1A1A_10px,#FFC800_10px,#FFC800_20px)] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          
          {/* LADO ESQUERDO: Marca e Captura */}
          <div className="lg:w-1/2">
            <div className="inline-block border border-gray-600 px-2 py-1 mb-6 font-mono text-xs text-trena-yellow">
              SYSTEM_ID: TR-2025
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight leading-none">
              A obra não <br/> pode parar.
            </h2>
            
            <p className="text-gray-400 max-w-md font-medium leading-relaxed mb-8 border-l-2 border-gray-700 pl-4">
              Junte-se à plataforma que está padronizando a construção civil. Profissionalismo e segurança técnica.
            </p>

            {/* Formulário Industrial */}
            <form className="flex flex-col sm:flex-row gap-0 max-w-md border-2 border-gray-600 p-1 bg-gray-800/50">
              <input 
                type="email" 
                placeholder="SEU E-MAIL CORPORATIVO" 
                className="flex-1 bg-transparent text-white px-4 py-3 font-mono text-sm placeholder:text-gray-600 outline-none border-b-2 border-transparent focus:border-trena-yellow transition-colors"
                required
              />
              <button className="bg-trena-yellow text-trena-dark font-black px-6 py-3 uppercase hover:bg-white transition-colors">
                Inscrever
              </button>
            </form>
            <p className="text-xs text-gray-600 mt-3 font-mono">
              * Acesso antecipado limitado a 500 usuários.
            </p>
          </div>

          {/* LADO DIREITO: Links Técnicos */}
          <div className="lg:w-1/2 flex flex-col lg:items-end">
             <div className="grid grid-cols-2 gap-x-16 gap-y-8 font-mono text-sm">
                
                <div className="flex flex-col gap-3 text-right">
                   <span className="text-trena-yellow font-bold uppercase mb-2 border-b border-gray-700 pb-2">Módulos</span>
                   <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-trena-yellow underline-offset-4 transition-all">DASHBOARD</a>
                   <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-trena-yellow underline-offset-4 transition-all">PROFISSIONAIS</a>
                   <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-trena-yellow underline-offset-4 transition-all">CLIENTES</a>
                </div>

                <div className="flex flex-col gap-3 text-right">
                   <span className="text-trena-yellow font-bold uppercase mb-2 border-b border-gray-700 pb-2">Legal</span>
                   <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-trena-yellow underline-offset-4 transition-all">TERMOS USO</a>
                   <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-trena-yellow underline-offset-4 transition-all">PRIVACIDADE</a>
                   <a href="#" className="text-gray-400 hover:text-white hover:underline decoration-trena-yellow underline-offset-4 transition-all">COMPLIANCE</a>
                </div>

             </div>
          </div>
        </div>

        {/* Rodapé Técnico Inferior */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
           <p className="uppercase tracking-widest">
             &copy; 2025 TRENA TECNOLOGIA. <span className="hidden md:inline">TODOS OS DIREITOS RESERVADOS.</span>
           </p>
           
           <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-green-500 font-bold">SYSTEM ONLINE</span>
              </div>
              <span>BUILD: v1.0.4</span>
           </div>
        </div>
      </div>

      {/* Marca D'água Gigante no Fundo */}
      <div className="absolute -bottom-4 -right-10 text-[12rem] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        TRENA
      </div>

    </footer>
  );
};

export default Footer;