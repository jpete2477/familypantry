import { CTAButton } from '../components/CTAButton'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './About.module.css'

export default function About() {
  usePageMeta(
    'About Us',
    'Est. 2026. Learn why The Family Pantry exists — to help families gather, prepare, and share — and the families and partners building it with us.',
  )

  return (
    <div className={`container ${styles.page}`}>
      <h1>About Us</h1>

      <section className={styles.section}>
        <p>Meals have always been the thing that brought our family together.</p>
        <p>
          Sometimes it was an impromptu batch of homemade mac and cheese eaten on the run. Other
          times it was a full table — smoked meats, sides, and desserts that somehow multiplied.
        </p>
        <p>
          We cooked together. We figured out what we liked. We got better at the recipes. But the
          recipes were never the point.
        </p>
      </section>

      <p className={styles.pullQuote}>The point was always the same: We'll see you at the table.</p>

      <section className={styles.section}>
        <p>
          As the family grew, so did the number of chairs. Assignments were made. Talents were
          noticed and stretched. What started as one family's pantry quietly became something we
          wanted to share.
        </p>
      </section>

      <p className={styles.pullQuote}>Now there's a place set for you.</p>

      <section className={styles.section}>
        <p className={styles.founded}>
          Est. 2026 — we're just getting started, and we're building this alongside our earliest
          partners and suppliers, not after them.
        </p>
      </section>

      <div className={styles.ctaRow}>
        <CTAButton to="/contact">Join the Family</CTAButton>
      </div>
    </div>
  )
}
