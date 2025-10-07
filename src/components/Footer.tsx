const Footer = () => {
  return (
    <footer id="conhecer" className="bg-card py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {/* Partnerships */}
          <div className="text-center space-y-6">
            <p className="text-muted-foreground text-lg">Parcerias com:</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <img 
                src="https://www.campusagreement.com/images/logo.png" 
                alt="Campus Agreement" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/300px-IBM_logo.svg.png" 
                alt="IBM" 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity brightness-0 invert hover:brightness-100 hover:invert-0"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/300px-Oracle_logo.svg.png" 
                alt="Oracle" 
                className="h-8 opacity-70 hover:opacity-100 transition-opacity brightness-0 invert hover:brightness-100 hover:invert-0"
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p>© {new Date().getFullYear()} Unisanta - Universidade Santa Cecília. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
