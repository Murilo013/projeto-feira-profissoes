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
        "Estrutura de Dados",
        "Aplicações para Desktop	",
        "Frameworks para Web",
        "Engenharia de Software",
        "Qualidade de Software",
        "Prática de Programação",
      ]
    },
    {
      number: "4º SEMESTRE",
      subjects: [
        "Banco de Dados",
        "Programação Orientada a Objetos",
        "Fundamentos de Desenv. Web",
        "Desenvolvimento Pessoal e Profissional",
        "Ética e Cidadania",
        "Probabilidade e Estatística"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Matriz curricular ADS
        </h2>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {semesters.map((semester, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                          <span style={{ color: 'hsl(340 80% 55%)' }} className="-mt-1">•</span>
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
    </section>
  );
};

export default ADSCurriculumSection;
