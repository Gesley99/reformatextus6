import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

<<<<<<< HEAD
const WA_LINK = "https://wa.me/556196212692?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20orienta%C3%A7%C3%A3o%20acad%C3%AAmica.";
=======
const WA_LINK = "https://wa.me/556196212692?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20apoio%20acad%C3%AAmico.";
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad

export default function SecondaryCTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="bg-primary py-20 md:py-28 px-4 md:px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl text-center scroll-reveal">
        <h2 className="font-display text-2xl md:text-4xl text-primary-foreground text-balance">
<<<<<<< HEAD
          Precisa de Orientação Para Seu Trabalho Acadêmico?
        </h2>
        <p className="mt-4 text-primary-foreground/80 font-body text-pretty max-w-xl mx-auto">
          Te ajudamos a estruturar e finalizar seu trabalho com mais segurança e qualidade. Converse com nosso time de orientadores e descubra como podemos direcionar seus estudos.
=======
          Precisa de Apoio Acadêmico?
        </h2>
        <p className="mt-4 text-primary-foreground/80 font-body text-pretty max-w-xl mx-auto">
          Apoio e orientação especializada para a sua vida acadêmica. Converse com nosso time e descubra como podemos ajudar.
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="whatsappCta" size="xl" asChild>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">Conversar no WhatsApp</a>
          </Button>
          <Button
            variant="goldCta"
            size="xl"
            onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
          >
            Preencher Formulário
          </Button>
        </div>
<<<<<<< HEAD
        <p className="mt-4 text-primary-foreground/50 text-xs font-body">
          Oferecemos orientação educacional, revisão técnica e suporte metodológico. Não elaboramos trabalhos acadêmicos completos.
        </p>
=======
>>>>>>> 046218b01546855bc85d478cbc589878f54830ad
      </div>
    </section>
  );
}
