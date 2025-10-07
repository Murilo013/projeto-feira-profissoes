import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SICurriculumSection = () => {
  const semesters = [
    {
      number: "6º SEMESTRE",
      subjects: [
        "Desenvolvimento para Dispositivos Mobile",
        "Engenharia de Software",
        "Governança de TI",
        "Arquitetura de Serviços em Nuvem",
        "Pesquisa Operacional",
        "Fundam. de Econ. e Finanças",
        "Meio Amb., Biodivers. e Sustent. (EaD)"
      ]
    },
    {
      number: "7º SEMESTRE",
      subjects: [
        "Auditoria e Segurança da Inform.",
        "Tópicos Avançados em TI",
        "Prática em Gestão de Projetos",
        "Qualidade de Software",
        "Projeto Integrador II",
        "Ética, Direitos Hum. e Cidadania (EaD)"
      ]
    },
    {
      number: "8º SEMESTRE",
      subjects: [
        "Interface Homem Máquina",
        "Ciência de Dados",
        "Gestão da Inf. e do Conhec.",
        "Sistemas Coop. e de Apoio a Dec.",
        "Empreendedorismo (EaD)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Matriz curricular S.I
        </h2>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {semesters.map((semester, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-background/50 backdrop-blur-sm border-primary/30 p-8 h-full">
                  <div className="mb-6">
                    <div className="inline-block px-6 py-2 rounded-full border-2 border-primary text-primary font-bold">
                      {semester.number}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
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

        <div className="flex justify-center gap-2 mt-8">
          {semesters.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SICurriculumSection;
