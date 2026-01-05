import { Button } from "@/components/ui/button";
import { Star, Shield, Heart } from "lucide-react";
import icone1 from "@/assets/realassets/icone1.png";


const features = [
  { icon: Shield, text: "100% Privado" },
  { icon: Star, text: "Fácil de Usar" },
  { icon: Heart, text: "Para Todos" }
];

const FinalCTASection = () => {
  return (
    <section id="beta-download" className="py-12 sm:py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 lg:space-y-12 pb-1">
          {/* App Icon */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
              <img
                src={icone1}
                alt="Confexy Icon"
                className="relative z-10 w-32 h-32 lg:w-36 lg:h-36 rounded-2xl shadow-elegant"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up px-4 sm:px-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Pronto para descobrir novos <span className="text-primary-glow">matches</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
              Baixe o Confexy agora e comece a explorar conexões de forma segura e divertida.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 bg-card/50 rounded-full border border-primary/20 backdrop-blur-glass hover:scale-105 transition-transform duration-300 w-[150px] sm:w-fit sm:max-w-none mx-auto"
              >
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-foreground font-medium text-sm sm:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up px-4 sm:px-0 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
            {/* Play Store */}
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-bold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.confexy', '_blank', 'noopener,noreferrer')}
            >
              <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Play Store
            </Button>

            {/* App Store */}
            <Button
              size="lg"
              className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 px-8 py-6 text-lg font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://apps.apple.com/us/app/confexy/id6755045041', '_blank', 'noopener,noreferrer')}
            >
              <svg className="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              App Store
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;