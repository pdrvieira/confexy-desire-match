import { UserPlus, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Criar Perfil",
    description: "Faça seu cadastro de forma rápida e segura. Suas informações ficam protegidas."
  },
  {
    icon: Users,
    step: "02",
    title: "Convidar Alguém",
    description: "Adicione seu parceiro ou amigos próximos para começar a jogar juntos."
  },
  {
    icon: Heart,
    step: "03",
    title: "Deslizar e Descobrir",
    description: "Navegue pelas cartas, faça suas escolhas e descubra os matches em comum."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-confexy-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent" />
      <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-60 sm:w-80 h-60 sm:h-80 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Como <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Três passos simples para descobrir conexões íntimas e divertidas com pessoas especiais.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl lg:max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 sm:top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <Card className="p-6 sm:p-8 bg-gradient-card border-primary/20 backdrop-blur-glass hover:border-primary/40 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2 sm:hover:-translate-y-4 text-center relative z-10">
                {/* Step Number */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base sm:text-lg shadow-glow">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4 sm:mb-6 pt-3 sm:pt-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para começar sua jornada de descobertas?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-glass">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium">Totalmente gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;