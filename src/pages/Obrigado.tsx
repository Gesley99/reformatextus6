import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Clock, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-textus.png";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { CONTACT, waLink } from "@/lib/contact";

export const PENDING_WA_KEY = "textus:pending-wa";

const NEXT = [
  "Você envia sua mensagem pelo WhatsApp.",
  "Analisamos tema, curso e prazo.",
  "Você recebe um plano de orientação em até 2 horas úteis.",
];

export default function Obrigado() {
  const [target, setTarget] = useState<string>(waLink());
  const [fromForm, setFromForm] = useState(false);
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    document.title = "Obrigado! — Textus Acadêmico";
    let pending: string | null = null;
    try {
      pending = sessionStorage.getItem(PENDING_WA_KEY);
      sessionStorage.removeItem(PENDING_WA_KEY);
    } catch {
      /* storage indisponível */
    }
    if (pending) {
      setTarget(pending);
      setFromForm(true);
    }
  }, []);

  // Redireciona automaticamente para o WhatsApp quando veio do formulário
  useEffect(() => {
    if (!fromForm) return;
    if (seconds <= 0) {
      window.location.href = target;
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [fromForm, seconds, target]);

  return (
    <div className="flex min-h-screen flex-col paper-grain">
      <header className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Textus Acadêmico — início">
          <img src={logo} alt="Textus Acadêmico" className="h-9 w-auto md:h-10" />
        </Link>
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary">
          <ArrowLeft size={16} /> Voltar ao site
        </Link>
      </header>

      <main className="flex flex-1 items-center px-5 py-10 md:px-8">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="animate-fade-rise">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_30px_-10px_hsl(224_94%_37%/0.6)]">
              <Check size={28} strokeWidth={3} />
            </span>
            <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.05] text-ink text-balance md:text-6xl">
              Obrigado! Sua solicitação foi <span className="highlight italic">recebida</span>.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              {fromForm
                ? "Estamos abrindo o WhatsApp com sua mensagem pronta. É só tocar em enviar para falar com nossa equipe."
                : "Nossa equipe vai responder pelo WhatsApp em até 2 horas úteis. Se preferir, chame a gente agora."}
            </p>

            <a
              href={target}
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 font-semibold text-white shadow-[0_12px_30px_-8px_rgba(22,140,70,0.6)] transition hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {fromForm ? "Enviar mensagem no WhatsApp" : "Falar no WhatsApp"}
            </a>
            {fromForm && seconds > 0 && (
              <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
                Redirecionando em {seconds}s…
              </p>
            )}
          </div>

          <div className="rounded-3xl bg-ink p-7 text-white md:p-9">
            <p className="eyebrow text-accent">Próximos passos</p>
            <ol className="mt-5 space-y-5">
              {NEXT.map((n, i) => (
                <li key={n} className="flex gap-4">
                  <span className="font-display text-3xl leading-none text-accent">{i + 1}</span>
                  <span className="pt-1 text-white/85">{n}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
              <li className="flex items-center gap-3 text-white/80"><Clock size={16} className="text-accent" /> Resposta em até 2 horas úteis</li>
              <li><a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/80 hover:text-accent"><Mail size={16} className="text-accent" /> {CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="flex items-center gap-3 text-white/80 hover:text-accent"><Phone size={16} className="text-accent" /> {CONTACT.phoneDisplay}</a></li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="px-5 pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Textus Acadêmico · Orientação educacional. Não elaboramos trabalhos acadêmicos completos.
      </footer>
    </div>
  );
}
