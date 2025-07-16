const CTA = () => {
  return (
    <section id="comprar" className="py-24 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-gradient-primary">
            Quero meu fone agora
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-inter max-w-2xl mx-auto">
            Transforme sua experiência musical. Sinta cada nota como nunca antes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="#" 
              className="btn-premium text-lg px-12 py-4 animate-glow shadow-lg"
            >
              Comprar Agora
            </a>
            
            <a 
              href="#" 
              className="btn-outline-premium text-lg px-12 py-4"
            >
              Teste por 30 dias
            </a>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-inter text-sm">Garantia 2 anos</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-inter text-sm">Frete grátis</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-inter text-sm">Suporte 24/7</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-inter text-sm">Teste 30 dias</span>
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">R$ 1.299</div>
              <div className="text-lg text-muted-foreground font-inter mb-4">
                ou 12x de R$ 108,25 sem juros
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Disponível em todas as 5 cores • Entrega em até 3 dias úteis
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;