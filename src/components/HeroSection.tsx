/**
 * HeroSection - Confexy Landing Page
 * 
 * Design moderno e minimalista seguindo princípios de UX/UI:
 * - Headline focado no benefício (não no nome da marca)
 * - CTAs claros para download
 * - Layout otimizado para mobile e desktop
 * - Visual hierarchy clara
 */

import { Button } from "@/components/ui/button";
import mainImage from "@/assets/realassets/main_image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Effects - Sutis e elegantes */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-confexy-purple-light/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10 max-w-7xl py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ============================================================= */}
          {/* TEXT CONTENT */}
          {/* ============================================================= */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">

            {/* Headline - Focado no benefício, não na marca */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                Descubra desejos
                <br />
                <span className="text-white/90">em comum</span>
              </h1>

              {/* Subheadline - Proposta de valor clara */}
              <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Explore fantasias de forma segura.
                Só há match quando vocês dois querem o mesmo.
              </p>
            </div>

            {/* CTA Section - Botões lado a lado */}
            <div className="flex flex-row items-center justify-center lg:justify-start gap-3">
              {/* Android - Play Store */}
              <Button
                size="lg"
                className="
                  bg-white text-primary 
                  hover:bg-white/95
                  px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-semibold 
                  rounded-xl sm:rounded-2xl
                  shadow-xl shadow-black/10
                  transition-all duration-200 
                  hover:scale-[1.02]
                "
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.confexy', '_blank', 'noopener,noreferrer')}
              >
                <svg className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="hidden xs:inline">Play Store</span>
                <span className="xs:hidden">Android</span>
              </Button>

              {/* iOS - App Store */}
              <Button
                size="lg"
                className="
                  bg-white/10 text-white border border-white/30
                  hover:bg-white/20
                  px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base font-semibold 
                  rounded-xl sm:rounded-2xl
                  backdrop-blur-sm
                  transition-all duration-200 
                  hover:scale-[1.02]
                "
                onClick={() => window.open('https://apps.apple.com/us/app/confexy/id6755045041', '_blank', 'noopener,noreferrer')}
              >
                <svg className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <span className="hidden xs:inline">App Store</span>
                <span className="xs:hidden">iOS</span>
              </Button>
            </div>

            {/* Social Proof - Layout compacto para mobile */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Avatares + Usuários */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://i.pravatar.cc/100?img=32"
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=25"
                    alt=""
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/20 object-cover"
                  />
                </div>
                <span className="text-white/60 text-xs sm:text-sm">+1.000</span>
              </div>

              {/* Divisor visual */}
              <div className="w-px h-4 bg-white/20 hidden sm:block" />

              {/* Estrelas + Rating */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-white/60 text-xs sm:text-sm ml-1">4.8</span>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* APP PREVIEW */}
          {/* ============================================================= */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Glow sutil atrás da imagem */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-3xl opacity-50 scale-110" />

              {/* Main image */}
              <img
                src={mainImage}
                alt="Prévia do app Confexy mostrando a interface de match"
                className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-300 lg:hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;