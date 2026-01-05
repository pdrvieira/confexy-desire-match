/**
 * HeroSection - Confexy Landing Page
 * 
 * Design moderno e minimalista seguindo princípios de UX/UI:
 * - Headline focado no benefício (não no nome da marca)
 * - Um único CTA primário claro
 * - Sem redundância de informações
 * - Visual hierarchy clara
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mainImage from "@/assets/realassets/main_image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20 pb-12 lg:py-0">
      {/* Background Effects - Sutis e elegantes */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/15 rounded-full blur-[100px]"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-confexy-purple-light/10 rounded-full blur-[120px]"
      />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ============================================================= */}
          {/* TEXT CONTENT */}
          {/* ============================================================= */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">

            {/* Headline - Focado no benefício, não na marca */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Descubra desejos
                <br />
                <span className="text-white/90">em comum</span>
              </h1>

              {/* Subheadline - Proposta de valor clara */}
              <p className="text-lg lg:text-xl text-white/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Explore fantasias de forma segura.
                Só há match quando vocês dois querem o mesmo.
              </p>
            </div>

            {/* CTA Section - Um único CTA claro */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button
                size="lg"
                className="
                  group
                  bg-white text-primary 
                  hover:bg-white/95
                  px-8 py-6 text-lg font-semibold 
                  rounded-2xl
                  shadow-xl shadow-black/10
                  transition-all duration-200 
                  hover:scale-[1.02]
                "
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.confexy', '_blank', 'noopener,noreferrer')}
              >
                Baixar grátis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Indicador sutil de plataforma */}
              <span className="text-white/50 text-sm">
                Android • iOS em breve
              </span>
            </div>

            {/* Social Proof - Com avatares reais */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=25"
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                </div>
                <span className="text-white/60 text-sm">
                  +1.000 usuários
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-white/60 text-sm ml-1">4.8</span>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* APP PREVIEW */}
          {/* ============================================================= */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Glow sutil atrás da imagem */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl opacity-50 scale-110" />

              {/* Main image */}
              <img
                src={mainImage}
                alt="Prévia do app Confexy mostrando a interface de match"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;