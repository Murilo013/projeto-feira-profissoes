
const CoursesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="mx-60">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              ADS e Sistemas
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Unisanta oferece os cursos de Análise e Desenvolvimento de 
              Sistemas (ADS) e Sistemas de Informação (S.I). O curso de ADS é 
              tecnólogo, com foco prático no desenvolvimento de software, 
              programação e banco de dados, formando profissionais em um 
              tempo menor. Já o curso de Sistemas de Informação (S.I) é um 
              bacharelado mais abrangente, preparando o aluno tanto para o 
              desenvolvimento de sistemas quanto para a gestão de T.I e o 
              planejamento estratégico.
            </p>
          </div>

          {/* Right Content - Building Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500 rounded-2xl" />
            <img 
              src="src/assets/unisantafachada.png" 
              alt="Prédio Unisanta" 
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
