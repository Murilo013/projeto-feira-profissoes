import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import SIDetailsSection from "@/components/SIDetailsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <SIDetailsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
