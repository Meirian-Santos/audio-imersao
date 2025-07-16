import { Headphones, Zap, Wifi, Volume2 } from 'lucide-react';

const TechSpecs = () => {
  const specs = [
    {
      icon: Headphones,
      title: "Cancelamento de Ruído",
      value: "-35dB",
      description: "Tecnologia ANC adaptativa com redução ativa de ruído até -35dB para imersão total"
    },
    {
      icon: Wifi,
      title: "Bluetooth 5.2",
      value: "aptX HD",
      description: "Conectividade avançada com codec aptX HD para transmissão sem perdas"
    },
    {
      icon: Zap,
      title: "Bateria",
      value: "36h",
      description: "Até 36 horas de reprodução com carregamento rápido em 15 minutos"
    },
    {
      icon: Volume2,
      title: "Drivers",
      value: "40mm",
      description: "Drivers de neodímio de alta qualidade com resposta de 20Hz a 20kHz"
    }
  ];

  return (
    <section id="especificacoes" className="py-24 bg-gradient-to-br from-card/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 text-gradient-primary">
            Especificações Técnicas
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Tecnologia de ponta em cada componente para uma experiência sonora incomparável.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div 
              key={index}
              className="feature-card text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <spec.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">
                {spec.value}
              </div>
              
              <h3 className="text-xl font-playfair font-semibold mb-4 text-foreground">
                {spec.title}
              </h3>
              
              <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;