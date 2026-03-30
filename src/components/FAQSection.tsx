import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ_ITEMS = [
  {
    q: "Como funciona o apoio acadêmico?",
    a: "Oferecemos orientação personalizada em estruturação, organização, normalização e revisão de trabalhos acadêmicos. Você recebe guias, feedbacks e sugestões de melhoria. A responsabilidade pelo desenvolvimento final do trabalho é inteiramente sua.",
  },
  {
    q: "Vocês fazem os trabalhos?",
    a: "Não. Oferecemos orientação e material de apoio. Você é responsável pelo desenvolvimento e entrega final. Nossa função é guiar, organizar e revisar — não produzir trabalhos prontos. Isso garante sua aprendizagem e autoria.",
  },
  {
    q: "Qual o prazo para orientação?",
    a: "Respondemos em no máximo 2 horas úteis. Prazos curtos são negociáveis e dependem da complexidade da sua demanda.",
  },
  {
    q: "Como funcionam os relatórios de plágio e IA?",
    a: "Após a revisão, geramos um relatório de verificação de originalidade (plágio) e análise de IA. Oferecemos total transparência sobre o conteúdo.",
  },
  {
    q: "Quais normas vocês seguem?",
    a: "Trabalhamos principalmente com ABNT. Também adaptamos para APA, Harvard e Chicago, conforme as exigências da sua instituição.",
  },
  {
    q: "Posso solicitar alterações após a revisão?",
    a: "Sim. Há possibilidade de ajustes e esclarecimentos adicionais sobre os feedbacks fornecidos durante a orientação acadêmica.",
  },
  {
    q: "Como funciona o processo de contratação?",
    a: "1) Entre em contato via WhatsApp ou formulário. 2) Analisamos suas necessidades. 3) Você aprova. 4) Iniciamos a orientação acadêmica. 5) Receba feedbacks. 6) Você faz suas alterações e entrega.",
  },
  {
    q: "Vocês garantem aprovação?",
    a: "Não garantimos aprovação. Oferecemos apoio acadêmico de alta qualidade, mas a aprovação depende de diversos fatores: o conteúdo que você desenvolve, sua compreensão do tema, os critérios do professor e sua participação ativa. Garantimos a excelência da orientação, não resultados acadêmicos.",
  },
  {
    q: "A comunicação é confidencial?",
    a: "100% confidencial. Mantemos o máximo sigilo profissional. Nunca compartilhamos seus dados ou conteúdos com terceiros.",
  },
  {
    q: "Como devo me preparar para a orientação acadêmica?",
    a: "Tenha em mãos: tema do trabalho, tipo (TCC, artigo, projeto, etc.), nível acadêmico, normas exigidas, cronograma e qualquer material já iniciado. Quanto mais informações, melhor podemos oferecer apoio acadêmico.",
  },
];

export default function FAQSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="faq" className="bg-primary py-20 md:py-28 px-4 md:px-6" aria-labelledby="faq-title" ref={ref}>
      <div className="container mx-auto max-w-3xl scroll-reveal">
        <h2 id="faq-title" className="font-display text-2xl md:text-4xl text-primary-foreground text-center text-balance mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 text-left text-accent font-bold font-body text-sm hover:no-underline hover:text-accent/80 [&[data-state=open]>svg]:rotate-180">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-primary-foreground/80 text-sm font-body leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
