import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/termos')({
  head: () => ({ meta: [
    { title: 'Termos de Uso — Casa da Escuta Mind' },
    { name: 'description', content: 'Condições de uso deste site informativo e do contato para atendimento em psicanálise.' },
    { property: 'og:title', content: 'Termos de Uso — Casa da Escuta Mind' },
    { property: 'og:description', content: 'Condições de uso deste site informativo e do contato para atendimento em psicanálise.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: TermosPage,
});

function TermosPage() {
  return <main>
    <section className="about-section">
      <p className="eyebrow">Termos</p>
      <h1>Termos<br />de Uso.</h1>
      <p className="page-lead">Condições de uso deste site e do contato para atendimento. Última atualização: novembro de 2026.</p>
      <div className="prose prose-legal">
        <h2>Sobre este site</h2>
        <p>Este site tem caráter exclusivamente informativo: apresenta a proposta de trabalho em psicanálise e os meios de contato. O uso do site não estabelece vínculo de atendimento; o processo analítico só se inicia após conversa e combinação prévia entre as partes.</p>
        <h2>Este não é um serviço de emergência</h2>
        <p>O atendimento é agendado e não cobre emergências psiquiátricas imediatas. Em caso de crise aguda ou risco iminente, procure o pronto-socorro mais próximo ou entre em contato com o CVV (Centro de Valorização da Vida) pelo telefone <a href="tel:188">188</a>, disponível 24 horas.</p>
        <h2>Natureza do trabalho</h2>
        <p>A psicanálise é um processo de investigação de si pela fala e pela escuta. Nenhum resultado é prometido ou garantido: cada percurso é singular e se constrói no tempo de cada pessoa. Frequência, valores e modalidade de atendimento são combinados diretamente no primeiro contato.</p>
        <h2>Propriedade intelectual</h2>
        <p>Os textos, a marca e os elementos visuais deste site pertencem a Casa da Escuta Mind · Psicanálise. © Todos os direitos reservados. A reprodução total ou parcial sem autorização prévia não é permitida.</p>
        <h2>Alterações</h2>
        <p>Estes termos podem ser atualizados eventualmente; a versão vigente é sempre a publicada nesta página.</p>
        <p><Link to="/">Voltar à página inicial</Link></p>
      </div>
    </section>
  </main>;
}
