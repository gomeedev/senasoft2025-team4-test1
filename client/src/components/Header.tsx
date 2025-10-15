const Header: React.FC = () => {
  return (
    <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm fixed w-full z-10 border-b border-primary/20 dark:border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">BikeShare</h2>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Alquilar Bici
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Eventos
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre Nosotros
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-primary text-background-dark font-bold py-2 px-4 rounded-lg text-sm hover:bg-primary/90 transition-all duration-300">
              Iniciar Sesión / Registrarse
            </button>
            <button className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-primary/20">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
