import { Check, X } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const DO = [
  "Orientação metodológica e de estrutura",
  "Revisão técnica com comentários detalhados",
  "Formatação conforme ABNT, APA ou Vancouver",
  "Relatório de originalidade e análise de IA",
  "Esclarecimento de dúvidas durante o processo",
];

const DONT = [
  "Elaborar ou redigir trabalhos acadêmicos completos",
  "Assumir a autoria ou a entrega do seu trabalho",
  "Garantir aprovação em avaliações acadêmicas",
  "Compartilhar seus dados ou conteúdos com terceiros",
];

export default function Commitments() {
  const ref = useStaggerReveal<HTMLDivElement>(120);

  return (
    <section id="aviso-legal" className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="comp-title">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow text-primary">Transparência</p>
          <h2 id="comp-title" className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl text-balance">
            O que fazemos — e o que não fazemos
          </h2>
        </div>

        <div ref={ref} className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="scroll-reveal rounded-3xl bg-white p-7 ring-1 ring-border md:p-9">
            <p className="eyebrow text-primary">Fazemos</p>
            <ul className="mt-5 space-y-4">
              {DO.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-reveal rounded-3xl bg-white p-7 ring-1 ring-border md:p-9">
            <p className="eyebrow text-muted-foreground">Não fazemos</p>
            <ul className="mt-5 space-y-4">
              {DONT.map((d) => (
                <li key={d} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink/20 text-ink/50">
                    <X size={13} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-accent/60 bg-accent/10 p-7 md:p-9">
          <h3 className="font-display text-xl text-ink">Aviso legal — orientação educacional</h3>
          <div className="mt-3 grid gap-4 text-sm leading-relaxed text-foreground/75 md:grid-cols-2 md:gap-8">
            <p className="text-pretty">
              A Textus Acadêmico é uma empresa de orientação educacional. Nossos serviços consistem exclusivamente em
              aconselhamento acadêmico, suporte metodológico, revisão técnica e material de apoio ao aprendizado. Todo
              conteúdo fornecido tem finalidade didática e deve ser usado como referência e complemento aos estudos.
            </p>
            <p className="text-pretty">
              A responsabilidade pelo desenvolvimento integral, redação, revisão final e entrega do trabalho é do
              contratante. Não garantimos aprovação em avaliações acadêmicas. Recomendamos validar nossas orientações
              com seus professores ou orientadores institucionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
