import { useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, Video, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppointmentPicker() {
  const [month, setMonth] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 1));
  const [day, setDay] = useState<number>();
  const [time, setTime] = useState('');
  const [saved, setSaved] = useState(false);
  const now = new Date();
  const offset = (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const date = day ? new Date(month.getFullYear(), month.getMonth(), day) : undefined;
  function shift(delta: number) { setMonth(new Date(month.getFullYear(), month.getMonth() + delta, 1)); setDay(undefined); setTime(''); setSaved(false); }
  function download() {
    if (!date || !time) return;
    const [hour, minute] = time.split(':').map(Number);
    if (hour === undefined || minute === undefined) return;
    const start = new Date(date); start.setHours(hour, minute);
    const end = new Date(start.getTime() + 50 * 60000);
    const stamp = (value: Date) => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const content = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Fala Escuta//Agenda//PT\r\nBEGIN:VEVENT\r\nUID:${start.getTime()}@falaeescuta\r\nDTSTAMP:${stamp(new Date())}\r\nDTSTART:${stamp(start)}\r\nDTEND:${stamp(end)}\r\nSUMMARY:Conversa inicial - horário a confirmar\r\nDESCRIPTION:Seleção demonstrativa. Este lembrete não confirma uma consulta.\r\nEND:VEVENT\r\nEND:VCALENDAR`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/calendar;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'conversa-fala-e-escuta.ics'; a.click(); URL.revokeObjectURL(url); setSaved(true);
  }
  return <div className="appointment-tool"><div className="calendar-pane"><div className="calendar-heading"><h2>{month.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</h2><div><Button variant="ghost" size="icon" aria-label="Mês anterior" disabled={month.getFullYear() === now.getFullYear() && month.getMonth() === now.getMonth()} onClick={() => shift(-1)}><ChevronLeft /></Button><Button variant="ghost" size="icon" aria-label="Próximo mês" onClick={() => shift(1)}><ChevronRight /></Button></div></div><div className="calendar-grid">{['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => <span className="weekday" key={i}>{d}</span>)}{Array.from({ length: offset }, (_, i) => <span key={`empty${i}`} />)}{Array.from({ length: days }, (_, i) => { const d = i + 1; const value = new Date(month.getFullYear(), month.getMonth(), d); const disabled = value < new Date(now.getFullYear(), now.getMonth(), now.getDate()) || value.getDay() === 0 || value.getDay() === 6; return <Button variant={day === d ? 'default' : 'ghost'} className="day-button" key={d} disabled={disabled} aria-pressed={day === d} aria-label={`Selecionar dia ${d}`} onClick={() => { setDay(d); setTime(''); setSaved(false); }}>{d}</Button>; })}</div><p className="calendar-note"><ShieldCheck size={15} /> Seu tempo e sua privacidade importam.</p></div><div className="time-pane"><div className="appointment-type"><Video size={20} /><div>Conversa inicial<small>Online · 50 minutos</small></div></div><h3>{date ? date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) : 'Escolha um dia ao lado'}</h3><div className="time-grid">{['09:00', '10:00', '14:00', '15:00', '17:00', '18:00'].map(t => <Button variant={time === t ? 'default' : 'outline'} disabled={!day} key={t} aria-pressed={time === t} onClick={() => { setTime(t); setSaved(false); }}>{t}</Button>)}</div><Button className="save-appointment" disabled={!time} onClick={download}>{saved ? <><Check /> Lembrete salvo</> : <>Salvar horário no calendário <ArrowRight /></>}</Button><p className="demo-note"><CalendarDays size={15} /> Agenda demonstrativa. Os horários são exemplos e não confirmam uma consulta.</p>{saved && <p role="status" className="success-note">Lembrete baixado. A consulta ainda precisa ser confirmada com o profissional.</p>}</div></div>;
}