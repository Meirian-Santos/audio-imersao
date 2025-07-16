const SoundQuality = () => {
  return (
    <section id="qualidade" className="py-24 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Sound Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,200 Q150,120 300,200 T600,200 T900,200 T1200,200" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            className="text-primary animate-pulse"
          />
          <path 
            d="M0,200 Q150,80 300,200 T600,200 T900,200 T1200,200" 
            stroke="currentColor" 
            strokeWidth="3" 
            fill="none"
            className="text-accent animate-pulse delay-500"
          />
          <path 
            d="M0,200 Q150,160 300,200 T600,200 T900,200 T1200,200" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
            className="text-primary animate-pulse delay-1000"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-8 text-gradient-primary">
            Tecnologia sonora que isola o mundo lá fora
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-12 text-foreground">
            e aproxima você da sua música.
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="feature-card text-center">
              <div className="text-4xl font-bold text-primary mb-4">20Hz</div>
              <div className="text-lg font-inter text-muted-foreground">
                Resposta de frequência até 20kHz para graves profundos
              </div>
            </div>
            
            <div className="feature-card text-center">
              <div className="text-4xl font-bold text-primary mb-4">-35dB</div>
              <div className="text-lg font-inter text-muted-foreground">
                Cancelamento ativo de ruído para imersão total
              </div>
            </div>
            
            <div className="feature-card text-center">
              <div className="text-4xl font-bold text-primary mb-4">24bit</div>
              <div className="text-lg font-inter text-muted-foreground">
                Processamento de alta resolução para cada detalhe
              </div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <p className="text-lg md:text-xl text-foreground font-inter leading-relaxed">
              Drivers de 40mm com neodímio de alta qualidade reproduzem cada nuance sonora com precisão cirúrgica. 
              A tecnologia de cancelamento adaptativo se ajusta automaticamente ao ambiente, 
              criando uma bolha sonora perfeita onde apenas sua música existe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundQuality;