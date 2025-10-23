import { Button } from "@/components/ui/button";
import { Play, TestTube2 } from "lucide-react";
import mainImage from "@/assets/realassets/main_image.png";
import titleLogo from "@/assets/realassets/titlelogo.png";
import BetaSignupDialog from "@/components/BetaSignupDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden py-8 sm:py-12 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 sm:space-y-10 lg:space-y-12 animate-slide-up order-2 lg:order-1">
            {/* Logo Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={titleLogo} 
                  alt="Confexy Logo" 
                  className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-3 px-4 sm:px-0">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                A forma mais íntima e divertida de se conectar. Deslize por fantasias secretas e descubra quem compartilha das mesmas vontades que você.
              </p>
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Disponível apenas para Android
                </span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
                {/* Beta Signup Button */}
                <div className="flex justify-center lg:justify-start">
                  <BetaSignupDialog
                    trigger={
                      <Button 
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 hover:text-primary-glow border-2 border-white px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-xl font-bold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[240px]"
                      >
                        <TestTube2 className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                        Participar do Beta
                      </Button>
                    }
                  />
                </div>
                
                {/* Ver Como Funciona Button */}
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="bg-white/5 border-2 border-white/40 text-white hover:bg-white hover:text-primary hover:border-white px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-xl font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto min-w-[200px] sm:min-w-[240px]"
                    onClick={() => {
                      const section = document.querySelector('#como-funciona');
                      section?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Ver Como Funciona
                  </Button>
                </div>
              </div>
              
              {/* Link para quem já está no teste */}
              <p className="text-sm text-center lg:text-left text-white/70 px-4 sm:px-0">
                Já foi aprovado no teste?{" "}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.confexy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 underline font-semibold transition-colors"
                >
                  Baixe na Play Store
                </a>
              </p>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-2xl opacity-20" />
              
              {/* Main image - clean and simple */}
              <img 
                src={mainImage} 
                alt="Confexy App Preview" 
                className="relative z-10 w-full h-auto drop-shadow-lg rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;