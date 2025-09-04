const FAQ = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-16 text-foreground">
      <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
        FAQ — Textus Acadêmico
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Última atualização: 04/09/2025
      </p>

      <div className="prose prose-neutral max-w-none">
        <p className="mb-8">
          Reunimos abaixo as dúvidas mais comuns sobre nossos serviços. Se
          precisar de algo específico, fale com a nossa equipe pelo formulário
          ou WhatsApp.
        </p>

        <div className="space-y-4">
          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              1. A assessoria acadêmica é legal e ética?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Sim. Nosso trabalho é 100% ético e dentro da lei. Atuamos como
              apoio e orientação, fornecendo materiais de referência,
              consultoria metodológica e revisão. O uso final é de
              responsabilidade do estudante, sempre respeitando as normas
              acadêmicas.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              2. Vocês fazem o trabalho por mim ou me ajudam a fazer?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Nosso foco é apoio personalizado. Produzimos materiais de
              referência, revisões e formatação, sempre com caráter
              orientativo, para que você aprenda e apresente com segurança.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              3. Como funciona o processo de assessoria?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Você entra em contato, entendemos a necessidade, montamos um
              orçamento personalizado e definimos um cronograma. Durante o
              processo, você recebe suporte contínuo e revisões até a entrega.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              4. Qual a garantia de originalidade do trabalho?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Cada material é elaborado de forma exclusiva, com referências
              confiáveis e verificação anti-plágio. Entregamos conteúdo
              original e adequado ao seu tema.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              5. Posso escolher o tema do meu TCC?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Sim. Você pode trazer seu tema ou contar com nossa ajuda para
              definir um recorte viável e relevante para sua área.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              6. Vocês fazem formatação (ABNT, Vancouver etc.)?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Sim. Fazemos formatação ABNT, Vancouver e outras normas
              institucionais, além de revisão completa.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              7. Existe suporte para apresentação em banca?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Sim. Ajudamos com roteiro, criação de slides e preparação para a
              defesa, para que você apresente com confiança.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              8. Quantas revisões estão incluídas?
            </summary>
            <p className="mt-2 text-muted-foreground">
              O contratante tem direito a até <strong>3 correções</strong> sem
              custo adicional. Essas revisões cobrem ajustes necessários para
              cumprir o combinado no início do serviço. Alterações extras ou
              fora do escopo inicial podem ser orçadas à parte.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              9. Quais tipos de trabalhos vocês atendem?
            </summary>
            <p className="mt-2 text-muted-foreground">
              TCC, monografias, dissertações, teses, artigos, projetos,
              relatórios, fichamentos, resenhas, resumos, portfólios, slides e
              outros trabalhos acadêmicos sob demanda.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              10. Qual o prazo de entrega?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Depende do tipo e complexidade. Definimos prazos em comum acordo
              e seguimos um cronograma claro para você acompanhar cada etapa.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              11. O atendimento é sigiloso?
            </summary>
            <p className="mt-2 text-muted-foreground">
              Sim. Garantimos confidencialidade dos dados pessoais e do
              conteúdo, conforme a LGPD e nossa Política de Privacidade.
            </p>
          </details>

          <details className="rounded-lg border border-border p-4 bg-card">
            <summary className="cursor-pointer font-semibold">
              12. Como é definido o valor?
            </summary>
            <p className="mt-2 text-muted-foreground">
              O preço varia conforme tipo de trabalho, número de páginas,
              prazos e complexidade. Enviamos orçamento justo e transparente.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
