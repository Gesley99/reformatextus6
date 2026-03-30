import { Star } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  { name: "Maria Silva", initials: "MS", role: "Graduação em Engenharia", text: "A Textus ajudou a estruturar meu TCC de forma clara e profissional. A orientação acadêmica foi essencial para organizar todo o trabalho conforme as normas ABNT." },
  { name: "Carlos Ferreira", initials: "CF", role: "Mestrado em Administração", text: "O atendimento personalizado foi impressionante. O feedback melhorou significativamente a coerência e a apresentação formal do meu artigo científico." },
  { name: "Ana Costa", initials: "AC", role: "Graduação em Direito", text: "Suporte discreto, profissional e atencioso. Ganhei confiança para entregar um relatório bem estruturado e organizado." },
  { name: "Pedro Oliveira", initials: "PO", role: "Especialização em Educação", text: "Melhor investimento em orientação acadêmica que já fiz. A Textus entendeu minhas dificuldades e forneceu material de apoio super útil." },
];

export default function TestimonialsSection() {
  const ref = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section className="bg-primary py-20 md:py-28 px-4 md:px-6" aria-labelledby="testimonials-title">
      <div className="container mx-auto max-w-6xl">
        <h2 id="testimonials-title" className="font-display text-2xl md:text-4xl text-primary-foreground text-center text-balance">
          O Que Nossos Alunos Dizem
        </h2>
        <div ref={ref} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="scroll-reveal bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-5 border-l-[3px] border-accent shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold font-body">
                  {t.initials}
                </div>
                <div>
                  <p className="text-primary-foreground text-sm font-semibold">{t.name}</p>
                  <p className="text-primary-foreground/60 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={14} />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm font-body text-pretty leading-relaxed">"{t.text}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
