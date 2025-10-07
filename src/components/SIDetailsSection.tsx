import { Card } from "@/components/ui/card";
import { Clock, Sun, Users } from "lucide-react";

const SIDetailsSection = () => {
  const details = [
    {
      icon: Clock,
      title: "Duração",
      value: "4 anos"
    },
    {
      icon: Sun,
      title: "Turno",
      value: "Matutino-Noturno"
    },
    {
      icon: Users,
      title: "Modalidade",
      value: "Presencial"
    }
  ];

  return (
    <section id="si" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: 'linear-gradient(135deg, hsl(189 100% 50% / 0.2) 0%, hsl(240 100% 50% / 0.2) 50%, hsl(160 100% 50% / 0.2) 100%)'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-16 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Curso de Sistemas de Informação
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                O curso de Sistemas de Informação da Unisanta prepara você para os 
                desafios do mundo digital, combinando conhecimentos de tecnologia, 
                gestão e negócios.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {details.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-secondary/50 backdrop-blur-sm border-border/50 p-8 text-center space-y-4 hover:bg-secondary/70 transition-all duration-300 hover:shadow-glow-sm"
                  >
                    <div className="flex justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {detail.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {detail.value}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIDetailsSection;
