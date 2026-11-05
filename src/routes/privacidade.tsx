import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/privacidade')({
  head: () => ({ meta: [
    { title: 'Política de Privacidade — Casa da Escuta Mind' },
    { name: 'description', content: 'Como as informações são tratadas neste site e no atendimento em psicanálise.' },
    { property: 'og:title', content: 'Política de Privacidade — Casa da Escuta Mind' },
    { property: 'og:description', content: 'Como as informações são tratadas neste site e no atendimento em psicanálise.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: PrivacidadePage,
});

function PrivacidadePage() {
  return <main>
    <section className="about-section">
      <p className="eyebrow">Privacidade</p>
      <h1>Política de<br />Privacidade.</h1>
      <p className="page-lead">Como as informações são tratadas neste site e no atendimento em psicanálise. Última atualização: novembro de 2026.</p>
      <div className="prose prose-legal">
        <h2>Este site não faz cadastro de dados</h2>
        <p>Este site é informativo: não realiza cadastro, formulários ou coleta automatizada de dados pessoais. As seções apresentam a proposta de trabalho e os meios de contato.</p>
        <h2>Contato pelo WhatsApp ou e-mail</h2>
        <p>Se você entrar em contato pelo WhatsApp ou pelo e-mail indicados, as informações que você fornecer serão utilizadas apenas para responder à sua mensagem e, se for de seu interesse, tratar do agendamento de um primeiro encontro. Esses canais pertencem aos respectivos serviços (WhatsApp/Meta, seu provedor de e-mail), que possuem políticas próprias.</p>
        <h2>Sigilo do atendimento</h2>
        <p>O conteúdo das sessões de psicanálise é protegido pelo sigilo profissional, regra fundamental da prática analítica. Nenhuma informação trazida no decorrer do processo é compartilhada, salvo nas hipóteses previstas em lei e em código de ética profissional.</p>
        <h2>Seus direitos (LGPD)</h2>
        <p>Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a qualquer momento informações sobre o tratamento dos seus dados, sua correção ou exclusão, pelos contatos indicados abaixo.</p>
        <h2>Contato</h2>
        <p>Roberto Gonçalves — Psicanalista — São Paulo, SP · CBPC 2022-6615<br /><a href="mailto:robertoulma@gmail.com">robertoulma@gmail.com</a></p>
        <p>Em caso de emergência ou risco imediato, procure o serviço de urgência mais próximo ou ligue para o CVV: <a href="tel:188">188</a>.</p>
        <p><Link to="/">Voltar à página inicial</Link></p>
      </div>
    </section>
  </main>;
}
