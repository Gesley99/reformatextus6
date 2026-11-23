import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-textus.png";
import { CONTACT, scrollToId } from "@/lib/contact";
import WhatsAppIcon from "./WhatsAppIcon";

const LINKS = [
  { label: "Serviços", id: "servicos" },
  { label: "Processo", id: "processo" },
  { label: "Sobre", id: "sobre" },
  { label: "Dúvidas", id: "faq" },
  { label: "Contato", id: "contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 pb-28 pt-14 md:px-8 md:pb-14" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Textus Acadêmico" className="h-12 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Orientação educacional e suporte metodológico para universitários.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: CONTACT.instagram, label: "Instagram", icon: <Instagram size={18} /> },
                { href: CONTACT.facebook, label: "Facebook", icon: <Facebook size={18} /> },
                { href: `https://wa.me/${CONTACT.waNumber}`, label: "WhatsApp", icon: <WhatsAppIcon className="h-[18px] w-[18px]" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-primary hover:bg-primary hover:text-white">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Rodapé">
            <p className="eyebrow text-muted-foreground">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollToId(l.id)} className="text-sm text-ink hover:text-primary">{l.label}</button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-muted-foreground">Contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href={`mailto:${CONTACT.email}`} className="text-ink hover:text-primary break-all">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="text-ink hover:text-primary">{CONTACT.phoneDisplay}</a></li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-ink">Aviso educacional:</strong> oferecemos orientação educacional, revisão técnica e
          suporte metodológico. Não elaboramos trabalhos acadêmicos completos. A responsabilidade pelo desenvolvimento e
          pela entrega do trabalho é do aluno. Não garantimos aprovação em avaliações acadêmicas.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} Textus Acadêmico. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/politica-de-privacidade" className="hover:text-primary">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-primary">Termos de Uso</Link>
            <button onClick={() => scrollToId("aviso-legal")} className="hover:text-primary">Aviso Legal</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
