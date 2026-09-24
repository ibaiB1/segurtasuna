import { Link } from 'react-router-dom'
import { Lock, Pencil, PenLine, ArrowDown, ArrowRight, Search, Cog, StickyNote } from 'lucide-react'
import { TERMS } from '../data/terms'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import GradientText from '../components/GradientText'
import Squiggle from '../components/Squiggle'
import TermCard from '../components/TermCard'
import Footer from '../components/Footer'
import './home.css'

// HashRouter-ekin ezin da #ancla arruntik erabili: programazkijo scroll-a egin behar da
const scrollToTerms = () => {
  document.getElementById('terminoak')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Home() {
  return (
    <main className="home">
      {/* ---------- HERO ---------- */}
      <section className="hero container">
        <Reveal variant="pop" className="hero__sticker hero__sticker--1" aria-hidden="true">
          <Lock size={30} strokeWidth={2.2} className="icon-pulse" />
        </Reveal>
        <Reveal variant="pop" delay={150} className="hero__sticker hero__sticker--2" aria-hidden="true">
          <Pencil size={30} strokeWidth={2.2} className="icon-sway" />
        </Reveal>

        <p className="hero__kicker">
          <span className="chip">Erronka 1 · hiztegia</span>
        </p>

        <h1 className="hero__title">
          <SplitText text="Segurtasun" by="char" stagger={55} />{' '}
          <SplitText text="informatikoaren" by="char" delay={350} stagger={35} />
          <br />
          <SplitText text="hiztegia" by="char" delay={750} stagger={70} className="hero__title-word" />
        </h1>

        <Reveal variant="blur" delay={500}>
          <p className="hero__subtitle">
            Terminoak, azalpenak eta <span className="hl">adibide erreala</span> — dena
            euskaraz, <GradientText>kuaderno batean</GradientText> idatzita.
          </p>
        </Reveal>

        <Reveal variant="up" delay={700} className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={scrollToTerms}>
            Hasi irakurtzen <ArrowDown size={22} strokeWidth={2.6} className="icon-bounce" aria-hidden="true" />
          </button>
          <Link to="/erronka1/phishinga" className="btn">
            1. terminoa: Phishinga <ArrowRight size={22} strokeWidth={2.4} className="btn__arrow" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal variant="blur" delay={900} className="hero__note">
          <PenLine size={16} strokeWidth={2.2} className="inline-icon" aria-hidden="true" />
          oharrak, eskuz idatzi bezala… baina paperean bezain garbi
        </Reveal>
      </section>

      <Squiggle className="container home__divider" />

      {/* ---------- ZER DA HAU? ---------- */}
      <section className="container about">
        <Reveal variant="left" className="sheet about__sheet">
          <h2 className="about__title">
            Zer da <span className="underline-doodle">hiztegi</span> hau?
          </h2>
          <p>
            Hau <span className="hl hl--blue">segurtasun informatikoaren</span> oinarrizko
            terminoen bilduma bat da. Atal bakoitzean aurkituko duzu:{' '}
            <strong>zer den</strong> terminoa, <strong>nola funtzionatzen duen</strong> pausoz
            pauso, eta <span className="hl hl--green">adibide erreala</span> bat mundutik.
          </p>
          <p>
            Ez da eskuliburu teknikoa: <span className="hl hl--pink">ohar-kuaderno bat</span> da,
            ulertzeko eta gogoratzeko idatzia. Irakurri, margotu buruan eta…{' '}
            <em>segur egon!</em>
          </p>
        </Reveal>
      </section>

      {/* ---------- TERMINOAK ---------- */}
      <section id="terminoak" className="container terms">
        <Reveal variant="up" className="terms__head">
          <h2 className="terms__title">
            Erronka 1 — <GradientText colors={['#d84343', '#7b3fbf', '#2451b3']}>terminoak</GradientText>
          </h2>
          <p className="terms__hint">
            Aukeratu orri bat eta hasi oharrak hartzen
            <ArrowDown size={20} strokeWidth={2.4} className="icon-bounce" aria-hidden="true" />
          </p>
        </Reveal>

        <div className="terms__grid">
          {TERMS.map((t, i) => (
            <TermCard key={t.slug} term={t} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- NOLA IRAKURRI ---------- */}
      <section className="container howto">
        <Reveal variant="up">
          <h2 className="howto__title">Orri bakoitzean zer aurkituko duzu?</h2>
        </Reveal>
        <div className="howto__grid">
          <Reveal variant="up" delay={0} className="howto__card sheet tilt-l">
            <span className="howto__icon" aria-hidden="true">
              <Search size={34} strokeWidth={2.2} />
            </span>
            <h3>Zer den</h3>
            <p>Terminoaren definizio garbia, jolaserik gabe.</p>
          </Reveal>
          <Reveal variant="up" delay={140} className="howto__card sheet">
            <span className="howto__icon" aria-hidden="true">
              <Cog size={34} strokeWidth={2.2} />
            </span>
            <h3>Nola funtzionatzen du</h3>
            <p>Pausoz pausoko azalpena, urrats bakoitza zenbakituta.</p>
          </Reveal>
          <Reveal variant="up" delay={280} className="howto__card sheet tilt-r">
            <span className="howto__icon" aria-hidden="true">
              <StickyNote size={34} strokeWidth={2.2} />
            </span>
            <h3>Adibidea</h3>
            <p>Kasu erreala, post-it batean itsatsita gogoratzeko.</p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}