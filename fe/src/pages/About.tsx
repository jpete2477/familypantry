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
        <p>
          People don't buy what you do, they buy why you do it. The Family Pantry exists so
          families can <strong>gather</strong> together, <strong>prepare</strong> something
          delicious, and <strong>share</strong> it with the people they love. Everything we make
          is in service of one vision: a table set with an amazing spread, and the people who
          matter most sitting around it.
        </p>
      </section>

      <section className={styles.section}>
        <h2>The families involved</h2>
        <p>
          The Family Pantry was started by a family who believes the best part of any meal isn't
          the recipe — it's who's sitting at the table when it's served. As we grow, this space
          will fill with the real stories of the families, cooks, and home tables that make up our
          community. For now, consider this an open invitation to be one of them.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Est. 2026</h2>
        <p>
          We're just getting started, and we're building this alongside our earliest customers,
          partners, and suppliers — not after them. If you're a friend, a family, or a future
          partner in this, we'd love for you to be part of it from day one.
        </p>
      </section>

      <div className={styles.ctaRow}>
        <CTAButton to="/contact">Join the Family</CTAButton>
      </div>
    </div>
  )
}
