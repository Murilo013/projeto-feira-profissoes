import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import SIDetailsSection from "@/components/SIDetailsSection";
import SIOpportunitiesSection from "@/components/SIOpportunitiesSection";
import SICurriculumSection from "@/components/SICurriculumSection";
import ADSDetailsSection from "@/components/ADSDetailsSection";
import ADSCurriculumSection from "@/components/ADSCurriculumSection";
import ADSOpportunitiesSection from "@/components/ADSOpportunitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <SIDetailsSection />
        <SICurriculumSection />
        <SIOpportunitiesSection />
        <ADSDetailsSection />
        <ADSCurriculumSection />
        <ADSOpportunitiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
