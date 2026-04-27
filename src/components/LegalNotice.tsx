<<<<<<< HEAD
import { AlertTriangle, BookOpen, GraduationCap } from "lucide-react";
=======
import { AlertTriangle } from "lucide-react";
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LegalNotice() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="bg-section-alt border-t-[3px] border-accent py-12 md:py-16 px-4 md:px-6" aria-labelledby="legal-title" ref={ref}>
      <div className="container mx-auto max-w-4xl scroll-reveal">
        <h2 id="legal-title" className="font-display text-xl md:text-2xl text-primary flex items-center gap-2 mb-4">
          <AlertTriangle className="text-accent" size={24} />
<<<<<<< HEAD
          Aviso Legal — Orientação Educacional
        </h2>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-muted-foreground text-sm font-body leading-relaxed text-pretty">
            <strong className="text-primary">Oferecemos orientação educacional, revisão técnica e suporte metodológico. Não elaboramos trabalhos acadêmicos completos.</strong>
          </p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed text-pretty mt-3">
            A Textus Acadêmico é uma empresa de orientação educacional. Nossos serviços consistem exclusivamente em aconselhamento acadêmico, 
            suporte metodológico, revisão técnica e material de apoio ao aprendizado do estudante.
          </p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed text-pretty mt-3">
            Não produzimos, redigimos, desenvolvemos ou entregamos projetos acadêmicos prontos. Também não garantimos aprovação em avaliações acadêmicas.
            Todo conteúdo e suporte fornecido tem finalidade exclusivamente didática e deve ser utilizado como 
            referência, guia e complemento aos estudos do aluno.
          </p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed text-pretty mt-3">
            A responsabilidade pelo desenvolvimento integral, redação, revisão final e entrega do trabalho acadêmico é integralmente 
            do contratante. Recomendamos sempre validar nossas orientações com seus professores ou orientadores acadêmicos institucionais.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-accent font-semibold font-body">
            <GraduationCap size={16} />
            <span>Nosso compromisso é com o seu aprendizado e crescimento acadêmico.</span>
          </div>
        </div>
=======
          Aviso Legal
        </h2>
        <p className="text-muted-foreground text-sm font-body leading-relaxed text-pretty">
          Nossa empresa oferece apoio acadêmico e orientação especializada para estudantes universitários por meio de aconselhamento e materiais de apoio.
          Não produzimos nem desenvolvemos projetos acadêmicos prontos, tampouco garantimos aprovação. O conteúdo e o suporte
          fornecidos têm finalidade exclusivamente didática e devem ser utilizados como referência, guia e complemento aos estudos
          do aluno. A responsabilidade pelo desenvolvimento integral, revisão final e entrega do projeto acadêmico é integralmente
          do contratante. Recomendamos sempre validar nossas orientações com seus professores ou orientadores acadêmicos.
        </p>
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
      </div>
    </section>
  );
}
