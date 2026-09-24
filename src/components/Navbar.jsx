import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Pencil, ChevronDown } from 'lucide-react'
import { TERMS } from '../data/terms'
import TermIcon from './TermIcon'
import './navbar.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef(null)

  const erronka1Active = pathname.startsWith('/erronka1')

  // Aldatu orriz mintz irekiak ixteko
  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
  }, [pathname])

  // Klik kanpoan egininez itxi dropdown-a
  useEffect(() => {
    if (!dropdownOpen) return
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    const onKey = (e) => e.key === 'Escape' && setDropdownOpen(false)
    document.addEventListener('pointerdown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdownOpen])

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

        <nav className={`navbar__menu ${mobileOpen ? 'is-open' : ''}`} aria-label="Nabigazio nagusia">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `navbar__tab ${isActive ? 'is-active' : ''}`}
          >
            Hasiera
          </NavLink>

          <div
            className={`navbar__group ${dropdownOpen ? 'is-open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`navbar__tab navbar__tab--btn ${erronka1Active ? 'is-active' : ''}`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
            >
              Erronka 1 <ChevronDown className="navbar__caret" size={18} strokeWidth={2.4} aria-hidden="true" />
            </button>

            <div className="navbar__dropdown" role="menu">
              {TERMS.map((t) => (
                <NavLink
                  key={t.slug}
                  to={`/erronka1/${t.slug}`}
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

          <span className="navbar__tab navbar__tab--soon" title="Laster eskuragarri">
            Erronka 2 <span className="navbar__soon">laster</span>
          </span>
        </nav>
      </div>
    </header>
  )
}