import { ArrowUpRight } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { waLink } from "@/lib/contact";

const SERVICES = [
  { title: "Orientação para TCC", desc: "Estruturação, organização e metodologia do seu trabalho de conclusão de curso. Você desenvolve, nós orientamos.", tag: "Mais procurado" },
  { title: "Suporte metodológico para artigos", desc: "Metodologia científica, coerência textual e adequação às normas para o seu artigo acadêmico." },
  { title: "Acompanhamento de projetos", desc: "Orientação personalizada para projetos universitários de diversas áreas do conhecimento." },
  { title: "Revisão de trabalhos acadêmicos", desc: "Revisão técnica e feedback detalhado para você aprimorar o texto que escreveu." },
  { title: "Formatação ABNT, APA e Vancouver", desc: "Adequação completa às normas exigidas pela sua instituição: capa, citações, referências e sumário." },
  { title: "Verificação de originalidade e IA", desc: "Relatório de originalidade e análise de IA para dar transparência sobre o conteúdo que você produziu." },
];

const TICKER = ["TCC", "Monografia", "Artigo científico", "Projeto de pesquisa", "Relatório", "ABNT", "APA", "Vancouver", "Pré-projeto", "Revisão técnica"];

export default function Services() {
  const ref = useStaggerReveal<HTMLOListElement>(70);

  return (
    <>
      {/* Ticker */}
      <div className="overflow-hidden border-y border-ink/10 bg-ink py-4 text-white" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-xl italic text-white/90">
              {t} <span className="text-accent not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="servicos" className="px-5 py-20 md:px-8 md:py-28" aria-labelledby="servicos-title">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow text-primary">Serviços</p>
              <h2 id="servicos-title" className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl text-balance">
                O que fazemos por você
              </h2>
            </div>
            <p className="text-muted-foreground md:pb-2 text-pretty">
              Orientação educacional, revisão técnica e suporte metodológico. O desenvolvimento e a autoria do
              trabalho são sempre do aluno.
            </p>
          </div>

          <ol ref={ref} className="mt-12 border-t border-ink/15">
            {SERVICES.map((s, i) => (
              <li key={s.title} className="scroll-reveal border-b border-ink/15">
                <a
                  href={waLink(`Olá! Tenho interesse em: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 py-7 transition-colors md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center md:gap-8 md:py-8"
                >
                  <span className="font-display text-lg text-primary tabular-nums md:text-2xl">0{i + 1}</span>
                  <h3 className="font-display text-2xl leading-snug text-ink transition-colors group-hover:text-primary md:text-[1.75rem]">
                    {s.title}
                    {s.tag && (
                      <span className="ml-3 inline-block translate-y-[-3px] rounded-full bg-accent px-2.5 py-0.5 align-middle font-body text-[11px] font-bold uppercase tracking-wide text-ink">
                        {s.tag}
                      </span>
                    )}
                  </h3>
                  <span className="row-span-2 flex h-11 w-11 items-center justify-center self-center rounded-full border border-ink/15 text-ink transition-all group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:order-last md:row-span-1">
                    <ArrowUpRight size={20} />
                  </span>
                  <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3 md:row-start-1 md:text-[15px] text-pretty">
                    {s.desc}
                  </p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
