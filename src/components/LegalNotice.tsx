import { AlertTriangle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LegalNotice() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="bg-section-alt border-t-[3px] border-accent py-12 md:py-16 px-4 md:px-6" aria-labelledby="legal-title" ref={ref}>
      <div className="container mx-auto max-w-4xl scroll-reveal">
        <h2 id="legal-title" className="font-display text-xl md:text-2xl text-primary flex items-center gap-2 mb-4">
          <AlertTriangle className="text-accent" size={24} />
          Aviso Legal
        </h2>
        <p className="text-muted-foreground text-sm font-body leading-relaxed text-pretty">
          Nossa empresa oferece apoio acadêmico e orientação especializada para estudantes universitários por meio de aconselhamento e materiais de apoio.
          Não produzimos nem desenvolvemos projetos acadêmicos prontos, tampouco garantimos aprovação. O conteúdo e o suporte
          fornecidos têm finalidade exclusivamente didática e devem ser utilizados como referência, guia e complemento aos estudos
          do aluno. A responsabilidade pelo desenvolvimento integral, revisão final e entrega do projeto acadêmico é integralmente
          do contratante. Recomendamos sempre validar nossas orientações com seus professores ou orientadores acadêmicos.
        </p>
      </div>
    </section>
  );
}
