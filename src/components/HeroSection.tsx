import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import mainImage from "@/assets/realassets/main_image.png";
import titleLogo from "@/assets/realassets/titlelogo.png";

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
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-light px-4 sm:px-0">
              A forma mais íntima e divertida de se conectar. Deslize por fantasias secretas e descubra quem compartilha das mesmas vontades que você.
            </p>
            
            {/* Buttons */}
                         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-2 sm:pt-4 px-4 sm:px-0">
               {/* Google Play Button */}
               <div className="flex justify-center lg:justify-start">
                 <a
                   href="https://play.google.com/store/apps/details?id=com.confexy"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block w-full sm:w-auto"
                 >
                   <div className="h-[48px] sm:h-[74px] flex items-center justify-center">
                     <img
                       src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                       alt="Disponível no Google Play"
                       className="h-full opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer drop-shadow-lg"
                     />
                   </div>
                 </a>
               </div>
              
               {/* Ver Como Funciona Button */}
               <div className="flex justify-center lg:justify-start">
                 <Button 
                   variant="outline"
                   size={undefined}
                   className="bg-white/5 border-2 border-white/40 text-white hover:bg-white hover:text-primary hover:border-white px-[18px] sm:px-7 text-sm sm:text-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg w-auto max-w-[200px] sm:w-auto sm:max-w-none !h-[46px] sm:!h-[74px] flex items-center justify-center"
                   onClick={() => {
                     const section = document.querySelector('#como-funciona');
                     section?.scrollIntoView({ behavior: 'smooth' });
                   }}
                 >
                   Ver Como Funciona
                 </Button>
               </div>
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