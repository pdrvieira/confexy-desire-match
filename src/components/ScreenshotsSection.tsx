import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screenshot1 from "@/assets/realassets/screenshot-1.png";
import screenshot2 from "@/assets/realassets/screenshot-2.png";
import screenshot3 from "@/assets/realassets/screenshot-3.png";
import screenshot4 from "@/assets/realassets/screenshot-4.png";
import screenshot5 from "@/assets/realassets/screenshot-5.png";

// Actual screenshot data with accurate descriptions and dynamic badges
const screenshots = [
  {
    id: 1,
    title: "Descubra Desejos em Comum",
    description: "Navegue pelas cartas de fantasias e faça suas escolhas. Quando ambos selecionam a mesma opção, vocês descobrem juntos suas afinidades íntimas.",
    badge: "Swipe & Match",
    image: screenshot1
  },
  {
    id: 2,
    title: "Jogue com Amigos",
    description: "Conecte-se com seus amigos próximos de forma segura. Adicione contatos e explore juntos um mundo de descobertas divertidas e privadas.",
    badge: "Social & Seguro",
    image: screenshot2
  },
  {
    id: 3,
    title: "Privacidade Garantida",
    description: "Suas escolhas permanecem completamente privadas até que haja um match mútuo. Ninguém vê suas preferências sem o seu consentimento.",
    badge: "100% Privado",
    image: screenshot3
  },
  {
    id: 4,
    title: "Dê Match e Comemore",
    description: "Quando vocês dois escolhem a mesma fantasia, o Confexy revela o match! Celebrem juntos essa descoberta especial e íntima.",
    badge: "Match Revelado",
    image: screenshot4
  },
  {
    id: 5,
    title: "Crie Novos Matches",
    description: "Continue explorando e descobrindo novas conexões. Baixe o Confexy e transforme curiosidades em momentos especiais de cumplicidade.",
    badge: "Disponível Agora",
    image: screenshot5
  }
];

const ScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Veja o <span className="text-primary">Confexy</span> em ação
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Uma interface intuitiva e elegante para explorar conexões de forma natural e divertida.
          </p>
        </div>

        {/* Modern Carousel */}
        <div className="max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Carousel Container */}
            <div className="relative h-[600px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-card border border-primary/20 backdrop-blur-glass">

              {/* Slides */}
              <div className="relative h-full">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out transform ${index === currentIndex
                        ? 'opacity-100 scale-100 translate-x-0'
                        : index < currentIndex
                          ? 'opacity-0 scale-95 -translate-x-full'
                          : 'opacity-0 scale-95 translate-x-full'
                      }`}
                  >
                    <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-6 sm:gap-8 lg:gap-16 p-4 sm:p-6 lg:p-12 xl:p-16">

                      {/* Screenshot Image */}
                      <div className="relative flex-shrink-0 group order-1 lg:order-1">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50" />
                        <div className="relative border-2 border-primary/30 hover:border-primary-glow rounded-xl sm:rounded-2xl transition-colors duration-500 overflow-hidden">
                          <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="relative z-10 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto shadow-xl sm:shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 max-w-sm sm:max-w-md lg:max-w-lg order-2 lg:order-2">
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground">
                            {screenshot.title}
                          </h3>
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed px-2 sm:px-0">
                            {screenshot.description}
                          </p>
                        </div>

                        {/* Dynamic Feature Badge */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/15 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-primary font-medium text-xs sm:text-sm">
                            {screenshot.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <ChevronLeft className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <ChevronRight className="h-6 w-6 text-white group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 ease-out"
                style={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ScreenshotsSection;