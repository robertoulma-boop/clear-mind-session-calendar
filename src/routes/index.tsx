import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, ShieldCheck, Video, HeartHandshake, Sprout, MessagesSquare, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import room from '@/assets/consultorio.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Fala & Escuta — Psicanálise' },
    { name: 'description', content: 'Um espaço de escuta e acolhimento. Conheça a psicanálise e dê o primeiro passo para uma conversa inicial.' },
    { property: 'og:title', content: 'Fala & Escuta — Psicanálise' },
    { property: 'og:description', content: 'Um espaço para falar, se escutar e encontrar seus próprios caminhos.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Index,
});
function Index() {
  return <main>
    <section className="hero"><img src={room} alt="Poltrona verde em um ambiente tranquilo de escuta, com luz natural" width={1920} height={1024} className="hero-image" /><div className="hero-inner">
      <p className="eyebrow">Fala & Escuta · Psicanálise</p>
      <h1>Um espaço para<br />falar. Um tempo<br />para <em>se escutar.</em></h1>
      <p className="hero-copy">Nem tudo precisa de uma resposta imediata.<br />Às vezes, o primeiro passo é encontrar um lugar<br className="desktop-break" /> onde a sua história possa ser ouvida.</p>
      <div className="hero-actions"><Button asChild><Link to="/agenda">Agendar uma conversa <ArrowUpRight /></Link></Button><Link className="text-action" to="/sobre">Conheça a psicanálise <ArrowRight size={14} /></Link></div>
      <p className="hero-caption"><ShieldCheck size={14} /> Uma escuta acolhedora, ética e sem julgamentos.</p>
    </div></section>
    <section className="trust-band" aria-label="Princípios do atendimento"><div className="trust-inner">
      <div className="trust-item"><Video /><div><strong>Um encontro possível</strong><span>Mesmo quando estamos distantes</span></div></div>
      <div className="trust-item"><ShieldCheck /><div><strong>Ética e confidencialidade</strong><span>Sua história em um espaço seguro</span></div></div>
      <div className="trust-item"><HeartHandshake /><div><strong>Respeito ao seu tempo</strong><span>Cada percurso é singular</span></div></div>
    </div></section>
    <section className="intro-section"><div><p className="eyebrow">O encontro com a psicanálise</p><h2 className="section-title">Você não precisa dar<br />conta de tudo <em>sozinho.</em></h2></div><div className="intro-copy"><p>Há momentos em que os sentimentos parecem difíceis de nomear. Relações, escolhas, perdas e mudanças podem nos colocar diante de perguntas sobre nós mesmos.</p><p>A psicanálise oferece um espaço de escuta para acolher essas questões — sem fórmulas prontas, respeitando a singularidade da sua história.</p><Link to="/sobre" className="text-action">Saiba mais sobre esse caminho <ArrowUpRight size={15} /></Link></div></section>
    <section className="care-band"><div className="section-heading"><p className="eyebrow">O que pode encontrar aqui</p><h2 className="section-title">Uma escuta que acolhe você.</h2></div><div className="care-grid">
      <article className="care-item"><MessagesSquare size={28} /><h3>Palavra e escuta</h3><p>Um lugar para falar sobre o que atravessa sua vida, inclusive o que ainda não encontrou palavras.</p></article>
      <article className="care-item"><Fingerprint size={28} /><h3>Sua singularidade</h3><p>Não existem histórias iguais. Seu percurso é acolhido com respeito, sem julgamentos ou respostas prontas.</p></article>
      <article className="care-item"><Sprout size={28} /><h3>Novos caminhos</h3><p>Um processo de elaboração que pode abrir outras possibilidades de se relacionar consigo e com o mundo.</p></article>
    </div></section>
    <section className="closing-section"><div><h2 className="section-title">Tudo começa com uma conversa.</h2><p>O primeiro encontro é um tempo para nos conhecermos.</p></div><Button asChild size="lg"><Link to="/agenda">Ver agenda <ArrowUpRight /></Link></Button></section>
  </main>;
}
