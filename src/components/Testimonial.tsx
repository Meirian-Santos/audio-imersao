import { Quote, Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section id="depoimento" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-premium animate-scale-in">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Quote className="w-10 h-10 text-primary" />
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-playfair font-medium text-foreground mb-8 leading-relaxed">
              "Os MB Audio representam um marco na engenharia de áudio. A clareza dos agudos, a profundidade dos graves e o palco sonoro excepcional criam uma experiência verdadeiramente imersiva."
            </blockquote>
            
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            
            <div className="border-t border-border/30 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-playfair font-bold text-primary-foreground">
                    AK
                  </span>
                </div>
                
                <div className="text-center sm:text-left">
                  <p className="text-lg font-inter font-semibold text-foreground">
                    André Kobayashi
                  </p>
                  <p className="text-muted-foreground font-inter">
                    Especialista em Áudio | Engenheiro de Som
                  </p>
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