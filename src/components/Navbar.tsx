import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4" aria-label="Navegação principal">
        <button onClick={() => scrollTo("#hero")} className="font-display text-primary-foreground text-xl font-bold tracking-wide">
          TEXTUS ACADÊMICO
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-primary-foreground/80 hover:text-accent text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Button variant="navCta" size="sm" onClick={() => scrollTo("#contato")}>
            Solicitar Apoio
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-primary/[0.98] md:hidden" role="dialog" aria-modal="true">
          <div className="flex flex-col h-full animate-fade-rise">
            <div className="flex items-center justify-between px-4 py-4">
              <span className="font-display text-primary-foreground text-xl font-bold">TEXTUS ACADÊMICO</span>
              <button onClick={() => setMenuOpen(false)} className="text-primary-foreground p-2" aria-label="Fechar menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-1 px-4 mt-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-primary-foreground text-lg py-3 border-b border-primary-foreground/10 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="navCta" size="lg" className="mt-6" onClick={() => scrollTo("#contato")}>
                Solicitar Apoio
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
