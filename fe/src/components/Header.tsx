import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { CTAButton } from './CTAButton'
import { SITE_NAME } from '../lib/siteConfig'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logoLink} aria-label={`${SITE_NAME} — Home`}>
          <img src="/images/logo.jpeg" alt="" width="44" height="44" className={styles.logo} />
          <span className={styles.wordmark}>{SITE_NAME}</span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        >
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.navCta}>
            <CTAButton to="/contact">Join the Family</CTAButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
