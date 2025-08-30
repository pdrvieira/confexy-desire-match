import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroPhone from "@/assets/confexy-hero-phone.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                CON<span className="text-primary-glow">FE</span>XY
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Descubra desejos em comum
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A forma mais íntima e divertida de se conectar. Deslize por fantasias secretas e descubra quem compartilha das mesmas vontades que você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Baixar Agora
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg backdrop-blur-glass"
              >
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Disponível no Google Play" 
                className="h-12 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
              <img 
                src={heroPhone} 
                alt="Confexy App Screenshot" 
                className="relative z-10 max-w-sm lg:max-w-md xl:max-w-lg h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;