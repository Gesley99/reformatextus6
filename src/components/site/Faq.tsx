import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { waLink } from "@/lib/contact";

const FAQ = [
  { q: "Como funciona a orientação acadêmica?", a: "Oferecemos orientação personalizada para você estruturar, organizar e aprimorar seus trabalhos acadêmicos: guias, feedbacks, sugestões de melhoria e direcionamento metodológico. A responsabilidade pelo desenvolvimento e pela entrega final é do aluno." },
  { q: "Vocês fazem ou produzem trabalhos acadêmicos?", a: "Não. Não elaboramos, redigimos ou produzimos trabalhos acadêmicos completos. Nosso papel é exclusivamente de orientação educacional: material de apoio, revisão técnica e suporte metodológico. Você desenvolve e entrega o seu trabalho, o que garante sua aprendizagem, autoria e integridade acadêmica." },
  { q: "Qual o prazo para receber orientação?", a: "Respondemos em até 2 horas úteis. Prazos curtos são negociáveis e dependem da complexidade da demanda." },
  { q: "Como funcionam os relatórios de originalidade e IA?", a: "Após a revisão, geramos um relatório de verificação de originalidade (plágio) e uma análise de Inteligência Artificial sobre o conteúdo que você produziu, para que você tenha segurança na entrega." },
  { q: "Quais normas vocês orientam?", a: "Principalmente ABNT. Também orientamos em APA, Harvard e Vancouver, conforme as exigências da sua instituição." },
  { q: "Posso pedir novos feedbacks após a revisão?", a: "Sim. Você pode solicitar ajustes e esclarecimentos adicionais sobre os feedbacks fornecidos durante a orientação." },
  { q: "Como funciona a contratação?", a: "Você entra em contato pelo WhatsApp ou formulário, analisamos sua necessidade e enviamos um plano de orientação. Com sua aprovação, começamos com guias e direcionamento, seguidos de feedbacks detalhados. Você aplica os ajustes e entrega o próprio trabalho." },
  { q: "Vocês garantem aprovação?", a: "Não. A aprovação depende de fatores que não controlamos: o conteúdo que você desenvolve, sua compreensão do tema, os critérios do professor e sua participação ativa. Garantimos a qualidade da nossa orientação, não resultados acadêmicos." },
  { q: "A comunicação é confidencial?", a: "Sim, 100%. Mantemos sigilo profissional sobre todos os dados e conteúdos dos alunos e nunca compartilhamos suas informações com terceiros." },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border px-5 py-20 md:px-8 md:py-28" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-primary">Dúvidas frequentes</p>
          <h2 id="faq-title" className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl text-balance">
            Perguntas que todo mundo faz
          </h2>
          <p className="mt-5 text-muted-foreground">
            Não encontrou a sua?{" "}
            <a href={waLink("Olá! Tenho uma dúvida sobre a orientação acadêmica.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">
              Pergunte no WhatsApp
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="border-t border-ink/15">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="border-b border-ink/15">
              <AccordionTrigger className="gap-4 py-6 text-left font-display text-lg font-normal text-ink hover:no-underline hover:text-primary md:text-xl [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-8 text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
