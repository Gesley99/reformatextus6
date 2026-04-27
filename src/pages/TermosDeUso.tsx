import { useEffect } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermosDeUso() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Termos de Uso — Textus Acadêmico";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline mb-6">
            <ArrowLeft size={16} /> Voltar ao Início
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-accent" size={32} />
            <h1 className="font-display text-3xl md:text-4xl font-bold">Termos de Uso</h1>
          </div>
          <p className="text-primary-foreground/70 text-sm font-body">Última atualização: Abril de 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-16">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Ao acessar e utilizar o site e os serviços da Textus Acadêmico, você declara ter lido, compreendido e concordado com estes Termos de Uso. Caso não concorde com quaisquer condições aqui descritas, solicitamos que não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">2. Descrição dos Serviços</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              A Textus Acadêmico oferece exclusivamente serviços de <strong className="text-primary">orientação educacional, suporte metodológico, revisão técnica e aconselhamento acadêmico</strong> para estudantes universitários.
            </p>
            <div className="mt-4 bg-accent/5 border-l-4 border-accent rounded-r-lg p-4">
              <p className="text-sm font-body text-primary font-semibold">⚠️ Importante:</p>
              <p className="text-sm font-body text-muted-foreground mt-1">
                <strong>Não elaboramos, redigimos, produzimos ou entregamos trabalhos acadêmicos completos.</strong> Nossos serviços são de natureza estritamente educacional e de orientação. O desenvolvimento, redação e entrega do trabalho acadêmico são de responsabilidade exclusiva do aluno/contratante.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">3. Natureza Educacional</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Todos os materiais, feedbacks, orientações e suportes fornecidos pela Textus Acadêmico têm finalidade exclusivamente didática e educacional. Devem ser utilizados como:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Referência e guia para o desenvolvimento do seu próprio trabalho.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Material de apoio ao aprendizado e compreensão de metodologias.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Complemento aos estudos e orientações recebidos na instituição de ensino.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">4. Responsabilidades do Contratante</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              O contratante (aluno/estudante) é integralmente responsável por:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> O desenvolvimento integral e redação do seu trabalho acadêmico.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> A revisão final e garantia de originalidade do conteúdo entregue à instituição.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> O cumprimento das normas e diretrizes da sua instituição de ensino.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> A veracidade das informações fornecidas à Textus Acadêmico.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> A utilização ética e responsável de todas as orientações recebidas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">5. Ausência de Garantia de Resultados</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              A Textus Acadêmico <strong className="text-primary">não garante aprovação</strong> em avaliações, bancas ou qualquer resultado acadêmico. A aprovação de trabalhos depende de múltiplos fatores que estão fora do nosso controle, incluindo o conteúdo desenvolvido pelo aluno, critérios do avaliador, participação e defesa do trabalho.
            </p>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mt-2">
              Garantimos a qualidade e dedicação nas orientações prestadas, não resultados acadêmicos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">6. Confidencialidade</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Mantemos total sigilo profissional sobre todas as informações, dados e conteúdos compartilhados pelo contratante durante a prestação do serviço de orientação educacional. Não divulgamos informações pessoais ou acadêmicas a terceiros.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">7. Propriedade Intelectual</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Todo o conteúdo do site da Textus Acadêmico (textos, imagens, design, marca) é de propriedade da empresa e protegido por lei. É proibida a reprodução total ou parcial sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">8. Pagamento e Reembolso</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Os valores dos serviços de orientação são informados antes da contratação. As condições de pagamento e eventuais políticas de reembolso são acordadas diretamente entre as partes antes do início da orientação.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">9. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              A Textus Acadêmico não se responsabiliza por:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm font-body">
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Resultados acadêmicos obtidos pelo contratante.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Uso indevido das orientações fornecidas.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Decisões tomadas pelo contratante com base nas orientações recebidas.</li>
              <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Indisponibilidade temporária do site por motivos técnicos.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">10. Alterações nos Termos</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              A Textus Acadêmico reserva-se o direito de alterar estes Termos de Uso a qualquer momento, mediante publicação da versão atualizada nesta página. Recomendamos a revisão periódica deste documento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">11. Legislação Aplicável</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será submetida ao foro da comarca de Brasília-DF.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl md:text-2xl text-primary mb-3 font-bold">12. Contato</h2>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato:
            </p>
            <div className="mt-3 bg-card border border-border rounded-lg p-4 text-sm font-body text-muted-foreground space-y-1">
              <p><strong className="text-primary">E-mail:</strong> textusacademico@gmail.com</p>
              <p><strong className="text-primary">WhatsApp:</strong> +55 61 9621-2692</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/50 py-6 px-4 text-center text-xs font-body">
        <p>© 2025 Textus Acadêmico — Orientação Educacional. Todos os direitos reservados.</p>
        <div className="mt-2 flex items-center justify-center gap-4">
          <Link to="/" className="hover:text-accent transition-colors">Início</Link>
          <Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link>
        </div>
      </footer>
    </div>
  );
}
