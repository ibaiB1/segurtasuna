import { PenLine } from 'lucide-react'
import { ERRONKAK } from '../data/terms'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__doodle" aria-hidden="true">
          <PenLine size={18} strokeWidth={2.2} />
          <PenLine size={18} strokeWidth={2.2} />
          <PenLine size={18} strokeWidth={2.2} />
        </p>
        <p>
          <strong>Segurtasun Informatikoaren Hiztegia</strong> — oharrak, adibideak eta terminoak
          euskaraz.
        </p>
        <p className="footer__meta">
          {ERRONKAK.filter((u) => u.ready).map((u) => u.label).join(' · ')}
        </p>
      </div>
    </footer>
  )
}