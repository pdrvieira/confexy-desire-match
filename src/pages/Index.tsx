import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
