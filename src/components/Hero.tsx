import heroImage from '@/assets/hero-headphones.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-card/50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
              <span className="text-foreground">Ouça cada</span>
              <br />
              <span className="text-gradient-primary">detalhe.</span>
              <br />
              <span className="text-foreground">Sinta a</span>
              <br />
              <span className="text-gradient-primary">diferença.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter font-light max-w-2xl mx-auto lg:mx-0">
              Fidelidade sonora extrema que transporta você para dentro da música. Cada nota ganha vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#qualidade" 
                className="btn-premium text-lg inline-flex items-center justify-center animate-glow"
              >
                Explorar
              </a>
              <a 
                href="#cores" 
                className="btn-outline-premium text-lg inline-flex items-center justify-center"
              >
                Ver Cores
              </a>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="MB Audio Premium Headphones" 
                className="w-full max-w-lg mx-auto lg:max-w-none object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;