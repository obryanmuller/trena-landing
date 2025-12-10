export default function Hero() {
  return (
    <section className="mt-16 min-h-screen bg-gradient-to-br from-secondary-50 to-secondary-100 flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
          Bem-vindo ao Trena
        </h1>
        <p className="text-xl text-neutral-700 mb-8">
          A melhor solução para suas necessidades
        </p>
        <button className="bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-700 transition mr-4">
          Começar Agora
        </button>
        <button className="border-2 border-accent-600 text-accent-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-50 transition">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}
