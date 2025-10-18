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
      number: "1º SEMESTRE",
      subjects: [
        "Fundamentos de Linguagem de Programação",
        "Teoria Geral de Sistemas",
        "Desenvolvimento de Algoritmos",
        "Desenvolvimento de Jogos",
        "Produção de Textos e Leitura (Ead)"
      ]
    },
    {
      number: "2º SEMESTRE",
      subjects: [
        "Fundamentos de Sistemas de Informação",
        "Fundamentos de Desenv. Web",
        "Arquitetura de Computadores",
        "Programação Orientada a Objetos",
        "Pesquisa Operacional",
        "Tecnologia e Inovação (Ead)",
      ]
    },
    {
      number: "3º SEMESTRE",
      subjects: [
        "Banco de Dados",
        "Aplicações para Desktop",
        "Frameworks para Web",
        "Matemática aplicada a Computação",
        "Probabilidade e Estatística",
        "Desenvolvimento Pessoal e Profissional",
        "Pesquisa Academica (Ead)"
      ]
    },
    {
      number: "4º SEMESTRE",
      subjects: [
        "Programação para Servidores",
        "Praticas de Programação",
        "Estrutura de Dados",
        "Sistemas Operacionais",
        "Planejamento Estratégico",
        "Gestão e Liderança de Equipe (Ead)"
      ]
    },
    {
      number: "5º SEMESTRE",
      subjects: [
        "Redes de Computadores",
        "Técnicas de Programação",
        "Inteligência Artificial",
        "Sistemas Distribuídos",
        "Teoria dos Grafos",
        "Projeto Integrador I",
        "Proc. de Glob. e Política Interna (EaD)"
      ]
    },
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
      <div className="mx-60">
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
                        <span className="text-primary -mt-1">•</span>
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

export default SICurriculumSection;
