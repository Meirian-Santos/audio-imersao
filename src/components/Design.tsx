import { Palette, Layers, Sparkles, Zap } from 'lucide-react';

const Design = () => {
  const designFeatures = [
    {
      icon: Palette,
      title: "Acabamento Premium",
      description: "Superfície fosca com detalhes em bronze metálico, criando um visual sofisticado e atemporal."
    },
    {
      icon: Layers,
      title: "Materiais Nobres",
      description: "Construção em alumínio aeronáutico e couro sintético de alta qualidade para durabilidade superior."
    },
    {
      icon: Sparkles,
      title: "Ergonomia Inteligente",
      description: "Design anatômico desenvolvido para longas sessões de uso sem fadiga ou desconforto."
    },
    {
      icon: Zap,
      title: "Controles Intuitivos",
      description: "Interface tátil responsiva com feedback háptico para controle preciso sem tirar o foco da música."
    }
  ];

  return (
    <section id="design" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient-primary">
            Design Excepcional
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Cada curva, cada linha, cada detalhe foi meticulosamente projetado para criar uma experiência visual e tátil única.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {designFeatures.map((feature, index) => (
            <div 
              key={index}
              className="feature-card flex items-start gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Design Philosophy */}
        <div className="card-premium text-center animate-scale-in">
          <h3 className="text-2xl font-playfair font-bold mb-4 text-gradient-primary">
            Filosofia de Design
          </h3>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
            "A beleza está na simplicidade. Criamos produtos que não apenas soam excepcionais, mas também são uma extensão natural do seu estilo de vida. Cada elemento visual serve tanto à função quanto à forma."
          </p>
          <div className="mt-6 text-sm text-muted-foreground font-inter">
            - Equipe de Design MB Audio
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;