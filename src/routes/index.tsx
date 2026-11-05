import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, ShieldCheck, Video, HeartHandshake, Sprout, MessagesSquare, Fingerprint, MessageCircle, MapPin, Lock, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import room from '@/assets/consultorio.jpg';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Casa da Escuta Mind — Psicanálise' },
    { name: 'description', content: 'Um espaço de escuta e acolhimento. Conheça a psicanálise e dê o primeiro passo para uma conversa.' },
    { property: 'og:title', content: 'Casa da Escuta Mind — Psicanálise' },
    { property: 'og:description', content: 'Um espaço para falar, se escutar e encontrar seus próprios caminhos.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Index,
});
function Index() {
  return <main>
    <section className="hero" id="top"><img src={room} alt="Poltrona verde em um ambiente tranquilo de escuta, com luz natural" width={1920} height={1024} className="hero-image" /><div className="hero-inner">
      <p className="eyebrow">Casa da Escuta Mind · Psicanálise</p>
      <h1>Um espaço para<br />falar. Um tempo<br />para <em>se escutar.</em></h1>
      <p className="hero-copy">Nem tudo precisa de uma resposta imediata.<br />Às vezes, o primeiro passo é encontrar um lugar<br className="desktop-break" /> onde a sua história possa ser ouvida.</p>
      <div className="hero-actions"><Button asChild><a href="#contato">Vamos conversar <ArrowUpRight /></a></Button><a className="text-action" href="#psicanalise">Conheça a psicanálise <ArrowUpRight size={14} /></a></div>
      <p className="hero-caption"><ShieldCheck size={14} /> Uma escuta acolhedora, ética e sem julgamentos.</p>
    </div></section>
    <section className="trust-band" aria-label="Princípios do atendimento"><div className="trust-inner">
      <div className="trust-item"><Video /><div><strong>Um encontro possível</strong><span>Mesmo quando estamos distantes</span></div></div>
      <div className="trust-item"><ShieldCheck /><div><strong>Ética e confidencialidade</strong><span>Sua história em um espaço seguro</span></div></div>
      <div className="trust-item"><HeartHandshake /><div><strong>Respeito ao seu tempo</strong><span>Cada percurso é singular</span></div></div>
    </div></section>
    <section className="intro-section"><div><p className="eyebrow">O encontro com a psicanálise</p><h2 className="section-title">Você não precisa dar<br />conta de tudo <em>sozinho.</em></h2></div><div className="intro-copy"><p>Há momentos em que os sentimentos parecem difíceis de nomear. Relações, escolhas, perdas e mudanças podem nos colocar diante de perguntas sobre nós mesmos.</p><p>A psicanálise oferece um espaço de escuta para acolher essas questões — sem fórmulas prontas, respeitando a singularidade da sua história.</p><a href="#psicanalise" className="text-action">Saiba mais sobre esse caminho <ArrowUpRight size={15} /></a></div></section>
    <section className="about-section" id="psicanalise"><p className="eyebrow">A psicanálise</p><h1>Há muito de você<br />nas suas palavras.</h1><p className="page-lead">Um espaço para elaborar o que se repete, o que dói e o que ainda não conseguimos compreender.</p><div className="about-layout"><img src={room} alt="Um ambiente acolhedor com poltrona verde e luz natural" width={1920} height={1024} loading="lazy" /><div className="prose"><h2>Uma escuta, não uma fórmula.</h2><p>A psicanálise é um processo de investigação de si pela fala e pela escuta. O que você traz para o encontro — sentimentos, lembranças, sonhos ou silêncios — pode abrir espaço para novas compreensões.</p><p>Não se trata de receber conselhos ou seguir um caminho predeterminado. O trabalho acontece a partir da sua história, no seu tempo.</p><details><summary>Como é o primeiro encontro?</summary><p>É uma conversa para apresentar suas questões, conhecer a proposta de trabalho e esclarecer frequência, valores e modalidade de atendimento com o profissional.</p></details><details><summary>Preciso saber o que falar?</summary><p>Não. Você pode começar pelo que está presente naquele momento. Dúvidas, silêncios e dificuldades de encontrar palavras também fazem parte do encontro.</p></details><details><summary>Quanto tempo dura o processo?</summary><p>Não existe uma duração única. O percurso é construído a partir de cada pessoa e das questões que aparecem ao longo dos encontros.</p></details></div></div></section>
    <section className="care-band"><div className="section-heading"><p className="eyebrow">O que pode encontrar aqui</p><h2 className="section-title">Uma escuta que acolhe você.</h2></div><div className="care-grid">
      <article className="care-item"><MessagesSquare size={28} /><h3>Palavra e escuta</h3><p>Um lugar para falar sobre o que atravessa sua vida, inclusive o que ainda não encontrou palavras.</p></article>
      <article className="care-item"><Fingerprint size={28} /><h3>Sua singularidade</h3><p>Não existem histórias iguais. Seu percurso é acolhido com respeito, sem julgamentos ou respostas prontas.</p></article>
      <article className="care-item"><Sprout size={28} /><h3>Novos caminhos</h3><p>Um processo de elaboração que pode abrir outras possibilidades de se relacionar consigo e com o mundo.</p></article>
    </div></section>
    <section className="online-section"><div className="section-heading"><p className="eyebrow">O enquadre online</p><h2 className="section-title">Como funciona o<br />atendimento <em>online?</em></h2></div><p className="online-lead">A modalidade online mantém o mesmo rigor ético e técnico do consultório presencial, adaptando-se à sua rotina.</p><div className="care-grid">
      <article className="care-item"><Video size={28} /><h3>Formato</h3><p>As sessões são realizadas por videochamada (Google Meet ou Zoom), em ambiente criptografado e seguro.</p></article>
      <article className="care-item"><Lock size={28} /><h3>Sigilo absoluto</h3><p>O sigilo é a regra fundamental da prática analítica. Recomenda-se que você também utilize fones de ouvido e um local isolado durante a sessão.</p></article>
      <article className="care-item"><MessagesSquare size={28} /><h3>Associação livre</h3><p>Um espaço livre de julgamentos ou conselhos, focado em permitir que você fale abertamente sobre tudo o que vier à mente.</p></article>
    </div></section>
    <section className="analyst-section" id="analista"><p className="eyebrow">Quem te escuta</p><h1>Sobre o analista.</h1><div className="about-layout">
      <div className="photo-placeholder"><UserRound aria-hidden="true" /><span>Espaço reservado<br />para foto profissional</span></div>
      <div className="prose"><p className="analyst-credential">Psicanalista <strong>Roberto Gonçalves</strong>, Associado ao Conselho Brasileiro de Psicanálise Clínica.</p><p>Meu propósito é oferecer uma escuta atenta, qualificada e estritamente ética para te ajudar a decifrar os conteúdos inconscientes que geram travamentos e dores na sua vida.</p><p>Meu percurso é pautado pelo tripé analítico fundamental: análise pessoal contínua, supervisão clínica constante e o estudo teórico permanente da psicanálise.</p><Button asChild><a href="#contato">Iniciar processo analítico <ArrowUpRight /></a></Button></div>
    </div></section>
    <section className="contact-section" id="contato"><div className="contact-layout"><section><p className="eyebrow">Vamos conversar</p><h2 className="section-title">O primeiro passo<br />pode ser uma palavra.</h2><p>O primeiro encontro é uma oportunidade para falar sobre o que motivou sua busca e conhecer a proposta de atendimento.</p><Button asChild size="lg"><a href="https://wa.me/5511967202663" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />Falar no WhatsApp <ArrowUpRight /></a></Button></section><section className="contact-note"><h2>Informações de contato</h2><p>Roberto Gonçalves — Psicanalista — São Paulo, SP<br />CBPC 2022-6615</p><div className="contact-lines"><a className="contact-whatsapp" href="https://wa.me/5511967202663" target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp Profissional</a><a className="contact-email" href="mailto:robertoulma@gmail.com">robertoulma@gmail.com</a><a className="contact-location" href="https://www.google.com/maps/search/?api=1&query=Vila+Ol%C3%ADmpia+S%C3%A3o+Paulo+SP" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" />Vila Olímpia São Paulo SP</a></div><p>Em uma emergência ou situação de risco imediato, procure o serviço de urgência da sua região. Este site não oferece atendimento de emergência.</p></section></div></section>
  </main>;
}
