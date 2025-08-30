import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="text-center relative z-10 max-w-md mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-8xl lg:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        
        <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            asChild
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
          >
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao Início
            </a>
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg backdrop-blur-glass block w-full"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Página Anterior
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Confexy - Descubra desejos em comum
        </p>
      </div>
    </div>
  );
};

export default NotFound;
