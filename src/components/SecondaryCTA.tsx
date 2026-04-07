import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WA_LINK = "https://wa.me/556196212692?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20apoio%20acad%C3%AAmico.";

export default function SecondaryCTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="bg-primary py-20 md:py-28 px-4 md:px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl text-center scroll-reveal">
        <h2 className="font-display text-2xl md:text-4xl text-primary-foreground text-balance">
          Precisa de Apoio Acadêmico?
        </h2>
        <p className="mt-4 text-primary-foreground/80 font-body text-pretty max-w-xl mx-auto">
          Apoio e orientação especializada para a sua vida acadêmica. Converse com nosso time e descubra como podemos ajudar.
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
      </div>
    </section>
  );
}
