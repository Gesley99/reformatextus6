import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, BookOpen } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    number: "5000+",
    label: "Projetos Orientados",
    color: "text-primary",
  },
  {
    icon: Users,
    number: "15+",
    label: "Colaboradores",
    color: "text-secondary",
  },
  {
    icon: Trophy,
    number: "98%",
    label: "Índice de Satisfação",
    color: "text-primary",
  },
  {
    icon: Clock,
    number: "3+",
    label: "Anos de Experiência",
    color: "text-secondary",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Sobre a{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Textus Acadêmico
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Atuamos com mentoria e orientação acadêmica personalizada, auxiliando
            estudantes no desenvolvimento de projetos educacionais com ética,
            autonomia e rigor metodológico.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="font-medium px-4 py-2">
                Nossa História
              </Badge>

              <h3 className="text-3xl font-playfair font-bold text-foreground">
                Compromisso com a Formação Acadêmica
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundada por profissionais com experiência em pesquisa e docência,
                a Textus Acadêmico surgiu com o propósito de orientar estudantes na
                construção de projetos acadêmicos sólidos, respeitando a autoria
                intelectual e as diretrizes educacionais.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Nossa Missão
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Promover mentoria acadêmica acessível e qualificada, oferecendo
                suporte metodológico, orientação científica e acompanhamento
                educacional contínuo.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Nossos Valores
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="px-3 py-1">
                  Ética Acadêmica
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Autonomia do Estudante
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Rigor Metodológico
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Confidencialidade
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Acompanhamento Contínuo
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h4 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center">
                  Indicadores
                </h4>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center space-y-2">
                        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>

                        <div className={`text-3xl font-bold ${stat.color}`}>
                          {stat.number}
                        </div>

                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Originalidade / Ética */}
        <div className="mt-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-4xl font-playfair font-bold text-foreground">
              Compromisso com{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                originalidade acadêmica
              </span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso suporte educacional é fundamentado em referências confiáveis,
              orientação personalizada e boas práticas acadêmicas. Incentivamos
              o desenvolvimento autoral do estudante, oferecendo acompanhamento
              técnico e educacional ético.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/copyspidersite.png"
              alt="Verificação de originalidade acadêmica"
              className="max-w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
