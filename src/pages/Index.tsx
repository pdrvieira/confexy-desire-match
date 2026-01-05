import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background">
        <HeroSection />
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <section id="depoimentos">
          <TestimonialsSection />
        </section>
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <ScreenshotsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection />
      </main>
      <FloatingCTA />
      <Footer />
    </>
  );
};

export default Index;
