import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Pencil, ChevronDown } from 'lucide-react'
import { ERRONKAK, termPath } from '../data/terms'
import TermIcon from './TermIcon'
import './navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const [openUnit, setOpenUnit] = useState(null) // zein erronka-desplegable dagoen irekita
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)

  // Aldatu orriz mintz irekiak ixteko
  useEffect(() => {
    setOpenUnit(null)
    setMobileOpen(false)
  }, [pathname])

  // Klik kanpoan egininez itxi dropdown-a
  useEffect(() => {
    if (openUnit === null) return
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenUnit(null)
      }
    }
    const onKey = (e) => e.key === 'Escape' && setOpenUnit(null)
    document.addEventListener('pointerdown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [openUnit])

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

          {ERRONKAK.map((u) =>
            u.ready ? (
              <div
                key={u.id}
                className={`navbar__group ${openUnit === u.id ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className={`navbar__tab navbar__tab--btn ${pathname.startsWith(`/erronka${u.id}`) ? 'is-active' : ''}`}
                  onClick={() => setOpenUnit((v) => (v === u.id ? null : u.id))}
                  aria-expanded={openUnit === u.id}
                >
                  {u.label} <ChevronDown className="navbar__caret" size={18} strokeWidth={2.4} aria-hidden="true" />
                </button>

                <div className="navbar__dropdown" role="menu">
                  {u.terms.map((t) => (
                    <NavLink
                      key={t.slug}
                      to={termPath({ ...t, unit: u.id })}
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
            ) : (
              <span key={u.id} className="navbar__tab navbar__tab--soon" title="Laster eskuragarri">
                {u.label} <span className="navbar__soon">laster</span>
              </span>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
