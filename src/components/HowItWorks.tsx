import { MessageSquare, FileText, Lightbulb, CheckCircle, Smile } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STEPS = [
  { icon: MessageSquare, title: "Você Entra em Contato", desc: "Envie sua demanda via WhatsApp ou formulário. Conte-nos sobre seu tema, curso e prazo." },
  { icon: FileText, title: "Análise das Necessidades", desc: "Nossa equipe avalia suas necessidades, identifica dificuldades e traça um plano de orientação personalizado." },
  { icon: Lightbulb, title: "Orientação e Direcionamento", desc: "Você recebe guias, feedbacks e sugestões de melhoria para desenvolver seu trabalho de forma autônoma." },
  { icon: CheckCircle, title: "Revisão Técnica e Feedback", desc: "Revisamos seu trabalho com sugestões detalhadas de melhoria para que você faça os ajustes necessários." },
  { icon: Smile, title: "Você Finaliza com Confiança", desc: "Com a orientação recebida, você aprimora e entrega seu próprio trabalho com mais segurança e qualidade." },
];

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="como-funciona" className="bg-section-alt py-20 md:py-28 px-4 md:px-6" aria-labelledby="how-title" ref={ref}>
      <div className="container mx-auto max-w-5xl scroll-reveal">
        <h2 id="how-title" className="font-display text-2xl md:text-4xl text-primary text-center text-balance">
          Como Funciona Nossa Orientação Acadêmica
        </h2>
        <p className="mt-3 text-center text-muted-foreground font-body text-sm max-w-2xl mx-auto">
          Nosso processo é focado em orientar e capacitar você a desenvolver seu próprio trabalho acadêmico.
        </p>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:flex items-start justify-between mt-16 relative">
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center max-w-[180px] relative z-10">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold font-body shadow-md mb-4">
                {i + 1}
              </div>
              <step.icon className="text-primary mb-2" size={24} />
              <h3 className="font-display text-lg text-primary mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-xs font-body text-pretty">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden mt-10 space-y-0 relative">
          <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-border" />
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-4 items-start relative pl-2 py-4">
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold font-body shrink-0 z-10 shadow-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display text-lg text-primary">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body text-pretty mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
