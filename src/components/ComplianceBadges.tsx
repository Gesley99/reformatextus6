import { Check, AlertCircle, User, BookOpen, Lightbulb } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const BADGES = [
  { icon: Check, label: "Normas ABNT" },
  { icon: AlertCircle, label: "Sem Garantia de Aprovação", critical: true },
  { icon: User, label: "Responsabilidade do Aluno", critical: true },
  { icon: BookOpen, label: "Apoio Acadêmico Completo" },
  { icon: Lightbulb, label: "Aconselhamento Acadêmico" },
];

export default function ComplianceBadges() {
  const ref = useStaggerReveal<HTMLDivElement>(60);

  return (
    <section className="bg-background py-12 md:py-16 px-4 md:px-6" aria-label="Selos de conformidade">
      <div ref={ref} className="container mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-3">
        {BADGES.map((b) => (
          <div
            key={b.label}
            className={`scroll-reveal flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-xs font-medium font-body hover:scale-110 hover:shadow-[0_0_12px_hsl(var(--accent)/0.4)] transition-all duration-200 ${b.critical ? "ring-2 ring-accent" : ""
              }`}
          >
            <b.icon size={14} />
            {b.label}
          </div>
        ))}
      </div>
    </section>
  );
}
