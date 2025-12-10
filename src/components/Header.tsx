export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-secondary-500">Trena</div>
        <ul className="hidden md:flex gap-8">
          <li><a href="#features" className="text-neutral-700 hover:text-primary-600 transition">Features</a></li>
          <li><a href="#about" className="text-neutral-700 hover:text-primary-600 transition">Sobre</a></li>
          <li><a href="#contact" className="text-neutral-700 hover:text-primary-600 transition">Contato</a></li>
        </ul>
        <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
          Entrar
        </button>
      </nav>
    </header>
  );
}
