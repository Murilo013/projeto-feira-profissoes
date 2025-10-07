import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://www.unisanta.br/sites/default/files/logo-unisanta-branco.png" 
            alt="Unisanta" 
            className="h-10"
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
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            ADS
          </button>
          <Button 
            variant="hero" 
            onClick={() => scrollToSection('conhecer')}
          >
            Conhecer
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
