import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoUnisanta from "@/assets/logo-vertical-branco.png";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartFase = () => {
    navigate('/fase1/introducao');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logoUnisanta}
            alt="Unisanta" 
            className="h-10"
            width={200}
            height={100}
          />
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('si')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            SI
          </button>
          <button 
            onClick={() => scrollToSection('ads')}
            className="text-foreground hover:text-ads transition-colors font-medium"
          >
            ADS
          </button>
          <Button 
            variant="hero" 
            onClick={handleStartFase}
          >
            Conhecer
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
