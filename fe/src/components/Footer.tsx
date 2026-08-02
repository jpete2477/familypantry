import { Link } from 'react-router'
import { SITE_NAME, SITE_TAGLINE } from '../lib/siteConfig'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Pinterest', href: '#' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoLink}>
            <img src="/images/logo.jpeg" alt="" width="40" height="40" className={styles.logo} />
            <span className={styles.wordmark}>{SITE_NAME}</span>
          </Link>
          <p className={styles.tagline}>{SITE_TAGLINE}</p>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className={styles.contact}>
          <p>123 Homestead Lane, Springfield, USA</p>
          <p>
            <a href="tel:+15555550123">(555) 555-0123</a>
          </p>
          <p>
            <a href="mailto:hello@thefamilypantry.com">hello@thefamilypantry.com</a>
          </p>
        </address>

        <ul className={styles.social} aria-label="Social media">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.label}>
              <a href={social.href} aria-label={`${SITE_NAME} on ${social.label}`}>
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.copyright}>© 2026 {SITE_NAME}</p>
    </footer>
  )
}
