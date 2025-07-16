const Testimonial = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-12">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face&auto=format" 
                alt="Carlos Mendes" 
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-playfair font-medium text-foreground mb-8 leading-relaxed">
              "A experiência sonora é transformadora. Sinto cada instrumento, cada respiração do vocalista. É como estar na sala de gravação."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="font-playfair font-semibold text-foreground text-lg">Carlos Mendes</div>
                <div className="text-muted-foreground font-inter">Produtor Musical</div>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-inter">
                  Satisfação dos usuários
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                <div className="text-sm text-muted-foreground font-inter">
                  Avaliação média
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                <div className="text-sm text-muted-foreground font-inter">
                  Usuários satisfeitos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;