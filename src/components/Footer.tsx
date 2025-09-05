import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-secondary rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-playfair font-bold">TEXTUS ACADÊMICO</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Transformando conhecimento em excelência acadêmica. 
              Sua jornada educacional merece o melhor suporte.
            </p>
            <div className="flex gap-3">
              {/* Instagram: abre o perfil correto */}
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open("https://www.instagram.com/textusacademico", "_blank")}
                aria-label="Abrir Instagram Textus Acadêmico"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              {/* Facebook e LinkedIn removidos conforme solicitado */}
            </div>
          </div>

          {/* Aviso Legal (substitui 'Nossos Serviços') */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Aviso Legal</h4>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Os serviços da Textus Acadêmico consistem em apoio acadêmico e consultoria
              especializada. Todo material entregue tem caráter orientativo, servindo
              como guia para estudo, organização de ideias e aprimoramento do trabalho
              do contratante. Não realizamos substituição da atividade discente, nem
              asseguramos resultados junto às instituições de ensino. O uso adequado
              dos conteúdos é de exclusiva responsabilidade do cliente.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Serviços</a></li>
              <li>
                <a
                  href="https://wa.me/61996212692"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
              <li><a href="/termos" className="hover:text-primary-foreground transition-colors">Termos de Uso e Política de Privacidade</a></li>
              <li><a href="/faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>textusacademico@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Brasília, DF</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="sm"
                className="text-sm"
                onClick={() => window.open("https://wa.me/61996212692", "_blank")}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <div>© 2025 TEXTUS ACADÊMICO. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
