import { Volume2, Wifi, Battery, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Volume2,
      title: "Som Imersivo",
      description: "Drivers de alta precisão com resposta de frequência excepcional para uma experiência sonora envolvente."
    },
    {
      icon: Wifi,
      title: "Sem Fio",
      description: "Tecnologia Bluetooth 5.2 com codec avançado para transmissão de áudio sem perda de qualidade."
    },
    {
      icon: Battery,
      title: "Bateria Duradoura",
      description: "Até 30 horas de reprodução contínua com carregamento rápido em apenas 15 minutos."
    },
    {
      icon: Headphones,
      title: "Design Ergonômico",
      description: "Conforto premium com almofadas de espuma viscoelástica e headband ajustável."
    }
  ];

  return (
    <section id="explorar" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-gradient-primary">
            Tecnologia de Ponta
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Cada detalhe foi cuidadosamente projetado para oferecer a melhor experiência sonora possível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-playfair font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-inter leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;