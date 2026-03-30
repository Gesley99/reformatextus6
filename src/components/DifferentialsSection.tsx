import { Users, Zap, Lock, Shield } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const DIFFS = [
  { icon: Users, title: "Personalizado", desc: "Cada aluno tem necessidades únicas. Orientação totalmente customizada para sua realidade, tema, curso e objetivos." },
  { icon: Zap, title: "Rápido", desc: "Respondemos em no máximo 2 horas. Seus prazos são importantes e respeitamos seus cronogramas." },
  { icon: Lock, title: "Confidencial", desc: "Discrição total. Seus dados e conteúdos são tratados com sigilo profissional e máxima privacidade." },
  { icon: Shield, title: "Com Relatório", desc: "Verificação de plágio inclusa e análise de IA. Transparência total sobre a originalidade do seu trabalho." },
];

export default function DifferentialsSection() {
  const ref = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section className="bg-accent py-20 md:py-28 px-4 md:px-6" aria-labelledby="diff-title">
      <div className="container mx-auto max-w-6xl">
        <h2 id="diff-title" className="font-display text-2xl md:text-4xl text-accent-foreground text-center text-balance">
          Por Que Escolher a Textus Acadêmico
        </h2>
        <div ref={ref} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFS.map((d) => (
            <div
              key={d.title}
              className="scroll-reveal group bg-card rounded-xl p-6 shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:rotate-[360deg] transition-transform duration-700">
                <d.icon className="text-accent-foreground" size={24} />
              </div>
              <h3 className="font-display text-xl text-primary mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm font-body text-pretty">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
