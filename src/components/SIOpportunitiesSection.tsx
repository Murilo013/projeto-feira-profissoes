import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const SIOpportunitiesSection = () => {
  const opportunities = [
    "Análise e Desenvolvimento de Sistemas",
    "Gestão de Projetos de TI",
    "Administração de Banco de Dados",
    "Segurança da Informação",
    "Inteligência Artificial e Machine Learning",
    "Consultoria em TI"
  ];

  const skillsData = [
    { name: "Programação", value: 85 },
    { name: "Banco de Dados", value: 75 },
    { name: "Redes", value: 65 },
    { name: "Gestão de TI", value: 80 },
    { name: "Análise de Sistemas", value: 90 }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Knowledge Areas Chart */}
        <div className="mb-20 p-12 rounded-3xl border border-border/50 bg-card/50">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Áreas de Conhecimento S.I
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center gap-2 mt-6 justify-end">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(var(--primary))" }} />
            <span className="text-sm text-muted-foreground">Habilidades</span>
          </div>
        </div>

        {/* Career Opportunities */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Oportunidades de Carreira S.I
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Com o diploma em Sistemas de Informação, você estará preparado para atuar em diversas áreas:
          </p>
          <ul className="space-y-4">
            {opportunities.map((opportunity, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-lg">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SIOpportunitiesSection;
