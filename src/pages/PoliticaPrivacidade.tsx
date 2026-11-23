import { useEffect } from "react";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function PoliticaPrivacidade() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade — Textus Acadêmico";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-ink text-primary-foreground py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline mb-6">
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-accent" size={32} />
            <h1 className="font-display text-3xl md:text-4xl font-medium">Política de Privacidade</h1>
          </div>
          <p className="text-primary-foreground/70 text-sm font-body">Última atualização: Abril de 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">1. Informações Gerais</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              A Textus Acadêmico ("nós", "nossa empresa") está comprometida em proteger a privacidade de seus usuários. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais que você nos fornece através do nosso site e serviços de orientação educacional.
            </p>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mt-2">
              Ao utilizar nossos serviços de orientação acadêmica, você concorda com as práticas descritas nesta política. Recomendamos a leitura completa deste documento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">2. Dados Que Coletamos</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">Podemos coletar os seguintes tipos de informações quando você utiliza nosso site:</p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> <strong>Dados de identificação:</strong> nome completo, e-mail, telefone.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> <strong>Dados acadêmicos:</strong> tipo de trabalho, nível acadêmico, instituição de ensino, área de estudo.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> <strong>Dados de comunicação:</strong> mensagens trocadas via formulário de contato ou WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">3. Como Utilizamos Seus Dados</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">Utilizamos suas informações para:</p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Prestar serviços de orientação educacional e suporte metodológico.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Entrar em contato para dar andamento à orientação acadêmica solicitada.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Melhorar a experiência do usuário em nosso site.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Cumprir obrigações legais e regulamentares.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Seus dados poderão ser compartilhados apenas:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Com orientadores da nossa equipe, exclusivamente para prestar o serviço contratado.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Quando exigido por lei ou determinação judicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">5. Armazenamento e Segurança</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Os dados são armazenados de forma segura e tratados com total confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">6. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Solicitar acesso aos seus dados pessoais que mantemos.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Solicitar a correção de dados incompletos ou desatualizados.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Solicitar a exclusão definitiva dos seus dados pessoais.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Revogar o consentimento para o tratamento de dados a qualquer momento.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Solicitar a portabilidade dos dados a outro prestador de serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">7. Cookies</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Nosso site pode utilizar cookies e tecnologias similares para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que nos ajudam a entender como você utiliza o site. Você pode desativar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">8. Alterações Nesta Política</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página com a data de atualização. Recomendamos que revise esta política periodicamente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-medium">9. Contato</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Para dúvidas, solicitações ou exercício dos seus direitos relativos a dados pessoais, entre em contato conosco:
            </p>
            <div className="mt-3 bg-card border border-border rounded-lg p-4 text-sm font-body text-muted-foreground space-y-1">
              <p><strong className="text-primary">E-mail:</strong> textuscademico@gmail.com</p>
              <p><strong className="text-primary">WhatsApp:</strong> +55 61 99621-2692</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/50 py-6 px-4 text-center text-xs font-body">
        <p>© 2025 Textus Acadêmico — Orientação Educacional. Todos os direitos reservados.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link to="/" className="hover:text-accent transition-colors">Início</Link>
          <Link to="/termos-de-uso" className="hover:text-accent transition-colors">Termos de Uso</Link>
        </div>
      </footer>
    </div>
  );
}
