import { Instagram, Twitter, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/20 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold font-playfair text-gradient-primary mb-4">
              MB Audio
            </div>
            <p className="text-muted-foreground font-inter leading-relaxed max-w-md">
              Criamos produtos de áudio premium que transformam a maneira como você experimenta o som. Tecnologia inovadora, design excepcional.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-foreground mb-4">
              Produto
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#especificacoes" className="text-muted-foreground hover:text-primary transition-colors font-inter">
                  Especificações
                </a>
              </li>
              <li>
                <a href="#design" className="text-muted-foreground hover:text-primary transition-colors font-inter">
                  Design
                </a>
              </li>
              <li>
                <a href="#comprar" className="text-muted-foreground hover:text-primary transition-colors font-inter">
                  Comprar
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-inter">
                  contato@mbaudio.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-inter">
                  (11) 9999-9999
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-muted-foreground font-inter text-sm">
            © 2024 MB Audio. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;