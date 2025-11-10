import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Smartphone, Users, Sparkles } from "lucide-react";

const faqs = [
  {
    id: "item-1",
    icon: Heart,
    question: "O que é o Confexy?",
    answer: "É um app/jogo social íntimo para casais e amigos descobrirem desejos em comum de forma divertida e 100% privada."
  },
  {
    id: "item-2",
    icon: Smartphone,
    question: "Como funciona?",
    answer: "Adicione um amigo para começar. Inicie uma sessão de jogo para receber cartas. Dê Like ou Dislike. Se ambos curtirem a mesma carta é MATCH!"
  },
  {
    id: "item-3",
    icon: Users,
    question: "Quem pode usar?",
    answer: "Qualquer pessoa maior de 18 anos. Funciona para casais, solteiros e amigos que queiram explorar desejos e afinidades de forma leve."
  },
  {
    id: "item-4",
    icon: Sparkles,
    question: "É realmente privado?",
    answer: "Sim! Suas escolhas são completamente privadas. Ninguém vê o que você não quer mostrar até haver um match mútuo. Total privacidade garantida."
  }
];

const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            <span className="text-primary">FAQ</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Dúvidas frequentes sobre o Confexy
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-gradient-card border-2 border-primary/20 rounded-2xl px-4 sm:px-6 lg:px-8 backdrop-blur-glass hover:border-primary/40 transition-all duration-300 hover:shadow-elegant animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left py-5 sm:py-6 hover:no-underline group">
                  <div className="flex items-start gap-3 sm:gap-4 w-full pr-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <faq.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed pb-5 sm:pb-6 pl-14 sm:pl-16 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            Ainda tem dúvidas?
          </p>
          <a 
            href="mailto:contato@confexy.com.br"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-semibold transition-colors text-base sm:text-lg"
          >
            Entre em contato conosco
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
