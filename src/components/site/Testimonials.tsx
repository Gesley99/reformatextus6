import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ITEMS = [
  { name: "Maria Silva", role: "Graduação em Engenharia", text: "A orientação me ajudou a entender como organizar meu TCC de forma clara. Aprendi muito sobre estruturação e normas ABNT, e isso fez toda a diferença." },
  { name: "Carlos Ferreira", role: "Mestrado em Administração", text: "O feedback detalhado melhorou a coerência e a metodologia do meu artigo. Me senti muito mais seguro para defender meu trabalho." },
  { name: "Ana Costa", role: "Graduação em Direito", text: "Atendimento discreto e muito profissional. Ganhei confiança e clareza para finalizar meu relatório com uma estrutura bem organizada." },
  { name: "Pedro Oliveira", role: "Especialização em Educação", text: "Os materiais e comentários me fizeram entender meu tema mais a fundo. O melhor investimento em orientação que já fiz." },
];

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 16), behavior: "smooth" });
  };

  return (
    <section className="bg-secondary py-20 md:py-28" aria-labelledby="dep-title">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-6 px-5 md:px-8">
        <div>
          <p className="eyebrow text-primary">Depoimentos</p>
          <h2 id="dep-title" className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl text-balance">
            Quem já passou por aqui
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button onClick={() => move(-1)} aria-label="Anterior" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:bg-ink hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <button onClick={() => move(1)} aria-label="Próximo" className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:bg-ink hover:text-white">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:scroll-px-8 md:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      >
        {ITEMS.map((t) => (
          <figure
            key={t.name}
            className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border sm:w-[420px] md:p-9"
          >
            <span className="font-display text-7xl leading-[0.6] text-accent" aria-hidden="true">“</span>
            <blockquote className="mt-4 font-display text-xl leading-snug text-ink md:text-[1.4rem] text-pretty">
              {t.text}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {t.name.split(" ").map((p) => p[0]).join("")}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
