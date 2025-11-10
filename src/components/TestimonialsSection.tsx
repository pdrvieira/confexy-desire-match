import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import person1 from "@/assets/testimonials/image.png";
import person2 from "@/assets/testimonials/mulher.png";
import person3 from "@/assets/testimonials/image copy.png";
import person4 from "@/assets/testimonials/image copy 2.png";
import person5 from "@/assets/testimonials/mulher2.png";
import person6 from "@/assets/testimonials/image copy 4.png";

const testimonials = [
  {
    id: 1,
    name: "Thalles",
    comment: "Dinâmica rápida, onboarding direto, curva de aprendizado quase zero.",
    rating: 4,
    image: person1
  },
  {
    id: 2,
    name: "Roberta",
    comment: "Achei a ideia ótima para casais de longa data",
    rating: 4,
    image: person2
  },
  {
    id: 3,
    name: "Luiz",
    comment: "Liberdade pra colocar coisas que nunca teria coragem de dizer pessoalmente!",
    rating: 5,
    image: person3
  },
  {
    id: 4,
    name: "João Vitor",
    comment: "Dei um match com meu amigo, em algo que sempre quis fazer",
    rating: 5,
    image: person4
  },
  {
    id: 5,
    name: "Marina",
    comment: "Finalmente um app que respeita privacidade! Adorei a experiência",
    rating: 5,
    image: person5
  },
  {
    id: 6,
    name: "Carlos",
    comment: "Interface linda e fácil de usar. Recomendo muito!",
    rating: 5,
    image: person6
  }
];

const TestimonialsSection = () => {
  // Duplicar testimonials para criar efeito de loop infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/40 via-primary/50 to-primary/40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-white/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Baixe agora e deixe seu <span className="text-primary">feedback</span>!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Veja o que nossos usuários estão dizendo sobre o Confexy
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Testimonials */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-primary/40 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-primary/40 to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div className="flex gap-4 sm:gap-6 animate-scroll-horizontal hover:pause-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-72 sm:w-80 lg:w-96 p-6 sm:p-8 bg-white/90 backdrop-blur-md border-2 border-white/60 hover:border-white hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-all group-hover:scale-110">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  {/* Stars Rating */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Comment */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                "{testimonial.comment}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
