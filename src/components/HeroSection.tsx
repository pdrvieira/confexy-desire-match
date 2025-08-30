import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import mainImage from "@/assets/realassets/main_image.png";
import titleLogo from "@/assets/realassets/titlelogo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-12 animate-slide-up">
            {/* Logo Section */}
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={titleLogo} 
                  alt="Confexy Logo" 
                  className="h-20 lg:h-24 xl:h-28 w-auto"
                />
              </div>
            </div>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              A forma mais íntima e divertida de se conectar. Deslize por fantasias secretas e descubra quem compartilha das mesmas vontades que você.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              {/* Google Play Button */}
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.confexy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Disponível no Google Play" 
                    className="h-16 lg:h-18 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer drop-shadow-lg"
                  />
                </a>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/5 border-2 border-white/40 text-white hover:bg-white hover:text-primary hover:border-white px-7 py-[30px] text-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => {
                  const section = document.querySelector('#como-funciona');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Como Funciona
              </Button>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-2xl opacity-20" />
              
              {/* Main image - clean and simple */}
              <img 
                src={mainImage} 
                alt="Confexy App Preview" 
                className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto drop-shadow-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;