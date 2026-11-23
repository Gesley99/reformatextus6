import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-textus.png";
import { scrollToId, waLink } from "@/lib/contact";

const LINKS = [
  { label: "Serviços", id: "servicos" },
  { label: "Processo", id: "processo" },
  { label: "Sobre", id: "sobre" },
  { label: "Dúvidas", id: "faq" },
  { label: "Contato", id: "contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Navegação principal">
        <button onClick={() => go("topo")} className="flex items-center" aria-label="Textus Acadêmico — início">
          <img src={logo} alt="Textus Acadêmico" className="h-9 w-auto md:h-10" />
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </button>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary"
          >
            Falar agora <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="-mr-2 p-2 text-foreground md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Menu size={26} />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink text-white md:hidden" role="dialog" aria-modal="true">
          <div className="flex h-[72px] items-center justify-between px-5">
            <span className="eyebrow text-accent">Menu</span>
            <button onClick={() => setOpen(false)} className="-mr-2 p-2" aria-label="Fechar menu">
              <X size={26} />
            </button>
          </div>
          <ol className="mt-4 flex-1 px-5">
            {LINKS.map((l, i) => (
              <li key={l.id} className="border-b border-white/10">
                <button onClick={() => go(l.id)} className="flex w-full items-baseline gap-4 py-5 text-left">
                  <span className="text-xs font-semibold text-accent tabular-nums">0{i + 1}</span>
                  <span className="font-display text-3xl">{l.label}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="p-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 font-semibold text-ink"
            >
              Conversar no WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
