import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Depoimentos = () => {
  const depoimentos = [
    {
      id: 1,
      nome: "Maria Silva",
      curso: "Administração",
      universidade: "UnB",
      texto: "A mentoria da Textus Acadêmico foi fundamental para o sucesso do meu TCC. O suporte metodológico e as orientações foram excepcionais. Recomendo muito!",
      avaliacao: 5,
      data: "Setembro 2024",
    },
    {
      id: 2,
      nome: "João Santos",
      curso: "Engenharia Civil",
      universidade: "UFG",
      texto: "Excelente revisão e formatação. A equipe é muito profissional e cumpre todos os prazos. Minha monografia ficou excelente!",
      avaliacao: 5,
      data: "Agosto 2024",
    },
    {
      id: 3,
      nome: "Ana Carolina",
      curso: "Psicologia",
      universidade: "PUC-GO",
      texto: "O apoio na estruturação do meu projeto de pesquisa foi incrível. A orientação metodológica me ajudou muito a organizar as ideias e desenvolver um projeto de qualidade.",
      avaliacao: 5,
      data: "Julho 2024",
    },
    {
      id: 4,
      nome: "Carlos Eduardo",
      curso: "Direito",
      universidade: "UFG",
      texto: "Precisava de ajuda com a formatação ABNT e revisão do meu artigo científico. O resultado superou minhas expectativas. Muito obrigado pela dedicação!",
      avaliacao: 5,
      data: "Junho 2024",
    },
    {
      id: 5,
      nome: "Fernanda Lima",
      curso: "Pedagogia",
      universidade: "UEG",
      texto: "A mentoria foi essencial para meu TCC. O suporte na metodologia e na estruturação do projeto foi excepcional. Equipe muito competente!",
      avaliacao: 5,
      data: "Maio 2024",
    },
    {
      id: 6,
      nome: "Roberto Oliveira",
      curso: "Ciências Contábeis",
      universidade: "UnB",
      texto: "Excelente atendimento e qualidade na revisão. Meu projeto ficou muito bem estruturado e dentro das normas acadêmicas. Recomendo fortemente!",
      avaliacao: 5,
      data: "Abril 2024",
    },
    {
      id: 7,
      nome: "Juliana Costa",
      curso: "Enfermagem",
      universidade: "PUC-GO",
      texto: "O apoio na orientação e na estruturação do meu projeto de pesquisa foi fundamental. A equipe é muito atenciosa e profissional. Resultado excelente!",
      avaliacao: 5,
      data: "Março 2024",
    },
    {
      id: 8,
      nome: "Pedro Henrique",
      curso: "Educação Física",
      universidade: "UFG",
      texto: "Precisava de orientação para meu artigo científico e encontrei na Textus Acadêmico o suporte ideal. Resultado de alta qualidade e dentro do prazo!",
      avaliacao: 5,
      data: "Fevereiro 2024",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Depoimentos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Veja o que nossos clientes dizem sobre nossos serviços de <strong>mentoria acadêmica</strong>
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Quote className="w-4 h-4" />
              <span>Experiências reais de estudantes que confiaram em <strong>nossa mentoria</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((depoimento) => (
              <Card key={depoimento.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header com avaliação */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">{renderStars(depoimento.avaliacao)}</div>
                    <span className="text-xs text-muted-foreground">{depoimento.data}</span>
                  </div>

                    {/* Texto do depoimento */}
                    <div className="flex-1 mb-4">
                      <Quote className="w-6 h-6 text-primary/30 mb-2" />
                      <p className="text-muted-foreground leading-relaxed">{depoimento.texto}</p>
                    </div>

                    {/* Informações do cliente */}
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-foreground mb-1">{depoimento.nome}</h4>
                      <p className="text-sm text-muted-foreground">
                        {depoimento.curso} • {depoimento.universidade}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Seja o próximo a alcançar o sucesso acadêmico
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se aos nossos clientes satisfeitos e receba a <strong>mentoria acadêmica</strong> que você
              precisa para destacar seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61996212692"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Solicitar Orçamento
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Ver Nossos Serviços
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  };

  export default Depoimentos;
