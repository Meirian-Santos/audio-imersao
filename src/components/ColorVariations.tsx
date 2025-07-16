const ColorVariations = () => {
  const colors = [
    {
      name: "Preto Clássico",
      description: "Elegância atemporal",
      color: "bg-gray-900",
      accent: "border-gray-700"
    },
    {
      name: "Branco Neve",
      description: "Pureza minimalista",
      color: "bg-gray-100",
      accent: "border-gray-300"
    },
    {
      name: "Azul Noturno",
      description: "Profundidade moderna",
      color: "bg-blue-900",
      accent: "border-blue-700"
    },
    {
      name: "Vermelho Púrpura",
      description: "Ousadia sofisticada",
      color: "bg-purple-900",
      accent: "border-purple-700"
    },
    {
      name: "Bege Areia",
      description: "Naturalidade sutil",
      color: "bg-amber-100",
      accent: "border-amber-300"
    }
  ];

  return (
    <section id="cores" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4">
            <span className="text-primary">5 cores,</span>
            <br />
            <span className="text-foreground">1 experiência</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Encontre a cor que combina com seu estilo. Cada variação mantém a mesma excelência sonora.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {colors.map((color, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Color Circle */}
                <div className={`w-32 h-32 mx-auto rounded-full ${color.color} ${color.accent} border-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
                
                {/* Headphone Silhouette */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 8C18.4 8 9 17.4 9 29v8c0 4.4 3.6 8 8 8h4c2.2 0 4-1.8 4-4V29c0-2.2-1.8-4-4-4h-4c-1.1 0-2.2.2-3.2.6C14.6 18.8 21.6 12 30 12s15.4 6.8 16.2 15.6c-1-.4-2.1-.6-3.2-.6h-4c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h4c4.4 0 8-3.6 8-8v-8c0-11.6-9.4-21-21-21z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-playfair font-semibold mb-2 text-foreground">
                  {color.name}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  {color.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/30">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-inter text-muted-foreground">
              Todas as cores disponíveis com a mesma qualidade premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorVariations;