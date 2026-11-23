import { useStaggerReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  { title: "Você entra em contato", desc: "Pelo WhatsApp ou formulário. Conte o tema, o curso e o prazo." },
  { title: "Analisamos sua demanda", desc: "Identificamos as dificuldades e montamos um plano de orientação sob medida." },
  { title: "Orientação e direcionamento", desc: "Você recebe guias, comentários e sugestões para avançar com autonomia." },
  { title: "Revisão técnica e feedback", desc: "Revisamos o que você escreveu e apontamos melhorias detalhadas." },
  { title: "Você finaliza com confiança", desc: "Aplica os ajustes e entrega o próprio trabalho com mais segurança." },
];

export default function Process() {
  const ref = useStaggerReveal<HTMLOListElement>(90);

  return (
    <section id="processo" className="relative overflow-hidden bg-primary px-5 py-20 text-white md:px-8 md:py-28" aria-labelledby="processo-title">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[60px] border-white/5" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-accent">Como funciona</p>
          <h2 id="processo-title" className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
            Cinco etapas, <span className="italic text-accent">nenhum</span> mistério.
          </h2>
          <p className="mt-5 max-w-sm text-white/75 text-pretty">
            Um processo pensado para você aprender enquanto avança — e chegar ao fim com o trabalho que é seu.
          </p>
        </div>

        <ol ref={ref} className="relative space-y-4">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="scroll-reveal group flex gap-5 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:bg-white/[0.1] md:gap-7 md:p-7"
            >
              <span className="font-display text-5xl font-medium leading-none text-accent tabular-nums md:text-6xl">{i + 1}</span>
              <div className="pt-1">
                <h3 className="font-display text-xl md:text-2xl">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75 md:text-[15px]">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
