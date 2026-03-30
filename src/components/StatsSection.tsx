import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Estudantes Atendidos" },
  { value: 98, suffix: "%", label: "Taxa de Satisfação" },
  { value: 5, suffix: "+", label: "Anos de Experiência" },
  { value: 100, suffix: "%", label: "Atendimento Confidencial" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number font-display text-4xl md:text-5xl text-primary tabular-nums cursor-default">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-6" aria-label="Estatísticas">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="mt-2 text-muted-foreground text-sm font-body">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
