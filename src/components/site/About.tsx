import { useEffect, useRef, useState } from "react";
import { Lock, Zap, UserRound, ShieldCheck } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { value: 500, suffix: "+", label: "alunos orientados" },
  { value: 98, suffix: "%", label: "de satisfação" },
  { value: 5, suffix: "+", label: "anos de experiência" },
];

const PILLARS = [
  { icon: UserRound, title: "Personalizado", desc: "Orientação ajustada ao seu tema, curso e objetivo." },
  { icon: Zap, title: "Rápido", desc: "Resposta em até 2 horas úteis. Seu prazo importa." },
  { icon: Lock, title: "Confidencial", desc: "Sigilo profissional sobre seus dados e conteúdos." },
  { icon: ShieldCheck, title: "Transparente", desc: "Relatório de originalidade e análise de IA inclusos." },
];

function Count({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (reduce) return setN(to);
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1400, 1);
        setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref} className="tabular-nums">{n}{suffix}</span>;
}

export default function About() {
  const ref = useStaggerReveal<HTMLDivElement>(80);

  return (
    <section id="sobre" className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="sobre-title">
      <div ref={ref} className="mx-auto grid max-w-6xl gap-4 md:grid-cols-6 lg:grid-cols-12">
        {/* Manifesto */}
        <div className="scroll-reveal rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border md:col-span-4 lg:col-span-8 md:p-10">
          <p className="eyebrow text-primary">Sobre a Textus</p>
          <h2 id="sobre-title" className="mt-3 font-display text-3xl font-medium leading-tight text-ink md:text-[2.6rem] text-balance">
            Acreditamos que todo aluno é capaz de escrever o próprio trabalho.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            Há mais de 5 anos oferecemos orientação acadêmica e suporte metodológico a universitários. Nosso papel é
            facilitar o caminho com orientação estruturada, revisão e método — sempre respeitando a autoria e a
            integridade acadêmica de quem estuda.
          </p>
        </div>

        {/* Stat stack */}
        <div className="scroll-reveal flex flex-col justify-between rounded-3xl bg-ink p-7 text-white md:col-span-2 lg:col-span-4 md:p-8">
          {STATS.map((s, i) => (
            <div key={s.label} className={i > 0 ? "mt-5 border-t border-white/10 pt-5" : ""}>
              <p className="font-display text-5xl font-medium leading-none text-accent">
                <Count to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="scroll-reveal group rounded-3xl bg-secondary p-6 transition hover:bg-accent/30 md:col-span-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
              <p.icon size={20} />
            </span>
            <h3 className="mt-5 font-display text-xl text-ink">{p.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
