import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, MessageCircle, Clock } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const TRUST_ITEMS = [
  { icon: Shield, label: "Suporte 100% Confidencial" },
  { icon: FileCheck, label: "Relatório de Plágio Incluso" },
  { icon: MessageCircle, label: "Atendimento via WhatsApp" },
  { icon: Clock, label: "Resposta em até 2 horas" },
];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const trustRef = useStaggerReveal<HTMLDivElement>(100);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Video background - desktop only */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
          preload="metadata"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      {/* Mobile gradient background */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-primary via-primary to-background" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16">
        <div className="max-w-4xl">
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-primary-foreground leading-[0.95] text-balance ${
              loaded ? "animate-fade-rise" : "opacity-0"
            }`}
            style={{ lineHeight: 1 }}
          >
            Apoio Acadêmico de Qualidade{" "}
            <span className="text-accent">Para Sua Jornada</span>{" "}
            Universitária
          </h1>

          <p
            className={`mt-6 md:mt-8 text-primary-foreground/85 text-base md:text-lg max-w-xl font-body text-pretty ${
              loaded ? "animate-fade-rise" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Oferecemos suporte completo para sua trajetória acadêmica. Apoio personalizado para universitários com orientação especializada em TCC, artigos e projetos.
          </p>

          <div
            className={`mt-8 md:mt-10 ${loaded ? "animate-fade-rise" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" onClick={scrollToContact} aria-label="Começar orientação acadêmica">
              Solicitar Apoio Acadêmico
            </Button>
          </div>
        </div>

        {/* Trust badges */}
        <div ref={trustRef} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="scroll-reveal flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-primary-foreground/10"
            >
              <item.icon className="text-accent shrink-0" size={20} />
              <span className="text-primary-foreground text-xs md:text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
