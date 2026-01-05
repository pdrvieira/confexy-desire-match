import { Heart, Shield, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            O que o <span className="text-primary">Confexy</span> oferece?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Uma plataforma única para explorar conexões íntimas de forma segura, privada e divertida.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 bg-gradient-card border-primary/20 backdrop-blur-glass hover:border-primary/40 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                {benefit.title}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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