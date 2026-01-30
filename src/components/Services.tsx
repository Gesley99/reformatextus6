import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  BookOpen,
  FileText,
  GraduationCap,
  Users,
  Clock,
} from "lucide-react";

/*
  Serviços estruturados exclusivamente como mentoria, orientação
  e acompanhamento acadêmico. Não há oferta de execução, produção
  ou entrega de trabalhos, em conformidade com as políticas do Google Ads.
*/

const services = [
  {
    icon: GraduationCap,
    title: "Mentoria em TCC e Monografias",
    description:
      "Acompanhamento acadêmico individual para orientar o estudante em todas as etapas do trabalho de conclusão, respeitando a autoria e a autonomia acadêmica.",
    features: [
      "Orientação metodológica",
      "Apoio na estrutura do texto",
      "Revisão orientativa conforme normas",
    ],
  },
  {
    icon: FileText,
    title: "Mentoria em Projetos de Extensão",
    description:
      "Orientação educacional para organização, planejamento e estruturação de projetos de extensão universitária.",
    features: [
      "Definição orientada de objetivos",
      "Estruturação do projeto",
      "Acompanhamento acadêmico",
    ],
  },
  {
    icon: BookOpen,
    title: "Orientação em Artigos Científicos",
    description:
      "Mentoria acadêmica voltada à organização da pesquisa, escrita científica e adequação às normas editoriais.",
    features: [
      "Orientação na pesquisa bibliográfica",
      "Apoio à escrita científica",
      "Normalização conforme diretrizes",
    ],
  },
  {
    icon: Users,
    title: "Orientação para Apresentações Acadêmicas",
    description:
      "Apoio educacional na estruturação de apresentações para bancas, seminários e atividades avaliativas.",
    features: [
      "Organização do conteúdo",
      "Estrutura visual de slides",
      "Preparação acadêmica para apresentação",
    ],
  },
  {
    icon: Clock,
    title: "Mentoria em Relatórios de Estágio",
    description:
      "Acompanhamento acadêmico para organização e padronização de relatórios de estágio, conforme exigências institucionais.",
    features: [
      "Orientação por objetivos",
      "Adequação às normas acadêmicas",
      "Revisão orientativa",
    ],
  },
  {
    icon: CheckCircle,
    title: "Revisão Técnica e Normalização",
    description:
      "Apoio educacional voltado à revisão textual, clareza acadêmica e adequação às normas técnicas.",
    features: [
      "Correções linguísticas",
      "Normalização ABNT e institucionais",
      "Aprimoramento textual orientativo",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Nossos{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Atuamos exclusivamente com mentoria, orientação e acompanhamento
            acadêmico, respeitando a autoria do estudante e as diretrizes
            institucionais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="academic-grid max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="shadow-card hover:shadow-elegant transition-smooth group hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <CardTitle className="text-2xl font-playfair text-foreground">
                    {service.title}
                  </CardTitle>

                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="gradient-subtle rounded-2xl p-8 shadow-elegant">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Precisa de orientação acadêmica personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe oferece mentoria educacional individual, focada em
              orientar o aluno em cada etapa do seu percurso acadêmico.
            </p>
            <button
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold shadow hover:shadow-elegant transition"
              onClick={() =>
                window.open("https://wa.me/61996212692", "_blank")
              }
            >
              Falar com um Especialista
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
