import { Button } from "@/components/ui/button";
import techDragon from "@/assets/tech-dragon.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Tech Pattern Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(189 100% 50% / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Conheça o curso de{" "}
            <span className="text-primary">
              Sistemas de Informação
            </span>
          </h1>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('conhecer')}
            className="text-lg"
          >
            Conheça na Prática
          </Button>
        </div>

        {/* Right Content - Dragon Image */}
        <div className="relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
            <img 
              src={techDragon} 
              alt="Tech Dragon" 
              className="relative w-full h-auto drop-shadow-2xl animate-pulse"
              style={{ animationDuration: '3s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
