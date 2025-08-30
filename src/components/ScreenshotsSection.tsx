import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// Simulated screenshot data - in a real app, these would be the actual screenshots
const screenshots = [
  {
    id: 1,
    title: "Interface Elegante",
    description: "Design moderno com glassmorphism e cores suaves",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=300&h=600&fit=crop&crop=faces,center"
  },
  {
    id: 2,
    title: "Conecte com Amigos",
    description: "Adicione pessoas próximas de forma segura",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=600&fit=crop&crop=faces,center"
  },
  {
    id: 3,
    title: "Sistema de Match",
    description: "Descubra afinidades quando ambos escolhem igual",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=600&fit=crop&crop=faces,center"
  },
  {
    id: 4,
    title: "Cartas Íntimas",
    description: "Explore desejos através de cartas divertidas",
    image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=300&h=600&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Privacidade Total",
    description: "Suas escolhas ficam sempre protegidas",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=600&fit=crop&crop=center"
  }
];

const ScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja o <span className="text-primary">Confexy</span> em ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma interface intuitiva e elegante para explorar conexões de forma natural e divertida.
          </p>
        </div>
        
        {/* Screenshots Gallery */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-gradient-card p-6 rounded-3xl border border-primary/20 backdrop-blur-glass">
                    <img 
                      src={screenshots[currentIndex].image}
                      alt={screenshots[currentIndex].title}
                      className="w-64 h-auto rounded-2xl shadow-card mx-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {screenshots[currentIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {screenshots[currentIndex].description}
                </p>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  className="border-primary/30 text-foreground hover:bg-primary/10"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}  
                  className="border-primary/30 text-foreground hover:bg-primary/10"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {screenshots.map((screenshot, index) => (
              <div 
                key={screenshot.id}
                className="group animate-fade-in hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-glow rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative bg-gradient-card p-4 rounded-2xl border border-primary/20 backdrop-blur-glass group-hover:border-primary/40 transition-colors">
                    <img 
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-auto rounded-xl shadow-card"
                    />
                    
                    <div className="mt-4 text-center">
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Experimentar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;