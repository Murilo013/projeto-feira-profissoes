import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import techDragon from "@/assets/tech-dragon.jpg";

const ADSCurriculumSection = () => {
  const semesters = [
    {
      number: "1º SEMESTRE",
      subjects: [
        "Fundamentos de Linguagem de Programação",
        "Desenvolvimento de Algoritmos",
        "Fundamentos de Sistemas de Informação",
        "Arquitetura de Computadores",
        "Desenvolvimento de Jogos"
      ]
    },
    {
      number: "2º SEMESTRE",
      subjects: [
        "Banco de Dados",
        "Programação Orientada a Objetos",
        "Fundamentos de Desenv. Web",
        "Desenvolvimento Pessoal e Profissional",
        "Ética e Cidadania",
        "Probabilidade e Estatística"
      ]
    },
    {
      number: "3º SEMESTRE",
      subjects: [
        "Engenharia de Software",
        "Desenvolvimento Web Avançado",
        "Estrutura de Dados",
        "Sistemas Operacionais",
        "Redes de Computadores"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Matriz curricular ADS
        </h2>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8 items-center max-w-6xl mx-auto mb-12">
          {/* Dragon Image Card */}
          <Card className="bg-background/50 backdrop-blur-sm border-ads/30 p-8 text-center">
            <img 
              src={techDragon} 
              alt="Dragão Tecnológico" 
              className="w-full h-auto mb-4"
            />
            <h3 className="font-bold text-lg mb-2">Matriz Curricular</h3>
            <p className="text-sm text-muted-foreground">
              Explore o roteiro educacional que moldará seu futuro.
            </p>
          </Card>

          {/* Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {semesters.map((semester, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="bg-background/50 backdrop-blur-sm border-ads/30 p-8 h-full">
                    <div className="mb-6">
                      <div 
                        className="inline-block px-6 py-2 rounded-full border-2 font-bold"
                        style={{ borderColor: 'hsl(340 80% 55%)', color: 'hsl(340 80% 55%)' }}
                      >
                        {semester.number}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {semester.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span style={{ color: 'hsl(340 80% 55%)' }} className="mt-1">•</span>
                          <span className="text-sm">{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="flex justify-center gap-2">
          {semesters.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'hsl(340 80% 55% / 0.3)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ADSCurriculumSection;
