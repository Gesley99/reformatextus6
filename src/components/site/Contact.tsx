import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PENDING_WA_KEY } from "@/pages/Obrigado";
import { Mail, Phone, Instagram, Clock } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";
import WhatsAppIcon from "./WhatsAppIcon";

const WORK_TYPES = ["TCC", "Artigo científico", "Projeto acadêmico", "Relatório", "Revisão e normalização", "Outro"];
const LEVELS = ["Graduação", "Especialização", "Mestrado", "Doutorado", "Outro"];

type Form = { name: string; email: string; phone: string; workType: string; level: string; description: string };
const empty: Form = { name: "", email: "", phone: "", workType: "", level: "", description: "" };

const isEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const isPhone = (p: string) => p.replace(/\D/g, "").length >= 10;

function check(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (!f.name.trim()) e.name = "Informe seu nome.";
  if (!isEmail(f.email)) e.email = "Informe um e-mail válido.";
  if (!isPhone(f.phone)) e.phone = "Informe um telefone com DDD.";
  if (!f.workType) e.workType = "Selecione o tipo de trabalho.";
  if (f.description.trim().length < 20) e.description = "Descreva em pelo menos 20 caracteres.";
  return e;
}

export default function Contact() {
  const navigate = useNavigate();
  const [f, setF] = useState<Form>(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof Form, boolean>>>({});
  const errors = check(f);
  const show = (k: keyof Form) => touched[k] && errors[k];

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));
  const blur = (k: keyof Form) => () => setTouched((p) => ({ ...p, [k]: true }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, workType: true, description: true });
    if (Object.keys(errors).length) return;
    const msg =
      `Olá! Meu nome é ${f.name}.\n` +
      `Preciso de orientação em: ${f.workType}\n` +
      `Nível: ${f.level || "Não informado"}\n` +
      `Detalhes: ${f.description}\n` +
      `E-mail: ${f.email} · Telefone: ${f.phone}`;
    try {
      sessionStorage.setItem(PENDING_WA_KEY, waLink(msg));
    } catch {
      window.location.href = waLink(msg);
      return;
    }
    navigate("/obrigado");
    window.scrollTo(0, 0);
  };

  const field = (k: keyof Form) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 transition focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary ${
      show(k) ? "border-destructive" : "border-input"
    }`;
  const label = "mb-1.5 block text-sm font-semibold text-ink";
  const err = (k: keyof Form) =>
    show(k) ? <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <section id="contato" className="px-3 pb-3 md:px-5 md:pb-5" aria-labelledby="contato-title">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-ink lg:grid-cols-[0.9fr_1.1fr]">
        {/* Info */}
        <div className="relative p-8 text-white md:p-14">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/50 blur-3xl" />
          <div className="relative">
            <p className="eyebrow text-accent">Contato</p>
            <h2 id="contato-title" className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl text-balance">
              Vamos destravar seu trabalho?
            </h2>
            <p className="mt-5 max-w-md text-white/70 text-pretty">
              Conte o que você precisa. Respondemos em até 2 horas úteis com um plano de orientação.
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white transition hover:bg-whatsapp-hover"
            >
              <WhatsAppIcon className="h-5 w-5" /> Chamar no WhatsApp
            </a>

            <ul className="mt-10 space-y-4 text-[15px]">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/85 hover:text-accent">
                  <Mail size={18} className="text-accent" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-white/85 hover:text-accent">
                  <Phone size={18} className="text-accent" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/85 hover:text-accent">
                  <Instagram size={18} className="text-accent" /> @textusacademico
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Clock size={18} className="text-accent" /> Resposta em até 2 horas úteis
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} noValidate className="m-2 grid gap-4 rounded-[1.6rem] bg-background p-6 sm:grid-cols-2 md:p-10">
          <p className="sm:col-span-2 font-display text-2xl text-ink">Solicite sua orientação</p>

          <div className="sm:col-span-2">
            <label htmlFor="name" className={label}>Nome completo *</label>
            <input id="name" autoComplete="name" className={field("name")} value={f.name} onChange={set("name")} onBlur={blur("name")} maxLength={100} aria-invalid={!!show("name")} aria-describedby={show("name") ? "name-err" : undefined} />
            {err("name")}
          </div>
          <div>
            <label htmlFor="email" className={label}>E-mail *</label>
            <input id="email" type="email" autoComplete="email" className={field("email")} value={f.email} onChange={set("email")} onBlur={blur("email")} maxLength={255} aria-invalid={!!show("email")} aria-describedby={show("email") ? "email-err" : undefined} />
            {err("email")}
          </div>
          <div>
            <label htmlFor="phone" className={label}>WhatsApp *</label>
            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(61) 99999-9999" className={field("phone")} value={f.phone} onChange={set("phone")} onBlur={blur("phone")} aria-invalid={!!show("phone")} aria-describedby={show("phone") ? "phone-err" : undefined} />
            {err("phone")}
          </div>
          <div>
            <label htmlFor="workType" className={label}>Tipo de trabalho *</label>
            <select id="workType" className={field("workType")} value={f.workType} onChange={set("workType")} onBlur={blur("workType")} aria-invalid={!!show("workType")}>
              <option value="">Selecione…</option>
              {WORK_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
            {err("workType")}
          </div>
          <div>
            <label htmlFor="level" className={label}>Nível acadêmico</label>
            <select id="level" className={field("level")} value={f.level} onChange={set("level")}>
              <option value="">Selecione…</option>
              {LEVELS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className={label}>Conte sobre sua demanda *</label>
            <textarea id="description" rows={4} className={field("description")} value={f.description} onChange={set("description")} onBlur={blur("description")} maxLength={1000} placeholder="Tema, curso, prazo e onde você está travado" aria-invalid={!!show("description")} aria-describedby={show("description") ? "description-err" : undefined} />
            {err("description")}
          </div>

          <div className="sm:col-span-2">
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-white transition hover:bg-ink">
              <WhatsAppIcon className="h-5 w-5" /> Enviar pelo WhatsApp
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
              Ao enviar, você concorda que nosso serviço é de orientação educacional. A autoria e a responsabilidade
              pelo trabalho são do aluno.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
