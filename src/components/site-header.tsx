import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logoCasa from '@/assets/marca.png';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label="Casa da Escuta Mind, início"><img src={logoCasa} alt="" width={1024} height={1024} className="brand-symbol" /><span>casa da escuta mind<small>PSICANÁLISE</small></span></Link>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
      <Link to="/" activeOptions={{ exact: true }} onClick={() => setOpen(false)}>Início</Link>
      <a href="#psicanalise" onClick={() => setOpen(false)}>A psicanálise</a>
      <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
    </nav>
    <Button asChild className="header-cta"><a href="#contato">Vamos conversar <ArrowUpRight /></a></Button>
    <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><Link to="/" className="footer-brand">casa da escuta mind<span>Um espaço para o que é seu.</span></Link><p>Escuta, cuidado e singularidade.</p><a href="#contato">Vamos conversar <ArrowUpRight size={16} /></a></div><p className="footer-notice"><strong>Atenção:</strong> este espaço oferece atendimento agendado e não cobre emergências psiquiátricas imediatas. Em caso de crise aguda ou risco iminente, procure o pronto-socorro mais próximo ou entre em contato com o CVV (Centro de Valorização da Vida) pelo telefone <a href="tel:188">188</a>.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} Casa da Escuta Mind · Psicanálise · Todos os direitos reservados.</span><span className="footer-links"><Link to="/privacidade">Política de Privacidade</Link><Link to="/termos">Termos de Uso</Link></span></div></footer>;
}
