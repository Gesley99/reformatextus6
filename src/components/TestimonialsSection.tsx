import { Star } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const TESTIMONIALS = [
  { name: "Maria Silva", initials: "MS", role: "Graduação em Engenharia", text: "A orientação da Textus me ajudou a entender como organizar meu TCC de forma clara e profissional. Aprendi muito sobre estruturação e normas ABNT, o que fez toda a diferença no resultado." },
  { name: "Carlos Ferreira", initials: "CF", role: "Mestrado em Administração", text: "O feedback detalhado da equipe me ajudou a melhorar significativamente a coerência e a metodologia do meu artigo. Me senti muito mais seguro para defender meu trabalho." },
  { name: "Ana Costa", initials: "AC", role: "Graduação em Direito", text: "A orientação foi discreta e muito profissional. Ganhei confiança e clareza para finalizar meu relatório com uma estrutura bem organizada." },
  { name: "Pedro Oliveira", initials: "PO", role: "Especialização em Educação", text: "A Textus me direcionou com materiais e feedbacks que me fizeram entender meu tema mais profundamente. Melhor investimento em orientação acadêmica que já fiz." },
];

export default function TestimonialsSection() {
  const ref = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section className="bg-primary py-20 md:py-28 px-4 md:px-6" aria-labelledby="testimonials-title">
      <div className="container mx-auto max-w-6xl">
        <h2 id="testimonials-title" className="font-display text-2xl md:text-4xl text-primary-foreground text-center text-balance">
          O Que Nossos Alunos Dizem Sobre a Orientação
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
