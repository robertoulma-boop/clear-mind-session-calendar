import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" aria-label="Entrelinhas, início"><span className="brand-symbol">e<span>.</span></span><span>entrelinhas<small>PSICANÁLISE & ESCUTA</small></span></Link>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
      <Link to="/" activeOptions={{ exact: true }} onClick={() => setOpen(false)}>Início</Link>
      <Link to="/sobre" onClick={() => setOpen(false)}>A psicanálise</Link>
      <Link to="/agenda" onClick={() => setOpen(false)}>Agenda</Link>
      <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link>
    </nav>
    <Button asChild className="header-cta"><Link to="/agenda">Agendar uma conversa <ArrowUpRight /></Link></Button>
    <Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><Link to="/" className="footer-brand">entrelinhas<span>Um espaço para o que é seu.</span></Link><p>Escuta, cuidado e singularidade.</p><Link to="/contato">Vamos conversar <ArrowUpRight size={16} /></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Entrelinhas · Psicanálise</span><span>Uma escuta ética. Um encontro com você.</span></div></footer>;
}