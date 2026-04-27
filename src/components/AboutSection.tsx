<<<<<<< HEAD
import { CheckCircle, Zap, Lock, GraduationCap, BookOpen } from "lucide-react";
=======
import { CheckCircle, Zap, Lock } from "lucide-react";
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoTextus from "@/assets/logo-textus.png";

const BULLETS = [
<<<<<<< HEAD
  { icon: CheckCircle, text: "Atendimento 100% personalizado e focado no aluno" },
  { icon: GraduationCap, text: "Foco em aprendizagem, clareza e organização" },
  { icon: BookOpen, text: "Orientação conforme ABNT com foco em originalidade" },
  { icon: Zap, text: "Resposta em até 2 horas para sua orientação" },
  { icon: Lock, text: "Comunicação discreta, profissional e acessível" },
=======
  { icon: CheckCircle, text: "Atendimento 100% personalizado" },
  { icon: Zap, text: "Foco em ABNT e originalidade" },
  { icon: Lock, text: "Comunicação clara, discreta e acessível" },
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
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
<<<<<<< HEAD
              Orientação Acadêmica Especializada Para Sua Jornada
            </h3>
            <p className="text-muted-foreground font-body text-pretty leading-relaxed">
              Somos uma empresa especializada em orientação acadêmica e suporte metodológico para estudantes universitários, com mais de 5 anos de experiência.
              Nosso compromisso é oferecer direcionamento educacional com clareza, profissionalismo e respeito aos seus prazos.
            </p>
            <p className="text-muted-foreground font-body text-pretty leading-relaxed mt-3">
              Acreditamos que cada aluno é capaz de desenvolver seu próprio trabalho. Nosso papel é facilitar esse processo com orientação estruturada, revisão de conteúdo e suporte metodológico — sempre respeitando a autoria e a integridade acadêmica do estudante.
            </p>

            {/* Educational benefits highlight */}
            <div className="mt-6 bg-accent/5 border border-accent/20 rounded-lg p-4">
              <p className="text-sm font-body text-primary font-semibold mb-2">✨ Benefícios Educacionais</p>
              <ul className="space-y-1 text-xs text-muted-foreground font-body">
                <li>• Maior clareza na organização do trabalho acadêmico</li>
                <li>• Aprendizado de metodologia científica e estruturação</li>
                <li>• Desenvolvimento de habilidades de escrita acadêmica</li>
                <li>• Autonomia para futuras produções acadêmicas</li>
              </ul>
            </div>

=======
              Apoio Acadêmico de Qualidade para Sua Jornada
            </h3>
            <p className="text-muted-foreground font-body text-pretty leading-relaxed">
              Somos uma empresa especializada em apoio acadêmico e orientação para estudantes universitários, com mais de 5 anos de experiência ajudando centenas de alunos.
              Nosso compromisso é oferecer aconselhamento acadêmico com clareza, profissionalismo e respeito aos seus prazos, sempre guiando você no
              desenvolvimento do seu próprio trabalho acadêmico.
            </p>
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
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
