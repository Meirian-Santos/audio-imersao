import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold font-playfair text-gradient-primary">
              MB
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#design" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
            >
              Design
            </a>
            <a 
              href="#especificacoes" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
            >
              Especificações
            </a>
            <a 
              href="#cores" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
            >
              Cores
            </a>
            <a 
              href="#comprar" 
              className="btn-premium text-sm"
            >
              Comprar
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#design" 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Design
              </a>
              <a 
                href="#especificacoes" 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Especificações
              </a>
              <a 
                href="#cores" 
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cores
              </a>
              <a 
                href="#comprar" 
                className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-300 font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Comprar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;