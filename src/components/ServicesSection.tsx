import { BookOpen, FileText, Briefcase, FileCheck, PencilRuler, Shield } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  { icon: BookOpen, title: "Orientação para TCC", desc: "Suporte na estruturação, organização e metodologia do seu trabalho de conclusão de curso. Você desenvolve, nós orientamos." },
  { icon: FileText, title: "Suporte Metodológico para Artigos", desc: "Orientação sobre metodologia científica, coerência textual e adequação às normas ABNT para seu artigo acadêmico." },
  { icon: Briefcase, title: "Acompanhamento de Projetos Universitários", desc: "Orientação personalizada para estruturação e organização de projetos acadêmicos de diversas áreas do conhecimento." },
  { icon: FileCheck, title: "Revisão de Trabalhos Acadêmicos", desc: "Revisão técnica, formatação conforme ABNT e feedback detalhado para aprimorar o seu trabalho acadêmico." },
  { icon: PencilRuler, title: "Formatação e Normalização ABNT", desc: "Adequação completa do seu trabalho às normas ABNT, APA ou Vancouver, garantindo conformidade técnica." },
  { icon: Shield, title: "Verificação de Originalidade e IA", desc: "Relatório de originalidade e análise de Inteligência Artificial para garantir transparência sobre o conteúdo que você produziu." },
];

export default function ServicesSection() {
  const ref = useStaggerReveal<HTMLDivElement>(80);

  return (
    <section id="servicos" className="bg-background py-20 md:py-28 px-4 md:px-6" aria-labelledby="services-title">
      <div className="container mx-auto max-w-6xl">
        <h2 id="services-title" className="font-display text-2xl md:text-4xl text-primary text-center text-balance">
          Nossos Serviços de Orientação Acadêmica
        </h2>
        <p className="mt-3 text-center text-muted-foreground font-body text-sm max-w-2xl mx-auto">
          Oferecemos orientação educacional, revisão técnica e suporte metodológico. O desenvolvimento do trabalho é de responsabilidade do aluno.
        </p>
        <div ref={ref} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="scroll-reveal group bg-card rounded-xl p-6 shadow-sm border border-border hover:border-accent hover:border-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-display text-xl text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm text-pretty font-body">{s.desc}</p>
              <button className="mt-4 text-primary text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-1">
                Saiba Mais →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
