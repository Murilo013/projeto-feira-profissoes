import { Button } from "@/components/ui/button";
import techDragon from "@/assets/dragon.png";
import TextType from '@/components/TextType';


const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background/50 backdrop-blur-sm">
      {/* Tech Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(189 100% 50% / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20 pt-20">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight">
            Conheça o curso de <br/> 
            <TextType 
                text={["Sistemas de Informação", "Análise e Desenvolvimento de Sistemas"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
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
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full animate-float" />
            <img 
              src={techDragon} 
              alt="Tech Dragon" 
              className="relative w-full h-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
