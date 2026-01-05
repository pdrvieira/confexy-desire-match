import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useRef, useEffect, useState, useCallback } from "react";
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

// Triplicar para loop infinito seamless
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card
    className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] p-5 sm:p-6 bg-white/95 backdrop-blur-md border-2 border-white/60 hover:border-white hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group select-none"
  >
    {/* Avatar and Name */}
    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/50 transition-all group-hover:scale-105">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover"
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
          {testimonial.name}
        </h4>
        {/* Stars Rating */}
        <div className="flex gap-0.5 mt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < testimonial.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Comment */}
    <p className="text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-3">
      "{testimonial.comment}"
    </p>
  </Card>
);

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  // Velocidade do scroll (pixels por frame) - ajuste para mais rápido/lento
  const SCROLL_SPEED = 0.8;

  // Animação suave com requestAnimationFrame
  const animate = useCallback(() => {
    if (!scrollRef.current || isPaused || isDragging) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const container = scrollRef.current;
    const maxScroll = container.scrollWidth / 3; // 1/3 porque triplicamos

    scrollPositionRef.current += SCROLL_SPEED;

    // Reset seamless quando atinge 1/3 do scroll total
    if (scrollPositionRef.current >= maxScroll) {
      scrollPositionRef.current = 0;
    }

    container.scrollLeft = scrollPositionRef.current;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging]);

  // Iniciar animação
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Touch/Mouse handlers para drag
  const handleDragStart = (clientX: number) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: clientX,
      scrollLeft: scrollRef.current.scrollLeft
    };
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = clientX - dragStartRef.current.x;
    const newScrollLeft = dragStartRef.current.scrollLeft - dx;
    scrollRef.current.scrollLeft = newScrollLeft;
    scrollPositionRef.current = newScrollLeft;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Normaliza a posição após o drag
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth / 3;
      scrollPositionRef.current = scrollRef.current.scrollLeft % maxScroll;
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => handleDragEnd();
  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
    setIsPaused(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => handleDragEnd();

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/40 via-primary/50 to-primary/40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-white/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-white/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 animate-slide-up">
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

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 py-4 overflow-x-hidden cursor-grab active:cursor-grabbing"
          style={{
            willChange: 'scroll-position',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Padding inicial para centralizar */}
          <div className="flex-shrink-0 w-4 sm:w-8" aria-hidden="true" />

          {infiniteTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
              index={index}
            />
          ))}

          {/* Padding final */}
          <div className="flex-shrink-0 w-4 sm:w-8" aria-hidden="true" />
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <div className="flex justify-center mt-6 sm:hidden">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span>←</span>
          <span>Arraste para ver mais</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
