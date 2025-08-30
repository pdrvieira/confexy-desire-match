import { Button } from "@/components/ui/button";
import { Download, Star, Shield, Heart } from "lucide-react";
import confexylcon from "@/assets/confexy-icon.jpg";

const features = [
  { icon: Shield, text: "100% Privado" },
  { icon: Heart, text: "Para Casais" },
  { icon: Star, text: "Fácil de Usar" }
];

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* App Icon */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
              <img 
                src={confexylcon} 
                alt="Confexy Icon" 
                className="relative z-10 w-24 h-24 rounded-2xl shadow-elegant hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Crie novos <span className="text-primary-glow">matches</span>!
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Baixe o Confexy e descubra o que conecta vocês de verdade.
            </p>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card/50 rounded-full border border-primary/20 backdrop-blur-glass hover:border-primary/40 transition-colors"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-12 py-8 text-xl font-bold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 mb-8"
            >
              <Download className="mr-3 h-6 w-6" />
              Baixar na Play Store
            </Button>
            
            <div className="flex justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Disponível no Google Play" 
                className="h-16 opacity-80 hover:opacity-100 transition-opacity cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Bottom Text */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground">
              Visite <span className="text-primary font-medium">www.confexy.com.br</span>
            </p>
            <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
              Sua privacidade é prioridade. Expresse suas vontades sem medo ou julgamentos em um ambiente seguro e cheio de cumplicidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;