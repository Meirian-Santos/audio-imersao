import sideImage from '@/assets/headphones-side.jpg';

const TechSpecs = () => {
  const specs = [
    { label: "Resposta de Frequência", value: "20Hz - 20kHz" },
    { label: "Impedância", value: "32 Ohms" },
    { label: "Sensibilidade", value: "105 dB/mW" },
    { label: "Drivers", value: "40mm Neodímio" },
    { label: "Cancelamento de Ruído", value: "ANC Adaptativo" },
    { label: "Conectividade", value: "Bluetooth 5.2" },
    { label: "Codecs Suportados", value: "SBC, AAC, aptX HD" },
    { label: "Bateria", value: "30h reprodução" },
    { label: "Carregamento", value: "USB-C rápido" },
    { label: "Peso", value: "285g" }
  ];

  return (
    <section id="especificacoes" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={sideImage} 
                alt="MB Audio Headphones - Vista Lateral" 
                className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Specifications */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-gradient-primary">
              Especificações Técnicas
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 font-inter">
              Engenharia de precisão para entusiastas do áudio que exigem o máximo desempenho.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-secondary/20 rounded-lg border border-border/30 hover:bg-secondary/30 transition-colors duration-300"
                >
                  <span className="text-muted-foreground font-inter font-medium">
                    {spec.label}
                  </span>
                  <span className="text-primary font-inter font-semibold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#depoimento" 
                className="btn-outline-premium inline-flex items-center justify-center"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;