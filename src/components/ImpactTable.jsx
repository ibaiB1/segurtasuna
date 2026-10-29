import { X, Minus } from 'lucide-react'
import './impact-table.css'

/**
 * CIA taula: zein eragin duen erasoak (konfidentzialtasuna, osotasuna...).
 * `risk: true` duten lerroak arriskuan daude.
 */
export default function ImpactTable({ rows }) {
  const risks = rows.filter((r) => r.risk).length

  return (
    <div className="impact sheet">
      <p className="impact__summary">
        Arriskuan: <strong>{risks} / {rows.length}</strong>
      </p>
      <ul className="impact__list">
        {rows.map((r) => (
          <li key={r.label} className={`impact__row ${r.risk ? 'is-risk' : ''}`}>
            <span className="impact__label">{r.label}</span>
            <span className="impact__badge" aria-label={r.risk ? 'Arriskuan' : 'Ez dago arriskuan'}>
              {r.risk ? <X size={14} strokeWidth={3} /> : <Minus size={14} strokeWidth={3} />}
            </span>
            <span className="impact__text">{r.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
