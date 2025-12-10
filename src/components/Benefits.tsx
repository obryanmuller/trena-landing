import React from 'react';

const Benefits = () => {
  return (
    <section className="py-20 bg-trena-gray">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-trena-dark mb-4">
            Por que usar a Trena?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos os maiores problemas de quem constrói e de quem contrata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna CLIENTE */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold text-trena-dark mb-6 flex items-center gap-2">
              🏠 Para quem <span className="text-trena-yellow">Contrata</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">✕</span>
                <p className="text-gray-600">Chega de profissionais que somem.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <p className="text-gray-800 font-medium">Veja portfólios reais e avaliações.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <p className="text-gray-800 font-medium">Pagamento seguro pela plataforma.</p>
              </li>
            </ul>
          </div>

          {/* Coluna PROFISSIONAL */}
          <div className="bg-trena-dark p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              🛠️ Para o <span className="text-trena-yellow">Profissional</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg">✕</span>
                <p className="text-gray-400">Cansado de ficar parado sem obra?</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trena-yellow font-bold text-lg">✓</span>
                <p className="text-white font-medium">Sua vitrine digital profissional.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-trena-yellow font-bold text-lg">✓</span>
                <p className="text-white font-medium">Receba pedidos direto no celular.</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;