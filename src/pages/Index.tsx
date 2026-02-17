import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import LearningPathSection from "@/components/LearningPathSection";
import TracksSection from "@/components/TracksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <TracksSection />
      <LearningPathSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
