import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Lado Esquerdo: Texto */}
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-trena-dark mb-6 leading-tight">
            A medida certa para <span className="text-trena-yellow">sua obra</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Conectamos quem precisa reformar com profissionais de confiança. 
            Chega de orçamentos confusos e serviços sem garantia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-trena-yellow text-trena-dark font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
              Quero Contratar
            </button>
            <button className="border-2 border-trena-dark text-trena-dark font-bold py-4 px-8 rounded-lg hover:bg-trena-dark hover:text-white transition">
              Sou Profissional
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400">Junte-se à lista de espera exclusiva.</p>
        </div>

        {/* Lado Direito: Imagem Ilustrativa */}
        <div className="md:w-1/2 w-full flex justify-center">
           {/* Card placeholder limpo */}
           <div className="w-full max-w-md h-96 bg-trena-gray rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-4xl mb-4">👷‍♂️📱</span>
              <span className="text-gray-400 font-medium">Aqui vai a imagem do app<br/>ou profissional trabalhando</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;