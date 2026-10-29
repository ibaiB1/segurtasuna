import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Pencil, ChevronDown } from 'lucide-react'
import { ERRONKAK } from '../data/terms'
import { CIBERATAKETAK } from '../data/ciberataketak'
import TermIcon from './TermIcon'
import './navbar.css'

// Desplegable bakoitza: erronka bat edo ciberataketen atala
const groups = [
  ...ERRONKAK.filter((u) => u.ready).map((u) => ({
    key: `erronka${u.id}`,
    label: u.label,
    base: `/erronka${u.id}`,
    terms: u.terms,
  })),
  { key: 'ciberataketak', label: 'Ciberataketak', base: '/ciberataketak', terms: CIBERATAKETAK },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [openGroup, setOpenGroup] = useState(null) // zein desplegable dagoen irekita
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)

  // Aldatu orriz mintz irekiak ixteko
  useEffect(() => {
    setOpenGroup(null)
    setMobileOpen(false)
  }, [pathname])

  // Klik kanpoan egininez itxi dropdown-a
  useEffect(() => {
    if (openGroup === null) return
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenGroup(null)
      }
    }
    const onKey = (e) => e.key === 'Escape' && setOpenGroup(null)
    document.addEventListener('pointerdown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openGroup])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-icon" aria-hidden="true">
            <Pencil size={26} strokeWidth={2.2} />
          </span>
          <span className="navbar__brand-text">
            Segurtasuna<span className="navbar__brand-dot">.</span>
          </span>
        </Link>

        <button
          type="button"
          className={`navbar__burger ${mobileOpen ? 'is-open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Menua zabaldu"
        >
          <span /><span /><span />
        </button>

        <nav
          ref={menuRef}
          className={`navbar__menu ${mobileOpen ? 'is-open' : ''}`}
          aria-label="Nabigazio nagusia"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) => `navbar__tab ${isActive ? 'is-active' : ''}`}
          >
            Hasiera
          </NavLink>

          {groups.map((g) => (
            <div
              key={g.key}
              className={`navbar__group ${openGroup === g.key ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className={`navbar__tab navbar__tab--btn ${pathname.startsWith(g.base) ? 'is-active' : ''}`}
                onClick={() => setOpenGroup((v) => (v === g.key ? null : g.key))}
                aria-expanded={openGroup === g.key}
              >
                {g.label} <ChevronDown className="navbar__caret" size={18} strokeWidth={2.4} aria-hidden="true" />
              </button>

              <div className="navbar__dropdown" role="menu">
                {g.terms.map((t) => (
                  <NavLink
                    key={t.slug}
                    to={`${g.base}/${t.slug}`}
                    role="menuitem"
                    className={({ isActive }) =>
                      `navbar__drop-item ${isActive ? 'is-active' : ''}`
                    }
                  >
                    <TermIcon slug={t.slug} size={22} className="navbar__drop-icon" style={{ color: t.color }} />
                    <span className="navbar__drop-name">{t.name}</span>
                    <span className="navbar__drop-num" aria-hidden="true">{t.number}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
