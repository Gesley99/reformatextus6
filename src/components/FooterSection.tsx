import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/textusacademico" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580266383775&locale=pt_BR" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/556196212692" },
];

export default function FooterSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 px-4 md:px-6" role="contentinfo">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-bold">TEXTUS ACADÊMICO</p>
          <p className="text-sm text-primary-foreground/70 mt-1">Apoio Acadêmico e Orientação Especializada</p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-bold text-accent mb-3">Navegação</p>
          <ul className="space-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-primary-foreground/70 hover:text-accent hover:underline transition-colors duration-200"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-bold text-accent mb-3">Contato</p>
          <ul className="space-y-2">
            <li>
              <a href="mailto:textusacademico@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail size={14} /> textusacademico@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+5561962126292" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone size={14} /> +55 61 9621-2692
              </a>
            </li>
            <li className="text-xs text-accent font-semibold mt-1">Resposta em até 2 horas</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-sm font-bold text-accent mb-3">Redes Sociais</p>
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-primary-foreground hover:text-primary hover:scale-110 hover:rotate-[10deg] transition-all duration-200"
                aria-label={s.label}
                title={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="container mx-auto max-w-6xl mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-primary-foreground/50">© 2025 Textus Acadêmico. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          {["Política de Privacidade", "Termos de Serviço", "Aviso Legal"].map((t) => (
            <button key={t} className="text-xs text-primary-foreground/50 hover:text-accent transition-colors">{t}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}
