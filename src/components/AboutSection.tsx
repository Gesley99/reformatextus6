import { CheckCircle, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoTextus from "@/assets/logo-textus.png";

const BULLETS = [
  { icon: CheckCircle, text: "Atendimento 100% personalizado" },
  { icon: Zap, text: "Foco em ABNT e originalidade" },
  { icon: Lock, text: "Comunicação clara, discreta e acessível" },
];

export default function AboutSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="sobre" className="bg-background py-20 md:py-28 px-4 md:px-6" aria-labelledby="about-title" ref={ref}>
      <div className="container mx-auto max-w-6xl scroll-reveal">
        <h2 id="about-title" className="font-display text-2xl md:text-4xl text-primary text-center text-balance mb-12 md:mb-16 font-bold">
          Sobre a Textus Acadêmico
        </h2>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-float shadow-2xl p-8">
              <img src={logoTextus} alt="Logo Textus Acadêmico" className="w-full h-auto object-contain drop-shadow-lg" />
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl md:text-2xl text-primary mb-4 font-bold">
              Apoio Acadêmico de Qualidade para Sua Jornada
            </h3>
            <p className="text-muted-foreground font-body text-pretty leading-relaxed">
              Somos uma empresa especializada em apoio acadêmico e orientação para estudantes universitários, com mais de 5 anos de experiência ajudando centenas de alunos.
              Nosso compromisso é oferecer aconselhamento acadêmico com clareza, profissionalismo e respeito aos seus prazos, sempre guiando você no
              desenvolvimento do seu próprio trabalho acadêmico.
            </p>
            <ul className="mt-6 space-y-3">
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-center gap-3 text-foreground font-body text-sm">
                  <b.icon className="text-accent shrink-0" size={20} />
                  {b.text}
                </li>
              ))}
            </ul>
            <Button
              variant="gold"
              size="xl"
              className="mt-8"
              onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conversar com Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
