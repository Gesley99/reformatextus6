import { ArrowRight, Check, MessageSquareText } from "lucide-react";
import { scrollToId, waLink } from "@/lib/contact";
import WhatsAppIcon from "./WhatsAppIcon";

const OUTLINE = [
  { n: "1", t: "Introdução", ok: true },
  { n: "2", t: "Referencial teórico", ok: true },
  { n: "3", t: "Metodologia", ok: false, note: "Detalhar o tipo de pesquisa e a amostra" },
  { n: "4", t: "Resultados e discussão", ok: false },
  { n: "5", t: "Considerações finais", ok: false },
];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden paper-grain pt-[72px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div className="animate-fade-rise">
          <p className="eyebrow inline-flex items-center gap-2 text-primary">
            <span className="h-px w-8 bg-primary" /> Orientação acadêmica para universitários
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.04] text-ink text-balance sm:text-6xl lg:text-[4.4rem]">
            Seu TCC com <span className="highlight italic">direção</span>, do sumário à defesa.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            Orientação metodológica, revisão técnica e normas ABNT para universitários que querem
            estruturar e finalizar o próprio trabalho com segurança.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_hsl(224_94%_37%/0.6)] transition hover:bg-ink"
            >
              <WhatsAppIcon className="h-5 w-5" /> Quero orientação
            </a>
            <button
              onClick={() => scrollToId("servicos")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-7 py-4 font-semibold text-ink transition hover:border-ink/40"
            >
              Ver serviços <ArrowRight size={18} />
            </button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/75">
            {["Resposta em até 2h", "100% confidencial", "Relatório de originalidade"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-primary" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Document mock */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative rotate-[1.5deg] rounded-[6px] border border-border bg-white p-6 shadow-[0_30px_60px_-25px_rgba(10,20,60,0.35)] md:p-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="eyebrow text-muted-foreground">Sumário</span>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">ABNT NBR 14724</span>
            </div>

            <ol className="ruled mt-4 space-y-0">
              {OUTLINE.map((o) => (
                <li key={o.n} className="relative">
                  <div className="flex h-[52px] items-center gap-3 text-[15px]">
                    <span className="w-5 font-display text-primary">{o.n}</span>
                    <span className={o.ok ? "text-ink" : "text-ink/55"}>{o.t}</span>
                    <span className="flex-1 border-b border-dotted border-ink/20" />
                    {o.ok ? (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                        <Check size={14} strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="h-6 w-6 rounded-full border-2 border-dashed border-ink/20" />
                    )}
                  </div>
                  {o.note && (
                    <div className="-mt-1 mb-2 ml-8 flex items-start gap-2 rounded-lg border border-accent/60 bg-accent/15 px-3 py-2 text-[12.5px] leading-snug text-ink">
                      <MessageSquareText size={14} className="mt-0.5 shrink-0 text-ink/70" />
                      <span>
                        <strong className="font-semibold">Comentário:</strong> {o.note}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-5">
              <div className="flex justify-between text-xs font-semibold text-muted-foreground">
                <span>Progresso do trabalho</span>
                <span className="text-primary">40%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-14 left-4 hidden -rotate-3 rounded-2xl bg-ink px-5 py-4 text-white shadow-xl sm:block">
            <p className="font-display text-3xl leading-none">500+</p>
            <p className="mt-1 text-xs text-white/70">alunos orientados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
