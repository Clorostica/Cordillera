import { useState, useEffect } from 'react'

const links = [
  { label: 'Startseite', href: '#inicio' },
  { label: 'Blumen', href: '#menu' },
  { label: 'Angebote', href: '#ofertas' },
  { label: 'Über uns', href: '#nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
        <a className="navbar__logo" href="#inicio">
          <img src="/img/Cordilleralogo.png" alt="Cordillera" />
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="navbar__cta">Jetzt bestellen</a>
          </li>
        </ul>

        <button
          className={`navbar__burger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`}>
        <ul className="navbar__mobile-links">
          {links.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              <a href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li style={{ '--i': links.length }}>
            <a
              href="#contacto"
              className="nav-cta-mobile"
              onClick={() => setMobileOpen(false)}
            >Jetzt bestellen</a>
          </li>
        </ul>
      </div>
    </>
  )
}
