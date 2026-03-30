import { BookOpen, FileText, Briefcase, FileCheck, PencilRuler, Shield } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  { icon: BookOpen, title: "Consultoria para TCC", desc: "Apoio completo na estruturação, organização e revisão do seu trabalho de conclusão de curso com orientação especializada." },
  { icon: FileText, title: "Suporte para Artigos Científicos", desc: "Apoio acadêmico na metodologia, coerência textual e normalização ABNT para seu artigo acadêmico." },
  { icon: Briefcase, title: "Apoio para Projetos Universitários", desc: "Acompanhamento personalizado para estruturação e organização de projetos acadêmicos de diversas áreas." },
  { icon: FileCheck, title: "Suporte para Trabalhos Acadêmicos", desc: "Estruturação, formatação e revisão de relatórios acadêmicos e profissionais com orientação especializada." },
  { icon: PencilRuler, title: "Revisão e Formatação de TCC", desc: "ABNT, correção gramatical e revisão visual completa do seu trabalho acadêmico." },
  { icon: Shield, title: "Verificação de Plágio e IA", desc: "Relatório de originalidade e análise de IA para total transparência sobre seu trabalho." },
];

export default function ServicesSection() {
  const ref = useStaggerReveal<HTMLDivElement>(80);

  return (
    <section id="servicos" className="bg-background py-20 md:py-28 px-4 md:px-6" aria-labelledby="services-title">
      <div className="container mx-auto max-w-6xl">
        <h2 id="services-title" className="font-display text-2xl md:text-4xl text-primary text-center text-balance">
          Nossos Serviços de Apoio Acadêmico
        </h2>
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
