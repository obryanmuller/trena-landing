import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-trena-dark text-white py-20 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          A obra não pode esperar.
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg font-light">
          Estamos selecionando os primeiros usuários para o lançamento oficial. 
          Cadastre-se na lista VIP e ganhe prioridade.
        </p>

        {/* Formulário Moderno */}
        <form className="max-w-md mx-auto bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row gap-2 shadow-2xl">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder:text-gray-600"
            required
          />
          <button className="bg-trena-yellow text-trena-dark font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-colors">
            Entrar na Lista
          </button>
        </form>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 Trena. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-trena-yellow transition">Termos</a>
            <a href="#" className="hover:text-trena-yellow transition">Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;