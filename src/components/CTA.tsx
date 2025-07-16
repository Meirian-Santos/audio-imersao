import { ArrowRight, Play } from 'lucide-react';

const CTA = () => {
  return (
    <section id="comprar" className="py-20 bg-gradient-to-br from-card/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-gradient-primary">
              Experimente a Revolução Sonora
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 font-inter max-w-2xl mx-auto">
              Junte-se aos milhares de entusiastas que já descobriram uma nova dimensão do som.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="#video" 
                className="btn-premium text-lg inline-flex items-center gap-2 animate-glow group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Assistir Vídeo
              </a>
              
              <a 
                href="#contato" 
                className="btn-outline-premium text-lg inline-flex items-center gap-2 group"
              >
                Quero Saber Mais
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 border-t border-border/30 pt-12">
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">
                  30h
                </div>
                <div className="text-muted-foreground font-inter">
                  Bateria
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">
                  5.2
                </div>
                <div className="text-muted-foreground font-inter">
                  Bluetooth
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">
                  20Hz
                </div>
                <div className="text-muted-foreground font-inter">
                  Resposta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;