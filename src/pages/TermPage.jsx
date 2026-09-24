import { Link, Navigate, useParams } from 'react-router-dom'
import { Search, Cog, StickyNote, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react'
import { getNeighbors, getTerm, TERMS } from '../data/terms'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import Squiggle from '../components/Squiggle'
import StickyNoteEl from '../components/StickyNote'
import TermIcon from '../components/TermIcon'
import Footer from '../components/Footer'
import './term.css'

export default function TermPage() {
  const { slug } = useParams()
  const term = getTerm(slug)

  if (!term) return <Navigate to="/" replace />

  const { prev, next } = getNeighbors(slug)

  return (
    <main className="term" style={{ '--term-color': term.color }}>
      <div className="container" key={term.slug}>
        {/* Ogibide-bide (breadcrumb) */}
        <Reveal variant="blur" as="nav" className="term__crumbs" aria-label="Bide-izena">
          <Link to="/">Hasiera</Link>
          <span aria-hidden="true"> / </span>
          <span>Erronka 1</span>
          <span aria-hidden="true"> / </span>
          <strong aria-current="page">{term.name}</strong>
        </Reveal>

        {/* Goiburua */}
        <header className="term__header">
          <Reveal variant="pop" className="term__badge" aria-hidden="true">
            {term.number}
          </Reveal>
          <h1 className="term__title">
            <TermIcon slug={term.slug} size={56} strokeWidth={2.1} className="term__title-icon" />{' '}
            <SplitText text={term.name} by="word" stagger={60} />
          </h1>
          <Reveal variant="up" delay={250} className="term__tags">
            <span className="term__tag">{term.tag}</span>
          </Reveal>
        </header>

        <Squiggle className="term__squiggle" color={term.color} />

        {/* ZER DEN */}
        <section className="term__section" aria-labelledby="zer-den">
          <Reveal variant="left">
            <h2 id="zer-den" className="term__h2">
              <Search size={30} strokeWidth={2.3} aria-hidden="true" /> Zer den?
            </h2>
          </Reveal>
          <Reveal variant="up" delay={120} className="sheet term__def tilt-l">
            <p>{term.definition}</p>
          </Reveal>
        </section>

        {/* NOLA FUNTZIONATZEN DU */}
        <section className="term__section" aria-labelledby="nola">
          <Reveal variant="right">
            <h2 id="nola" className="term__h2">
              <Cog size={30} strokeWidth={2.3} aria-hidden="true" /> Nola funtzionatzen du?
            </h2>
          </Reveal>

          <ol className="term__steps">
            {term.steps.map((step, i) => (
              <Reveal key={i} as="li" variant="up" delay={i * 130} className="term__step">
                <span className="term__step-num" aria-hidden="true">{i + 1}</span>
                <p>{step}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ADIBIDEA */}
        <section className="term__section" aria-labelledby="adibidea">
          <Reveal variant="up">
            <h2 id="adibidea" className="term__h2">
              <StickyNote size={30} strokeWidth={2.3} aria-hidden="true" /> Adibidea
            </h2>
          </Reveal>
          <Reveal variant="pop" delay={150}>
            <StickyNoteEl title="Adibidea" tilt={term.number % 2 ? 'r' : 'l'}>
              <p>{term.example}</p>
            </StickyNoteEl>
          </Reveal>

          <Reveal variant="up" delay={250} className="term__quick">
            <span className="chip" style={{ color: term.color }}>
              <Lightbulb size={17} strokeWidth={2.4} aria-hidden="true" /> {term.quick}
            </span>
          </Reveal>
        </section>

        {/* ORRIAK ALDATZEA */}
        <nav className="term__pager" aria-label="Termino arteko nabigazioa">
          {prev ? (
            <Link to={`/erronka1/${prev.slug}`} className="pager-btn pager-btn--prev">
              <ArrowLeft size={24} strokeWidth={2.4} className="pager-btn__dir" aria-hidden="true" />
              <span>
                <small>Aurrekoa</small>
                <strong>{prev.name}</strong>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/erronka1/${next.slug}`} className="pager-btn pager-btn--next">
              <span>
                <small>Hurrengoa</small>
                <strong>{next.name}</strong>
              </span>
              <ArrowRight size={24} strokeWidth={2.4} className="pager-btn__dir" aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* Terminoen indize txikia */}
        <Reveal variant="up" className="term__index">
          <p className="term__index-label">Koadernoaren aurkibidea:</p>
          <ul className="term__index-list">
            {TERMS.map((t) => (
              <li key={t.slug}>
                <Link
                  to={`/erronka1/${t.slug}`}
                  className={`term__index-item ${t.slug === term.slug ? 'is-current' : ''}`}
                  style={{ '--c': t.color }}
                >
                  <TermIcon slug={t.slug} size={17} style={{ color: t.color }} />
                  {t.number}. {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Footer />
    </main>
  )
}