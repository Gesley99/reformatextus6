import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ_ITEMS = [
  {
    q: "Como funciona a orientação acadêmica?",
    a: "Oferecemos orientação personalizada para que você consiga estruturar, organizar e aprimorar seus trabalhos acadêmicos. Fornecemos guias, feedbacks, sugestões de melhoria e direcionamento metodológico. A responsabilidade pelo desenvolvimento e entrega final do trabalho é inteiramente do aluno.",
  },
  {
    q: "Vocês fazem ou produzem trabalhos acadêmicos?",
    a: "Não. Não elaboramos, redigimos ou produzimos trabalhos acadêmicos completos. Nosso papel é exclusivamente de orientação educacional: fornecemos material de apoio, revisão técnica e suporte metodológico. Você é quem desenvolve e entrega o seu trabalho. Isso garante sua aprendizagem, autoria e integridade acadêmica.",
  },
  {
    q: "Qual o prazo para receber orientação?",
    a: "Respondemos em no máximo 2 horas úteis. Prazos curtos são negociáveis e dependem da complexidade da sua demanda de orientação.",
  },
  {
    q: "Como funcionam os relatórios de originalidade e IA?",
    a: "Após a revisão, geramos um relatório de verificação de originalidade (plágio) e análise de Inteligência Artificial sobre o conteúdo que você produziu. Oferecemos total transparência para que você tenha segurança na entrega.",
  },
  {
    q: "Quais normas vocês orientam?",
    a: "Orientamos principalmente conforme as normas da ABNT. Também direcionamos para APA, Harvard e Vancouver, conforme as exigências da sua instituição de ensino.",
  },
  {
    q: "Posso solicitar novos feedbacks após a revisão?",
    a: "Sim. Há possibilidade de ajustes e esclarecimentos adicionais sobre os feedbacks fornecidos durante a orientação acadêmica, para que você possa aprimorar ainda mais seu trabalho.",
  },
  {
    q: "Como funciona o processo de contratação?",
    a: "1) Entre em contato via WhatsApp ou formulário. 2) Analisamos suas necessidades de orientação. 3) Você aprova o plano de orientação. 4) Iniciamos com guias e direcionamento. 5) Você recebe feedbacks detalhados. 6) Você aplica os ajustes e entrega seu próprio trabalho.",
  },
  {
    q: "Vocês garantem aprovação no trabalho?",
    a: "Não. Não garantimos aprovação. A aprovação do trabalho acadêmico depende inteiramente de fatores que não controlamos: o conteúdo que você desenvolve, sua compreensão do tema, os critérios de avaliação do professor e sua participação ativa na construção do trabalho. Garantimos a qualidade da nossa orientação e suporte, não resultados acadêmicos.",
  },
  {
    q: "A comunicação é confidencial?",
    a: "100% confidencial. Mantemos sigilo profissional sobre todos os dados e conteúdos de nossos alunos. Nunca compartilhamos suas informações com terceiros.",
  },
  {
    q: "Como devo me preparar para a sessão de orientação?",
    a: "Tenha em mãos: tema do trabalho, tipo (TCC, artigo, projeto, etc.), nível acadêmico, normas exigidas, cronograma e qualquer material já iniciado. Quanto mais contexto nos fornecer, melhor poderemos direcionar sua orientação acadêmica.",
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
