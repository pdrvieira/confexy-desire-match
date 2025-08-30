import { Heart, Shield, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import featureGraphic from "@/assets/realassets/feature-graphic-1024x500.png";

const benefits = [
  {
    icon: Heart,
    title: "Descobertas em Comum",
    description: "Encontre fantasias compartilhadas através do nosso sistema de match inteligente. Só revela quando ambos têm interesse."
  },
  {
    icon: Sparkles,
    title: "Experiência Íntima e Leve",
    description: "Sem pressão, apenas diversão. Explore desejos de forma natural e espontânea com quem você ama."
  },
  {
    icon: Shield,
    title: "Privacidade Garantida",
    description: "Suas escolhas são completamente privadas. Ninguém vê o que você não quer mostrar até haver um match."
  },
  {
    icon: Users,
    title: "Para Casais e Amigos",
    description: "Conecte-se com seu parceiro ou descubra afinidades com amigos próximos em um ambiente seguro."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-glow rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que o <span className="text-primary">Confexy</span> oferece?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma plataforma única para explorar conexões íntimas de forma segura, privada e divertida.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-primary/20 backdrop-blur-glass hover:border-primary/40 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default BenefitsSection;