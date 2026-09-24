import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import './term-card.css'

/**
 * Termino-txartela (hasierako grid-erako).
 */
export default function TermCard({ term, index = 0 }) {
  return (
    <Reveal variant="pop" delay={index * 90} className="term-card-wrap">
      <Link
        to={`/erronka1/${term.slug}`}
        className="term-card"
        style={{ '--term-color': term.color }}
      >
        <span className="term-card__number" aria-hidden="true">{term.number}</span>
        <span className="term-card__emoji" aria-hidden="true">{term.emoji}</span>
        <h3 className="term-card__name">{term.name}</h3>
        <span className="term-card__tag">{term.tag}</span>
        <p className="term-card__intro">{term.cardIntro}</p>
        <span className="term-card__cta">
          Irakurri <i aria-hidden="true">→</i>
        </span>
      </Link>
    </Reveal>
  )
}