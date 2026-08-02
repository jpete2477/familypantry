import { CTAButton } from './CTAButton'
import { SITE_TAGLINE } from '../lib/siteConfig'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src="/images/hero-family-table.svg"
        alt="A multi-generational family gathered around a table full of food, laughing together"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <img src="/images/logo.svg" alt="" width="72" height="72" className={styles.logo} />
        <p className={styles.tagline}>{SITE_TAGLINE}</p>
        <h1>There's always a place at our table.</h1>
        <p className={styles.subhead}>
          The little things that help turn ordinary nights into the ones we remember.
        </p>
        <CTAButton to="/contact">Join the Family</CTAButton>
      </div>
    </section>
  )
}
