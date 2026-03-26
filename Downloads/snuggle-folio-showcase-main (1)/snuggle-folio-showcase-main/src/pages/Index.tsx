import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import TechJourneySection from "@/components/portfolio/TechJourneySection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import Footer from "@/components/portfolio/Footer";
import BackgroundCircles from "@/components/portfolio/BackgroundCircles";
import FloatingDockDemo from "@/components/floating-dock-demo";
import CursorOverlay from "@/components/portfolio/CursorOverlay";

const Index = () => {
  return (
    <div className="min-h-screen relative cursor-none">
      <CursorOverlay />
      <BackgroundCircles />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <AchievementsSection />
        <TechJourneySection />
        <TestimonialsSection />
        <Footer />
      </div>
      <FloatingDockDemo />
    </div>
  );
};

export default Index;
