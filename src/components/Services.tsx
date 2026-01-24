import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BookOpen, FileText, GraduationCap, Users, Clock } from "lucide-react";

// Lista de serviços com foco em mentoria e orientação, evitando qualquer indicação
// de produção de trabalhos prontos. As descrições destacam suporte, metodologia
// e revisão, elementos que atendem às políticas de publicidade.
const services = [
  {
    icon: GraduationCap,
    title: "TCC & Monografias",
    description:
      "Mentoria completa para que você desenvolva seu trabalho de conclusão com segurança, desde a escolha do tema até a estrutura final.",
    features: [
      "Suporte metodológico",
      "Orientação de escrita",
      "Revisão conforme normas",
    ],
  },
  {
    icon: FileText,
    title: "Projetos de Extensão",
    description:
      "Auxílio no planejamento e execução de projetos de extensão, com foco em impacto social e formação prática.",
    features: [
      "Planejamento orientado",
      "Definição de objetivos",
      "Acompanhamento de resultados",
    ],
  },
  {
    icon: BookOpen,
    title: "Artigos Científicos",
    description:
      "Suporte à produção de artigos científicos originais, priorizando pesquisa e escrita de qualidade.",
    features: [
      "Orientação na pesquisa",
      "Atualização de referências",
      "Estruturação segundo normas",
    ],
  },
  {
    icon: Users,
    title: "Apresentações Acadêmicas",
    description:
      "Orientação na criação de slides e materiais visuais para apresentações (bancas, seminários e resultados de pesquisa).",
    features: [
      "Estruturação do conteúdo",
      "Design e tipografia",
      "Preparação para apresentação",
    ],
  },
  {
    icon: Clock,
    title: "Relatórios de Estágio",
    description:
      "Mentoria para elaboração de relatórios de estágio, respeitando padrões institucionais e evidências práticas.",
    features: [
      "Organização por objetivos",
      "Adequação a normas",
      "Revisão orientativa",
    ],
  },
  {
    icon: CheckCircle,
    title: "Revisão & Formatação",
    description:
      "Aprimoramento de textos acadêmicos já desenvolvidos, com foco em clareza e normas técnicas.",
    features: [
      "Correção ortográfica",
      "Adequação às normas",
      "Melhoria textual",
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
            Nossos <span className="gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Oferecemos soluções completas para todas as suas necessidades acadêmicas, 
            com qualidade garantida e suporte especializado.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="academic-grid max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="shadow-card hover:shadow-elegant transition-smooth group hover:scale-105">
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
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="gradient-subtle rounded-2xl p-8 shadow-elegant">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Precisa de algo além da lista acima?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Oferecemos diversos outros serviços acadêmicos, adaptados às mais diferentes necessidades. 
              Entre em contato e descubra como podemos apoiar o seu trabalho.
            </p>
            <button
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold shadow hover:shadow-elegant transition"
              onClick={() => window.open("https://wa.me/61996212692", "_blank")}
            >
              Conversar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
