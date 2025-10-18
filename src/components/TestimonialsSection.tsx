import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Murilo Santos Barbosa",
      course: "Formado em Sistemas de Informação",
      testimonial: "Iniciei como QA trainee na Fcamara de Santos, trabalhando com clientes como Unimed do Brasil e Lopes Imobiliária. Depois, atuei como QA pleno no SuperApp da Porto Seguro pela Zup em home office. Na mesma consultoria, trabalhei quase dois anos no Itaú em projetos do agronegócio. Atualmente, sou QA Sênior na Zup, focado no produto Vivo Easy, realizando testes de software e automatizando testes de API, E2E e Mobile. Já ministrei palestras e mentorias na área, incluindo uma na Universidade Santa Cecília, onde me formei.",
      avatar: "src/assets/testemunho1.png"
    },
    {
      name: "Welton José",
      course: "Aluno de Análise e Desenvolvimento de Sistemas",
      testimonial: "Meu nome é Welton José, estudante da Unisanta. Comecei em Sistemas de Informação, mas migrei para Análise e Desenvolvimento. Em 2024, fui segundo lugar no ESG Challenge do Porto de Santos e terceiro no Hacklab do SEMESP. Participei do Projeto Rondon, ministrando aulas em Theobroma, Rondônia, com apoio da Unisanta. Recentemente, fui aprovado para um intercâmbio de seis meses na Universidade de Coimbra, onde estudarei Engenharia Informática.",
      avatar: "src/assets/testemunho2.png"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="mx-1">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          De aluno para aluno
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur-sm border-border/50 p-8 space-y-6"
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </Avatar>
                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
