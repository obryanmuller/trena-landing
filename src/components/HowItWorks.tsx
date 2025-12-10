import React from 'react';

const steps = [
  { num: "01", title: "Publique ou Busque", desc: "O cliente posta o serviço ou busca profissionais na região." },
  { num: "02", title: "Conecte-se", desc: "Negocie detalhes e valores pelo chat seguro." },
  { num: "03", title: "Obra Feita", desc: "Serviço realizado e avaliação garantida." }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-trena-dark mb-12">Simples assim.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-trena-yellow rounded-full flex items-center justify-center text-2xl font-bold text-trena-dark mb-4">
                {item.num}
              </div>
              <h3 className="text-xl font-bold text-trena-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;